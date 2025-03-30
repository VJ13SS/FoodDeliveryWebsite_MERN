import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    return res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

//all foods list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    return res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};

//remove food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    //to delete the images
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: "true", message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error on removing food" });
  }
};

export { addFood, listFood, removeFood };
