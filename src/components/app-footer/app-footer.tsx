import { component$ } from "@builder.io/qwik";
import appFooterConfig from "./app-footer-config";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <footer class="p-5 text-base-500">
            <section class="flex">
                {/* pages */}
                <section class="flex gap-4 text-xs font-medium">
                    {appFooterConfig.pages.map((page) => {
                        const { title, path } = page;
                        return (
                            <Link
                                key={title}
                                href={path}
                            >
                                {title}
                            </Link>
                        );
                    })}
                </section>
                {/* social accounts */}
                <section class="ml-auto flex gap-4">
                    {appFooterConfig.socialAccounts.map((account) => {
                        const { title, url, icon: Icon } = account;
                        return (
                            <Link
                                key={title}
                                href={url}
                                title={title}
                            >
                                {Icon}
                            </Link>
                        );
                    })}
                </section>
            </section>
            {/* copywright */}
            <div class="mt-4 text-xs">
                © {new Date().getFullYear()} MyApp Developers
            </div>
        </footer>
    );
});
