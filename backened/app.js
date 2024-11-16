const express = require("express"); // Fix: Use '=' to assign the result of require
const app = express(); 
require("dotenv").config();            // Fix: Missing '='
app.listen(process.env.PORT, () => {           // Fix: Arrow function syntax
    console.log('Server started on port: $(process.env.PORT)');
});
