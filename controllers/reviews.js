const Listing = require("../models/listting.js");  // Corrected the path to 'listting.js'
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
    let listings = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    listings.reviews.push(newReview);

    await newReview.save();
    await listings.save();

    console.log("new review saved");
    req.flash("success", "Review Added!");
    res.redirect(`/listings/${listings._id}`);
};

module.exports.reviewDelete = async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};