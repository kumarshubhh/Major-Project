const express = require('express');
const router = express.Router({ mergeParams: true });
const Listing = require('../models/listting.js');  // Corrected the path to 'listting.js'
const Review = require('../models/review');
const { isLoggedIn, validateReview, isReviewAuthor } = require('../middileware');  // Added 'isReviewAuthor' middleware

// POST route to create a review
router.post('/', isLoggedIn, validateReview, async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    await review.save();
    listing.reviews.push(review);
    await listing.save();
    req.flash('success', 'Created new review!');
    res.redirect(`/listings/${listing._id}`);
});

// DELETE route to delete a review
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, async (req, res) => {  // Added 'isReviewAuthor' middleware
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Review deleted');
    res.redirect(`/listings/${id}`);
});

module.exports = router;