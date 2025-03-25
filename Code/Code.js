const pathtowizardImage = "images/Mageborder.png"
const pathtoThiefImage = "images/Thiefborder.png"
const pathtoFighterImage = "images/Fighterborder.png"
function handleSubmit(e){
    e.preventDefault();
    let chosenName = document.querySelector("#name-input").value;
    document.querySelector("#name-output").innerHTML = chosenName;

    let chosenAge = document.querySelector("#Age-input").value;
    document.querySelector("#Age-output").innerHTML = chosenAge;

    let ChosenClass = document.querySelector("ClassSelector").value;
    document.querySelector("SelectedClass").innerHTML = ChosenClass;
}


function ClassSelected(){
    console.log("Changed class");
    let selectedClass = document.querySelector("#ClassSelector").value;
    if(selectedClass == "Fighter"){
        document.querySelector("img").src = pathtoFighterImage;
        document.querySelector("#Stealth").classList.add("hide");
        document.querySelector("#chooseSpell").classList.add("hide");
        document.querySelector("#Mana").classList.add("hide");
        document.querySelector("#chooseWeapon").classList.remove("hide")
    }
    if(selectedClass == "Mage" ){
        document.querySelector("#chooseSpell").classList.remove("hide");
        document.querySelector("#Mana").classList.remove("hide");
        document.querySelector("img").src = pathtowizardImage;
        document.querySelector("#Stealth").classList.add("hide");
        document.querySelector("#chooseWeapon").classList.add("hide")
    }
    if(selectedClass == "Thief"){
        document.querySelector("img").src = pathtoThiefImage;
        document.querySelector("#Stealth").classList.remove("hide");
        document.querySelector("#chooseSpell").classList.add("hide");
        document.querySelector("#Mana").classList.add("hide");
        document.querySelector("#chooseWeapon").classList.add("hide")
    }
}