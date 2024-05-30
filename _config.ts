import lume from "lume/mod.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts"
import wiki from "wiki/mod.ts";

const site = lume({
  src: "./src",
});

site.use(slugifyUrls());
site.use(wiki());

export default site;
