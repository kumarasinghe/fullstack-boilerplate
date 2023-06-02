import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { Slot, component$ } from "@builder.io/qwik";

type ButtonProps = QwikIntrinsicElements["button"] & {
    variant?: "primary" | "secondary";
    classNames?: {
        root?: string;
    };
};

export default component$((props: ButtonProps) => {
    const { classNames, variant = "secondary", ...htmlButtonProps } = props;

    return (
        <button
            {...htmlButtonProps}
            class={{
                "inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 focus:ring-offset-2":
                    true,
                "border-base-300 bg-base text-base-700 shadow-sm hover:bg-base-50":
                    variant === "secondary",
                "border-transparent bg-accent text-accent-foreground shadow-sm hover:bg-accent-50 focus:ring-accent":
                    variant === "primary",
                ...(classNames?.root && { [classNames.root]: true }),
            }}
        >
            {<Slot /> || "Button"}
        </button>
    );
});
