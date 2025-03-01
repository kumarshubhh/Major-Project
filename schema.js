const Joi = require('joi');

// Listing Schema
const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(), // Fixed typo
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null),
    // Allow empty or null
    category: Joi.string().valid("Trending", "Rooms", "Iconic Cities", "Mountains", "Castles", "Amazing Pools", "Camping", "Farms", "Arctic", "Domes")
  }).required(),
});

// Review Schema
const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});

// Export both schemas
module.exports = {
  listingSchema,
  reviewSchema,
};