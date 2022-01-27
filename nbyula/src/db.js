import { connect } from "mongoose";
const express = require('express');
const bodyParser = require("body-parser");
const _ = require("lodash");

const app = express();

connect("mongodb://localhost:27017/quizapp", { useNewUrlParser: true });

//creating schema 
const itemsSchema = {
    name: String
}

//creating mongoose model based on the above schema 
const Item = mongoose.model(
    "Item", itemsSchema
);

const item1 = new Item({
    name: "Wecome to the to do list"
});

const item2 = new Item({
    name: "we are going to be successful"
});

//putting all document in array 

const defaultItems = [item1, item2, item3];

//creating new schema for custom - dynamic list 

const listSchema = {
    name: String,
    items: [itemsSchema]
};

//creating mongoose model
const List = mongoose.model("List", listSchema);








app.get("/", function (req, res) {

    //finding the items and rendering them into app 
    Item.find({}, function (err, foundItems) {

        //checking if the array is empty 

        if (foundItems.length === 0) {
            Item.insertMany(defaultItems, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully saved items into database.")
                }
            });

            res.redirect("/");

        } else {

            res.render("list", { listTitle: "Today", newListItems: foundItems });

        }


    });



});


