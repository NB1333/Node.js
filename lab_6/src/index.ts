import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import fs from "fs";

interface User {
  id: number;
  username: string;
  name?: string;
}

let users: User[] = [];
let nextUserId = 1;

const app = express();
app.use(bodyParser.json());
fs.mkdirSync("./data", { recursive: true }); // Create data directory if it doesn't exist
fs.writeFile("./data/users.json", '', function (err) { // Create users.json file if it doesn't exist
  
    console.log('A new text file was created successfully.');
    
}); 

// Load user data from JSON file
const loadUsers = () => {
	try {
	  const data = fs.readFileSync("./data/users.json", 'utf8');
	  if (data.trim() === '') {
		users = [];
	  } else {
		users = JSON.parse(data);
		nextUserId = Math.max(...users.map((user) => user.id), 0) + 1;
	  }
	} catch (err) {
	  console.error('Error loading users', err);
	  users = []; // Initialize users array if the file doesn't exist or contains invalid data
	  nextUserId = 1;
	}
  };
  

// Save user data to JSON file
const saveUsers = () => {
  try {
    const data = JSON.stringify(users, null, 2);
    fs.writeFileSync("./data/users.json", data, "utf8");
  } catch (err) {
    console.error("Error saving users", err);
  }
};

// Load users on server start
loadUsers();

// Create a new user
app.post('/users', (req: Request, res: Response) => {
  const { username, name } = req.body;
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  const newUser: User = {
    id: nextUserId++,
    username,
    ...(name && { name }), // Add name property only if it exists
  };

  users.push(newUser);

  saveUsers();

  loadUsers(); // Load users after saving a new user

  return res.status(201).json(newUser);
});

// Get user data by ID
app.get("/users/:id", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json(user);
});

// List all users
app.get("/users", (_req: Request, res: Response) => {
  return res.json(users);
});

// Update user data by ID
app.put("/users/:id", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const { username, name } = req.body;
  user.username = username || user.username;
  user.name = name || user.name;

  return res.json(user);
});

// Delete user by ID
app.delete("/users/:id", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  const deletedUser = users.splice(index, 1)[0];
  saveUsers(); // Save users after deleting a user

  return res.json(deletedUser);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
