const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

const dataCentersRoutes = require('./app/routes/dataCentersRoutes');
const partnersRoutes = require('./app/routes/partnersRoutes');
// Connect to MongoDB database
const uri = 'mongodb+srv://rastogi3aastha:I6GCCgFFSpLTmOC0@cluster0.unpjbdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());

// Routes
app.use('/data_centers', dataCentersRoutes);
app.use('/partners', partnersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
