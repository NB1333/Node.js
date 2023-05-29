import fs from "fs";
import path from "path";
import axios from "axios";

// Task 1
async function runSequent<T, R>(
  array: T[],
  callback: (item: T, index: number) => Promise<R>
): Promise<R[]> {
  const results: R[] = [];

  for (let i = 0; i < array.length; i++) {
    const result = await callback(array[i], i);
    results.push(result);
  }

  return results;
}

const array: Array<string> = ["one", "two", "three"];

const results = await runSequent(array, (item, index) =>
  Promise.resolve({
    item,
    index,
  })
);

console.log("Task 1" + results + "\n");

// Task 2
function arrayChangeDelete<T>(arr: T[], removeRule: (item: T) => boolean): T[] {
  const deletedElements: T[] = [];
  let i = arr.length;

  while (i--) {
    if (removeRule(arr[i])) {
      deletedElements.push(...arr.splice(i, 1));
    }
  }

  return deletedElements;
}

const arr = [1, 2, 3, 6, 7, 9];
const deletedElements = arrayChangeDelete(arr, (item) => item % 2 === 0);

console.log("Task 2\n" + arr); // [1, 3, 7, 9]
console.log(deletedElements + "\n"); // [2, 6]


// Task 3
const filePath = process.argv[2];

const data = fs.readFileSync(filePath);
const urls = JSON.parse(data.toString());

const dirname = path.dirname(filePath);
const basename = path.basename(filePath, path.extname(filePath));
const folderPath = path.join(dirname, `${basename}_pages`);

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

for (let i = 0; i < urls.length; i++) {
  const url = urls[i];
  const filename = `${i + 1}.html`;
  const filepath = path.join(folderPath, filename);

  axios.get(url).then((response:any) => {
    fs.writeFileSync(filepath, response.data);
  });
}

// Task 4
import os from "os";
import si from "systeminformation";

const frequency = Number(process.argv[3]);

if (isNaN(frequency) || frequency <= 0) {
  console.error(
    "Please provide a valid positive number as the frequency parameter."
  );
  process.exit(1);
}

setInterval(async () => {
  const osInfo = {
    operatingSystem: os.type(),
    architecture: os.arch(),
    currentUser: os.userInfo().username,
  };

  const cpuInfo = {
    coresModels: await si.cpu(),
    temperature: (await si.cpuTemperature()).main,
  };

  const graphicsInfo = await si.graphics();

  const memInfo = await si.mem();

  const batteryInfo = await si.battery();

  console.log("Task 4 \nOperating System:", osInfo.operatingSystem);
  console.log("Architecture:", osInfo.architecture);
  console.log("Current User:", osInfo.currentUser);
  console.log("CPU Cores Models:", cpuInfo.coresModels);
  console.log("CPU Temperature:", cpuInfo.temperature);
  console.log("Graphics Controllers:", graphicsInfo.controllers);
  console.log(
    "Memory (Total/Used/Free):",
    `${(memInfo.total / 1024 / 1024 / 1024).toFixed(2)} GB / ${(
      memInfo.used /
      1024 /
      1024 /
      1024
    ).toFixed(2)} GB / ${(memInfo.free / 1024 / 1024 / 1024).toFixed(2)} GB`
  );
  console.log("Battery Info:", batteryInfo);

  console.log("\n-------------------\n");
}, frequency * 1000);

// Task 5
type EventHandler = () => void;

class MyEventEmitter {
  private events: Record<string, EventHandler[]> = {};

  registerHandler(eventName: string, handler: EventHandler) {
    if (!(eventName in this.events)) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(handler);
  }

  emitEvent(eventName: string) {
    if (!(eventName in this.events)) {
      return;
    }
    this.events[eventName].forEach((handler) => handler());
  }
}

const emitter = new MyEventEmitter();
emitter.registerHandler('userUpdated', () => console.log('Task 5\nUser account has been updated successfully\n'));
emitter.emitEvent('userUpdated');
