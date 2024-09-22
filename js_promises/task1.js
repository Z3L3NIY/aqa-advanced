function showDelayedText(text, delay) {
    setTimeout(console.log, delay, text);
}

showDelayedText("This is delayed text", 5000);