<h1>Project Superheroes</h1>

<h2> Team Members</h2> 

Jakob Arneitz  

Work Load and Work Load Distribution

Arneitz: creating backend, frontend, implementing security, guarding, creating components, designing components et cetera

Last minute information/release Notes

Added some filtering in heroes-fighting for users, filtering is now possible, no hidden URLs. 

SETUP INSTRUCTION:

1. navigate to your desired folder on your machine on cmd
2. git clone https://github.com/JakobArneitz/SWENGSPROJECT.git
3. now that everything is there change folder path to frontend -> cd frontend
4. in frontend execute following command: npm install
Also there are some modules which need to be imported. so execute this three commands:

npm i @angular/material
npm i @angular/cdk
npm i ngx-avatar

5. now open backend in intellij and modify application.properties, only thing to do there is to change the password, open frontend in intellij, it might take some time for the configuration to load and then you can start backend and then start frontend in two separate intellij winodws. 

you can also run the project on localhost, for that execute the sql script commands provided and change application.properties to your local database and password.

6. open your desired browser and type in localhost:4200

7. Enjoy

Browsers: Tested Firefox, Edge and Chrome, all three of them should work
OPTIONAL: you can run the project from cmd if you want.

Running project from Cmd

1. open cmd and navigate to backend
2. execute mvnw spring-boot:run
3. open second cmd and navigate to frontend
4. execute ng serve (you can alternatively type in ng serve --port 5000 for opening on port 5000 type in the port you desire, but then also execute localhost:5000 for example )
