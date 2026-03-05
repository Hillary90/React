/**
 * Challenge: Set up a React app from scratch again.
 * This time, try rendering an unordered list with 2-3 list items inside
 * with why you're excited to be learning React.
 */
import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById("root"))

root.render(
    <ul>
        <li>I'm excited to learn React because it's a powerful library for building user interfaces.</li>
        <li>I'm excited to learn React because it allows for reusable components, making development more efficient.</li>
        <li>I'm excited to learn React because it has a large community and lots of resources for learning and troubleshooting.</li>

    </ul>
)