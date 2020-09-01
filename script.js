  
const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

function requestJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        let response = request.response;
        processResponse(response);
    }
}

function sendRequest() {
    requestJSON(requestUrl);
}

function processResponse(response) {
    document.querySelector("#squadName").innerText = response.squadName;
    document.querySelector("#homeTown").innerText = response.homeTown;
    document.querySelector("#formed").innerText = response.formed;
    document.querySelector("#secretBase").innerText = response.secretBase;
    document.querySelector("#active").innerText = response.active;

    let table = document.getElementById('member-table');

    for (const member of response.members) {
        let newRow = table.insertRow(-1);
        for (let key in member) {
            let newCell = newRow.insertCell(-1);
            let info = document.createTextNode(member[key]);
            newCell.appendChild(info);
        }
    };

}
sendRequest();