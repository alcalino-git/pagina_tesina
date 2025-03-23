import { c as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CsOMacnS.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import 'clsx';

function SurveyChart() {
  const [data, setData] = useState("");
  const [csv, setCSV] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/aggregated_data.csv");
      const str = await res.text();
      setData(str);
    };
    getData();
  }, []);
  useEffect(() => {
    const parsed = Papa.parse(data, {
      header: true,
      skipEmptyLines: true,
      delimiter: ","
    });
    console.log(parsed.errors);
    setCSV(parsed.data);
    console.log(parsed.data);
  }, [data]);
  return /* @__PURE__ */ jsx("div", { style: { width: "90%" }, children: csv?.map((e, i) => {
    return /* @__PURE__ */ jsxs("div", { style: {
      width: "100%",
      height: "30vh",
      marginBottom: "10vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }, children: [
      /* @__PURE__ */ jsx("h4", { children: e.Pregunta }),
      /* @__PURE__ */ jsx(Doughnut, { data: {
        labels: ["Sí", "No"],
        datasets: [{ label: "Respuestas", data: [e.Sí, e.No] }]
      } })
    ] });
  }) });
}

const frontmatter = {
  "title": "Gráficas"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Se presentan a continuación las gráficas correspondientes a la encuesta aplicada a los estudiantes de nivel superior</p>\n"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<br>\n"
    }), createVNode(SurveyChart, {
      "client:load": true,
      "client:component-path": "/home/alcalino/Desktop/pagina_tesina/src/components/survey_chart.tsx",
      "client:component-export": "SurveyChart",
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

const url = "src/content/docs/contenido/anexos/graficas.mdx";
const file = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/anexos/graficas.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/alcalino/Desktop/pagina_tesina/src/content/docs/contenido/anexos/graficas.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
