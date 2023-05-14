# POKEMON IN THE REAL

This project is to show my skills to the date that i have learned.
Pokemon in the real displays a few pokemon and shows what they are based on.
The user can also add there own pokemon if they have the information.

## Project requirement

- Your app must be a HTML/CSS/JS frontend that accesses data from a public API or from a db.json file using json-server. Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIsLinks to an external site.. If you would like to use an API that requires a key, please consult with your instructor on how to protect that key. NEVER push your API key to github!

- Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.

- Use at least 2 distinct event listenersLinks to an external site. (2 events of different types) that enable interactivity. What this means is that, if you had 2 click events, that would only count as 1 distinct event and you would need to add at least 1 more. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. Events embedded into HTML elements and CSS will not count toward the total. Please ask your instructor if you have questions regarding this requirement.

- Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

- Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

## Start Server

All of the data(object) is stored in the json file `db.json()`. Install `npm install -g json-server`.
 You can access JSON server by running `json-server --watch db.json`
The resource where you can find the json data is located at `http://localhost:3000/Pokemon`
After running the json server open up `index.html` in another terminal. A new window in your browser will pop up and will display your HTML code. 

## Instructions 

### Page loads

There is a `DOMEventListener` event that allows the page to load succesfully. After loading you are greeted with a `header`, an `img` with the id = gif that displays a gif and a `div` with the class=start that display two buttons that will display other forms.

### The page loaded buttons

In the `div` with `class=start` theres another `div` with `class=user-choice`, there are 2 buttons one with two different id's. Then a `GET` request is made to get all the data from the db.json and add it to the `<div id=pokemon-images>`. 


    fetch("http://localhost:3000/Pokemon",{

        method:"GET",
        headers:{
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    )
    .then(res => res.json())
    .then(function(pokemon){
        pokemon.forEach(pokeCard => {
            addPokeCards(pokeCard)
        });
    })


- `img` with the pokemon image source
- `strong` with the name of the pokemon

### Choosing the `YOUR PC` button

When the web application is ran for the first time you are given a few pokemon that you can choose from. They images are in a `form` with the id `pokemon-images`. Clicking on any image will call another event listener that hides the form that displays the pokemon and shows another form that displays an image of the real life version of the pokemon. 
They for has a `<div id=real-img-div>` that contains:
- `img` with the source of the image
- `p` that has the textcontent of a small paragraph describing the real life version of the pokemon

Theres a choice to click a `<button id=return-button>` that once clicked will hide the current form and dispplay the `div` for displaying the pokemon in your pc. 

### Choosing `Go Catch EM` button

This option hides the pc form and displays a `<form class=userPokeInterest id=userPokemon>` This form is an input form that get the user input. 
- name of the pokemon they want to add
- The image of the animated pokemon
- The real life image of the pokemon
- A small descriptive input of the pokemon in real life (`<p>`)

The submit button then has `userForm.addEventListener('submit', (e) => {})` that makes all the user inputs into an object by using 
`const formData = Object.fromEntries(new FormData(userForm));`
A `POST fetch` request is then done to post the user object data into `db.json`, and also calls `addPokeCards()` to add the object values into the DOM withougth refreshing the page. 
Once submit is clicked a small alert pops up telling you that the pokemon has been added to the pc.

## function add pokemoncards()

        const div = document.getElementById("pokemon-images")
        const pokemonChar = document.createElement("div");
        const img = document.createElement("img");
        const realImg = document.createElement("img");
        const btn = document.createElement("button");
        const strong = document.createElement("strong")

This function creates and assigns elements values from both the GET and POST fetch requests. 




## Pokemon info citations
### Charizard

#### animation
- CodeWithMike. (2022, November 15). The best charizard cards to collect (affordable). CodeWithMike. https://www.codewithmike.com/the-best-charizard-cards-to-collect-affordable/ 
#### Real image
- Gill, J. (2023, January 10). How good is charizard? - levelskip. https://levelskip.com/rpgs/Pokemon-Review-Charizard 
#### Description
- Wikimedia Foundation. (2023b, May 11). Charizard. Wikipedia. https://en.wikipedia.org/wiki/Charizard#:~:text=Whereas%20its%20pre%2Devolutions%20Charmander,dragons%2C%20more%20specifically%20European%20dragons. 

### eevee
#### animation
- Eevee Pokémon FireRed and Leafgreen Art Charmeleon Charmander, evee, mammal, Carnivoran, dog like mammal PNG. PNGWing. (n.d.). https://www.pngwing.com/en/free-png-dngrc 
#### real image
- Leonovich, Y. (n.d.). Fennec Fox by Julialeonovich on Tedsby. Tedsby. https://julialeonovich.tedsby.com/93607/fennec-fox 
#### Description
- Garis, M. G. (2016, August 8). What kind of animal is eevee? decoding the origins of the pokemon wonder. Bustle. https://www.bustle.com/articles/177509-what-kind-of-animal-is-eevee-decoding-the-origins-of-the-pokemon-wonder#:~:text=Eevee%20shares%20most%20traits%20with,fox%2Dlike%20traits%20after%20all. 

### squirtle
#### animation
- Squirtle - pokemon red, blue and yellow wiki guide. IGN. (2012, October 9). https://www.ign.com/wikis/pokemon-red-blue-yellow-version/Squirtle 
#### real image
- Aquatic turtles. Avian &amp; Exotic Animal Hospital of Georgia. (n.d.). https://www.avianexotichospital.com/aquatic-turtles.html 
#### description
- Vgordon. (2017, March 20). Pokémon inspirations. Metro Parks - Central Ohio Park System. https://www.metroparks.net/blog/pokemon-inspirations/#:~:text=Squirtle%20is%20clearly%20based%20on,nature%20that%20are%20actually%20blue. 

### bulbasaur
#### animation
- Bulbasaur. PokeDoge. (n.d.). https://shop7.webmodule.prestashop.net/pokedoge/fr/poison/7937-bulbasaur.html 
#### real image
- Bittel, J. (2018, August 31). The bullfrog is the “great white shark” of Arizona’s wetlands. Be a Force for the Future. https://www.nrdc.org/stories/bullfrog-great-white-shark-arizonas-wetlands 

### lapras
#### animation
- Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo. (2023). Lapras: Pokédex: More at Pokemon.com. pokemon.com. https://www.pokemon.com/us/pokedex/lapras 
#### Real image
- Wikimedia Foundation. (2023, April 11). Loch Ness Monster. Wikipedia. https://en.wikipedia.org/wiki/Loch_Ness_Monster 
#### description
- Lava, Dr. (2019, December 30). Lapras origins:probably the best known example of a pokemon inspired by legend, Lapras is based on the Loch Ness Monster from Scottish folklore. rumors of a monster in Loch Ness began in the 6th century, and continue to this day in the form of blurry photos and tall tales. pic.twitter.com/msuaviyxlz. Twitter. https://twitter.com/DrLavaYT/status/1211656837784694784?lang=en 

### GIF 
- god2,  pokemon. (2021, January 6). 5f3b7da953ca75b6-animated-pokemon-gif-auto-design-tech. Project Pokemon Forums. https://projectpokemon.org/home/gallery/image/81988-5f3b7da953ca75b6-animated-pokemon-gif-auto-design-tech/ 

### Background
- Pokemon Wallpaper. WallpaperSafari. (2018, January 3). https://wallpapersafari.com/pokemon-wallpaper/ 

