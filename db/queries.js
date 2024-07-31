import pool from './pool.js';

export async function getAllUsernames(search) {
  const { rows } = await pool.query(
    'SELECT * FROM usernames WHERE username LIKE $1',
    [`%${search}%`],
  );
  return rows;
}

export async function insertUsername(username) {
  await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}

export async function deleteUsernames() {
  await pool.query('DELETE FROM usernames');
}
