import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CsOMacnS.mjs';
import { a as $$CardGrid, b as $$Card } from './Code_CaeRcAeo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Hipótesis",
  "sidebar": {
    "order": 3
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>El impacto de la Inteligencia Artificial generativa en el desempeño académico de los estudiantes de nivel superior depende del uso que le den tanto los estudiantes como los docentes.</p>\n<p>Cuando la IA generativa sustituye por completo los procesos cognitivos del estudiante, su uso tiene un impacto negativo, ya que inhibe el desarrollo de habilidades de razonamiento y resolución de problemas.</p>\n<p>Sin embargo, cuando la IA generativa se utiliza como una herramienta complementaria en conjunto con los docentes, para proporcionar retroalimentación y apoyar la comprensión de los contenidos, su uso mejora significativamente el aprendizaje y fortalece el rendimiento académico de los estudiantes.</p>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Positivo",
        icon: "approve-check",
        "set:html": "Usar la IA como docente es positivo para los estudiantes"
      }), createVNode($$Card, {
        title: "Negativo",
        icon: "error",
        "set:html": "Usar la IA como reemplazo al esfuerzo es negativo para los estudiantes"
      })]
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

const url = "src/content/docs/contenido/introduccion/hipotesis.mdx";
const file = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/introduccion/hipotesis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/introduccion/hipotesis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
