// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

	experimental: {
		serializeConfig: true
	},
	
	integrations: [
		starlight({
			title: 'Proyecto de Tesina',
			social: {
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

			],
		}),
	],
});
