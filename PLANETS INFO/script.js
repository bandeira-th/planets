//fetch('planets-data.json')
function planetImg(x) {
  let chosenPlanet = x
  let planetImg = document.querySelector('.planet-main-img')
  planetImg.setAttribute('src', `./img/${chosenPlanet}300px.png`)

  let planetBioTitle = document.querySelector('.planet-bio-title')
  planetBioTitle.innerHTML = chosenPlanet.toUpperCase()
}
