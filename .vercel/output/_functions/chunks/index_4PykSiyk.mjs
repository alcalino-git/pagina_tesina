import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CsOMacnS.mjs';
import './Code_CaeRcAeo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Impacto del uso de la Inteligencia Artificial generativa en el desempeño académico de los estudiantes de nivel superior",
  "description": "Inicio",
  "template": "splash",
  "hero": {
    "tagline": "Aprende todo sobre cómo la IA generativa afecta a los estudiantes universitarios",
    "image": {
      "file": "https://cdn3d.iconscout.com/3d/free/thumb/free-chatgpt-12193414-9940790.png?f=webp"
    },
    "actions": [{
      "text": "Empieza a leer",
      "link": "/contenido/introduccion/resumen",
      "icon": "right-arrow"
    }, {
      "text": "Consulta el documento original",
      "link": "https://docs.google.com/document/d/1BGHtmtiWrjELcR0WRV5Xrud7-VzG8LdHymcPb1vCltM/edit?usp=sharing",
      "icon": "document",
      "variant": "secondary"
    }]
  }
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
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

const url = "src/content/docs/index.mdx";
const file = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
