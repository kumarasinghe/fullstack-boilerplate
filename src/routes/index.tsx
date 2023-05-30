import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
            <h1>Hi 👋</h1>
            <p>Welcome to Full Stack Boilerplate!</p>
        </>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Full Stack Boilerplate",
    meta: [
        {
            name: "description",
            content: "Full Stack Boilerplate",
        },
    ],
};
