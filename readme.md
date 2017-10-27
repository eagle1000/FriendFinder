
#Friend Finder Application

##Description
Friend Finder is a fullstack application which matches users with a friend match based off scores from a compatability survey.  Users answer ten questions about their personality and lifestyle.  Results are then cross referenced against a database of friends to produce a best match.

##Prerequisites

The following is a list of technologies and dependencies used in this application
* Node.js
* Express
*Body-Parser NPM
*Path NPM
*HTML
*CSS
*Javascript
*JQuery

##Installation and testing
**create JSON package and install all dependencies**
`npm init --y`
`npm install express body-parser path --save`

**Run application on localhost using node.js and express**
`node  server.js`

**Test get path to verify reading of friend data**
`curl -i http://localhost:3000/api/friends`

**Test post path to verify updating with new user data**
`$ curl -H "Content-Type: application/json" -X POST -d '{"name": "Bob", "ph
oto": "test@gmail.com", "scores":["3","2","2","1","1","2","5","4","3","5"]
}' http://localhost:3000/api/friends`