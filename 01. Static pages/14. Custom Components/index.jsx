import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

function Page() {
    return (
        <ol>
            <li> 
                I'm excited to learn React because it's a powerful library for building user interfaces.
            </li>
            <li>
                I'm excited to learn React because it allows for reusable components, making development more efficient.
            </li>
            <li>
                I'm excited to learn React because it has a large community and lots of resources for learning and troubleshooting.
            </li>
        </ol>
    );
}

root.render(
    <Page />
)
