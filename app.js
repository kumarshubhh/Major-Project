if(process.env.NODE_ENV!= "production"){
    require("dotenv").config();
}



const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const EpressErr = require("./utils/ExpressError");

const Review = require("./models/review.js");
const listingRouter = require("./routes/listing.js")
const reviewsRouter = require("./routes/review.js")
const userRouter= require("./routes/user.js")



const session = require("express-session")
const MongoStore = require("connect-mongo")
const flash = require("connect-flash")
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./models/user.js");

const serverless = require("serverless-http");
const router = require("./routes/listing.js");


const dbUrl = process.env.ATLASDB_URL;
const port = process.env.PORT || 8080;


main()
.then(() =>{
    console.log("connection was succseful")
})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store = MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter:24 * 3600,
})
store.on("error", ()=>{
    console.log("Error in Mongo Session " , err)
})


const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,

    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly : true,
    }
}






app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) =>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

// app.get("/register", async (req, res) =>{
// let fakeUser = new User({
//     email:"abcd@gmail.com",
//     username: "delta-student",
// });
// let registerUser = await User.register(fakeUser, "helloWorld");
// res.send(registerUser)
// })




// app.get("/testListing", async (req, res) =>{
//     let sampleListing = new Listing({
//         title:"My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location:"Calangute, Goa",
//         countory: "India"
//     });
//   await  sampleListing.save();
//   console.log("sample was saved ");
//   res.send("succseful testing ");

// });

// index route 



app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/",  userRouter)





app.all("*", (req, res, next)=>{
    next(new EpressErr(404, "page not Found"))
})


app.use((err, req, res, next)=>{
    let {statusCode=500, message="Something Error"} = err;
    res.status(statusCode).render("error.ejs", {err})
   // res.status(statusCode).send(message);
})


// Catch-all route for undefined endpoints
// app.use((req, res, next) => {
//     res.status(404).json({ error: 'Page not found' });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ error: 'Something went wrong' });
// });











app.listen(port, () =>{
    console.log("server is listenig to port 8080")
})