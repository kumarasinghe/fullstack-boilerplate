/*
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 */

import DBClient from "~/libs/db-client";
import {
    renderToStream,
    type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";

// connect to the database
DBClient.connect();

export default function (opts: RenderToStreamOptions) {
    return renderToStream(<Root />, {
        manifest,
        ...opts,
        // Use container attributes to set attributes on the html tag.
        containerAttributes: {
            lang: "en-us",
            ...opts.containerAttributes,
        },
    });
}
