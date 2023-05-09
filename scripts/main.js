
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

        pokemonChar.setAttribute("class", "chooseEm")

        img.setAttribute("src", pokeCard["image"]);
        img.setAttribute("class", "pokeImg");

        realImg.setAttribute("src", pokeCard["real"]);

        btn.setAttribute("id", pokeCard["id"]);
        btn.setAttribute("class", "pokeButton");

        btn.appendChild(img);
        pokemonChar.appendChild(btn);
        div.appendChild(pokemonChar)
    
        //adding event listenerv for buitton
        pokemonChar.addEventListener("click", (e)=>{
            e.preventDefault();
            document.querySelector("form.add-pokemon-form").style.display = "none";
            realLifeDisplay(realImg)
        })
}
    function realLifeDisplay(realPokemon){
        const realDiv = document.getElementById("real-img");
        realDiv.setAttribute("src", realPokemon.src)
    }
       
})