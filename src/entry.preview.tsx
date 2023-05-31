/*
 * The bundle entry point for `npm run preview`.
 * That is, serving your app built in production mode.
 * Learn more about Vite's preview command:
 * https://vitejs.dev/config/preview-options.html#preview-options
 */

import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr";

/**
 * The default export is the QwikCity adapter used by Vite preview.
 */
export default createQwikCity({ render, qwikCityPlan });
