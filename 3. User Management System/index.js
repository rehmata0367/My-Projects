const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose')
const User = require('./models/User')

mongoose.connect('mongodb://localhost:27017/mydatabase').then(() => {
  console.log('MongoDB Connected');
}).catch((err) => {
  console.error('MongoDB Connection Error:', err);
});

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.get('/',(req,res) =>{
  res.render('login.ejs')
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const newUser = new User({ email, password });

  newUser.save().then(() => {
      res.send('<h1>User saved to database successfully!</h1>');
    }).catch((err) => {
      console.error('Error saving user:', err);
      res.status(500).send('Error saving user');
    });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
