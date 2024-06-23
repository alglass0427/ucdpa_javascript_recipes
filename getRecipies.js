//Fetch 
//Functions used from index_functions.js
//request recipes from 'https://dummyjson.com/recipes'
//parse response using .json() promise
//then function to add All meals to object using a Constuctors  --> show understanding of constructor
//  --> method added to constructor To check instance of array
//  --> method added to .prototype  -  visible in __proto__
//then gather Allergens from UI - return array with only meals without (!) allergens  
//  --> show understanding of recursive Functions
//  --> try / catch if  no allergens selected or NO selected in Dropdown
//then call Function to add the array items to card html elements 
//  --> show understanding of DOM manipulation
//Added below function to contain the API Call And Ablove steps 
//Added Event Listener To The Search Button when it is created to call function
// getAllTheData()

function getAllTheData () {fetch('https://dummyjson.com/recipes')
.then(function (response) {
    return response.json();
})
// .then(console.log(data));
.then(function (data) {

    // Use the Menu Conctructor Prototype
    let menu = new allMeals()
    data.recipes.forEach(element => {
        menu.newMeal(element.name,element.ingredients,element.instructions,element.image)
        // console.log(element.name)
    })
     return menu
})
.then(function (menu){
    console.log(menu)
    let ret = []
    let arrAll = gatherAllergens()
    let cardMenu = []
// // make them do something
menu.recipes.forEach(recipe => {
    // recipe.print
   console.log(recipe.containsAllergen(arrAll,containsPartialWord))
      if (!recipe.containsAllergen(arrAll,containsPartialWord)){
        cardMenu.push(recipe)
      }
    })    
    ret = [arrAll,cardMenu]
    //return Array in response to use allergens and recipes
    return ret
})
.then(function (ret) {
    showAllergensSelected(ret[0])
    createMenuCards(ret[1])
}
)

}

