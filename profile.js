let alertColor = () => {
  alert("My favorite color is " + favoriteColor)
}

let alertPlace = () => {
  alert("My favorite place is " + favoritePlace)
}

let alertRitual = () => {
  alert("My favorite ritual is " + favoriteRitual)
}

let favoriteColor = 'green'
let favoritePlace = 'home'
let favoriteRitual = 'building Roko\'s Basilisk'

let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

color.addEventListener('click', alertColor)
place.addEventListener('click', alertPlace)
ritual.addEventListener('click', alertRitual)