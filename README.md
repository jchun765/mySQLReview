# MySQL Review
> A quick review of connecting a MySQL database to our Express server

### Usage
```
npm install
npm run start
```

This repo is recommended to be used with `MySQL 5.7`.

### Documentation
* [MySQL](https://github.com/mysqljs/mysql): MySQL Github documentation

## Step 1
* Create database `ReviewDB` within MySQL
* Establish connection to database in `database/index.js`

## Step 2
* Create a schema in `database/schema.sql` to describe our `food` table
* Run schema file in terminal

## Step 3
* Create a seeding function in `database/seed.js` to populate table with at least 5 records
* Run seed file in terminal

## Step 4
* Create dbHelper functions in `database/dbHelpers.js`
* Create controller functions in `server/controllers.js`
* Create routes in `server/router.js`
* Use dbHelper functions within your controller functions

## Step 5
* Test for working functionality via [Postman](https://www.postman.com/)


[Express](https://expressjs.com/)
*Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

MIDDLEWARE UTILIZED:
[cors](https://www.npmjs.com/package/cors)
[morgan](https://www.npmjs.com/package/morgan)
[bodyParser](https://www.npmjs.com/package/body-parser)

HELPFUL DOCS
[mySQL](https://www.npmjs.com/package/mysql)
[Queries](http://www.cheat-sheets.org/sites/sql.su/#data_manipulation)




# mySQLreview
# mySQLreview
