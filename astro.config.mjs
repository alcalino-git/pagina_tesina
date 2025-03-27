// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({

	experimental: {
		serializeConfig: true
	},
	
	integrations: [
		starlight({
			title: 'Proyecto de Tesina',
			social: {
				github: "https://github.com/alcalino-git/pagina_tesina"
			},
			sidebar: [
				{
					label: 'Introducción',
					autogenerate: {directory: '/contenido/introduccion'}
				},
				{
					label: 'Marco teórico',
					autogenerate: {directory: '/contenido/marco_teorico'}
				},
				{
					label: 'Desarrollo',
					autogenerate: {directory: '/contenido/desarrollo'}
				},
				{
					label: 'Resultados',
					autogenerate: {directory: '/contenido/resultados'}
				},
				{
					label: 'Otros',
					autogenerate: {directory: '/contenido/anexos'}
				},

			],
		}),
		react()
	],
});
