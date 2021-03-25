export const displayImage = () => {
    const backgroundDiv = document.getElementById("bg")
    if (backgroundDiv) {
        const backgroundImage = document.createElement('img')
        backgroundImage.src = require("../img/bg-1024x683.jpg")

        backgroundDiv.appendChild(backgroundImage)
    }
}
