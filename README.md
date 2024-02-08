# ad-320-dog-facts-replica

## Report

When creating this replica, I didn't run into many issues. The biggest challenge was finding a method to return the right amount of results back to the user, but once I found it, the assignment was pretty straightforward. 

## Server

To run this web server, type the command 'node .\index.js' into the terminal of the directory the files are hosted in.

## Documentation

This simple API allows the user to generate dog facts based on the amount given in the search parameter '/facts?number=(NUMBER)'.

e.g: '/facts?number=5' route should return a JSON of 5 dog facts to the web page.

Endpoints:

'/' (Home Page)

'/facts?number=(NUMBER)' (Generates dog facts)

