//JS File For Function



//Function to Check if array contains
function containsPartialWord(arr, partialWord) {  
    return arr.some(item =>
            item.includes(partialWord)
    );
}

//removes all child elements from a parent element
function removeAllChildren(parentElement){
    while(parentElement.lastElementChild){
        parentElement.removeChild(parentElement.lastElementChild)
    }     
}

//Function to get random number given The max number
function getRandomNumber (number) {
    let randomNumber = Math.floor(Math.random()*number)
     console.log(randomNumber)   
    return randomNumber
}

//Recursive Function to handle Arrays in Arrays
//cleanArray calls a recursive Function to get list where arrays in arrays 

function cleanArray(inputArray){
    let newArray = [];
    recursiveRemoveDup(0,inputArray,newArray);
    return newArray; 
}

function recursiveRemoveDup(ind,inputArray,newArray) {
    if(ind >= inputArray.length) return;
    
    //if the index of the array is an array itself, 
    //pass in this array[index] as input Array and
    //the new array
    if(Array.isArray(inputArray[ind])) {
        recursiveRemoveDup(0,inputArray[ind],newArray);
     } else {
        if(!newArray.includes(inputArray[ind])){
            newArray.push(inputArray[ind]);
        }
     }
     recursiveRemoveDup(ind+1,inputArray,newArray);
}

//Use recursive function to handle if array of arrays 
//to get list with duplicates fully removed

let singleAllergens =  cleanArray(allergens)


//Unused funtion  - 
function arrangeMeals(menu) {
    let returnArrays = []
    let mealTypes = []
    let desserts = []
    // let other = []
    let main = []
    // let lunch = []
        menu.forEach(element => {            
            mealTypes.push(element.mealType)
            if( element.mealType.includes("Dinner") 
                || element.mealType.includes("Lunch") 
                || element.mealType.includes("Breakfast")
             ){
              main.push(element)
           
            } else if(element.mealType.includes("Dessert")){
                desserts.push(element)
            }
            
            });
    
         returnArrays.push(main)
         returnArrays.push(mealTypes) 
        //  returnArrays.push(other) 
         returnArrays.push(desserts)  
        //  returnArrays.push(lunch)   
        // console.log(mealTypes);
        return returnArrays;
    
        };   
    
    
    // let meals = arrangeMeals(mealList.recipes)
    // console.log(`Meal Types`)
    // console.log(cleanArray(meals[1]))
    // console.log(`Mains`)
    // console.log(meals[0])
    // console.log(`Desserts`)
    // console.log(meals[2])
    
    // console.log(desserts)
    // recursiveRemoveDup(meals)

//OPen and close button for aside to use in media query
    function openNav() {
        document.getElementById("mySidenav").style.width = `${(window.innerWidth / 3)}px`  //"250px"``;
        // document.getElementById("main").style.marginLeft =  "250px";
        // document.getElementById("header").style.marginLeft = "250px"
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        // document.getElementById("openButton").style.display = "none"
    };
    
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("main").style.marginLeft= "0";
        // document.body.style.backgroundColor = "rgba(0,0,0,0)";
        // document.getElementById("header").style.marginLeft = "0"
        // document.getElementById("openButton").style.display = "inline";
      }
     

const allergenContainer  = document.getElementById("food-allergens");
const searchContainer  = document.getElementById("search-container");
const allergenApplied = document.querySelector("#allergenContainer");
const allergenList = document.getElementById("allergenList");
const cont = document.getElementById("menu-container")


