function button1() {
    document.getElementById("quotes").style.backgroundColor = "#6699ff";
    document.getElementById("text").style.color = "white";
    document.getElementById("author").style.color = "white";
    document.getElementById("quotes").style.borderColor = "#262626";
    document.getElementById("text").style.fontFamily = "Righteous";
    document.getElementById("text").style.fontWeight = "lighter";
}
function button2() {
    document.getElementById("quotes").style.backgroundColor = "#ff6666";
    document.getElementById("text").style.color = "white";
    document.getElementById("author").style.color = "white";
    document.getElementById("quotes").style.borderColor = "#262626";
    document.getElementById("text").style.fontFamily = "Righteous";
    document.getElementById("text").style.fontWeight = "lighter";
}
function button3() {
    document.getElementById("quotes").style.backgroundColor = "#67e4a6";
    document.getElementById("text").style.color = "black";
    document.getElementById("author").style.color = "black";
    document.getElementById("quotes").style.borderColor = "black";
    document.getElementById("text").style.fontFamily = "Roboto Mono";

}
function button4() {
    document.getElementById("quotes").style.backgroundColor = "#e467a6";
    document.getElementById("text").style.color = "black";
    document.getElementById("author").style.color = "black";
    document.getElementById("quotes").style.borderColor = "black";
    document.getElementById("text").style.fontFamily = "Roboto Mono";
}

var quotes = ["Great actions are not always true sons of great and mighty resolutions.", "Happy is the bride that the sun shines on.", "It is possible to have too much of a good thing.", "Lightning never strikes the same place twice."];
var author = ["Samuel Butler (1612-1680)", "Robert Herrick (1591-1674)", "Aesop (c.620-560 BC)", "P. H. Myers (1857)"];


fetchQuote(quotes, author);

function fetchQuote(q, a) {
    var quoteNum = Math.floor(Math.random() * quotes.length);
    document.getElementById("text").innerHTML = '" ' + q[quoteNum] + ' "';
    document.getElementById("author").innerHTML = "- " + a[quoteNum];
}

function getInputValue() {
    var inputVal = document.getElementById("converter-input").value;
    var optionVal = document.getElementById("conversion-unit").value;
    var result = 0;
    if (optionVal.match("lbkg")) {
        result = (inputVal * 0.4536);
        document.getElementById("converter-result").innerHTML = result + " KG";
    }
    else {
        result = (inputVal * 2.2046);
        document.getElementById("converter-result").innerHTML = result + " LB";
    }
}
var inputNumbersArr;
var empty;
function addNumbers() {
    var inputNumbers = document.getElementById("math-input-numbers").value;
    inputNumbersArr = inputNumbers.split(',');
    clearEmpty();
    findMax();
    findMin();
    findSum();
    findReverse();
    setTimeout(addNumbers, 500);

}
var arrNonEmpty;
function clearEmpty() {
    var allLines = document.getElementById("math-input-numbers").value;
    allLinesArr = allLines.split(',');
    arrNonEmpty = allLinesArr.filter(Boolean);


}

function findMax() {
    var result = Math.max.apply(null, arrNonEmpty);
    if (result == -Infinity) {
        result = 0;
    }
    document.getElementById("max").innerHTML = result;
}
function findMin() {
    var result = Math.min.apply(null, arrNonEmpty);
    if (result == Infinity) {
        result = 0;
    }
    document.getElementById("min").innerHTML = result;
}
function findSum() {
    var sum = 0;
    for (var i = 0; i < arrNonEmpty.length; i++) {
        sum += parseFloat(arrNonEmpty[i]);
    }
    document.getElementById("sum").innerHTML = sum;

    var avg = sum / arrNonEmpty.length;
    if (isNaN(avg)) {
        avg = 0;
    }
    document.getElementById("avg").innerHTML = avg;
}

function findReverse() {


    arrNonEmpty.reverse();
    document.getElementById("reverse").innerHTML = arrNonEmpty;
}

function clearAll() {
    document.getElementById("magic").value = null;
}

function capitalize() {
    var resU = document.getElementById("magic").value.toUpperCase();
    var resL = document.getElementById("magic").value.toLowerCase();
    if (document.getElementById("caps").value == "OFF") {
        document.getElementById("caps").value = "ON";
        document.getElementById("magic").value = resU;
    }

    else if (document.getElementById("caps").value == "ON") {
        document.getElementById("caps").value = "OFF";
        document.getElementById("magic").value = resL;
    }

}

var allLinesArr;
function sortLines() {
    var allLines = document.getElementById("magic").value;
    allLinesArr = allLines.split('\n');
    allLinesArr.sort();
    document.getElementById("magic").value = allLinesArr.join("\r\n");

}

function reverseLines() {
    var allLines = document.getElementById("magic").value;
    allLinesArr = allLines.split('\n');
    document.getElementById("magic").innerHTML = allLinesArr.reverse();
    document.getElementById("magic").value = allLinesArr.join("\r\n");

}


allLinesArr.reverse();

function stripBlank() {
    var allLines = document.getElementById("magic").value;
    allLinesArr = allLines.split("\n");
    var arr = allLinesArr.filter(Boolean);
    array = arr.map(el => el.trim());
    document.getElementById("magic").value = array.join("\r\n");

}

function addLineNumbers() {

    var allLines = document.getElementById("magic").value;
    allLinesArr = allLines.split('\n');
    for (var j = 0; j < allLinesArr.length; j++) {
        allLinesArr[j] = j + 1 + ". " + allLinesArr[j];
    }
    document.getElementById("magic").value = allLinesArr.join("\r\n");

}

function shuffle() {
    var allLines = document.getElementById("magic").value;
    allLinesArr = allLines.split('\n');
    for (let i = allLinesArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [allLinesArr[i], allLinesArr[j]] = [allLinesArr[j], allLinesArr[i]];
    }
    document.getElementById("magic").value = allLinesArr.join("\r\n");
}
