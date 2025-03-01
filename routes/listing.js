const express= require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listting.js");
const {isLoggedIn, isOwner,validateListing} = require("../middileware.js")


const listingController = require("../controllers/listings.js")
const multer = require("multer");
const {storage} = require("../cloudConfig.js")
const upload = multer({storage })

router.route("/")
.get( wrapAsync(listingController.index))
.post( isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
   wrapAsync( listingController.createListing));

    // new route
router.get("/new", isLoggedIn, listingController.renderNewForm)


router.get("/category/:category", async (req, res) => {
    const category = req.params.category;
    const listings = await Listing.find({ category: category });
    
    res.render("./listings/category", { listings, category });
});



router.get("/search",wrapAsync( async (req, res) => {
    const query = req.query.query; // Get the query from the search form

    if (!query) {
        return res.redirect("/listings"); // If no query, redirect to the homepage
    }

    try {
        // Search for listings that match the query (case-insensitive search)
        const results = await Listing.find({
            title: { $regex: query, $options: "i" } // Regex search, case insensitive
        });

        // Render search.ejs with the results and the search query
        res.render("./listings/search.ejs", {
            results: results, 
            query: query
        });
    } catch (err) {
        console.error("Search error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));






router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put(   upload.single("listing[image]"),validateListing,isLoggedIn,isOwner,
    wrapAsync( listingController.renderUpdateForm))
    .delete(isLoggedIn,isOwner, wrapAsync(listingController.renderDelete));

    







    




    //Edit ROute
    router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.editListing));
module.exports = router;

