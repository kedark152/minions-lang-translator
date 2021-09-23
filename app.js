// console.log("JavaScript is working!!!");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var txtInput = document.querySelector("#txtinput");
btnTranslate.addEventListener("click",clickHandler);
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" +"text=" + text;
}

//function errorHandler(error){
    //alert("Something went wrong");
 //console.log("error occcured", error);}
 


function clickHandler(){
    //    outputDiv.innerText = "Banana Language " + txtInput.value;
    console.log("button is clicked");
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => 
        {var translatedText= json.contents.translated; //console.log(json.contents.translated)
         outputDiv.innerText = translatedText;}   ) //
    .catch(()=>alert("something went wrong in server, please try again sometime..."));

}

