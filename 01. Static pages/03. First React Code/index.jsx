// Challenge: Re-write the first lines of React code we just had.
// You can render anything you want to the screen, doesn't have
// to be an h1 element.

import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
const reactElement = <h1>Hello from JSX!</h1>

console.log(reactElement)

root.render(
    reactElement
)