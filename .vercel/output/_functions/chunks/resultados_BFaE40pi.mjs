import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CsOMacnS.mjs';
import { b as $$Card } from './Code_CaeRcAeo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Resultados",
  "sidebar": {
    "order": 1
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {
    children: [createVNode($$Card, {
      icon: "star",
      title: "Causas académicas y personales que llevan a los estudiantes a usar IA",
      "set:html": "<ul>\n<li>Carga de trabajo excesiva</li>\n<li>Falta de tiempo</li>\n<li>Desinterés o disgusto por el material escolar</li>\n<li>Aburrimiento o pereza</li>\n<li>Presión por tener éxito</li>\n<li>Falta de consecuencias negativas</li>\n</ul>"
    }), "\n", createVNode($$Card, {
      icon: "magnifier",
      title: " Cómo perciben los estudiantes a la IA ",
      "set:html": "<p>En general, los estudiantes poseen pobres conocimientos en materia de IA, en particular\nla terminología relacionada, sin embargo, poseen buenos conocimientos sobre:</p><ul>\n<li>Limitaciones y capacidades: Los estudiantes reconocen las limitaciones de la IA</li>\n<li>Moral y ética: Los estudiantes comprenden las implicaciones éticas del uso de la IA, como el plagio</li>\n</ul>"
    }), "\n", createVNode($$Card, {
      icon: "warning",
      title: " Consecuencias del uso de IA en el desempeño académico de los estudiantes ",
      "set:html": "<p>Cuando la IA se usa de forma excesiva, en una manera que sustituye el esfuerzo del estudiante por el de la IA, y delega el pensamiento a la misma, se observan los siguientes efectos negativos:</p><ul>\n<li>Procrastinación</li>\n<li>Pérdida de la memoria</li>\n<li>Peores calificaciones generales</li>\n<li>Pérdida de la capacidad creativa</li>\n<li>Pérdida del pensamiento crítico</li>\n<li>Dependencia en la IA</li>\n<li>Pobre comprensión del material académico</li>\n<li>Conocimiento sesgado o incompleto</li>\n<li>Pereza</li>\n<li>Pérdida de la capacidad de toma de decisiones</li>\n</ul>"
    }), "\n", createVNode($$Card, {
      icon: "approve-check",
      title: "Beneficios del uso responsable de la IA",
      "set:html": "<p>Cuando la IA funge como un segundo maestro y una herramienta suplementaria al resto del material educativo disponible, sin reemplazar las habilidades o el esfuerzo del estudiante, se observan los siguientes beneficios</p><ul>\n<li>Aprendizaje más profundo</li>\n<li>Aprendizaje acelerado</li>\n<li>Mejor habilidad de pensamiento crítico</li>\n<li>Mejor accesibilidad para estudiantes con discapacidades</li>\n<li>Mayor compromiso y motivación</li>\n</ul>"
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

const url = "src/content/docs/contenido/resultados/resultados.mdx";
const file = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/resultados/resultados.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/resultados/resultados.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
