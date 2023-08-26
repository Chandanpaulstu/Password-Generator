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
const generatePassword = () => {
    let staticPassword= "",
    randomPassword= "",
    excludeDuplicate=false,
    passLength=lengthSlider.value;

options.foreach(option => {
    if(options.checked){
        if(options.id !="exc-duplicate" && options.id !="spaces"){
            staticPassword += characters[options.id];
        }
        else if(options.id =="spaces"){
            staticPassword += '${staticPassword}';
        }else {
            excludeDuplicate=true;
        }
    }
});
for(let i=0;i<passLength;i++){
    let randomChar=
    staticPassword[Math.floor(Math.random() * staticPassword.length)];
    if(excludeDuplicate) { 
        !randomPassword.includes(randomChar) || randomChar==" " ? (randomPassword += randomChar) : i--;
}
else {
    randomPassword += randomChar;
}
}
passwordInput.value=randomPassword};
const updatePassIndicator = () => {
    passIndicator.id=lengthSlider.value<=8 ? "weak"
    :lengthSlider.value<=16 ?"medium"
    :"strong";
};
const