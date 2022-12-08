import {JSXElement} from "solid-js";
import TestComponent from "../components/testComponent";
export default function Index() : JSXElement {
    return <main>
        <section class="hero">
            <div class="container">
                <TestComponent/>
                <a href="/app">to app</a>
            </div>
        </section>
    </main>
}