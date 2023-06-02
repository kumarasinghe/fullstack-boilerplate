import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="text-xs font-medium text-red-500">
            <Slot />
        </div>
    );
});
