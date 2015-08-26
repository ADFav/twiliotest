$(document).ready(function(){
    var userID = "AC9af0194f326117448a1c9efc0eb21105";
    var pwd    = "cf9c1ba677ba7c13c2d8179a43b1fb79";
    
    var url = "https://" + userID + ":" + pwd + "@api.twilio.com/2010-04-01/Accounts/" + userID + "/Messages";
    console.log(url);
    var messageJSON = {
        From : "17814513236",
        To   : "7814399385",
        Body : "TESTING!"};

    var errCallback = function(jqXHR, textStatus, errorThrown){alert(errorThrown);};
    var successCallback = function(){alert("Success!");};
  
    $.getJSON(url,function(){
      console.log("We're in!");
      $.post(url,messageJSON,successCallback);
    });
});