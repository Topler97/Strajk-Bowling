import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { fetch, Response, Headers, Request } from "undici";

if (typeof globalThis.fetch === "undefined") {
  globalThis.fetch = fetch;
  globalThis.Response = Response;
  globalThis.Headers = Headers;
  globalThis.Request = Request;
}

export const server = setupServer(...handlers);
