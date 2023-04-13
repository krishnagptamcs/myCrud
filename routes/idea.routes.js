// define the route for the call like

// GET 127.0.0.1:8080/ideaApp/v1/ideas

const ideaController= require("../controllers/idea.controller");

// writing a fucntion if user want get all module
module.exports =(app)=>{
    app.get("/ideaApp/v1/ideas",ideaController.fetchAllIdeas)

    app.post("/ideaApp/v1/ideas",ideaController.createIdea);

    app.put("/ideaApp/v1/ideas/:id",ideaController.updateIdea);

    app.delete("/ideaApp/v1/ideas/:id", ideaController.deletIdea);
}

