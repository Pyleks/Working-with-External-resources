function getData(cb) {
// Create a new instance of the XMLhttpRequest object
    var xhr = new XMLHttpRequest();
    

// The 2 following lines are simply sending a GET request the the URL
    xhr.open("GET", "https://swapi.co/api/");
    xhr.send();


    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("data").innerHTML = this.responseText;
            // console.log(typeof(JSON.parse(this.responseText)));
            // console.log(JSON.parse(this.responseText));
            // data = JSON.parse(this.responseText);
            cb(JSON.parse(this.responseText));
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole());


// setTimeout(function() {
//     console.log(data);
// }, 500)