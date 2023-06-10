import { component$, $ } from "@builder.io/qwik";
import SignUpForm from "./signin-form";
import { routeAction$ } from "@builder.io/qwik-city";

export const useSignIn = routeAction$(async (data, request) => {
    request.redirect(302, "http://google.com");
});

export default component$(() => {
    const signIn = useSignIn();

    return (
        <div class="flex h-[80vh] w-full items-center justify-center">
            <SignUpForm
                onSubmit$={(formData) => {
                    signIn.submit(formData);
                }}
            />
        </div>
    );
});
