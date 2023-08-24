const lengthSlider=document.querySelector(".pass-length input"),
options=document.querySelectorAll(".option input"),
copyIcon=document.querySelector(".input-box span"),
passwordInput=document.querySelector(".input-box input"),
passIndicator=document.querySelector(".pass-indicator"),
generateBtn=document.querySelector(".generate-btn");

const characters={
    lowercase: "abcdefghijklmnopqrstuvwwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVVWXYZ",
    numbers: "0123456789",
    Symbols:"^!$%&|[]{}/,*+-#@<>~"
};
const generatePassword=()=>{
    let staticPassword="";
    randomPassword="";
    excludeDuplicate=false;
    passLength=lengthSlider.value;
};
options.foreach(option)=> {
    if(options.checked){
        if(options.id !="exc-duplicate" && options.id !="spaces"){
            staticPassword+=characters[options.id];
        }
        else if(options.id =="spaces"){
            staticPassword+='${staticPassword}';
        }else {
            excludeDuplicate=true;
        }
    }
};