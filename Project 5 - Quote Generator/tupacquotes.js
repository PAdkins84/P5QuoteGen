// Variable for beginning, middle and end quote fragments

let beginningTu = ["\"I worked hard all my life as far as this music business. ",
                 "\"Don\’t believe everything you hear. ",
                 "\"During your life, never stop dreaming. ",
                 "\"No one can take away your dreams. ",
                 "\"Our future is our confidence and self-esteem. "
];

let middleTu = ["Dreams are for real. ",
              "If you can\’t find somethin’ to live for, ",
              "I set goals, ",
              "Fear is stronger than love, ",
              "Do I win or do I lose? "
];

let endTu = ["One day they\’re gonna shut the game down.\"",
           "You either evolve or you disappear.\"",
           "My music doesn’t glorify any image.\"",
           "I was raised in this society.\"",
           "they will never do me wrong.\""
];

// Create function to display hidden elements

function createQuotes2() {
    document.getElementById("quoteFive").style.visibility="hidden";
    document.getElementById("quoteFour").style.visibility="hidden";
    document.getElementById("quoteThree").style.visibility="hidden";
    document.getElementById("quoteTwo").style.visibility="hidden";
    document.getElementById("quoteOne").style.visibility="hidden";
  
    let numberOfQuotes = document.getElementById('myRange').value;
    switch(numberOfQuotes){
        case '5':
            document.getElementById("quoteFive").innerHTML = tupacQuote();
            document.getElementById("quoteFive").style = "visible";
        case '4':
            document.getElementById("quoteFour").innerHTML = tupacQuote();
            document.getElementById("quoteFour").style = "visible";
        case '3':
            document.getElementById("quoteThree").innerHTML = tupacQuote();
            document.getElementById("quoteThree").style = "visible";
        case '2':
            document.getElementById("quoteTwo").innerHTML = tupacQuote();
            document.getElementById("quoteTwo").style = "visible";
        case '1':
            document.getElementById("quoteOne").innerHTML = tupacQuote();
            document.getElementById("quoteOne").style = "visible";
            break;
        default:
            console.log("Not a valid number")
    }
  }
  

// Create function to randomly generate quotes

function tupacQuote() {
    quote = "";
    let beginningLength = beginningTu.length;
    quote = beginningTu[Math.floor(Math.random() * beginningLength)];

    let middleLength = middleTu.length;
    quote += middleTu[Math.floor(Math.random() * middleLength)];

    let endLength = endTu.length;
    quote += endTu[Math.floor(Math.random() * endLength)];
    return quote;
}

// Make quit button visible

document.querySelector(".tupacBtn").addEventListener("click", function(){
    document.querySelector("#hideBtn").style.display = "block";
  });

// Change background color with button click (Removed as become annoying)

// let btn = document.querySelector(".tupacBtn");
// let char = "0123456789ABCDEF";

// btn.addEventListener("click", changeCol);

// function changeCol(){
//   let  randcol= "";
//         for(var i=0; i<6; i++){
//             randcol += allchar[Math.floor(Math.random()*16)];
// }
// document.body.style.backgroundColor= "#"+randcol;
// }