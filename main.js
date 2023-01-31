let user = document.getElementById("userIn").value;
let pass = document.getElementById("passIn").value;
let btn = document.getElementById("btnHTML");

btn.addEventListener("click", btnClicked);

function btnClicked() {
    if(user === admin && pass === 1234) {
        alert("successful login");
    }
}