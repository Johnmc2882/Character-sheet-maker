const pathtowizardImage = "images/Mageborder.png"
const pathtoThiefImage = "images/Thiefborder.png"
const pathtoFighterImage = "images/Fighterborder.png"
function handleSubmit(e){
    e.preventDefault();
    let chosenName = document.querySelector("#name-input").value;
    document.querySelector("#name-output").innerHTML = chosenName;

    let chosenAge = document.querySelector("#Age-input").value;
    document.querySelector("#Age-output").innerHTML = chosenAge;

    let ChosenHealth = document.querySelector("#Health-input").value;
    document.querySelector("#Health-output").innerHTML = ChosenHealth;

    let ChosenStamina = document.querySelector("#Stamina-input").value;
    document.querySelector("#Stamina-output").innerHTML = ChosenStamina;

    let ChosenStealth = document.querySelector("#Stealth-input").value;
    document.querySelector("#Stealth-output").innerHTML = ChosenStealth;

    let ChosenMana = document.querySelector("#Mana-input").value;
    document.querySelector("#Mana-output").innerHTML = ChosenMana;

    let ChosenClass = document.querySelector("#ClassSelector").value;
    document.querySelector("#SelectedClass").innerHTML = ChosenClass;
    
    document.querySelector("#Sheet").classList.add("fade-in")
    document.querySelector("#Creater").classList.add("fade-out")
    
    let ChosenWeapon = document.querySelector("#chooseWeapon").value;
    document.querySelector("#selectedWeapon").innerHTML=ChosenWeapon;

    const s1 = document.querySelector("#Male");
    const s2 = document.querySelector("#Female");
    const s3 = document.querySelector("#Other");
    
    if(s1.checked){
        let ChosenSex = document.querySelector("#Male").value;
        document.querySelector("#Sex-output").innerHTML=ChosenSex
    }
    if(s2.checked){
        let ChosenSex = document.querySelector("#Female").value;
        document.querySelector("#Sex-output").innerHTML=ChosenSex
    }
    if(s3.checked){
        let ChosenSex = document.querySelector("#Other").value;
        document.querySelector("#Sex-output").innerHTML=ChosenSex
    }
    const w1 = document.querySelector("#Fists");
    const w2 = document.querySelector("#BroadSword");
    const w3 = document.querySelector("#Mace");
    const w4 = document.querySelector("#Lance");
    const w5 = document.querySelector("#Spear");

    if(w1.checked){
        let ChosenWeapon = document.querySelector("#Fists").value;
        document.querySelector("#selectedWeapon").innerHTML=ChosenWeapon;
    }
    else if(w2.checked){
        let ChosenWeapon = document.querySelector("#BroadSword").value;
        document.querySelector("#selectedWeapon").innerHTML=ChosenWeapon;
    }
    else if(w3.checked){
        let ChosenWeapon = document.querySelector("#Mace").value;
        document.querySelector("#ChosenSpell").innerHTML=ChosenWeapon;
    }
    else if(w4.checked){
        let ChosenWeapon = document.querySelector("#Lance").value;
        document.querySelector("#selectedWeapon").innerHTML=ChosenWeapon;
    }
    else if(w5.checked){
        let ChosenWeapon = document.querySelector("#Spear").value;
        document.querySelector("#selectedWeapon").innerHTML=ChosenWeapon;
    }
    const m1 = document.querySelector("#Sleep");
    const m2 = document.querySelector("#Charm");
    const m3 = document.querySelector("#Missle");
    if(m1.checked){
        let ChosenSpell = document.querySelector("#Sleep").value;
        document.querySelector("#ChosenSpell").innerHTML=ChosenSpell;
    }
    else if(m2.checked){
        let ChosenSpell = document.querySelector("#Charm").value;
        document.querySelector("#ChosenSpell").innerHTML=ChosenSpell;
    }
    else if(m3.checked){
        let ChosenSpell = document.querySelector("#Missle").value;
        document.querySelector("#ChosenSpell").innerHTML=ChosenSpell;
    }
}



function ClassSelected(){
    console.log("Changed class");
    let selectedClass = document.querySelector("#ClassSelector").value;
    if(selectedClass == "Fighter"){
        document.querySelector("img").src = pathtoFighterImage;
        document.querySelector("#Stealth").classList.add("hide");
        document.querySelector("#chooseSpell").classList.add("hide");
        document.querySelector("#Mana").classList.add("hide");
        document.querySelector("#Mana-output").classList.add("hide");
        document.querySelector("#chooseWeapon").classList.remove("hide")
        document.querySelector("#selectedWeapon").classList.remove("hide")
        document.querySelector("#ChosenSpell").classList.add("hide")
        document.querySelector("#Stealth-output").classList.add("hide");
    }
    if(selectedClass == "Mage" ){
        document.querySelector("#chooseSpell").classList.remove("hide");
        document.querySelector("#Mana").classList.remove("hide");
        document.querySelector("img").src = pathtowizardImage;
        document.querySelector("#Stealth").classList.add("hide");
        document.querySelector("#chooseWeapon").classList.add("hide")
        document.querySelector("#ChosenSpell").classList.remove("hide")
        document.querySelector("#selectedWeapon").classList.add("hide")
        document.querySelector("#Mana-output").classList.remove("hide");
        document.querySelector("#Stealth-output").classList.add("hide");
    }
    if(selectedClass == "Thief"){
        document.querySelector("img").src = pathtoThiefImage;
        document.querySelector("#Stealth").classList.remove("hide");
        document.querySelector("#chooseSpell").classList.add("hide");
        document.querySelector("#Mana").classList.add("hide");
        document.querySelector("#chooseWeapon").classList.add("hide");
        document.querySelector("#selectedWeapon").classList.add("hide")
        document.querySelector("#ChosenSpell").classList.add("hide")
        document.querySelector("#Mana-output").classList.add("hide");
        document.querySelector("#Stealth-output").classList.remove("hide");
    }
}