/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});
function holiday(holiday){
   if (holiday === "christmas"){
       return 8;
    }else if (holiday === "halloween"){ return 9;}
    else if (holiday === "thanksgiving"){ return 10;}
    else if (holiday === "new years"){ return 11;}
    else if (holiday === "memorial day"){ return 12;}
    else {return 14;}
}
function personality(personality){

    if(personality === "boring"){return 1;}
    else if (personality === "Adventurous"){ return 9;}
    else if (personality === "Independent"){ return 10;}
    else if (personality === "Optimistic"){ return 11;}
    else if (personality === "Trusting"){ return 12;}
    else {return 14;}
}
