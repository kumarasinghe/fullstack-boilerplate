import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type NavItemProps = {
    path: string;
    title: string;
};

export default component$((props: NavItemProps) => {
    const { title, path } = props;
    return (
        <Link
            class="flex h-full items-center px-2 text-xs font-semibold text-base-600 hover:text-accent"
            href={path}
        >
            {title}
        </Link>
    );
});
