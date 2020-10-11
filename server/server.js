let express = require('express');
const path = require('path');

let app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log(`Server listening on ${PORT}`);
});