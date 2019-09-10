$("document").ready(function () {
    createGrid(7);
    var randomNumbers = [];
    var userNumbers = [];

    $("#extractbutton").on("click", function (evt1) {
        var ct = 0;
        evt1.preventDefault();
        $("#messageDiv").html("");
        $("#randomNumbers").html("");
        for (let i = 0; i < 6; i++) {
            var number = Math.floor(Math.random() * 49) + 1;
            while (randomNumbers.includes(number)) {
                number = Math.floor(Math.random() * 49) + 1;
            }
            randomNumbers.push(number);
            let rdNumbers = `
            <span>${number}</span>`;
            $("#randomNumbers").append(rdNumbers);
            if (userNumbers.includes(randomNumbers[i])) {
                ct++;
            }
        }
        if (ct === 0) {
            let failureMessage = `
            <div class="alert alert-danger" role="alert">
            No numbers were guessed!
            </div>`;
            $("#messageDiv").html(failureMessage);
        }
        else if (ct > 0 && ct < 6) {
            let winMessage = `
            <div class="alert alert-warning" role="alert">
            You guessed ${ct} numbers!!
            </div>`;
            $("#messageDiv").html(winMessage);
        }
        else {
            let successMessage = `
            <div class="alert alert-success" role="alert">
            You guessed all numbers!!
            </div>`;
            $("#messageDiv").html(successMessage);
        }
    });

    $("#submitbutton").on("click", function (evt) {
        evt.preventDefault();
        let selectedCells = $("#lotoTicket span.selected");
        if (selectedCells.length < 6) {
            let errorMessage = `
            <div class="alert alert-danger" role="alert">
            You must select 6 numbers!!
            </div>`;
            $("#messageDiv").html(errorMessage)
        }
        else {
            userNumbers = [];
            for (let i = 0; i < 6; i++) {
                userNumbers.push(Number(selectedCells[i].innerHTML));
            }
            $("#extractbutton").css("visibility", "visible");
        }

    })

    function createGrid(x) {
        for (var i = 0; i < x; i++) {
            $("#lotoTicket").append(`<div id='row-${i}'></div>`);
            for (var j = 0; j < x; j++) {
                let id = "row-" + i;
                let number = i * x + j + 1;
                $("#" + id).append(`<span>${number}</span>`);
            }
        }

        $("#lotoTicket span").on("click", function () {
            let selectedCells = $("#lotoTicket span.selected");
            if (selectedCells.length < 6) {
                this.classList.add("selected");
            }
        })
    }

    $("#clearbutton").on("click", function () {
        $("#lotoTicket span.selected").removeClass("selected");
        $("#extractbutton").css("visibility", "hidden");
        $("#messageDiv").html("");
        $("#randomNumbers").html("");
    })
})