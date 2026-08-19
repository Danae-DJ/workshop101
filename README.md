# workshop101
###sprint1
`npm init -y ` - to package.json
`npm install express` - to node_modules & package-lock.json
create **index.js** use `node index.js` into terminal
into package.json creat scritps/ "star": "node index.js" and creat scritps/ "dev": "nodemon index.js".
`npm install dotenv`- to RUN `npm run dev` for currently the change in the local server (localhost:)
creat **.env** and the key PORT, add `require("dotenv").config();` and `const PORT` into index.js 
creat **.gitignore** and add .env