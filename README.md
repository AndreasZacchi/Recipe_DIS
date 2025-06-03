# Recipe DIS
This repository contains our implementation of a project as required in the course Database and Information Systems at DIKU.

## Instructions for use
For ease of use we have created the three users below, but feel free to register a new one.
1. Username: *chris*     Password *123kode* (Has created all recipes on the site)
2. Username: *test*      Password *1234*    (Has favorited some recipes)
3. Username: *test_user* Password: *123*    (Empty user)

Things you can do include registering and logging in, viewing, favoriting and searching for recipes as well as creating new recipes and see your recipes and favorited recipes at the dashboard.

## Setup
### Intialise database
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

### Requirements
You will need to install Node.js v22.14.0 or above.
Once you have node install the necessary packages by running the following command:
```bash
npm i
```

### Running the website
To run the website execute the following command and open the url that is printed in the terminal:
```bash
npm run dev
```
