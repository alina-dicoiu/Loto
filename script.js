$("document").ready(function () {
    $("button[type='submit']").on("click", function (evt1){
        evt1.preventDefault();
        $("messageDiv").html("");

        var randomNumber1= Math.floor(Math.random() * 49) + 1;
        var randomNumber2= Math.floor(Math.random() * 49) + 1;
        var randomNumber3= Math.floor(Math.random() * 49) + 1;
        var randomNumber4= Math.floor(Math.random() * 49) + 1;
        var randomNumber5= Math.floor(Math.random() * 49) + 1;
        var randomNumber6= Math.floor(Math.random() * 49) + 1;
        
    $("button[type='submit']").on("click", function (evt){
        evt.preventDefault();
        $("#messageDiv").html("");

        var userInput1 = $("#guessInput1").val();
        var userNumber1 = Number(userInput1);

        var userInput2 = $("#guessInput2").val();
        var userNumber2 = Number(userInput2);

        var userInput3 = $("#guessInput3").val();
        var userNumber3 = Number(userInput3);

        var userInput4 = $("#guessInput4").val();
        var userNumber4 = Number(userInput4);

        var userInput5 = $("#guessInput5").val();
        var userNumber5 = Number(userInput5);

        var userInput6 = $("#guessInput6").val();
        var userNumber6 = Number(userInput6);

        if (userNumber1>=1 && userNumber1<=49){
            if(userNumber1 === randomNumber1){
                let successMessage1 = `
                <div class="alert alert-success" role="alert">
                ${userNumber1}
               </div>`;
                $("#messageDiv").html(successMessage1);
            }
            else{
                let failureMessage1 = `
                <div class="alert alert-danger" role="alert">
                ${userNumber1}
                </div>`;
                $("#messageDiv").html(failureMessage1);
            }
        }
        else{
            let errorMessage1 = `
            <div class="alert alert-danger" role="alert">
            The number must be between 1 and 49!!
            </div>`;
            $("#messageDiv").html(errorMessage1);
        }

        if (userNumber2>=1 && userNumber2<=49){
            if(userNumber2 === randomNumber2){
                let successMessage2 = `
                <div class="alert alert-success" role="alert">
                 ${userNumber2}
                </div>`;
                $("#messageDiv").html(successMessage2);
            }
            else{
                let failureMessage2 = `
                <div class="alert alert-danger" role="alert">
                 ${userNumber2}
                </div>`;
                $("#messageDiv").html(failureMessage2);
            }
        }
        else{
            let errorMessage2 = `
            <div class="alert alert-danger" role="alert">
                The number must be between  and 49!!
                </div>`;
            $("#messageDiv").html(errorMessage2);
        }

        if (userNumber3>=1 && userNumber3<=49){
            if(userNumber3 === randomNumber3){
                let successMessage3 =`
                <div class="alert alert-success" role="alert">
                 ${userNumber3}
                </div>`;
                $("#messageDiv").html(successMessage3);
            }
            else{
                let failureMessage3= `
                <div class="alert alert-danger" role="alert">
                 ${userNumber3}
                </div>`;
                $("#messageDiv").html(failureMessage3);
            }
        }
        else{
            let errorMessage3 = `
            <div class="alert alert-danger" role="alert">
                The number must be between 1 and 49!!
                </div>`;
            $("#messageDiv").html(errorMessage3);
        }

        if (userNumber4>=1 && userNumber4<=49){
            if(userNumber4 === randomNumber4){
                let successMessage4 = `
                <div class="alert alert-success" role="alert">
                 ${userNumber4}
                </div>`;
                $("#messageDiv").html(successMessage4);
            }
            else{
                let failureMessage4= `
                <div class="alert alert-danger" role="alert">
                 ${userNumber4}
                </div>`;
                $("#messageDiv").html(failureMessage4);
            }
        }
        else{
            let errorMessage4= `
            <div class="alert alert-danger" role="alert">
            The number must be between 1 and 49!!
                </div>`;
            $("#messageDiv").html(errorMessage4);
        }

        if (userNumber5>=1 && userNumber5<=49){
            if(userNumber5 === randomNumber5){
                let successMessage5=`
                <div class="alert alert-success" role="alert">
                 ${userNumber5}
                </div>`;
                $("#messageDiv").html(successMessage5);
            }
            else{
                let failureMessage5 = `
                <div class="alert alert-danger" role="alert">
                 ${userNumber5}
                </div>`;
                $("#messageDiv").html("");
            }
        }
        else{
            let errorMessage5= `
            <div class="alert alert-danger" role="alert">
            The number must be between 1 and 49!!
                </div>`;
            $("#messageDiv").html(errorMessage5);
        }

        if (userNumber6>=1 && userNumber6<=49){
            if(userNumber6 === randomNumber6){
                let successMessage6 = `
                <div class="alert alert-succes" role="alert">
                 ${userNumber6}
                </div>`;
                $("#messageDiv").html(successMessage6);
            }
            else{
                let failureMessage6= `
                <div class="alert alert-danger" role="alert">
                 ${userNumber6}
                </div>`;
                $("#messageDiv").html(failureMessage6);
            }
        }
        else{
            let errorMessage6 = `
            <div class="alert alert-danger" role="alert">
             The number must be between 1 and 49!!
                </div>`;
            $("#messageDiv").html(errorMessage6);
        }
    })
        var randonNumber1= Math.floor(Math.random() * 49) + 1;
        var randonNumber2= Math.floor(Math.random() * 49) + 1;
        var randonNumber3= Math.floor(Math.random() * 49) + 1;
        var randonNumber4= Math.floor(Math.random() * 49) + 1;
        var randonNumber5= Math.floor(Math.random() * 49) + 1;
        var randonNumber6= Math.floor(Math.random() * 49) + 1;
})
})