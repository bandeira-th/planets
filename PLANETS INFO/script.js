fetch('planets-data.json')
function planetImg(x) {
  let chosenPlanet = x
  let planetImg = document.querySelector('.planet-main-img')
  planetImg.setAttribute('src', `./img/${planetName}300px.png`)
}
