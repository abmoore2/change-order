function countDown()

{alert("countdown");
    var currTime = 10;
    //timer for 10 sec left   
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000);

    //timer for 9 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 2000);{
    

    //timer for 8 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 3000);

    //timer for 7 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 4000);

    //timer for 6 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 5000);
   
}

    //timer for 5 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = halfway;
        currTime = currTime - 1;
    }, 6000);

    //This displays the warning
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "Warning!!! Halfway There";
    }, 5500);

    //timer for 4 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 7000);

    //timer for 3 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 8000);

    //timer for 2 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 9000);

    //timer for 1 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 10000);

    //timer for Blastoff
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 11000);
}

do {
    setTimeout(function () {

                        document.getElementById("countdownTimer").innerHTML = "Halfway There!";
        
                        currTime = currTime - 1;
        
                    }, 1000 * i);
    
} while (condition);


function runTimer(countdownElem){
    // Tracks the current countdown time
    var currTime = 10;

    // Tracks the current timeout
    var timeout = 0;

    // This value will not change and creates the 3 second delay 
    var timeoutIncrement = 1;
    
    for(var counter=0; counter <11; counter++){
      // Decreases the countdown by 1 on the page
      arrInterval[counter] = setTimeout(function(){
       // if current time reaches 0 the blastoff alert will pop up and the countdown will say launch successful
        if (currTime <5){
             
    countdownElem.innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime;
   }
       
       else if(currTime == 0){
              alert("Blastoff!");
        countdownElem.innerHTML = "Launch successful!";
       }
       // when the current time is less than 6 the warning will pop up displaying the warning text and currTime
       
       // display the current time in the page
       else{
              countdownElem.innerHTML = currTime;
       }
        
        //currTime decreases by 1
               currTime = currTime - 1;
       }, timeout);
       timeout = timeout + timeoutIncrement;
}
       }





