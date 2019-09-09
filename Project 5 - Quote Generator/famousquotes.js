// Famous rappers quotes to loop through one by one to show at bottom of page

const famousQuotes = ["\"Living well eliminates the need for revenge.\" - Kanye West",
                      "\"No matter where life takes me. Find me with a smile.\" - Mac Miller",
                      "\"If you’re scared to take chances, you\’ll never have the answers.\" - Nas",
                      "\"If people take anything from my music, it should be motivation to know that anything is possible as long as you keep working at it and don’t back down.\" - Eminem",
                      "\"Never apologize for what you feel. It\’s like apologizing for being real.\" - Lil Wayne",
                      "\"Damn right I like the life I live, cause I went from negative to positive.\" - Biggie Smalls",
                      "\"God will take you through hell, just to get to heaven.\" - T.I",
                      "\"You might not have a car or big gold chain, stay true to yourself and things will change.\" - Snoop Dogg",
                      "\"Remind yourself, nobody\’s built like you. You design yourself.\" - Jay Z",
                      "\"Remember one thing Through every dark night, there\’s a bright day after that. So no matter how hard it get, stick your chest out. Keep your head up, and handle it.\" - Tupac"]

for (let i = 0; i < famousQuotes.length; i++) {
    let interval = slowLoop(famousQuotes, i);
}

function slowLoop(famousQuotes, index) {
    function random() {
        let quotes = document.getElementById('timerQuotes');

        quotes.innerHTML = famousQuotes[index];

        index = (index + 1) % famousQuotes.length;
    }

    return setInterval(random, 1000 * 5);
}