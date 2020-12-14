var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#text-input")
var outputDiv = document.querySelector("#output-box")




function clickEventHandler(){
    outputDiv.innerText = "aaghriojfoijfoiihaaa" + txtInput.value
}

btnTranslate.addEventListener("click", clickEventHandler)