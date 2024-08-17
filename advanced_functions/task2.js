function reqFunction(num) {
    console.log(num);
    if(num <= 0) return;
    reqFunction(num - 1);
}

reqFunction(5);