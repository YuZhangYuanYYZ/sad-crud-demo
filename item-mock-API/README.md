# Server
This mock-API is necessary for the frontend app. You should start this server before start frontend app.

## Start Items API server

Please use `npm` to install dependences and start API server:

```
npm install
```

And start API server:
```
npm start
```

Then you can access `http://localhost:3100/items/` to see the API response

## APIs

Here are the APIs used in the frontend:

### Sign up
```
POST http://localhost:3100/signup
```


### Login

```
POST http://localhost:3100/login
```
You need to pass username and password for the login endpoint. Currently, only support username `admin`, and password `admin`



### Get items list
For all resources of items, you will need to pass token to be able to pass the authorisation.

```
GET http://localhost:3100/items
```

The response is all the items in your API.


### Get one item

```
GET http://localhost:3100/items/{id}
```

The response is the item which match the `id`.

### Update one item

```
PUT http://localhost:3100/items/{id}
{
    "headers": {
        "Content-Type": "application/json"
    },
    "body": {MODIFIED item}
}
```


The response is the json of the modified item.

### Delete one item

```
DELETE http://localhost:3100/items/{id}
```

The response is an empty body with 200 status.