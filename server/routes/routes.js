  
let express = require("express");
let router = express.Router();

let path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/gallery", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/gallery.html"));
})

router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/contact.html"));
});

module.exports = router;