var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#text-input")
console.log(txtInput)

function clickEventHandler(){
    console.log("clicked")
    console.log(txtInput.value)
}

btnTranslate.addEventListener("click", clickEventHandler)