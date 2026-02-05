const button = document.querySelector("button");
    
async function Data() {
  const url = "https://meowfacts.herokuapp.com/";
  try {
    const response = await fetch("https://meowfacts.herokuapp.com/");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(yayay);
  } catch (error) {
    console.error(gahhhh);
  }
}

button.addEventListener("click", function () {
    console.log("works");
    Data(search.Value)
});