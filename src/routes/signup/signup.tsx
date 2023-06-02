import { component$ } from "@builder.io/qwik";
import SignUpForm from "./signup-form";

export default component$(() => {
    return (
        <div class="flex h-[80vh] w-full items-center justify-center">
            <SignUpForm />
        </div>
    );
});
