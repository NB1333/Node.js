import { Client } from 'pg';

// DB connection
async function connectToDatabase() {
  const client = new Client({
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    database: 'users',
    port: 5433,
  });

  await client.connect();
  return client;
}

// Query 1: List of all users with their channels, ordered by channel creation date
async function getUsersWithChannels() {
  const client = await connectToDatabase();
  const query = `
    SELECT users.id AS user_id, users.name AS user_name, users.avatar_url AS user_avatar, channels.photo_url AS channel_photo, channels.description AS channel_description, channels.created_at AS channel_creation_date
    FROM users
    JOIN channels ON users.id = channels.user_id
    ORDER BY channels.created_at DESC;
  `;
  const result = await client.query(query);
  console.log('Users with channels:', result.rows);
  await client.end();
}

// Query 2: Data about 5 videos that are most liked
async function getTopLikedVideos() {
  const client = await connectToDatabase();
  const query = `
    SELECT videos.id AS video_id, videos.title AS video_title, videos.preview_url AS video_preview, videos.duration AS video_duration, videos.published_at AS video_publish_date
    FROM videos
    JOIN likes ON videos.id = likes.video_id
    ORDER BY likes.positive DESC
    LIMIT 5;
  `;
  const result = await client.query(query);
  console.log('Top liked videos:', result.rows);
  await client.end();
}

// Query 3: List of videos from subscription of user Stephanie Bulger, ordered by publish date
async function getVideosFromSubscription() {
  const client = await connectToDatabase();
  const query = `
    SELECT videos.id AS video_id, videos.title AS video_title, videos.preview_url AS video_preview, videos.duration AS video_duration, videos.published_at AS video_publish_date
    FROM videos
    JOIN channels ON videos.channel_id = channels.id
    JOIN subscriptions ON channels.id = subscriptions.channel_id
    JOIN users ON subscriptions.user_id = users.id
    WHERE users.name = 'Stephanie Bulger'
    ORDER BY videos.published_at DESC;
  `;
  const result = await client.query(query);
  console.log('Videos from Stephanie Bulger\'s subscription:', result.rows);
  await client.end();
}

// Query 4: Data about channel with id '79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76' and number of its subscribers
async function getChannelInfo() {
  const client = await connectToDatabase();
  const query = `
    SELECT channels.*, COUNT(subscriptions.user_id) AS subscriber_count
    FROM channels
    LEFT JOIN subscriptions ON channels.id = subscriptions.channel_id
    WHERE channels.id = '79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76'
    GROUP BY channels.id;
  `;
  const result = await client.query(query);
  console.log('Channel info:', result.rows[0]);
  await client.end();
}

// Query 5: List of 10 most rated videos with positive ratings, starting from September 2021, ordered by number of ratings
async function getTopRatedVideos() {
  const client = await connectToDatabase();
  const query = `
    SELECT videos.id AS video_id, videos.title AS video_title, videos.preview_url AS video_preview, videos.duration AS video_duration, videos.published_at AS video_publish_date, COUNT(likes.video_id) AS like_count
    FROM videos
    JOIN likes ON videos.id = likes.video_id
    WHERE likes.positive = true AND videos.published_at >= '2021-09-01'
    GROUP BY videos.id
    HAVING COUNT(likes.video_id) > 4
    ORDER BY like_count DESC
    LIMIT 10;
  `;
  const result = await client.query(query);
  console.log('Top rated videos:', result.rows);
  await client.end();
}

// Query 6: List of data from subscriptions of user Ennis Haestier
async function getSubscriptionsForUser() {
  const client = await connectToDatabase();
  const query = `
    SELECT users.name AS channel_name, users.avatar_url AS channel_avatar, channels.photo_url AS channel_photo, channels.description AS channel_description, subscriptions.level AS subscription_level, subscriptions.subscribed_at AS subscription_date
    FROM users
    JOIN subscriptions ON users.id = subscriptions.user_id
    JOIN channels ON subscriptions.channel_id = channels.id
    WHERE users.name = 'Ennis Haestier'
    ORDER BY subscriptions.level DESC, subscriptions.subscribed_at DESC;
  `;
  const result = await client.query(query);
  console.log('Subscriptions for Ennis Haestier:', result.rows);
  await client.end();
}

// Function calls to execute queries
getUsersWithChannels();
getTopLikedVideos();
getVideosFromSubscription();
getChannelInfo();
getTopRatedVideos();
getSubscriptionsForUser();
