#!/bin/bash

# Create directories
mkdir -p app/controllers
mkdir -p app/models
mkdir -p app/routes
mkdir -p app/middlewares
mkdir -p config
mkdir -p utils
mkdir -p public/assets
mkdir -p views

# Create files
touch app.js
touch package.json
touch README.md

# Populate files with content
cat <<EOF > app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(\`Server is running on port \${PORT}\`);
});
EOF

cat <<EOF > package.json
{
  "name": "express-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
EOF

echo "### Express.js Application" > README.md

echo "Directory structure created successfully!"

