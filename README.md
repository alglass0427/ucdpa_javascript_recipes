Main Site
https://alglass0427.github.io/ucdpa_javascript_recipes/index.html

Excalidraw Design
https://excalidraw.com/#json=daiIlrMixC4KXnu876ukB,y-7DgcHMQ1putpOc0gGCZw

SEO
Description 157 characters long Title included to decribe The Website purpose Keywords included in line with The Description content

ARIA
Contrasting Colors uses with aria labes and semantic elements used. Transitions used to to aid the visual mouse selection

Underline appears when hove over NAVigation bar
Social and Stream links move negative 15 pixels and transition to move up on screen
ASSESMENT
4. JavaScript Interactivity
● Identify interactive aspects you want to incorporate into your web project (e.g.,
interactive forms, image galleries, sliders, etc.).
● Implement JavaScript to add interactivity and functionality to your project, making
it dynamic and engaging.
● Utilize event listeners and handlers to respond to user actions and create interactive
features.
● Validate user input and provide appropriate feedback using JavaScript.
● Manipulate the DOM dynamically to update content and create and modify
elements.
○ The minimum number of interactive elements.
■ At least 1 form is processed by a JavaScript function.
■ At least 3 interactions involving DOM manipulation.
■ At least one graphical element such as a form, etc.

Form Check boxes  - 
    Do you have any Allergies?
    If "Yes" is selected Then a Modal will apprear To select the which ingrediants the person is allergic to.
    This is populated from an array of array of ingrediants using a recursive function

    If Either "Yes" or "No is selected then the "Select" And "Clear" Buttons are populated in DOM
        Event Handelers are appried To both buttons
    If Either "Yes" or "No is selected then removeAllChildren Function is called To reset the DOM

    Search Button retreives recipies from API and only populates thos that do not contain the allergens selected 
    from the Modal - If no allergens are Selected then all recipes are retreived

Class ES6 - 
    Class created to store the JSON in from the API response
    A Function is ater added To the __proto__ of the class
       ****NOTE  -  function not added direct to the class to steer away from storing the function in all instances

Modal
    Web Components -  Custom Element created to use for a pop out window for end user To select the allergens
    this is used to keep the site clear of noise.
    the Modal is caled each time "Yes" is clicked


Various functions are created - Some examples
        removeAllChildren  -  remove all children from passed in parent element
        containsPartialWord  -  checks if a word is contained in an Array
        capitalize -   ensures capital letter for given word

Burger Menu - 
    function added to display and remove the side nav for smaller devices


    Drum Machine Game Added in Navigation  - 
        This small application shows single Switch statement getting the sounds for drums if a button is clicked with mouse or if a specific letter key is pressed on the keyboard  -  ("click" and "keypress" events)




Checked using
https://validator.w3.org/nu/#textarea

https://jigsaw.w3.org/css-validator/validator

Robots
No robots.txt file used

DrawIO used for Function Diagrams    ---->    https://www.drawio.com/
https://github.com/alglass0427/ucdpa_javascript_recipes/tree/main/diagrams
