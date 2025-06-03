# Recipe DIS
This repository contains our implementation of a project as required in the course Database and Information Systems at DIKU.

## Intialise database
1. Run **recipe_dis.sql** in your database.
2. Change the following options inside **src/app/db.ts** to match your database settings.
```javascript
const db = postgres({
  host: "YOUR_DB_HOST",
  port: YOUR_DB_PORT,
  database: "YOUR_DB_NAME",
  username: "YOUR_DB_USERNAME",
  password: "YOUR_DB_PASSWORD",
});
```

## Requirements
You need to install the necessary packages by running the following command:
```bash
npm i
```
## Running the website

To run the website execute the following command:
```bash
npm run dev
```
