# AI Document Management System API Documentation

Base URL:
http://localhost:5000


## Authentication APIs

### Register User

Method:
POST

Endpoint:
 /api/auth/register

Body:
{
  "name": "User Name",
  "email": "user@gmail.com",
  "password": "123456"
}


### Login User

Method:
POST

Endpoint:
 /api/auth/login

Body:
{
  "email": "user@gmail.com",
  "password": "123456"
}

Response:
Returns JWT Token


---

# Document APIs

All document APIs require:

Authorization:
Bearer TOKEN


## Upload Document

Method:
POST

Endpoint:
 /api/documents


## Get All Documents

Method:
GET

Endpoint:
 /api/documents


## Get Single Document

Method:
GET

Endpoint:
 /api/documents/:id


## Update Document

Method:
PUT

Endpoint:
 /api/documents/:id


## Delete Document

Method:
DELETE

Endpoint:
 /api/documents/:id


---

# Dashboard API

Method:
GET

Endpoint:
 /api/dashboard


---

# Reminder API

Method:
GET

Endpoint:
 /api/reminders


---

# Admin APIs

Admin authorization required.

## Get All Users

GET
/api/admin/users


## Get All Documents

GET
/api/admin/documents


## Get All Reminders

GET
/api/admin/reminders