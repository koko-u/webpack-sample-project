import { greet } from './my'
import { displayImage } from './display-image'
import "../css/styles.css"

console.log("Hello Webpack!")
greet()

window.addEventListener("load", displayImage)
