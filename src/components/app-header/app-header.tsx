import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import appHeaderConfig from "./app-header-config";
import NavItem from "./nav-item";

export default component$(() => {
    return (
        <header class="flex h-14 items-center px-5">
            {/* text logo */}
            <Link
                href="/"
                class="cursor-pointer font-medium text-accent"
            >
                MyApp
            </Link>
            {/* navigation menu */}
            <nav class="ml-auto flex h-full items-center">
                {appHeaderConfig.navItems.map((navItem) => {
                    const { title, path } = navItem;

                    return (
                        <NavItem
                            key={title}
                            title={title}
                            path={path}
                        />
                    );
                })}
            </nav>
        </header>
    );
});
