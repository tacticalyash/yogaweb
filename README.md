#Getting Started with React Website 

ER- Digram for te User Database 
+-------------------+      +-----------------+      +------------------+
|   Participant    |      |      Batch      |      |     Payment      |
+-------------------+      +-----------------+      +------------------+
| ParticipantID (PK)|      | BatchID (PK)    |      | PaymentID (PK)   |
| Name              |      | StartTime       |      | ParticipantID (FK)|
| Age               |      | EndTime         |      | PaymentDate      |
| EnrollmentDate   |      +-----------------+      | Amount           |
+-------------------+                               +------------------+



To Build the website Follow the steps ->
1) Install git,nodejs , mysql workbench or sqlite dependecies.
2) then clone this repository.
3) open in your favourite editor , and set up the interpreter 
4) For Frontend UI , port 3000
  follow the commands into the terminal.
cd yogappp
 npm install
 npm start 


Your contributions are welcome , this is the primary assesment to fetch the api calls from server side programming.

5) For backend
cd yogappp
npm install
npm install sqlite3
node server.js
