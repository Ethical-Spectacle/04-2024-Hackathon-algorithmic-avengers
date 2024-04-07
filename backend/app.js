const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const dataCentersRoutes = require('./app/routes/dataCentersRoutes');
const partnersRoutes = require('./app/routes/partnersRoutes');

app.use(express.json());

// Routes
app.use('/data_centers', dataCentersRoutes);
app.use('/partners', partnersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
