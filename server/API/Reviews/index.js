//Libraries
import express from "express";

//Database Model

import { ReviewModel } from "../../database/allModels";

const Router = express.Router;

/**
 * Route       /:resid
 * Des         Get all the review for a particular restaurant
 * Params      resid
 * Access      Public
 * Method      GET
 */
Router.get("/:resid", async (req, res) => {
  try {
    const { resid } = req.params;
    const reviews = await ReviewModel.find({ restaurant: resid });

    return res.json({ reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/**
 * Route       /new
 * Des         POST: adding new food/restaurant review and rating
 * Params      none
 * Access      Public
 * Method      POST
 */
Router.post("/new", async (req, res) => {
  try {
    const { reviewData } = req.body;

    await ReviewModel.create({ ...reviewData });
    return res.json({ reviews: "Thanks For Review" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
/**
 * Route       /delete
 * Des         Delete a specific review
 * Params      _id
 * Access      Public
 * Method      Delete
 */
Router.delete("/delete/:id", async (req, res) => {
  try {
    const { _id } = req.params;

    await ReviewModel.findByIdAndDelete(_id);
    returnres.json({ review: "Deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export default Router;
