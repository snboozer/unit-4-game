

var wins = 0;
var losses = 0;
var computerChoice=0
var score = document.getElementById("score");

$('#buttonPurple').on("click", function () {
    console.log("Purple");

})


$('#buttonPink').on("click", function () {
    console.log("Pink");
})


$('#buttonBlue').on("click", function () {
    console.log("Blue");
})

$('#buttonRed').on("click", function () {
    console.log("Red");
})


var winNum = Math.floor(Math.random() * Math.floor(100));
$("#winNum").text(winNum);
console.log(winNum)

var winNum = Math.floor(Math.random() * Math.floor(100))
$('#winNum').text(winNum);

var buttonPurple = {
    getValue: function () {
        this.value = Math.floor(Math.random() * Math.floor(12));
        console.log(this);
        
    }
}
var buttonPink = {
    getValue: function () {
        this.value = Math.floor(Math.random() * Math.floor(12));
        console.log(this);
    }
}
var buttonBlue = {
    getValue: function () {
        this.value = Math.floor(Math.random() * Math.floor(12));
        console.log(this);
    }
}
var buttonRed = {
    getValue: function () {
        this.value = Math.floor(Math.random() * Math.floor(12));
        console.log(this);
    }
}

buttonPurple.getValue();
buttonPink.getValue();
buttonBlue.getValue();
buttonRed.getValue();

// if (score === computerChoice) {
    // wins++;
    // document.getElementById("wins").innerText = wins
    // console.log(wins)
    // guessesNum = [];
    // guessChoice = [];



  // else {
  //     losses++;
// /      document.getElementById("losses").innerText=losses}