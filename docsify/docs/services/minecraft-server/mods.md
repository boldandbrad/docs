# Mods

Install server-side mods that optimze and improve gameplay. All mods recommended
on this page are compatible with both Fabric and Quilt mod loaders.

## Useful mods

- [Quilted Fabric Modpack](https://modrinth.com/mod/qsl) - Fabric mod support
  for Quilt (not needed if running Fabric mod loader)

### Optimizations

- [Lithium](https://modrinth.com/mod/lithium) - game logic/server optimizations
- [Phosphor](https://modrinth.com/mod/phosphor) - lighting engine optimizations

### Game Changes

- [ServerSleep](https://modrinth.com/datapack/serversleep) - 50% sleep threshold
- [NetherPortalFix](https://modrinth.com/mod/netherportalfix) - prevent portal
  cross linking
  - Deps:
    - [Balm](https://modrinth.com/mod/balm)
      - Deps:
        - [Cloth Config](https://modrinth.com/mod/cloth-config)
- [QuickHomes](https://beta.curseforge.com/minecraft/mc-mods/quickhomes) - set
  and teleport to your home
- [QuickSpawns](https://www.curseforge.com/minecraft/mc-mods/quickspawns) -
  teleport to world spawn
- [More Mob Variants](https://modrinth.com/mod/more-mob-variants) - adds more
  mob texture variants
- [RightClickHarvest](https://modrinth.com/mod/rightclickharvest) - harvest
  crops with right click
  - Deps:
    - [JamLib](https://modrinth.com/mod/jamlib)
- [EditSign](https://modrinth.com/mod/editsign) - edit signs without replacing
  (not needed in 1.20+)
  - Deps:
    - [Cloth Config](https://modrinth.com/mod/cloth-config) (optional)
    - [Mod Menu](https://modrinth.com/mod/modmenu/versions) (client optional)

> Additional Quilt server-side mods can be found [here](https://serverside.infra.link).

## Install

Minecraft server-side mods simply need to be downloaded and placed in the
server's `mods` folder. Follow the guides below to download and install mods
from the command line. It is also possible to install them via [SFTP](environments/ubuntu-server/setup-sftp.md)
if you have that setup on your host.

> Be sure to also download any mod dependencies.

### Download Modrinth Mods

1. Find the mod you'd like to install on [Modrinth](https://modrinth.com).
1. Right click on the `Download` button for the version you want, and select
   `Copy Link`.
1. From within the server's `mods` folder, run `wget {copied-url}`
1. The mod should download into the `mods` folder.

### Download Curseforge Mods

1. Find the mod you'd like to install on [Curseforge](https://curseforge.com) in
   Firefox or Chrome.
1. Download the version you want, and enter your browser's download panel.
1. Right click the file download and select `Copy Download Link`.
1. From within the server's `mods` folder, run `wget {copied-url}`
1. The mod should download into the `mods` folder.
