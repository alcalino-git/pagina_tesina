import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CsOMacnS.mjs';
import { a as $$CardGrid, b as $$Card } from './Code_CaeRcAeo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Conceptos"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "tecnología",
    "text": "Tecnología"
  }, {
    "depth": 2,
    "slug": "educación",
    "text": "Educación"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Una variedad de conceptos serán referneciados durante la tesina, estos son los más importantes:</p>\n<h2 id=\"tecnología\">Tecnología</h2>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        icon: "seti:react",
        title: "Inteligencia artificial",
        "set:html": "<p>La IA generativa se refiere a todo tipo de sistemas de IA capaces de generar contenido original basado en sus datos de entrenamiento.</p><p><em>En este proyecto en particular, se refiere en particular a los modelos de lenguaje, que son un tipo de IA generativa</em></p>"
      }), createVNode($$Card, {
        icon: "star",
        title: "ChatGPT",
        "set:html": "<p>ChatGPT es un modelo capaz de interactuar con el usuario de manera conversacional, con un formato capaz de retener memoria de mensajes pasados, esencialmente permitiéndole tener una conversación con el usuario</p>"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"educación\">Educación</h2>\n"
    }), createVNode($$Card, {
      icon: "open-book",
      title: "Educación superior",
      "set:html": "<p>La educación superior está conformada por los programas educativos posteriores a la enseñanza secundaria, impartidos por universidades u otros establecimientos que estén habilitados como instituciones de enseñanza superior por las autoridades competentes del país y/o sistemas reconocidos de homologación</p><p><em><strong>En escencia, los estudiantes de nivel superior son aquellos que están cursando un grado de estudios posterior a la preparatoria y se preparan para ser profesionales</strong></em></p>"
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

const url = "src/content/docs/contenido/marco_teorico/conceptos.mdx";
const file = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/marco_teorico/conceptos.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/marco_teorico/conceptos.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
