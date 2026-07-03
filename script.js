function toggleMode() {
    const html = document.documentElement

    if (html.classList.contains('light')) {
        html.classList.remove('light')
    }  else {
        html.classList.add('light')
    }

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")){
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
    }

    if (html.classList.contains("light")) {
        img.setAttribute("alt", "Foto de Maik Brito de óculos escuros sorrindo de jaqueta de couro preta e sem barba com um fundo degrdê de azul para lilás.")
    } else { 
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.")
    }
}

//html.classList.toggle("light")