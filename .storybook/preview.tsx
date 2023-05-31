import { Parameters } from "storybook-framework-qwik";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import "../src/theme.scss";

export const parameters: Parameters = {
    a11y: {
        config: {},
        options: {
            checks: { "color-contrast": { options: { noScroll: true } } },
            restoreScroll: true,
        },
    },
    options: {
        showRoots: true,
    },
    docs: {
        iframeHeight: "200px",
    },
};
