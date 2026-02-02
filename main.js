const search = document.querySelector(".search");
const button = document.querySelector(".Search-button");
const picture = document.querySelector(".picture");
const container = document.querySelector(".container")
const cardTemplate = document.querySelector(".cardTemplate")
    
console.log(response)
async function getCharacter(name) {
    const response = await fetch("https://chainsawmanapi.pythonanywhere.com/api/character/Pochita/");
    const Data = await respond.json;
}

button.addEventListener("click", function () {
    console.log("yay");
    getCharacter(search.value);
});

const people = {
    {name: "Pochita", status: "Alive", descrpiton: "Pochita is the chainsaw Devil, and is the first devil thats introduced."}
    {name: "Angel Devil", status: "Dead", descrpiton: "Angel Devil is the devil for the fear of devils. beahhh im so tired gah nobdoy is gpnna see this site but my oomfs i dont gotta finish nor take this too seriously HES GAY."}
}