# Honest Food Exercise Backend

## Run Project

From the root directory, you can run:

### `npm run dev`

This will run the project on port 8000. You can change the port number from the .env file, located at the root of the project.

## Run Test

You can find test case in `src/test/api.test.ts`, execute below command to run test:

### `npm test`

## This project uses the below technology stack

+ nodejs as the server backend
+ expressjs for handling routes
+ typescript for type safety
+ supertest for API testing
+ mocha as a test framework
+ chai for assertion
+ parse-kml to parse the KML file to a JSON file
+ polygon-lookup, to find a point/coordinate in the polygon


## About Project

+ I have added the given .kml file in the `src` folder
+ When the application gets a request to provide a outlet identifier, it checks if the polygon tree representation is already avaiable, if not then it load the KML file, convert that to JSON and save it in the application memory itself

## Improvement

+ Since I am using polygon-lookup to find the point/coordinate in the polygon, this will create an optimize tree to lookup but since it is stored in the application memory, it will get lost when the application is terminated
+ The approach would be to have persistent storage for it, maybe a database like MongoDB or Postgres with Postgis that support Spatial data can be used.
+ The parse-kml library doesn't have a typescript definition file, hence I did @ts-ignore, ideal approach can be to create a definition file(.d.ts) by hand

## Author

Abhijit Nair - nairabhijit6@gmail.com

