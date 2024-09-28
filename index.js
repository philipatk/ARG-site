window.addEventListener('DOMContentLoaded', (event) => {
    var input = document.getElementById("input");
    var submit = document.getElementById("submit");
    var text = document.getElementById("text")

    submit.onclick = () => {
        if (input.value === "ebec" ){
            text.style.display = "block"
            console.log("you are right")
        }else{
            console.log("error")
        }
    }
});