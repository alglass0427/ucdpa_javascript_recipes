// An individual player. Holds properties and behaviour for one player
class Meal {
  constructor(strName, arrIngedients, arrInstructions, strImageLink) {
    this.name = strName;
    this.ingredients = arrIngedients;
    this.instructions = arrInstructions;
    this.image = strImageLink;
  }
  print() {
    console.log(this.name, "is the item")
  }
}

// Class that holds a collection of Meals and properties and functions for the group
class allMeals {
  constructor(){
      //creates the collection of recipes in the All Meal Constructor
    this.recipes = []
  }
  // create a new meal and save it in the collection
    // Creates a new instance of the Meal Prototype
  newMeal(strName, arrIngediants, arrInstructions, strImageLink){
    let m = new Meal(strName, arrIngediants, arrInstructions, strImageLink)
    //push the new instance to the All Meals constructor
      this.recipes.push(m)
    return m
  }
  // this could include any details of the meal
  get numberOfMeals(){
      return this.recipes.length
  }
}

//------------------------------------
//generic function
// function containsPartialWord(arr, partialWord) {  
//   return arr.some(item =>
//           item.includes(partialWord)
//   );
// }

//Add a function to the prototype so all instances do not carry the function in __proto__
//pass in a generic function as the calll back function

Meal.prototype.containsAllergen = function (arrAllergens,fnctCallBack) {

count = 0
//Map the ingredients list to Upper Case as tmp
// console.log(this.name)
tmp = this.ingredients.map(function(x){return x.toUpperCase()})
// console.log(tmp)
for (let j = 0; j < arrAllergens.length; j++) {
    
    if (fnctCallBack(tmp,arrAllergens[j].toUpperCase())){
        // count The allergens
        // console.log(`${this.name} : ${arrAllergens[j]}`)
        count ++
        
    }

}
//if result remails 
if(count > 0){ 
    // console.log(`${this.name}  : TRUE`);
    return true} 
else {
    // console.log(`${this.name} : FALSE`);
    return false}
}

//----------------------------------------------------------------
// create an instance of the Constructor for collection
// let menu = new allMeals()

// itterate through the arrays to create an instand of the Meal constructor
// mealList.recipes.forEach(element => {
//     // console.log(element.name)
//     menu.newMeal(element.name,element.ingredients,element.instructions,element.image)
// })


// console.log(menu.recipes.length)
// console.log(league.players)

// let arrAll = gatherAllergens()
// // make them do something
// menu.recipes.forEach(recipe => 
//    recipe.containsAllergen(arrAll,containsPartialWord)
//               )
// menu.recipes


