// JavaScript source code
exports.answer = function (prompt) {
    if (prompt == "hello") { return "Hello!" }
    else if (prompt == "how are you") { return "Fine, what about you?" }
    else if (prompt == "chicken") { return "chicken" }
    else if (promt == "") { return "...Hello?" }
    else { return "Sorry, I did not catch what you just said." }
};

exports.rec = function () {
    process.stdin.on("data", data => { data = data.toString() })
    return data;
}