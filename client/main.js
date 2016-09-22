import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
questionThreeData = new Mongo.Collection("questionThreeData");
allDataQuestions = new Mongo.Collection("allDataQuestions");

Template.testAppMain.onCreated(function() {
  sessionStart = new Date();
  Session.set('finishTest', false);
  allDataQuestions.insert(
     {
        startTime: sessionStart,
     }
  );
  myFunction = function() {
    sessionHour = new Date();
    allDataQuestions.insert(
       {
          checkTime: sessionHour,
       }
    );
  };
  window.setTimeout(myFunction, 3600000);
});

Template.testAppMain.helpers({
  'testFinish': function(){
    if (Session.get('finishTest')) {
      return "display: inline";
    } else {
      return "display: none";
    }
  },
  'hideTest': function(){
    if (Session.get('finishTest')) {
      return "display: none";
    } else {
      return "display: inline";
    }
  }
});

Template.testAppMain.events({
  'submit #questionOne'(event) {
    event.preventDefault();
    questionOneValue = event.target.questionOneBox.value;
    var contactsArray = [ {name: "Joe", area: "Vancouver, WA"},
                         {name: "Jill", area: "Portland, OR" },
                         {name: "Jose", area: "Salem, OR"}
                       ];
    //Return
    window.eval(questionOneValue);
    //Meteor.call("questionOneFunction", returnArray);
    Meteor.call('questionOneFunction', returnArray, function(error, result){
    if(error){
        alert(error);
      } else{
        alert('Success!');
      }
    });
    //Meteor.call("aaa");
  },
  'submit #questionTwo'(event) {
    event.preventDefault();
    questionTwoValue = event.target.questionTwoBox.value;
    window.eval(questionTwoValue);
  },
  'submit #questionThree'(event) {
    event.preventDefault();
    alert("Question Three Submitted");
    questionThreeValue = event.target.questionThreeBox.value;
    window.eval(questionThreeValue);
  },
  'submit #finishTest'(event) {
    event.preventDefault();
    var d = new Date();
    allDataQuestions.insert(
       {
          test_submitted: d,
       }
    );
    Session.set('finishTest', true);
  },
});
