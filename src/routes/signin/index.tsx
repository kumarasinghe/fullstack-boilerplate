import { component$, $ } from "@builder.io/qwik";
import SignUpForm from "./signin-form";
import { routeAction$, useNavigate } from "@builder.io/qwik-city";
import AuthService from "~/services/auth-service";

export const useSignIn = routeAction$(async (data: any, request) => {
    const { email, password } = data;

    const { status, accessToken } = await AuthService.signin(email, password);

    // sign in success
    if (status === "success") {
        // store the JWT access token in user's browser's cookies
        request.cookie.set("access_token", accessToken, {
            httpOnly: true,
            sameSite: true,
            secure: true,
        });
        return true;
    } else if (status === "fail") {
        return false;
    }

    request.redirect(302, "http://google.com");
});

export default component$(() => {
    const signIn = useSignIn();
    const navigate = useNavigate();

    const handleSubmit = $(async (formData) => {
        const signInResult = await signIn.submit(formData);
        if (signInResult) {
            await navigate("/");
        }
    });

    return (
        <div class="flex h-[80vh] w-full items-center justify-center">
            <SignUpForm onSubmit$={handleSubmit} />
        </div>
    );
});
