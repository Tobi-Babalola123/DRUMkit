var numberofdrumbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberofdrumbuttons; i++) {
    document.querySelectorAll(".drum") [i].addEventListener("click",function () {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
});


}

    document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);


})
    

function makeSound(key) {
    switch (key) {

            case "w":
            var kick = new Audio("sounds/solid-kick-bassdrum.wav");
            kick.play();
            break;
    
            case "a":
            var cymbal = new Audio("sounds/crash-cymbal-sound-c-sharp-key-07-T4H.wav");
            cymbal.play();
            break;
    
            case "s":
            var floortom = new Audio('sounds/modern-high-floor-tom-drum-sound-c-sharp-key-58-y2D.wav');
            floortom.play();
            break;
    
            case "d":
            var midtonetom = new Audio('sounds/digital-synth-drums-vol-1-mid-tone-tom_F_major.wav');
            midtonetom.play();
            break;
    
            case "j":
            var hihat = new Audio('sounds/soft-open-hi-hat.wav');
            hihat.play();
            break;
    
            case "k":
            var hihat01 = new Audio('sounds/hi-hat-01.wav');
            hihat01.play();
            break;
    
            case "l":
                var choppedsnare = new Audio('sounds/chopped-snare_C.wav');
                choppedsnare.play();
                break;
    
    
        default: console.log(buttonInnerHTML);
        break;   
    }
}
       

        

        
    
    

    document.addEventListener("keypress", function() {

    console.log(event);
 });
 

    function buttonAnimation(currentKey) {

    var activeButton = document.querySelector ("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

 }
