
# install dependencies
install:
    pnpm install

# update starlight
update:
    pnpm upgrade @astrojs/starlight --latest

# run dev server
dev:
    pnpm run dev

# build production site to ./dist/
build:
    pnpm run build

# preview build locally
preview:
    pnpm run preview
