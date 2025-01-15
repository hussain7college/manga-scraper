
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export async function initDB() {
  // create sqlite db if not exists
  const db = await open({
    filename: './manga.db',
    driver: sqlite3.Database,
  });

  // create table if not exists
  await db.exec(`CREATE TABLE IF NOT EXISTS manga (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    number INTEGER,
    images TEXT
  )`);

  return db;
};


export async function connectDB() {
  const db = await open({
    filename: './manga.db',
    driver: sqlite3.Database,
  });

  return db;
};

export async function disconnectDB(db) {
  await db.close();
};