const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review=require("../models/review.js");
const Listing=require("../models/listing.js");
const {isLoggedIn}=require("../middleware.js");
const {validateReview,isReviewauthor}=require("../middleware.js");
const reviewController=require("../controller/reviews.js");
const review=require("../models/review.js");


//Review
//Post Review route
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.createReview));

//Review
// delete review route
router.delete("/:reviewId",isLoggedIn,isReviewauthor,wrapAsync(reviewController.destroyReview));
module.exports=router;