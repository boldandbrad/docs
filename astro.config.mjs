import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://boldandbrad.github.io',
  base: '/docs',
  integrations: [
    starlight({
      title: 'boldandbrad docs',
      customCss: [
        '/src/styles/custom.css',
      ],
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
          ],
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
              items: [ { label: 'Setup', link: '/envs/pi/setup' } ],
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
        {
          label: 'Games',
          items: [
            {
              label: 'Minecraft',
              items: [
                { label: 'Client', link: '/games/minecraft/client' },
                { label: 'Server', link: '/games/minecraft/server' },
              ]
            },
          ],
        },
        {
          label: 'Programming Languages',
          items: [
            {
              label: 'Python',
              items: [
                { label: 'Install', link: '/langs/python/install' },
                { label: 'Repo Setup', link: '/langs/python/repo-setup' },
              ],
            },
            {
              label: 'Rust',
              items: [
                { label: 'Install', link: '/langs/rust/install' },
                { label: 'Repo Setup', link: '/langs/rust/repo-setup' },
                { label: 'Conventions', link: '/langs/rust/conventions' },
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
