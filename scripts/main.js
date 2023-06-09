
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
        const pokemonChar = document.createElement("div");
        const img = document.createElement("img");
        const realImg = document.createElement("img");
        const btn = document.createElement("button");
        const strong = document.createElement("strong")

        pokemonChar.setAttribute("class", "chooseEm")

        img.setAttribute("src", pokeCard["image"]);
        img.setAttribute("class", "pokeImg");

        realImg.setAttribute("src", pokeCard["real"]);

        let rel;
        if(pokeCard["Release"] === "no")
            rel = pokeCard["Release"]
        else rel = 'none';
        btn.setAttribute("id", pokeCard["id"]);
        btn.setAttribute("class", "pokeButton");
        btn.setAttribute("name", pokeCard["name"])
        btn.setAttribute("value", rel)

        strong.setAttribute("class", "imgName")
        strong.textContent = pokeCard["name"]

        btn.appendChild(img);
        pokemonChar.appendChild(btn);
        pokemonChar.appendChild(strong);
        div.appendChild(pokemonChar);
    
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

    //get user input from form#userPoke and use post fetch to add json data permanatly
    const userForm = document.querySelector("form#userPokemon");
    userForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(userForm));

        //Post fetch user input
        fetch("http://localhost:3000/Pokemon",{
        method: "POST",
        headers:{
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: formData["name"],
            image: formData["image"],
            real: formData["real"],
            description: formData["description"]
        })
        })
        .then((res) => res.json())
        .then((pokeMon) => addPokeCards(pokeMon))

        alert("Your Pokemon has been added")
        userForm.reset()
    })

    //assign buttons to display and hide certain forms
    const btnDivDisplay = document.querySelector("div.user-choice");
    const formAdd = document.querySelector("form#pokeAdd");
    const formUser = document.querySelector("form#userPokemon");
    const imgReal = document.querySelector("form#realPoke");
    const gif = document.getElementById("gif");
    const release = document.querySelector("form#release-form");

    btnDivDisplay.addEventListener("click", (e) => {
        e.preventDefault();
        
        //user selcts YOUR PC
        if(e.target === document.getElementById("yourPC")){
            formAdd.style.display = "block";
            gif.style.display = "none"

            if( formUser.style.display = "block"){
                formUser.style.display = "none";
            }
            if(imgReal.style.display = "block"){
                imgReal.style.display = "none"
            }
            if(release.style.display = "block"){
                release.style.display = "none"
            }
         
        }

        //USER selects Go Catch EM
        else if(e.target === document.getElementById("go-catch-em")){
            document.querySelector("form#userPokemon").style.display = "block";
            if( formAdd.style.display = "block"){
                formAdd.style.display = "none";
            }
            if(imgReal.style.display = "block"){
                imgReal.style.display = "none"
            }
            if(gif.style.display ==="none"){
                gif.style.display = "block"
            }
            if(release.style.display = "block"){
                release.style.display = "none"
            }
        }

        //user selects Release a Pokemon
        else if(e.target === document.getElementById("release")){
            release.style.display = "block"

            if( formAdd.style.display = "block"){
                formAdd.style.display = "none";
            }
            if(imgReal.style.display = "block"){
                imgReal.style.display = "none"
            }
            if(gif.style.display ==="none"){
                gif.style.display = "block"
            }
            if( formUser.style.display = "block"){
                formUser.style.display = "none";
            }

            release.addEventListener("submit", (relEvent) => {
                relEvent.preventDefault();
                deletePokemon(release.querySelector("input#releaseName").value)
            })
        }
    })

    //delete pokemon
    function deletePokemon(namePokemon){
        
        const btnName = document.getElementsByName(namePokemon)[0];
        if(btnName.value != "no"){
            btnName.parentElement.remove()
            fetch(`http://localhost:3000/Pokemon/${btnName["id"]}`,{
                method: "DELETE",
                headers:{
                    "Content-type": "application/json",
                    "Accept": "application/json"
                }
            })
            alert(`BYE BYE ${namePokemon}` )
       
        }
        else{
            alert(`THE POKEMON YOU WANT TO RELEASE CAN NOT BE RELEASED!!! \n KEPT FORVEVER`)
        }
        document.getElementById("release-form").reset()
    }
})