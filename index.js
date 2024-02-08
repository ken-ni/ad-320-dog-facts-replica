import {data} from './dog_facts.js';
import express from 'express';

// App will reference the express framework
const app = express();
// Bind our port to the local website
app.set('port', process.env.PORT || 3000);

// 200 Code is passed automatically for express methods, unless stated otherwise
// Using Express syntax, this callback function has request and response headers. We are modifying the response to send "Hello World" text when accessing home page.
app.get('/', (req, res) => {
    res.type('text/plain');
    res.send("Home Page. The only valid route is '/facts?number=(NUMBER)'.");
});

// This callback function has a search query for the '/facts?number=(num)' route option.
app.get('/facts', (req, res) => {
    // Set header to JSON since we are sending JSON to user
    res.type('application/json');

    // This variable accesses the user input for the query
    const input = req.query.number;
    // If the user input is less than 0, not a number or greater than the amount of dog facts we have, show error string on page
    if (input < 0 || isNaN(input) || input > data.length) {
        return res.send("Error, query invalid");
    }

    // Grab entire array of dog facts
    let results = data.slice();

    // If a number is given (should be in range since we filtered it) return the array up to number. If no number is given, return whole array.
    if (input) {
        // Return array up to number
        results = data.slice(0, input);
    } 
    // Lastly, stringify the array and send as JSON. The object.assign is not needed here, but I wanted to make it obvious that the response is a JSON.
    res.send(JSON.stringify(Object.assign({}, results)));
});

// This callback function is setting the status code to 404 not found, then modifying response to send "404 - Not Found" as text to the client when accessing invalid pages on our website.
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send("404 - Not Found");
});

// Server listens to whenever our port is accessed, prints server is running when executed for the first time and listens patiently after.
app.listen(app.get('port'), () => {
    console.log("Express Server is Running")
});