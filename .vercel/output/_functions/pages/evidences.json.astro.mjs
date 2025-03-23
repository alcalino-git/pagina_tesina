import fs from 'fs';
export { renderers } from '../renderers.mjs';

const GET = ({ params, request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("folder");
  console.log(request.url);
  const files = fs.readdirSync(search);
  return new Response(JSON.stringify(files));
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
