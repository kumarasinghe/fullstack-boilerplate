import { component$, useStore, $ } from "@builder.io/qwik";
import type { ValidationStore } from "~/libs/ui/form/form";
import Form from "~/libs/ui/form/form";
import TextInput from "~/libs/ui/text-input";
import Button from "~/libs/ui/button";
import { EmailValidator } from "~/utils/validators";
import { Link } from "@builder.io/qwik-city";
import ErrorLabel from "~/components/error-label";

export default component$(() => {
    const validationStore = useStore<ValidationStore>({
        email: {
            validator: EmailValidator,
        },
    });

    const handleSubmit = $(async (formData: any) => {
        console.log({ formData });
    });

    return (
        <Form
            class="flex w-80 flex-col gap-3 rounded bg-base px-8 py-10 shadow"
            validationStore={validationStore}
            onSubmit$={handleSubmit}
        >
            {/* form title */}
            <h2 class="mb-2 text-center text-xl">Sign In</h2>

            {/* email */}
            <TextInput
                name="email"
                type="email"
                label="Email"
            />
            {validationStore.email.status === "invalid" && (
                <ErrorLabel>* Invalid email address</ErrorLabel>
            )}

            {/* password */}
            <TextInput
                type="password"
                name="password"
                label="Password"
            />

            {/* submit */}
            <Button
                variant="primary"
                classNames={{ root: "mt-5 w-full" }}
            >
                Sign in
            </Button>

            {/* have an account */}
            <div class="mt-1 text-center text-xs">
                Don't have an account?
                <Link
                    class="ml-1 text-accent"
                    href="/signup"
                >
                    Sign Up
                </Link>
            </div>
        </Form>
    );
});
