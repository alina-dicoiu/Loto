$("document").ready(function () {
    var randomNumbers=[];
    var userNumbers=[];
    
    $("#extractbutton").on("click", function (evt1){
        var ct=0;
        evt1.preventDefault();
        $("#messageDiv").html("");
        $("#randomNumbers").html("");
        for(let i=0;i<6;i++){
            var number=Math.floor(Math.random() * 49) + 1;
            while(randomNumbers.includes(number)){
                number=Math.floor(Math.random() * 49) + 1;
            }
            randomNumbers.push(number);
            let rdNumbers=`
            <span>${number}</span>`;
            $("#randomNumbers").append(rdNumbers);
            if(userNumbers.includes(randomNumbers[i])){
                ct++;
            }
        }
        if(ct===0){
            let failureMessage=`
            <div class="alert alert-danger" role="alert">
            No numbers were guessed!
            </div>`;
            $("#messageDiv").html(failureMessage);
        }
        else if(ct>0 && ct<6){
            let winMessage=`
            <div class="alert alert-warning" role="alert">
            You guessed ${ct} numbers!!
            </div>`;
            $("#messageDiv").html(winMessage);
        }
        else{
            let successMessage=`
            <div class="alert alert-success" role="alert">
            You guessed all numbers!!
            </div>`;
            $("#messageDiv").html(successMessage);
        }
    });

    $("#submitbutton").on("click", function (evt){
        evt.preventDefault();
        let isIncorrect=false;
        $("#messageDiv").html("");
        $(".red").removeClass("red");

        var userInput1 = $("#guessInput1").val();
        var userNumber1 = Number(userInput1);
        userNumbers.push(userNumber1);

        var userInput2 = $("#guessInput2").val();
        var userNumber2 = Number(userInput2);
        userNumbers.push(userNumber2);

        var userInput3 = $("#guessInput3").val();
        var userNumber3 = Number(userInput3);
        userNumbers.push(userNumber3);

        var userInput4 = $("#guessInput4").val();
        var userNumber4 = Number(userInput4);
        userNumbers.push(userNumber4);

        var userInput5 = $("#guessInput5").val();
        var userNumber5 = Number(userInput5);
        userNumbers.push(userNumber5);

        var userInput6 = $("#guessInput6").val();
        var userNumber6 = Number(userInput6);
        userNumbers.push(userNumber6);

        if (!(userNumber1>=1 && userNumber1<=49)){
            isIncorrect=true;
            $("#guessInput1").addClass("red");
        }

        if (!(userNumber2>=1 && userNumber2<=49)){
            isIncorrect=true;
            $("#guessInput2").addClass("red");
        }

        if (!(userNumber3>=1 && userNumber3<=49)){
            isIncorrect=true;
            $("#guessInput3").addClass("red");
        }

        if (!(userNumber4>=1 && userNumber4<=49)){
            isIncorrect=true;
            $("#guessInput4").addClass("red");
        }

        if (!(userNumber5>=1 && userNumber5<=49)){
            isIncorrect=true;
            $("#guessInput5").addClass("red");
        }

        if (!(userNumber6>=1 && userNumber6<=49)){
            isIncorrect=true;
            $("#guessInput6").addClass("red");
        }
        if(isIncorrect===true){
            let errorMessage = `
            <div class="alert alert-danger" role="alert">
            The number must be between 1 and 49!!
            </div>`;
            $("#messageDiv").html(errorMessage)
        }
    })
        

})