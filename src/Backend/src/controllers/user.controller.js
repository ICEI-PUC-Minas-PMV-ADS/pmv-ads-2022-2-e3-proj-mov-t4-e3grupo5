import openDb from '../configDB.js';

const createTableUsers = async () => {
  openDb().then((db) => {
    db.exec(
      'CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL UNIQUE, password TEXT NOT NULL)',
    );
  });
};

const registerUSer = async (req, res) => {
  const user = req.body;

  openDb().then((db) => {
    db.run('INSERT INTO users (email, password) VALUES (? , ?)', [user.email, user.password]);
  });

  res.status(201).json({ message: 'User created successfully' });
};

export { createTableUsers, registerUSer };
