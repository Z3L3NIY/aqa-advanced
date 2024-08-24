function handleNum(number, callbackEven, callbackOdd) {
    if(number % 2 == 0) {
        callbackEven();
    }
    else {
        callbackOdd();
    }
}

function handleEven() {
    console.log("number is even");
}

function handleOdd() {
    console.log("number is odd");
}

handleNum(665, handleEven, handleOdd);