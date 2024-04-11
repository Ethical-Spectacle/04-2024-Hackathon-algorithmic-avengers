
# AIM : Utilizing waste heat from data centers
![image](https://github.com/Ethical-Spectacle/04-2024-Hackathon-algorithmic-avengers/assets/54110949/57d4e56f-fc01-4253-89da-b0a0115781b6)

EKONNECT offers a revolutionary software platform that connects data centers with nearby location-based industries, enabling the efficient transfer and utilization of waste heat. By bridging this gap, we create a sustainable and mutually beneficial ecosystem that reduces energy consumption, lowers carbon emissions, and unlocks new revenue streams for both sectors.
![image](https://github.com/Ethical-Spectacle/04-2024-Hackathon-algorithmic-avengers/assets/54110949/d35977bc-6caa-478f-bbe3-37c36d928d49)


## Usage (run fullstack app on your machine)

### Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

### Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

### Server-side usage(PORT: 8000)

#### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ cd server
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
```
## Usage (run fullstack app on your machine)

### Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

### Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run dev        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

### Server-side usage(PORT: 8000)

#### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ cd server
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> src/.env
```

