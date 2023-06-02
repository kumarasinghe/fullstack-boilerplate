import type { QwikIntrinsicElements } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

type TextInputProps = QwikIntrinsicElements["input"] & {
    label?: string;
    classNames?: {
        label?: string;
        input?: string;
        root?: string;
    };
};

export default component$((props: TextInputProps) => {
    const { classNames, label, ...htmlInputProps } = props;

    return (
        <label
            class={{
                "block text-base-800": true,
                ...(classNames?.root && { [classNames.root]: true }),
            }}
        >
            {/* label */}
            {label && (
                <div
                    class={{
                        "mb-1 text-sm": true,
                        ...(classNames?.label && { [classNames.label]: true }),
                    }}
                >
                    {label}
                </div>
            )}
            {/* input */}
            <input
                {...htmlInputProps}
                class={{
                    "block w-full rounded-md border border-base-300 px-3 py-2 shadow-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent sm:text-sm":
                        true,
                    ...(classNames?.input && { [classNames.input]: true }),
                }}
            />
        </label>
    );
});
