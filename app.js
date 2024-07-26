const express = require('express');
const app = express();
const userModel = require("./models/user")
const postModel = require("./models/post")


app.get("/", (req, res) => {

    res.send("yes")
})

app.get("/create", async(req, res) => {
    let user = await userModel.create({
        username: "harshit",
        email: "harshitanchan@gmail.com",
        age: 22
    });

    res.send(user)
})

app.get("/post/create", async(req, res) => {
    let post = await postModel.create({
        postdata: "hello tender",
        user: "66a4080e6feeac42418be3de"

    });
    
   let user = await userModel.findOne({_id: "66a4080e6feeac42418be3de"})
   user.posts.push(post._id);
   await user.save();    
   res.send(post, user);
})

app.listen(3000);