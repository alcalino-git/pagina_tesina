import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CsOMacnS.mjs';
import 'clsx';

const frontmatter = {
  "title": "Resumen",
  "Description": "None",
  "sidebar": {
    "order": 1
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Con el lanzamiento de modelos de IA generativa como ChatGPT en 2022 y su creciente popularidad, muchos educadores e instituciones han comenzado a preguntarse sobre los efectos que estas tecnologías podrían tener en sus estudiantes.</p>\n<p>La literatura existente está dividida entre quienes afirman que su impacto es positivo y quienes sostienen que es negativo.</p>\n<p>Esta tesina tiene como objetivo analizar datos experimentales recopilados en escuelas junto con investigaciones previas para ofrecer una visión más amplia del tema. Los hallazgos sugieren que existen tanto efectos positivos como negativos, y que estos dependen de cómo los estudiantes utilicen e interactúen con los sistemas de IA.</p>\n<p><img src=\"https://static.foxbusiness.com/foxbusiness.com/content/uploads/2023/02/Microsoft-OPENAI-CHATGPT-e1675882248763.jpg\" alt=\"\"></p>"
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
const url = "src/content/docs/contenido/introduccion/resumen.mdx";
const file = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/introduccion/resumen.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/introduccion/resumen.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
