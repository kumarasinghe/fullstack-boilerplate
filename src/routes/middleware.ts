import type { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async (request) => {
    const { json, next, sharedMap } = request;
    // add more middleware here
    await next();
};
