/*
Custom Clock
Description
Have you ever wondered how a clock ticks after each second? Now is the time to experience this exciting exercise. 
You need to create you own clock which prints the current time on the console in the format hh:mm:ss.
 Let’s consider that the current time is15:28:35. Thus, the clock will display:﻿
 15:36:1
 After 1 second, the clock displays the updated time and thus, prints the current time at that point on the console.Thus, the console, after 1 second, looks like this:
 15:36:2
  After 1 more second, that is after a total of 2 seconds, the updated time is printed on the console and it looks like this:
 15:36:3
 The output should be 
 15:36:1
 15:36:2
 15:36:3
*/




const startTimer = () => {
  /* TODO:
  Define startTimer() function which prints the current time after each second for three times
  Time Format => hh:mm:ss
   */
  var today =new Date();
   var x  = today.getSeconds();
   var y = x+3;
   while(x<y)
   {
    setTimeout(() => {
      today = new Date();
      
    }, 1000);
    var time = today.getHours() + ":" + today.getMinutes() + ":" + x;
        console.log(time);
    x++;
   }

   
  }
  
  startTimer();