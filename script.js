$("document").ready(function () {
    var randomNumbers = [];
    var userNumbers = [];
    var gridSize = 7;
    var toGuess = 6;
    createGrid(gridSize);
    $("#lotoTypeSelect").val(gridSize);
    changeTitle();

    $("#extractbutton").on("click", function (evt1) {
        evt1.preventDefault();
        readInput();
        let selectedCells = $("#lotoTicket span.selected");
        if (selectedCells.length < toGuess) {
            let errorMessage = `
            <div class="alert alert-danger" role="alert">
            You must select ${toGuess} numbers!!
            </div>`;
            $("#messageDiv").html(errorMessage);
        }
        else {
            extractNumbers();
        }
    });

    $("#lotoTypeSelect").on("change", function () {
        let selectedOption = $("#lotoTypeSelect").find(":selected").attr("value");
        gridSize = Number(selectedOption);
        toGuess = Number(selectedOption) - 1;
        createGrid(gridSize);
        changeTitle();
    })

    async function extractNumbers() {
        var ct = 0;

        $("#messageDiv").html("");
        $("#randomNumbers").html("");
        for (let i = 0; i < toGuess; i++) {
            var number = Math.floor(Math.random() * gridSize * gridSize) + 1;
            while (randomNumbers.includes(number)) {
                number = Math.floor(Math.random() * gridSize * gridSize) + 1;
            }
            randomNumbers.push(number);
            let rdNumbers = `
            <span id=${number}>${number}</span>`;
            $("#randomNumbers").append(rdNumbers);
            if (userNumbers.includes(randomNumbers[i])) {
                ct++;
                $("#" + number).addClass("green");
            }
            else {
                $("#" + number).addClass("red");
            }

            await sleep(1);
        }
        if (ct === 0) {
            let failureMessage = `
            <div class="alert alert-danger" role="alert">
            No numbers were guessed!
            </div>`;
            $("#messageDiv").html(failureMessage);
        }
        else if (ct > 0 && ct < toGuess) {
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
    }

    function readInput() {
        let selectedCells = $("#lotoTicket span.selected");
        if (selectedCells.length < toGuess) {
            let errorMessage = `
            <div class="alert alert-danger" role="alert">
            You must select ${toGuess} numbers!!
            </div>`;
            $("#messageDiv").html(errorMessage)
        }
        else {
            userNumbers = [];
            for (let i = 0; i < toGuess; i++) {
                userNumbers.push(Number(selectedCells[i].innerHTML));
            }
        }

    }

    function createGrid(x) {
        $("#lotoTicket").html("");
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
            if (selectedCells.length < toGuess) {
                this.classList.add("selected");
            }
        })
    }

    $("#clearbutton").on("click", function () {
        $("#lotoTicket span.selected").removeClass("selected");
        $("#messageDiv").html("");
        $("#randomNumbers").html("");
    });

    function sleep(s) {
        return new Promise(function (resolve) {
            return setTimeout(resolve, s * 1000);
        });
    }
    function changeTitle() {
        let mainGrid = gridSize * gridSize;
        $(".card-header").html(`Loto ${toGuess}/${mainGrid}`)
    }
})