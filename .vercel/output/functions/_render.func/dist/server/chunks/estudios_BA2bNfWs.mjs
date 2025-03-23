import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CsOMacnS.mjs';
import { $ as $$LinkCard } from './Code_CaeRcAeo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Estudios previos sobre el tema"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "garcía-martínez-et-al-2023",
    "text": "García-Martínez et al. (2023)"
  }, {
    "depth": 2,
    "slug": "essel-et-al-2024",
    "text": "Essel et al. (2024)"
  }, {
    "depth": 2,
    "slug": "abbas-et-al-2024",
    "text": "Abbas et al. (2024)"
  }, {
    "depth": 2,
    "slug": "ferreira-2024",
    "text": "Ferreira (2024)"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Existe abundante literatura previa acerca del tema de esta tesina o similares, las cuales han establecido\ndiversas relaciones y obtenido variedad de datos y resultados sobre el mismo</p>\n<p>En general, el consenso aparente en la literatura existente es que, de manera responsable y bien regulado, el uso de la IA generativa es beneficioso para los estudiantes, pero el uso excesivo de esta tecnología genera daños a las capacidades y desempeño académico de los alumnos</p>\n<h2 id=\"garcía-martínez-et-al-2023\">García-Martínez et al. (2023)</h2>\n<p>Encuentra que:</p>\n<ul>\n<li>El uso de la IA generativa es generalmente beneficioso para los estudiante, si:\n<ul>\n<li>El estudiante sea el centro del aprendizaje</li>\n<li>La IA no reemplaza su esfuerzo</li>\n</ul>\n</li>\n</ul>\n"
    }), createVNode($$LinkCard, {
      title: "Visita la fuente",
      href: "https://doi.org/10.7821/naer.2023.1.1240"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"essel-et-al-2024\">Essel et al. (2024)</h2>\n<p>El uso de la IA generativa durante el trabajo de clase mejora el desarrollo de las habilidades cognitivas de los estudiantes, y consideran que podría ser una herramienta valiosa a tener en cuenta para los estudiantes de grado superior</p>\n"
    }), createVNode($$LinkCard, {
      title: "Visita la fuente",
      href: " https://doi.org/10.1016/j.caeai.2023.100198"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"abbas-et-al-2024\">Abbas et al. (2024)</h2>\n<p>Encuentra que:</p>\n<ul>\n<li>El uso excesivo de la IA generativa los alumnos\n<ul>\n<li>Peores resultados académicos</li>\n<li>Propicia la procrastinación</li>\n<li>Causa pérdida de la memoria</li>\n</ul>\n</li>\n<li>Los alumnos que abusan de la IA generativa tienden a tener peores calificaciones</li>\n</ul>\n"
    }), createVNode($$LinkCard, {
      title: "Visita la fuente",
      href: "https://doi.org/10.1186/s41239-024-00444-7"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h2 id=\"ferreira-2024\">Ferreira (2024)</h2>\n<p>Encuentra que la dependencia de la IA generativa:</p>\n<ul>\n<li>Compromete\n<ul>\n<li>Autonomía del alumno</li>\n<li>Capacidad de pensamiento crítico del alumno</li>\n</ul>\n</li>\n<li>Resulta en conocimiento incompleto y fragmentado</li>\n<li>Propicia el plagio académico</li>\n</ul>\n"
    }), createVNode($$LinkCard, {
      title: "Visita la fuente",
      href: "https://doi.org/10.31219/osf.io/bcwur"
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

const url = "src/content/docs/contenido/marco_teorico/estudios.mdx";
const file = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/marco_teorico/estudios.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/marco_teorico/estudios.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
