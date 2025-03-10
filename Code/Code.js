function handleSubmit(e){
    e.preventDefault();
    let chosenName = document.querySelector("#name-input").value;
    document.querySelector("#name-output").innerHTML = chosenName;
    document.querySelector("#sheet").classList.remove("hide");
}


function ClassSelected(){
    console.log("Changed class");
    let selectedClass = document.querySelector("#ClassSelector").value;
    if(selectedClass == "Mage" ){
        document.querySelector("#sheet").classList.remove("hide");
        document.querySelector("#chooseSpell").classList.remove("hide");
    }
}