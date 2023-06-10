import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero/hero";

export const head: DocumentHead = {
    title: "Welcome to Full Stack Boilerplate",
    meta: [
        {
            name: "description",
            content: "Full Stack Boilerplate",
        },
    ],
};

export default component$(() => {
    return <Hero />;
});
