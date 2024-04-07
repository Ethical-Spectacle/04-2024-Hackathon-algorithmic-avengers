const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 6969;

// Import user model and routes
const User = require('./app/models/user');
const usersRoutes = require('./app/routes/userRoutes');

// Connect to MongoDB database
const uri = 'mongodb+srv://rastogi3aastha:I6GCCgFFSpLTmOC0@cluster0.unpjbdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

// Routes
app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

