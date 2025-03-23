import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CsOMacnS.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'pako';
import 'clsx';

const BatchImageLoader = ({ path }) => {
  const [images, setImages] = useState([]);
  const getFileNames = async () => {
    const res = await fetch(`/evidences.json?folder=${path}`);
    const json = await res.json();
    console.log(json);
    setImages(json);
  };
  useEffect(() => {
    getFileNames();
  }, []);
  return /* @__PURE__ */ jsx("div", { children: images.map((e, i) => {
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: `${path}/${e}`.replace(".", "") }, i) });
  }) });
};

const frontmatter = {
  "title": "Evidencias"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "encuestas-a-alumnos-de-nivel-superior",
    "text": "Encuestas a alumnos de nivel superior"
  }, {
    "depth": 2,
    "slug": "encuestas-a-docentes-de-nivel-superior-no-forma-parte-de-la-tesina",
    "text": "Encuestas a docentes de nivel superior (No forma parte de la tesina)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"encuestas-a-alumnos-de-nivel-superior\">Encuestas a alumnos de nivel superior</h2>\n"
    }), createVNode(BatchImageLoader, {
      path: "./public/evidences_round1",
      "client:load": true,
      "client:component-path": "/home/alcalino/Desktop/pagina_tesina/src/components/evidences.tsx",
      "client:component-export": "BatchImageLoader",
      "client:component-hydration": true
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<br>\n<h2 id=\"encuestas-a-docentes-de-nivel-superior-no-forma-parte-de-la-tesina\">Encuestas a docentes de nivel superior (No forma parte de la tesina)</h2>\n"
    }), createVNode(BatchImageLoader, {
      path: "./public/evidences_round2",
      "client:load": true,
      "client:component-path": "/home/alcalino/Desktop/pagina_tesina/src/components/evidences.tsx",
      "client:component-export": "BatchImageLoader",
      "client:component-hydration": true
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/contenido/anexos/evidencias.mdx";
const file = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/anexos/evidencias.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/anexos/evidencias.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
