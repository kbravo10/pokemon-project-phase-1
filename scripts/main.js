
//Pokemon realisism page

//DOM content load event
document.addEventListener("DOMContentLoaded",(event) =>{
    event.preventDefault();

    //GET fetch to get original pokemon display options
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

    //add the fetch GET json data to the website using function
    function addPokeCards(pokeCard){
        const div = document.getElementById("pokemon-images")
        const divReal = document.getElementById("real-img")
        const pokemonChar = document.createElement("div");
        const img = document.createElement("img");
        const realImg = document.createElement("img");
        const btn = document.createElement("button");
        const pDescription = document.createElement("p");

        pokemonChar.setAttribute("class", "chooseEm")

        img.setAttribute("src", pokeCard["image"]);
        img.setAttribute("class", "pokeImg");

        realImg.setAttribute("src", pokeCard["real"]);

        btn.setAttribute("id", pokeCard["id"]);
        btn.setAttribute("class", "pokeButton");
        

        btn.appendChild(img);
        pokemonChar.appendChild(btn);
        div.appendChild(pokemonChar)
    
        //adding event listenerv for buitton, hides form.add-pokemon-form and unhides
        //form.pokemon-real-life
        pokemonChar.addEventListener("click", (e)=>{
            e.preventDefault();
            document.querySelector("form.add-pokemon-form").style.display = "none";
            document.querySelector("form.pokemon-real-life").style.display = "block";
            realLifeDisplay(realImg, pokeCard["description"])
        })
}
    //Display Real life version of the pokemon and a small description
    function realLifeDisplay(realPokemon, pokeDes){
        const pDes = document.getElementById("desReal")
        const realDiv = document.getElementById("real-img");
        realDiv.setAttribute("src", realPokemon.src);
        console.log(typeof(pokeDes))
        pDes.textContent = pokeDes
    }

    //Button to alllow the user to display the main form that 
    //displays all poekmon img
    const returnBtn = document.getElementById("return-button");
    returnBtn.addEventListener("click", (e) => {
        e.preventDefault();
        returnBtn.parentNode.style.display = "none";
        document.querySelector("form.add-pokemon-form").style.display = "block"
    })

    //get user input from form#userPoke
    const userForm = document.querySelector("form#userPokemon");
    userForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(userForm));
        console.log(formData)
        addPokeCards(formData)
        
    })
    
})