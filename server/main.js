import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

count = new Mongo.Collection("Count");
questionThreeData = new Mongo.Collection("questionThreeData");
allDataQuestions = new Mongo.Collection("allDataQuestions");


Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  "aaa": function () {
    Meteor.users.update({_id: Meteor.userId()},{$inc: {"profile.count": 1}});
  },
  "questionOneFunction": function(returnArray){
    console.log('hello');
    desiredArray = [
      ['Joe', 'Jill', 'Jose'],
      ['Vancouver, WA', 'Portland, OR', 'Salem, OR']
    ];
    if(returnArray.length !== desiredArray.length) {
        console.log('Arrays are not the same length.');
        console.log(returnArray.length);
        console.log(desiredArray.length);
        throw new Meteor.Error(500, 'Error 500: Not found', 'Arrays are not the same length.');
        return false;
    }
    if(returnArray[0].length !== desiredArray[0].length) {
        console.log('First Array Not Long Enough.');
        throw new Meteor.Error(500, 'Error 500: Not found', 'First Array Not Long Enough.');
        return false;
    }
    if(returnArray[1].length !== desiredArray[1].length) {
        console.log('Second Array Not Long Enough.');
        throw new Meteor.Error(500, 'Error 500: Not found', 'Second Array Not Long Enough.');
        return false;
    }
    for (i = 0; i < returnArray.length; i++) {
      for (j = 0; j < returnArray.length; j++) {
        if(returnArray[i][j] !== desiredArray[i][j]) {
            console.log('One of the arrays entries are not correct');
            console.log(returnArray[i][j].toString());
            throw new Meteor.Error(500, 'Error 500: Not found', 'One of the arrays entries are not correct');
            return false;
        }
      }
    }
    console.log('worked');
    var d = new Date();
    allDataQuestions.insert(
       {
          question1: 'Correct',
          date: d,
       }
    )
  },
  "questionTwoFunction": function(){
    console.log('Question Two Function Called');
    var d = new Date();
    allDataQuestions.insert(
       {
          question2: 'Correct',
          date: d,
       }
    )
  },
  "deleteEverything": function(){
    console.log('Deleting...');
    allDataQuestions.remove({});
    questionThreeData.remove({});
  }
});

// contactsArray = [ {name: "Joe", location: "Vancouver, WA"},
//                   {name: "Jill", location: "Portland, OR" },
//                   {name: "Jose", location: "Salem, OR"}
//                 ];
// returnArray = [[],[]];
// for (i = 0; i < contactsArray.length; i++) {
//       name = contactsArray[i].name;
//       location = contactsArray[i].location;
//       console.log(name);
//       console.log(location);
//       returnArray[0].push(name);
//       returnArray[1].push(location);
// }

// questionThreeData.insert(
//    {
//       name: "Morgan",
//       email: "test@test.com"
//    }
// )


// myFunction = function() {
  // console.log('doing my function');
  // contactsArray = [ {name: "Joe", area: "Vancouver, WA"},
  //                   {name: "Jill", area: "Portland, OR" },
  //                   {name: "Jose", area: "Salem, OR"}
  //                 ];
  // returnArray = [[],[]];
  // console.log(contactsArray.length)
  // for (i = 0; i < contactsArray.length; i++) {
  //       name = contactsArray[i].name;
  //       area = contactsArray[i].area;
  //       console.log(name);
  //       console.log(area);
  //       returnArray[0].push(name);
  //       returnArray[1].push(area);
  // }
//}
//myFunction();
