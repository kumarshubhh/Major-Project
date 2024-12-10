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



router.route("/:id")
.get( wrapAsync(listingController.showListing))
.put(   upload.single("listing[image]"),validateListing,isLoggedIn,isOwner,
    wrapAsync( listingController.renderUpdateForm))
    .delete(isLoggedIn,isOwner, wrapAsync(listingController.renderDelete));

    







    




    //Edit ROute
    router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.editListing));
module.exports = router;

