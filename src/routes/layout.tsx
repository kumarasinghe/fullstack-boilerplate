import { component$, Slot } from "@builder.io/qwik";
import AppFooter from "~/components/app-footer/app-footer";
import AppHeader from "~/components/app-header/app-header";
export * from "./middleware";

export default component$(() => {
    return (
        <>
            <AppHeader />
            <Slot />
            <AppFooter />
        </>
    );
});
