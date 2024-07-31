import express from 'express';
import {
  deleteUsernames,
  getAllUsernames,
  insertUsername,
} from '../db/queries.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const search = req.query.search || '';
  const usernames = await getAllUsernames(search);
  res.render('home', { title: 'Home', usernames });
});

router.get('/new', (req, res) => {
  res.render('form', {
    title: 'Form',
    username: undefined,
  });
});

router.post('/new', async (req, res) => {
  await insertUsername(req.body.username);
  res.redirect('/');
});

router.post('/', async (req, res) => {
  deleteUsernames();
  res.redirect('/');
});

export default router;
