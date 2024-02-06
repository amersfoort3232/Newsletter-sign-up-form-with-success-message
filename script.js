function submit(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    document.querySelector("#user-email").innerHTML = email;
    document.querySelector(".container").style.display = "none";
    document.querySelector(".success").style.display = "flex";
}

document.getElementsByClassName("submit-subscribe")[0].addEventListener("click", submit);

function dismiss(event){
    event.preventDefault();
    document.querySelector(".success").style.display = "none";
    document.querySelector(".container").style.display = "flex";
}

document.getElementsByClassName("dismiss")[0].addEventListener("click", dismiss);