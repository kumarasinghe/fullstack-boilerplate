import { component$ } from "@builder.io/qwik";
import Button from "../../libs/ui/button/button";

export default component$(() => {
    return (
        <section class="flex h-[75vh] flex-col items-start justify-center bg-base pl-14">
            <h1 class="text-5xl">Welcome to MyApp</h1>
            <Button
                classNames={{ root: "mt-10" }}
                variant="primary"
            >
                Learn More
            </Button>
        </section>
    );
});
