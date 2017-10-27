// Dependencies
var bodyParser = require("body-parser");
var path = require("path");
var friends = require('../data/friends.js');

//Defines routes on an express application
function apiRoutes(app) {

app.get("/api/friends", function(req, res) {
  res.json(friends);
 });
//Posting user inputs to the collection of friends and comparing for best match
  app.post("/api/friends", function(req, res) {
        var newFriends = req.body;

        var differences = [];
        if (friends.length < 1) {
            console.log("unable to do calculation; not enough users");
        } else {
            compareFriends(friends, newFriends, differences);
            var lowest = differences[0];
            for (var i = 0; i < differences.length; i++) {
                if (differences[i] < lowest) {
                    lowest = differences[i];
                }
            };
            var bestMatch = differences.indexOf(lowest);
            console.log(bestMatch);
            res.send(friends[bestMatch]);
        };
        friends.push(newFriends);
  });


  function compareFriends(friends, newFriends, differences) {
      var curUserIndex = 0;
      while (curUserIndex < friends.length) {
          var totalDifference = 0;
          for (var i = 0; i < newFriends.scores.length; i++) {
              totalDifference += Math.abs(parseInt(friends[curUserIndex].scores[i]) - parseInt(newFriends.scores[i]));
          }
          differences.push(totalDifference);
          curUserIndex++;
      }
  }
} //closing bracket for apiRoutes function

module.exports = apiRoutes;





































      //   function getSum(total, num) {
      //       return total + num;
      //     }
      //     var newFriendScore = newFriends.scores;
          
      //     var surveyScore = (newFriendScore.reduce(getSum,0));
      //     console.log("This is survey score:", surveyScore);
        

      //   var friendScore = function (){         
      //   for (var i = 0; i < friends.length; i++) {
      //    var friendSum = friends[i].scores;
         
      //     var friendScore = (friendSum.reduce(getSum, 0));
      //     console.log(friendScore);  
      //   }
      // }
      //     friendScore();

        
      //   friends.push(newFriends);
      //   res.json(friends);
      
       
  

       
