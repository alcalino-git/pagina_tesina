import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CsOMacnS.mjs';
import { b as $$Card } from './Code_CaeRcAeo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Conclusión",
  "sidebar": {
    "order": 2
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$Card, {
      title: "Reiterando",
      icon: "star",
      "set:html": "<p>los efectos de la IA son positivos en los estudiantes si y solo si esta no sustituye su propio esfuerzo, en su lugar fungiendo como un “docente secundario”</p><p>Los efectos de la IA son negativos cuando el estudiante la usa para sustituir su propio esfuerzo</p>"
    }), "\n", createVNode($$Card, {
      title: "Implicaciones",
      icon: "open-book",
      "set:html": "<p>Los resultados conseguidos durante esta tesina se alinean con lo propuesto durante la hipótesis, es decir, la hipótesis se considera como verdadera, por lo que lo ahí propuesto puede usarse como base para futuras investigaciones, así como para el desarrollo de diversos recursos en materia de educación, por ejemplo, podría usarse para impulsar la enseñanza de conocimientos y uso sobre IA en las escuelas, o para ayudar a los docentes a crear planes de integración de la IA en sus clases.</p>"
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
  }) : _createMdxContent();
}

const url = "src/content/docs/contenido/resultados/conclusion.mdx";
const file = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/resultados/conclusion.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/resultados/conclusion.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
