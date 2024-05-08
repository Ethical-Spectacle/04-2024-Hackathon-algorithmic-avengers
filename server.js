const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 6968;

// Import user model and routes
const User = require('./app/models/userModel');
const usersRoutes = require('./app/routes/userRoutes');
const dataCenterRoutes = require('./app/routes/dataCentersRoutes');
const v_dashboardRoutes = require('./app/routes/v_dashboardRoutes');

// Connect to MongoDB database
const uri = 'mongodb+srv://rastogi3aastha:I6GCCgFFSpLTmOC0@cluster0.unpjbdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log('connected to db & listening on port', PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

app.use(express.json());
app.use(cors());
// Routes
app.use('/api/user', usersRoutes);

// app.use('/data_centers', dataCenterRoutes);
// app.use('/v_dashboard', v_dashboardRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
