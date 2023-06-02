import { component$, useStore, $ } from "@builder.io/qwik";
import type { ValidationStore } from "~/libs/ui/form/form";
import Form from "~/libs/ui/form/form";
import TextInput from "~/libs/ui/text-input";
import Button from "~/libs/ui/button";
import {
    EmailValidator,
    NameValidator,
    PasswordValidator,
} from "~/utils/validators";
import { Link } from "@builder.io/qwik-city";
import ErrorLabel from "~/components/error-label";

export default component$(() => {
    const validationStore = useStore<ValidationStore>({
        name: { validator: NameValidator },
        email: {
            validator: EmailValidator,
        },
        password: {
            validator: PasswordValidator,
        },
    });

    const handleSubmit = $((formData) => {
        console.log(formData);
    });

    return (
        <Form
            class="flex w-80 flex-col gap-3 rounded bg-base px-8 py-10 shadow"
            validationStore={validationStore}
            onSubmit$={handleSubmit}
        >
            {/* form title */}
            <h2 class="mb-2 text-center text-xl">Sign Up</h2>

            {/* name */}
            <TextInput
                name="name"
                label="Name"
            />
            {validationStore.name.status === "invalid" && (
                <ErrorLabel>* Invalid name</ErrorLabel>
            )}

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
            {validationStore.password.status === "invalid" && (
                <ErrorLabel>
                    * Password must have at least 8 characters including:
                    <ul class="mt-2">
                        <li>· An uppercase</li>
                        <li>· A lowercase</li>
                        <li>· A number</li>
                        <li>· A special character</li>
                    </ul>
                </ErrorLabel>
            )}

            {/* submit */}
            <Button
                variant="primary"
                classNames={{ root: "mt-5 w-full" }}
            >
                Sign Up
            </Button>

            {/* have an account */}
            <div class="mt-1 text-center text-xs">
                Have an account?
                <Link
                    class="ml-1 text-accent"
                    href="/signin"
                >
                    Sign in
                </Link>
            </div>
        </Form>
    );
});
