let buttons = document.querySelectorAll("button")
console.log(buttons)
let audios = document.querySelectorAll("audio")
console.log(audios)

let keycodes = [74, 66, 86, 72, 71, 70, 69, 82, 73, 75]

document.getElementsByTagName("body")[0].addEventListener("keydown", (e) => {
  keycodes.forEach((item, index) => {
    if (e.keyCode == item) {
      audios[index].play()
      console.log(audios[index])
    }
  })
})