import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://boldandbrad.github.io",
  base: "docs",
  integrations: [
    starlight({
      title: "boldandbrad docs",
      // logo: { src: "/src/assets/boldandbrad-500.png" },
      customCss: ["/src/styles/custom.css"],
      social: {
        github: "https://github.com/boldandbrad/docs",
      },
      editLink: {
        baseUrl: "https://github.com/boldandbrad/docs/edit/main/",
      },
      sidebar: [
        { label: "Meta", link: "/meta" },
        {
          label: "Paradigm",
          items: [
            { label: "Patterns", link: "/paradigm/patterns" },
            { label: "Stack", link: "/paradigm/stack" },
          ],
        },
        {
          label: "Environments",
          items: [
            {
              label: "macOS",
              collapsed: true,
              items: [
                { label: "Setup", link: "/envs/macos/setup" },
                // { label: "Shortcuts", link: "/envs/macos/shortcuts" },
              ],
            },
            {
              label: "Raspberry Pi OS",
              collapsed: true,
              items: [{ label: "Setup", link: "/envs/pi/setup" }],
            },
            {
              label: "Ubuntu Server",
              collapsed: true,
              items: [
                { label: "Setup", link: "/envs/ubuntu-server/setup" },
                { label: "Commands", link: "/envs/ubuntu-server/commands" },
                { label: "Guides", link: "/envs/ubuntu-server/guides" },
              ],
            },
          ],
        },
        {
          label: "Games",
          items: [
            {
              label: "Minecraft",
              collapsed: true,
              items: [
                { label: "Client", link: "/games/minecraft/client" },
                { label: "Server", link: "/games/minecraft/server" },
              ],
            },
          ],
        },
        {
          label: "Programming Languages",
          items: [
            {
              label: "Python",
              collapsed: true,
              items: [
                { label: "Install", link: "/langs/python/install" },
                { label: "Repo Setup", link: "/langs/python/repo-setup" },
              ],
            },
            {
              label: "Rust",
              collapsed: true,
              items: [
                { label: "Install", link: "/langs/rust/install" },
                { label: "Repo Setup", link: "/langs/rust/repo-setup" },
                { label: "Conventions", link: "/langs/rust/conventions" },
                { label: "Resources", link: "/langs/rust/resources" },
              ],
            },
          ],
        },
        {
          label: "Tools",
          items: [
            {
              label: "Git",
              collapsed: true,
              items: [
                { label: "Setup", link: "/tools/git/setup" },
                { label: "Repo Init", link: "/tools/git/repo-init" },
                { label: "Usage", link: "/tools/git/usage" },
              ],
            },
          ],
        },
      ],
    }),
  ],

  image: { service: passthroughImageService() },
});
