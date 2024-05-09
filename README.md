This is a web implementation of a Caesar Cipher consisting of a react frontend and a .NET backend. It is recommended to run this project using docker compose.
```
docker compose up
``` 
then navigate to
```
http://localhost:3000
```

To run the frontend and backend independently, see the instructions below, then visit http://localhost:3000 

# Backend
(root directory `/backend`)

This is a .NET 8 project using the webapi template
```
dotnet new webapi --use-controllers
```
### running locally
The backend can be run one of two ways:
#### docker
```
docker build -t caesar-be-image -f Dockerfile .
docker run --name caesar-be-container -it -p 8080:8080 caesar-be-image
docker start -i caesar-be-container (after stopping)
```
#### dotnet
```
dotnet watch
```

# Frontend
(root directory `/frontend`)

This is a React project developed using node 22.1

### running locally
The frontend can be run one of two ways:
#### docker
```
docker build -t caesar-fe-image -f Dockerfile .
docker run --name caesar-fe-container -it -p 3000:3000 caesar-fe-image
docker start -i caesar-fe-container (after stopping)
```
#### node
```
npm install
npm run build
npm run serve
```