function addSearchButton(){
    
    try {
        let searchButton = document.getElementById("searchButton")
        //Check if search button exists
        if (searchContainer.contains(searchButton)){
            console.log("Search Exists");
            }
        //
        else {
            let buttonContainer = document.createElement("div");
            buttonContainer.classList.add("flex","btn-outline")

            let search = document.createElement("button");
            search.textContent = "Search";
            search.id = "searchButton";
            search.type = "search";
            search.value = "Search";
            search.classList.add("fa", "btn");
            search.id = "searchButton"

            let clearButton = document.createElement("button");
            clearButton.textContent = "Clear";
            clearButton.id = "clearButton";
            clearButton.type = "button";
            clearButton.value = "Clear";
            clearButton.classList.add("fa","btn");
            clearButton.id = "clearButton"

            buttonContainer.appendChild(search)
            buttonContainer.appendChild(clearButton)
            searchContainer.appendChild(buttonContainer)


            // search.classList.add("fa-search") //font awesome css 
            // searchContainer.appendChild(search)
            // searchContainer.appendChild(clearButton)
        }
      } catch (error) {
        console.error(error);
        // Expected output: ReferenceError: serachButton is not defined
      }
}


function getSearchResults(){

    //Add Search Button only when Allergens confirmed
    //Event listener getRecipes.js function for API
    document.getElementById("searchButton").addEventListener("click",() => {
        getAllTheData()}
    )
    //Add Clear Button only when Allergens confirmed
    document.getElementById("clearButton").addEventListener("click", () => {
        // let cont = document.getElementById("menu-container")
        removeAllChildren(cont)
        //move to constants
        let allergenApplied = document.querySelector("#allergenContainer")
        removeAllChildren(allergenApplied)
    })
}



function addAllergens (allergies) {
    //created this function to reuse
    addSearchButton()
    // removeAllChildren(allergenApplied)
    // if (allergies.length !== 0) {
        for(i = 0; i < allergies.length ; i++ ){       
            //ID the Parent Element
            // let span = document.createElement("span");
            let inp = document.createElement("input");
            inp.type = "checkbox";
            inp.classList.add("select-allergens");
            inp.id = allergies[i];
            // inp.checked = "unchecked"
            
            //Create the Child element
            let lbl = document.createElement("label");
            lbl.textContent = allergies[i];
            lbl.htmlFor = allergies[i];
            lbl.textContent = allergies[i];
            let br = document.createElement("br")
            lbl.appendChild(br)
            lbl.appendChild(inp);

            allergenContainer.appendChild(lbl);
            let modal  =  document.querySelector("uc-modal");
            setTimeout(() =>{ 
                modal.open()
            },500);
        }
    // }
    
    getSearchResults()

}




//Ensures spaces are removed And first letter is capital
function capitalize(stringToCapitalize) {
    let capitalizedString = ""
    return stringToCapitalize[0].toUpperCase() + stringToCapitalize.slice(1,stringToCapitalize.length)
}

//UNIT TEST //////////////////////////////////////
//Test The capital function
function testFunction(fnc,result) {
    if (fnc === result) {
        console.log(`${fnc} : "Pass"`);}
    else {console.log(`${fnc} : "Fail"`)}
}

testFunction(capitalize("alan"),"Alan")
///////////////////////////////////////////////////


//Query selector for food-allergens form with checkboxes
let frm = document.querySelector("#food-allergens")

//section for allergen checkboxes
// let isAllergic =  document.getElementById("isAllergic")
let isAllergic =  document.querySelectorAll(".isAllergic")
console.log(isAllergic)
//event listener to list the allergens
for (let i = 0; i < isAllergic.length; i++) {
isAllergic[i].addEventListener("click", () => {
    if(isAllergic[i].value === "Yes") {
        console.log("This person is allergic")
        //reset the modal each time "yes" is selected
        removeAllChildren(frm)
        removeAllChildren(allergenList);
        addAllergens(singleAllergens)
    } else if (isAllergic[i].value === "No") {
        addSearchButton()
        getSearchResults()
        //reset is "no" is selected
        removeAllChildren(frm)
        removeAllChildren(allergenList);
        console.log("NO Allergies")
}}
)
}


