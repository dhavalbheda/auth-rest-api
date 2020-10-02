# `Auth Rest API`
![](https://img.shields.io/badge/Node.js-v12.17.0-green)
![](https://img.shields.io/badge/express-v4.17.1-blue)
![](https://img.shields.io/badge/Mongoose-v5.9.22-lightgreen)


It Is Readymade Rest API for any Node Application For Authentication.
It Provides Sign Up And Sign In Facility To User.


## How To Run

* First Clone Project
  
* Go to Server and Run **npm install**

### `npm install`
It will install all the project's dependancies.

* Go to Server folder and Run **npm run dev**

### `npm run dev`

It will run Server at **5000 Port** 

* Server will run on: <span style='color:blue'>http://localhost:5000</span>

***
**Note**
* Before Perform Above Task User Need Perform Following Step:
* 1. create **config** folder in root dir.
* 2. create dev.env file in config folder
* 3. export object with **PORT** and **DB**(Here DB is Nothing but Atlas Database Connection URL)

*Example*

* config/dev.env 

module.exports = {
    PORT:5000,
    DB:\<Atlas_Connection_URL>
}

