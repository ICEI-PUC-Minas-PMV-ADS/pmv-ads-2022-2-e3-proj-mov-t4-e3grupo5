import openDb from '../configDB.js';

const loginValidate = async (req, res) => {
  const user = req.body;

  openDb().then((db) => {
    db.each('SELECT * FROM users WHERE email = ?', [user.email], (_err, response) => {
      if (response && response.password === user.password) {
        return res.status(200).json({ message: 'Authorized user' });
      }

      return res.status(401).json({ message: 'Email or password is invalid' });
    });
  });
};

export { loginValidate };
