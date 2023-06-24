import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://boldandbrad.github.io',
  base: '/docs',
  integrations: [
    starlight({
      title: 'boldandbrad docs',
      social: {
        github: 'https://github.com/boldandbrad/docs',
      },
      editLink: {
        baseUrl: 'https://github.com/boldandbrad/docs/edit/main/',
      },
      sidebar: [
        { label: 'Meta', link: '/meta' },
        {
          label: 'Paradigm',
          items: [
            { label: 'Patterns', link: '/paradigm/patterns' },
            { label: 'Stack', link: '/paradigm/stack' },
          ]
        },
        {
          label: 'Environments',
          items: [
            {
              label: 'macOS',
              items: [
                { label: 'Setup', link: '/envs/macos/setup' },
              ],
            },
            {
              label: 'Raspberry Pi OS',
              items: [ { label: 'Setup', link: '/envs/pi/setup' } ]
            },
            {
              label: 'Ubuntu Server',
              items: [
                { label: 'Setup', link: '/envs/ubuntu-server/setup' },
                { label: 'Commands', link: '/envs/ubuntu-server/commands' },
                { label: 'Guides', link: '/envs/ubuntu-server/guides' },
              ],
            },
          ],
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
