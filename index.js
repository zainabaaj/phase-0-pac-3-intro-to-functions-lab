function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    return console.log(string.toUpperCase());

}
function logWhisper(string) {
    return console.log(string.toLowerCase());

}
function sayHiToHeadphonedRoommate(string) {
    let lowstring = string.toLowerCase();
    let capstring = string.toUpperCase();
    if (string == lowstring) {
        string = "I can\'t hear you!"
    }
    else if (string == capstring) {
        string = "YES INDEED!"
    }
    else if (string == "Let's have dinner together!") {
        string = "I would love to!"
    }
    return string
}