//gather the list of allergens selected by ID
//id is created from the list of active allergens
function gatherAllergens() {
    // selectedAllergens
    let alllergensList  = []
    const checkboxes = document.querySelectorAll('.select-allergens');
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            //Testing to check Console
            // console.log(checkbox.checked);
            // console.log(`${checkbox.id} is checked.`);
            alllergensList.push(checkbox.id)
                            } 
            //Testing to ensure all checkboxes where considered
        // else {
            // console.log(`${checkbox.id} is not checked.`);
            // }
                        });

        return alllergensList
    }


  //Populate the allergens in HTML
function showAllergensSelected(arr) {

    
    // removeAllChildren(allergenContainer);
    

    // Clear the previous list of allergens
    removeAllChildren(allergenList);

    arr.forEach(arrItem => {   
        let span = document.createElement("span");
        span.textContent = capitalize(arrItem);
        allergenList.appendChild(span);
    });


    let h2 = document.createElement("h2");
    h2.id = "allergenHeader";
    h2.textContent = "Below meals do not contain these ingrediants...."
    allergenList.prepend(h2);
}


//Create the recipe cards the Menu Constructor Array output

function createMenuCards(arrChoice) {
    let cont = document.getElementById("menu-container")
    removeAllChildren(cont)

    for (let i = 0; i < arrChoice.length; i++) {

        
        let elDiv = document.createElement("div")
            elDiv.classList.add("menu-item" , "card")
        // let elul  = document.createElement("ul")
        let elH2  = document.createElement("h2")
        let elimg  = document.createElement("img")
        let elH3Ing  = document.createElement("h3")
        let elH3Ins  = document.createElement("h3")
        let elpIngred  = document.createElement("p")
        let elpInstr  = document.createElement("p")

        
        elpIngred.textContent = arrChoice[i].ingredients;
        elpInstr.textContent = arrChoice[i].instructions;
        elH3Ing.textContent = "Ingrediants";
        elH3Ins.textContent = "Instructions";
        elH2.textContent = arrChoice[i].name;
        elimg.src = arrChoice[i].image;
        elimg.style.width = "300px"
        elimg.style.height = "100%"
        // elul.append(elH2,elimg,elH3Ing,elpIngred,elH3Ins,elpInstr)
        elDiv.append(elH2,elimg,elH3Ing,elpIngred,elH3Ins,elpInstr)
        // cont.appendChild(elul)
        cont.appendChild(elDiv)

    }

}




////////////////////TEST CODE TO PRACTICE with copy of JSON/////////////////////
/////ISOLATE THE MENUS into MAIN LUNCH etc .......////////////
// console.log(allergenListSelected)
// function getMealData(menu,alleryList = ["Dough"]) {
// let main  = []
//     menu.forEach(element => {
//         // console.log(element.mealType)
//         // get the list of individual meals     
//         if( element.ingredients.includes("Dough") 
//             // || element.ingredients.includes("Lunch") 
//             // || element.ingredients.includes("Breakfast")
//          ){
//           main.push(element)
//         // } else if(element.mealType.includes("Lunch")){
//         //     main.push(element)
//         // } else if(element.mealType.includes("Breakfast")){
//         //     main.push(element)
//         // } else if(element.ingredients.includes("Dessert")){
//         //     desserts.push(element)
//         // 
//     }      
//         });
//         return main;
// }
// const test = containsPartialWord(mealList.recipes[0].ingredients, "dough");
// console.log(test); // Output: true
// console.log(`Meals NOT containing Allergens`)
// let test1 = getRecipeNotContainingAllergens(mealList.recipes,[],containsPartialWord)
// console.log(test1)
//test "result" below expects true
////itterate though the object and check if the recipe ingredients "ContainsPartial word" 
//ingredients are true then added to filtered array


///REMOVED To add to  API Call

// function getRecipeNotContainingAllergens (arr,arrAllerens,callBackFunction) {
//     let finalMeals = []
//     for (let i = 0; i < arr.length; i++) {
//         //loop through allergens
        
