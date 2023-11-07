'use strict'
const teamButton = document.querySelector('.teambtn')
const theTeam = document.querySelector('.our-name')
const overlay = document.querySelector('.overlay')

const team = function (e) {
    e.preventDefault()
    theTeam.classList.remove('hid')
    overlay.classList.remove('hid')
}
teamButton.addEventListener('click', team)
const closeTeam = function (e) {
    e.preventDefault()
    theTeam.classList.add('hid')
    overlay.classList.add('hid')
}

overlay.addEventListener('click', closeTeam)