import lume from "lume/mod.ts";

import googleFonts from "lume/plugins/google_fonts.ts";
import pagefind from "lume/plugins/pagefind.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: "./src",
  // location: new URL("https://docs.boldandbrad.dev"),
});

site.use(googleFonts({
  fonts:
    "https://fonts.google.com/share?selection.family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900|Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700",
  cssFile: "/styles/main.css",
}));
site.use(pagefind({}));
site.use(postcss({}));

// site.remoteFile("custom-styles.css", import.meta.resolve(`./src/custom-styles.css`));

export default site;
