// calling express framwork from node module
const express = require("express");

// creating a server named app
const app = express();


// data is being add must be covert in json formate by express
app.use(express.json()); 

app.use(myMiddleWare);

// creating middle ware

function myMiddleWare(req, res, next) {
  console.log("inside the middle ware");
  next();
}

// stiching the routes to server

require("./routes/idea.routes")(app);

// starting server
// giving the server port as 8080 and passing the message after start

app.listen(8080, () => {
  console.log("the server 8080 is started");
});

// by default ip add- 127.0.0.1

// creating new ideas by post method



