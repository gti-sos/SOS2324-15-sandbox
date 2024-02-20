//let cool = require("cool-ascii-faces");
let express = require("express");

let app = express();

const PORT = 10000;

app.get("/", (req,res) => {
    res.send("<html><body><h1> Hola Mundo!</h1></body></html>");
});

app.listen(10000);

console.log(`Server listening on port ${PORT}.`);