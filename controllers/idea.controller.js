// logic , function for search all ideas-->

// all the data stored in ideas name variable and fetching from model
const ideas = require("../models/idea.model");

// function to search all ideas name-fetchallideas
// res(200)- show the object is passing to user id is okay
exports.fetchAllIdeas = (req, res) => {
  res.status(200).send(ideas);
};

// logic to creating data in data mode , or to post

let idCount = 1;

exports.createIdea = (req, res) => {
  // read the request body

  const idea = req.body;

  //need to generate nexr idea id

  idea.id = ++idCount;

  // save it to the list of  existing idea

  ideas[idCount] = idea;

  // return the response

  res.status(201).send(ideas[idCount]);
};

// updating an data in saved data

exports.updateIdea = (req, res) => {
  // need to read the id passed in the path url

  const ideaId = req.params.id;

  // if the idea id present then read and ipdate else return error message

  if (ideaId) {
    ideas[ideaId] = req.body;
    res.status(200).send(ideas[ideaId]);
  } else {
    res.status(400).send({
      message: "the id passed is not found pls write coorect way",
    });
  }
};


// deleting an data

exports.deletIdea=(req, res)=>{

  if([req.params.id]){

    delete ideas[req.params.id];
    res.status(200).send("succesfully deleted")
  }else{
    res.status(201).send("the id you written not found ")
  }

};