//         count = 0
//         //Map the ingredients list to Upper Case as tmp
//         console.log(arr[i].name)
//         tmp = arr[i].ingredients.map(function(x){return x.toUpperCase()})
//         // console.log(tmp)
//         for (let j = 0; j < arrAllerens.length; j++) {
//             // console.log(arrAllerens[j])
//             // console.log(arr[i].ingredients)
//             console.log(`${arrAllerens[j]} : ${callBackFunction(tmp,arrAllerens[j].toUpperCase())}`)
//             // result is boolean of contains Partial words
//             if (callBackFunction(tmp,arrAllerens[j].toUpperCase())){
//                 // count The allergens
//                 count ++
                
//             }

//         }
//         //if result remails 
//     if(count === 0){finalMeals.push(arr[i])}
//     }
// return finalMeals

// }

//////////////TEST OF THE 
// document.getElementById("searchButton").addEventListener("click",function (evt) {
    
//     let allergenListSelected = gatherAllergens()
//     console.log(allergenListSelected)
//     let test1 = getRecipeNotContainingAllergens(
//         mealList.recipes,allergenListSelected,containsPartialWord
//     )
//     console.log(test1)
    
//     // num = getRandomNumber(test1.length)
//     // console.log(test1[num])
//     // console.log(test1)

//     // let testarr = []
//     // testarr.push(test1[num])
//     // testarr.push(test1[num + 6])

//      createMenuCards(test1)
// }
// )  

// TEST together - Get Allergens (one added on load) , return The meals that do   not contain and select A random meal from the list

// let allergenListSelected = gatherAllergens()
// console.log(allergenListSelected)
// let test1 = getRecipeNotContainingAllergens(mealList.recipes,allergenListSelected,containsPartialWord)


///Check if array, if object the add the opject to an Array
//adds dynamic cards to site  -  removes existing if present with removeAllChildren

// let testarr = []
// testarr.push(test1[num])
// testarr.push(test1[num + 5])
// createMenuCards(testarr)



////////////////FIRST IDEA TO CREATE PIZZA ///////////
//Create Pizza from 2 Inputs 
//1 - Array with the Pizza Name
//2 - Array with the Pizza Ingredients with paired index

// //First Attempt at Constructors - Moved To use prototype
// function createPizza (piz,ingr) {
//     if (piz.length !== ingr.length) {
//         alert("Not Enough Ingregient in List!!!")
//     } else {
//         for(let i = 0; i < piz.length; i++ ){
//             let $pizzaVar = piz.name
//             let pizza =  new meal (piz[i],"Pizza",ingr[i]);   
//         }      
// //End if
//         }   

// }

// // Meal Class  -  Create a Meal  with 3 constructor  Inputs
// class meal {
//     constructor(name,type,ingredients) {
//         this.name = name;
//         this.type = type;
//         this.ingredients = ingredients;

//     }
//     myIngrediants () {
//         console.log(`${this.type} - Ingredients are  ${this.ingredients}`)
//     }
// }


// createPizza(piza_type,pizzaIngredients);


//Call cleanIngredients to Remove Duplicates  -  to Handle Arrays in Arrays
// let singleIngredients =  cleanArray(pizzaIngredients)
// console.log(singleIngredients)

//Use the same to get Allergen list from array With arrays
// console.log(singleAllergens)

// console.log(singleIngredients) //- - Check the List

//Call function too add active ingredients to the List
// getIndgredients(singleIngredients)


//Add Ingrediants list to dropdown
//First idea to add the list of active incredients to A dropdown
// function getIndgredients (ingList) {
    
//     //Itterate through list of incredients    
//         for(i = 0; i < ingList.length ; i++ ){       
//             //ID the Parent Element
//             let dd  = document.getElementById("ingregients_list");
//             //Create the Child element
//             let opt = document.createElement("option");
//             //Clean the child value
//             let cap = capitalize(ingList[i].trim())
//                 opt.value = ingList[i];
//             //Add the Dropdown Value
//                 opt.innerHTML = cap;
//                 dd.appendChild(opt)
//         }
//     }
    
// }