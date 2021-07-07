function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    const string1 = "I LOVE YOU, GRANDMA.";
    const string2 = "i love you, grandma.";

    if (string === string.toLowerCase() && string !== string2) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase() && string !== string1) {
        return "YES INDEED!";
    } else if (string === "I love you, Grandma." || string === string1 || string === string2) {
        return "I love you, too."
    }

}

console.log(sayHiToGrandma("I LOVE GRANDMA."));