import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CsOMacnS.mjs';
import { $ as $$LinkCard } from './Code_CaeRcAeo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Argumentación",
  "sidebar": {
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "encuesta",
    "text": "Encuesta"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<h2 id=\"encuesta\">Encuesta</h2>\n<p>Durante la tesina, se realizó un análisis exhaustivo de cada una de las fuentes de datos, sin embargo, este texto es demasiado largo\npara ser mostrado aqui, puede consultar lo encontrado en la página de resultados, o la argumentación\ncompleta en el documento original</p>\n"
    }), createVNode($$LinkCard, {
      title: "Documento original",
      href: "https://docs.google.com/document/d/1BGHtmtiWrjELcR0WRV5Xrud7-VzG8LdHymcPb1vCltM/edit?usp=sharing"
    }), "\n", createVNode($$LinkCard, {
      title: "Resultados",
      href: "/contenido/resultados/resultados"
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

const url = "src/content/docs/contenido/desarrollo/argumentos.mdx";
const file = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/desarrollo/argumentos.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/desarrollo/argumentos.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
