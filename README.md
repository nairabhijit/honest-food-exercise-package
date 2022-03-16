# React Interview Exercise

## Run Project

Please note the docker solution is given only for the convinence of the person who will be running this application

The intention is to minimize the overhead of settin up frontend and backend, but this is no way a proposed architecture for production setup

In the root of the project directory, you can run the below command

### `npm start`
This will build the docker image and create a docker container for the entire project

## Folders
+ `client` - contains the frontend react code
+ `server` - contains the backend nodejs code
+ `nginx` - webserver to handle the frontend request and then proxying the request to the API

> Please note the specific information for backend and frontend can be found in their respective README.md files

> It may take some time for the docker to build client and server image

> You can go without docker too, You can clone client and server project from their respective repositories and run each project independently. Check below the independent client and server repositories

[Frontend repository link](https://github.com/nairabhijit/honest-food-frontend-exercise.git)

[Backend repository link](https://github.com/nairabhijit/honest-food-backend-exercise)