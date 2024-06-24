Main Site
https://alglass0427.github.io/ucdpa_javascript_recipes/index.html

Excalidraw Design
https://excalidraw.com/#json=daiIlrMixC4KXnu876ukB,y-7DgcHMQ1putpOc0gGCZw

SITE MAP
https://app.diagrams.net/?src=about#Halglass0427%2Fucdpa_javascript_recipes%2Fmain%2Fdiagrams%2Frecipes_site_map.drawio#%7B%22pageId%22%3A%22b0bLiH0IVkeUEvsS6kF4%22%7D


DrawIO used for Function Diagrams   
    open with ---->    https://www.drawio.com/
https://github.com/alglass0427/ucdpa_javascript_recipes/tree/main/diagrams

--NOTE - Direct Links throughout this Read ME


SEO
Description appropriate characters long Title included to decribe The Website purpose Keywords included in line with The Description content

Checked using
https://validator.w3.org/nu/#textarea

https://jigsaw.w3.org/css-validator/validator

Robots
No robots.txt file used

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

        -->  https://app.diagrams.net/?src=about#Halglass0427%2Fucdpa_javascript_recipes%2Fmain%2Fdiagrams%2FComponent%20Modal.drawio#%7B%22pageId%22%3A%22T3wb09TkJcfDdkeaGVoH%22%7D

    If either "Yes" or "No is selected then the "Select" And "Clear" Buttons are populated in DOM
        Event Handelers are appried To both buttons
    If Either "Yes" or "No is selected then removeAllChildren Function is called To reset the DOM

    Search Button retreives recipies from API and only populates thos that do not contain the allergens selected 
    from the Modal - If no allergens are Selected then all recipes are retreived

Class ES6 - 
    Class created to store the JSON in from the API response
    A Function is ater added To the __proto__ of the class
       ****NOTE  -  function not added direct to the class to steer away from storing the function in all instances

        https://app.diagrams.net/?src=about#Halglass0427%2Fucdpa_javascript_recipes%2Fmain%2Fdiagrams%2FConstructor%20Process.drawio#%7B%22pageId%22%3A%22T3wb09TkJcfDdkeaGVoH%22%7D

API Fetch Promise

        https://app.diagrams.net/?src=about#Halglass0427%2Fucdpa_javascript_recipes%2Fmain%2Fdiagrams%2FAPI%20Process.drawio#%7B%22pageId%22%3A%22T3wb09TkJcfDdkeaGVoH%22%7D


Modal
    Web Components -  Custom Element created to use for a pop out window for end user To select the allergens
    this is used to keep the site clear of noise.
    the Modal is caled each time "Yes" is clicked

         https://app.diagrams.net/?src=about#Halglass0427%2Fucdpa_javascript_recipes%2Fmain%2Fdiagrams%2FConstructor%20Process.drawio#%7B%22pageId%22%3A%22T3wb09TkJcfDdkeaGVoH%22%7D


Various functions are created - Some examples
        removeAllChildren  -  remove all children from passed in parent element
        containsPartialWord  -  checks if a word is contained in an Array
        capitalize -   ensures capital letter for given word

Use of Recursive Function
    A recursive function is uses to remove duplicates from an array that contains arrays that contains arrays etc etc .. 

    recursiveRemoveDup

    https://app.diagrams.net/?src=about#Halglass0427%2Fucdpa_javascript_recipes%2Fmain%2Fdiagrams%2FFunctions.drawio#%7B%22pageId%22%3A%22rVTvYm2u6CPN0oDnByO2%22%7D

Burger Menu - 
    function added to display and remove the side nav for smaller devices


    Drum Machine Game Added in Navigation  - 
        This small application shows single Switch statement getting the sounds for drums if a button is clicked with mouse or if a specific letter key is pressed on the keyboard  -  ("click" and "keypress" events)



Write a comprehensive documentation file explaining your design decisions,
development process, challenges faced, and how you implemented interactivity
using JavaScript.


I chose to create a recipe finder Application as i though this Would prove to be difficult with the data it presents. during the development process i encountered numerous challenges with datatypes and how they are presented in returned results fron functions. Once such case is itterating through an array to remove duplicates where it itself contained an Array -

I used this case to introduce an recursive function to handle this in all cases of arrays within arrays and the expected result is an array or distinct values.

Using menus and there various combinations presented a good insight into how constructor Functions and creating object instances of Classes. When further investigationg this concept i was able to learn about prototypes and the process of adding functions to class prototypes instead of directly to the class to prevent all instances carrying the function (__proto__)  -->

Further to this i would learn about Custom Elements and how these could be created to handle specific requirements DOM.
I used this to create a Modal to appear for selecting allergens instead of having this displayed in the application.
This uses shadowRoot to create the style and HTML elements along with slots to Allow the external input

    ==> in this case used to populate the Modal with a Form of checkboxes for allergen ingrediants

https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot


Using API fetch I seen this as a challenge to understand and found hard to achieve the end goal with the accessibility to the data in the function.
Please find links to diagrams how this tas achieved.

I attached in this website a link to a GAME --->> I created this to gain a better understanding of event listeners.