
function handleClick() {
    alert("Hello")
    };

// //Click event Calling function  -  Note no () after function name
//-----------------------------------------------------------------------------
// document.querySelectorAll("button")[0].addEventListener("click",handleClick)
//-----------------------------------------------------------------------------


// //Click event Calling and anonymous funtion - Function written in the event
//-----------------------------------------------------------------------------
// document.querySelectorAll("button")[1].addEventListener("click",function () {
//     alert("I am")
//     })
//-----------------------------------------------------------------------------


let numberOfDrumButtons  = document.querySelectorAll(".drum")
// console.log(numberOfDrumButtons.length)


// let str =  "I am a very nice Drum Kit"
// function splitSentence(sentence) {
//     let newArray  = [];
//     for(let word in sentence){
//         newArray.push(word);
//     }
//     return newArray;
// }

// console.log(splitSentence(str))



//Add listen and change sound swich
//This has the function assgned directly to the event
//Canno Reuse in other events
//Below we make the switch the Function and reassigne to "keypress" and "click" events
// function addListen() {
    
//     for(i = 0; i < numberOfDrumButtons.length; i++ ){
//         // console.log(i)
//         numberOfDrumButtons[i].addEventListener("click",function () {
//             // let audio = new Audio("sounds/tom-1.mp3")
//             //      audio.play()
//             let buttonInnerHTML = this.innerHTML;
//             switch (buttonInnerHTML) {
//                 case "w":
//                     let tom1 = new Audio("sounds/tom-1.mp3")
//                     tom1.play()
//                     break;

//                 case "a":
//                     let tom2 = new Audio("sounds/tom-2.mp3")
//                     tom2.play()
                
//                 case "s":
//                     let kick = new Audio("sounds/kick-bass.mp3")
//                     kick.play()
//                     break;

//                 case "d":
//                     let crash = new Audio("sounds/crash.mp3")
//                     crash.play()
//                     break;

                    
//                 case "j":
//                     let tom3 = new Audio("sounds/tom-3.mp3")
//                     tom3.play()
//                     break;

//                 case "k":
//                     let tom4 = new Audio("sounds/tom-4.mp3")
//                     tom4.play()
//                     break;
                
//                 case "l":
//                     let snare = new Audio("sounds/snare.mp3")
//                     snare.play()
//                     break; 
                    
//                 default:
//                     console.log(`this button doesn not have a sound assigned : ${buttonInnerHTML}`)
//                 break;
//             }

//             })
//     }
// }

// addListen()
// "e" is used for the "event"




/////BOTH EVENT LISTENERS USE makeSound() as the keypress
///// and button inner html are same letter

//Detect the Click events on the Buttons
//Loop throught the buttons in the Query selector and assign sound uing innerHTML
// NOTE the CSS selectors are named the same as the key Values
// w , a , s , d , j , k , l 
for(i = 0; i < numberOfDrumButtons.length; i++ ){
    // console.log(i)
    numberOfDrumButtons[i].addEventListener("click",function () {
        // let audio = new Audio("sounds/tom-1.mp3")
        //      audio.play()
        let buttonInnerHTML = this.innerHTML;
        
            makeSound(buttonInnerHTML); 
            butonAnimation(buttonInnerHTML); 

    }
)};

//Add the event listener when a key is pressed
// NOTE the CSS selectors are named the same as the key Values
// w , a , s , d , j , k , l 
document.addEventListener("keydown",function(e) {
    //logs the event  -  "e" passes in the event
            console.log(e)  // e is the event  -   ".key" is the property of the event
            makeSound(e.key)
            butonAnimation(e.key);
   })




function makeSound(key) {
    
    // for(i = 0; i < numberOfDrumButtons.length; i++ ){
        // console.log(i)
        // numberOfDrumButtons[i].addEventListener("click",function () {
            // let audio = new Audio("sounds/tom-1.mp3")
            //      audio.play()
            // let buttonInnerHTML = this.innerHTML;
            switch (key) {
                case "w":
                    let tom1 = new Audio("sounds/tom-1.mp3")
                    tom1.play()
                    break;

                case "a":
                    let tom2 = new Audio("sounds/tom-2.mp3")
                    tom2.play()
                
                case "s":
                    let kick = new Audio("sounds/kick-bass.mp3")
                    kick.play()
                    break;

                case "d":
                    let crash = new Audio("sounds/crash.mp3")
                    crash.play()
                    break;

                    
                case "j":
                    let tom3 = new Audio("sounds/tom-3.mp3")
                    tom3.play()
                    break;

                case "k":
                    let tom4 = new Audio("sounds/tom-4.mp3")
                    tom4.play()
                    break;
                
                case "l":
                    let snare = new Audio("sounds/snare.mp3")
                    snare.play()
                    break; 
                    
                default:
                    console.log(`This button doesn not have a sound assigned : ${key}`)
                break;
            }

            // })
    // }
}


function anotherEventListener (typeOfEvent,callback) {
//Detect Event 

var eventThatHappened = {
    eventType: "keypress",
    key: "p",
    durationOfKeypress: 2
}

if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);

}};


anotherEventListener("keypress",function(e) {
    console.log(`This is the event:`)
    console.log(e)
});

function butonAnimation (currentKey) {

    let activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")
    setTimeout(function() {activeButton.classList.remove("pressed") 
    },100)  //Add timeout time of 100 milliseconds

}

