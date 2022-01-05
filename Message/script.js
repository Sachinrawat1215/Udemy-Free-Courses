let msg = document.getElementById("msg-box");
let copyBtn = document.getElementById("copy-btn");
let notify = document.getElementById("notify");
let courseTitle = document.getElementById("course-title");


// Copy message to clipboard
function copy(mainmsg) {
    if (!mainmsg) {
        return;
    }    
    let msgText = mainmsg.innerText;
    let inputElement = document.createElement("textarea");
    inputElement.value = msgText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
    notify.style.visibility = "visible";
};



// Set courses name to message
fetch("http://udemy-backend-api.herokuapp.com/").then(response => response.json()).then((data) => {
    let oldArray = data[0];
    oldArray.shift();
    oldArray.shift();
    let html = "";
    let stringArray = [];
    for(let i in oldArray){
        let mainString = oldArray[i].text;
        let stringLength = mainString.length;
        let trimString = mainString.slice(0, stringLength - 16)
        stringArray.push(trimString);
    }
    stringArray.forEach((element) => {
        html += `<p>${element}</p>`
    });
    courseTitle.innerHTML = html;
})