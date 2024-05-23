### Create a .env file:
- Create a .env file in `path/to/the/directory`.
- Create a environment variable in the file:
`DB_URL=url_of_the_database`

### Run the server:

```
cd path/to/the/project
npm install
npm start
```

### Install server in the docker:

```
cd path/to/the/project
docker build -t application-name .
docker run -dt -p 3000:3000 -e DB_URL=url_of_the_database --name container-name application-name
```