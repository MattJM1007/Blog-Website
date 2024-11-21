import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let listOfPosts = [];

function createPost(Title, Content) {
    this.title = Title;
    this.content = Content;
    this._id = uuidv4();
    this.pushToList = function () {
        listOfPosts.push(this);
    }
    this.pushToList();
};

app.get("/", (req, res) => {
    res.render("index.ejs", {listOfPosts: listOfPosts});
});

app.post("/post", (req, res) => {
    const newPost = new createPost(req.body["blog-title"], req.body["blog-content"]);

    res.redirect("/");
});

app.get("/edit-post/:id", (req,res) =>{
    const editID = req.params.id;
    const editIndex = listOfPosts.findIndex(listOfPosts => listOfPosts._id === editID);
    
    if (editIndex !== -1){
        const editTitle = listOfPosts[editIndex].title;
        const editContent = listOfPosts[editIndex].content;

        res.render("edit.ejs", 
            {Title: editTitle, Content: editContent, id: editID}
        )
    }
});

app.post("/update/:id", (req, res) =>{
    const updateID = req.params.id;
    const updateIndex = listOfPosts.findIndex(listOfPosts => listOfPosts._id === updateID);

    const newTitle = req.body["new-title"];
    const newContent = req.body["new-content"];

    if(updateIndex !== -1){
        listOfPosts[updateIndex].title = newTitle;
        listOfPosts[updateIndex].content = newContent;
        
        res.redirect("/");
    }
});

app.get("/delete-post/:id", (req,res) =>{
    const deleteID = req.params.id;
    
    const deleteIndex = listOfPosts.findIndex(listOfPosts => listOfPosts._id === deleteID); 

    if (deleteIndex !== -1){
        listOfPosts.splice(deleteIndex, 1);   
        res.redirect("/");
    } 
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});