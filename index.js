function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

/*
describe('sayHiToHeadphonedRoommate(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})
*/
function sayHiToHeadphonedRoommate(string) {
    if (isShouting(string)) {
        return "YES INDEED!";
    }
    if (isWhispering(string)) {
        return "I can\'t hear you!";
    }
    if (string == "Let's have dinner together!") {
        return "I would love to!";
    }
}

function isShouting(string) {
    return string === shout(string);
}
function isWhispering(string) {
    return string === whisper(string);
}