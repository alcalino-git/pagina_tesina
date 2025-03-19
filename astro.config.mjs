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
					label: 'Tabla de contenido',
					autogenerate: {directory: 'contenido'}
				}
			],
		}),
	],
});
