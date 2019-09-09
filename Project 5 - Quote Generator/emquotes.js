// Variable for beginning, middle and end quote fragments

let beginningEm = ["\"The truth is you don’t know what is going to happen tomorrow. ",
                 "\"When I say or do something, I do it. ",
                 "\"I say what I want to say and do what I want to do. ",
                 "\"Nobody likes to fail. ",
                 "\"People can try to reinvent themselves. "
];

let middleEm = ["Life is a crazy ride, ",
              "I want to succeed in everything I do, ",
              "Before I was famous, ",
              "If people take anything from my music, ",
              "Everybody has goals, "
];

let endEm = ["nothing is guaranteed.\"",
           "Be proud of who you are.\"",
           "it’s the path I’ve chosen to go.\"",
           "my career exploded.\"",
           "while I’m here, I might as well make the most of it.\""
];

// Range slider

let slider = document.getElementById("myRange");
let output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

// Create function to display hidden elements

function createQuotes() {
  document.getElementById("quoteFive").style.visibility="hidden";
  document.getElementById("quoteFour").style.visibility="hidden";
  document.getElementById("quoteThree").style.visibility="hidden";
  document.getElementById("quoteTwo").style.visibility="hidden";
  document.getElementById("quoteOne").style.visibility="hidden";

  let numberOfQuotes = document.getElementById('myRange').value;
  switch(numberOfQuotes){
      case '5':
          document.getElementById("quoteFive").innerHTML = emQuote();
          document.getElementById("quoteFive").style = "visible";
      case '4':
          document.getElementById("quoteFour").innerHTML = emQuote();
          document.getElementById("quoteFour").style = "visible";
      case '3':
          document.getElementById("quoteThree").innerHTML = emQuote();
          document.getElementById("quoteThree").style = "visible";
      case '2':
          document.getElementById("quoteTwo").innerHTML = emQuote();
          document.getElementById("quoteTwo").style = "visible";
      case '1':
          document.getElementById("quoteOne").innerHTML = emQuote();
          document.getElementById("quoteOne").style = "visible";
          break;
      default:
        console.log("Not a valid number")
  }
}

// Create function to randomly generate quotes

function emQuote() {
  quote = "";
  let beginningLength = beginningEm.length;
  quote = beginningEm[Math.floor(Math.random() * beginningLength)];

  let middleLength = middleEm.length;
  quote += middleEm[Math.floor(Math.random() * middleLength)];

  let endLength = endEm.length;
  quote += endEm[Math.floor(Math.random() * endLength)];
  return quote;
};

// Make quit button visible and assign link to the button

document.querySelector(".eminemBtn").addEventListener("click", function(){
  document.querySelector("#hideBtn").style.display = "block";
});

document.getElementById("hideBtn").onclick = function () {
  location.href = "quit.html";
};

// Change background color with button click (Removed as become annoying)

// let button = document.querySelector(".eminemBtn");
// let allchar = "0123456789ABCDEF";

// button.addEventListener("click", changeCol);

// function changeCol(){
//   let  randcol= "";
//         for(var i=0; i<6; i++){
//             randcol += allchar[Math.floor(Math.random()*16)];
// }
// document.body.style.backgroundColor= "#"+randcol;
// }