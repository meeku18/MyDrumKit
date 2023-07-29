var numberOfbutton=document.querySelectorAll(".drum").length;
function sound(buttonInnerHtml){
    switch(buttonInnerHtml){
        case "k":var tom1=new Audio("./sounds/tom-1.mp3");
        tom1.play();
        break;

        case "j":var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":var tom3=new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":var tom4=new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "a":var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case "w":var kick=new Audio("sounds/kick-bass.mp3");
        kick.play();

        case "l":var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
        default:console.log(buttonInnerHtml);
    }
}
function buttonAnimation(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
for(var i=0;i<numberOfbutton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerText;
        sound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}
document.addEventListener("keypress",function(event){
    sound(event.key);
    buttonAnimation(event.key);
})


// document.querySelector("button").addEventListener("click",function(){
//     alert("i got clicked!")
//     // this will display the click
// });

