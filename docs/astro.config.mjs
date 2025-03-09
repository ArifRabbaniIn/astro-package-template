// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Awesome Package',
      description: 'Default description',
      lastUpdated: true,
      credits: true,
      social: {
        github: 'GITHUB_REPOSITORY_URL',
      },
      sidebar: [
        {
          label: 'Start Here',
          items: [{ label: 'Introduction', slug: 'introduction' }],
        },
      ],
    }),
  ],
});
