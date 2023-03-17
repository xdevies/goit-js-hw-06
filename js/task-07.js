
const fontControl = document.querySelector("input#font-size-control");
const textSpan = document.querySelector("span#text");

textSpan.style.fontSize = `${fontControl.valueAsNumber}px`;

function onRangeChange () {
    textSpan.style.fontSize = `${fontControl.valueAsNumber}px`;

    };
    
fontControl.addEventListener("input", onRangeChange);