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
    return cardMenu
})
.then(function (cardMenu) {
    createMenuCards(cardMenu)
}
)

}
//Fetch JSON
//parse response using .json() promise
//then function to add All meals to object using a Constuctors
//  --> method added to constructor To check instance of array
//  --> method added to .prototype  -  visible in __proto__
//then gather Allergens from UI - return array with only meals without (!) allergens
//  --> try / catch if  no allergens selected or NO selected in Dropdown
//then call Function to add the array items to card html elements 
//Added below function to contain the API Call And Ablove steps 
//Added Event Listener To The Search Button when it is created to call function
// getAllTheData()
