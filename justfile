
# install dependencies
install:
    bun install

# update dependencies
update:
    bun update --save

# run dev server
dev:
    bun run dev

# build production site to ./dist/
build:
    bun run build

# preview build locally
preview:
    bun run preview
