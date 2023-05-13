import mongoose from "mongoose";
import Product from "../models/data.js";

export const AllProducts = async (req, res) => {
  try {
    const allProduct = await Product.find();
    const product = await Promise.all(
      allProduct.map((item) => {
        return item;
      })
    );

    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const ProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(200).json("Don't have any product by this ID");
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

export const UpdatePrice = async (req, res) => {
  const _id = req.params.id;
  const price = req.body.price;

//   console.log(_id)
//   console.log(price)

  try {
    const updatedPrice = await Product.findByIdAndUpdate(
      _id,
      { $set: { price: price } },
      { new: true }
    );

    res.status(200).json(updatedPrice);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};