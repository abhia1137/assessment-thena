# Team Member Management API

This repository contains an HTTP API for managing team members, with data persistence in MongoDB. It supports functionalities like listing, adding, editing, and deleting team members.

## Setup and Installation

1. **Clone Repository:**
   ```bash
   git clone https://github.com/abhia1137/assessment-thena.git

cd team-member-api
npm install

PORT=3000
MONGODB_URI=mongodb://localhost:27017


start the project
npm run start


List Team Members:
curl http://localhost:3000/team-members


Add a Team Member:
curl -X POST -H "Content-Type:application/json" http://localhost:3000/team-members \
-d '{"firstName": "John", "lastName": "Doe", "phoneNumber": "+1234567890", "email": "john.doe@example.com", "role": "user"}'



Edit a Team Member:
curl -X PUT -H "Content-Type:application/json" http://localhost:3000/team-members/:id \
-d '{"firstName": "Jane", "lastName": "Doe"}'


Delete a Team Member:
curl -X DELETE http://localhost:3000/team-members/:id





