import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CsOMacnS.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introducción",
  "Description": "None",
  "sidebar": {
    "order": 2
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>En esta tesina se estudia el impacto en el desempeño académico de los estudiantes de nivel superior del uso de la IA generativa. El objetivo es explorar tanto los efectos positivos como negativos que esta tecnología puede tener en el aprendizaje, así como identificar las causas específicas detrás de estos efectos y sus posibles consecuencias para el futuro académico y profesional de los estudiantes.</p>\n<p>Es fundamental entender el impacto que tiene la IA generativa, pues en la sociedad actual, el acceso a estas tecnologías es prácticamente tan universal como el acceso a internet, al ser la mayoría de ellas de uso abierto y gratuito.</p>\n<p>El objetivo del presente trabajo es, mediante el análisis de estudios existentes en el tema y la aplicación de encuestas de muestra representativa, entender si el uso de la IA generativa es beneficioso o perjudicial para el cuerpo estudiantil, entendiendo tanto sus ventajas como sus desventajas</p>"
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
const url = "src/content/docs/contenido/introduccion/introduccion.mdx";
const file = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/introduccion/introduccion.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/introduccion/introduccion.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
