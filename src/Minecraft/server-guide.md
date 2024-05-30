---
title: Server Guide
description: Minecraft Java Edition Server setup.
---

# Server Guide

This document walks through installing and running a dedicated Minecraft Java
Edition Server on an Ubuntu Server host. I prefer Ubuntu Server as host because
it is lightweight and also not windows.

The modding toolchain and server launcher used in this tutorial is [Fabric](https://fabricmc.net/).
Fabric provides an installer that makes setup and maintenance simpler.

## Install

Install Minecraft Java Edition Server on an Ubuntu Server host.

### Prerequisites

This guide assumes you've already completed the following:

- [Ubuntu Server Install](/computer-science/operating-systems/ubuntu-server/install)
  - [Enable Firewall](/computer-science/operating-systems/ubuntu-server/guides/#firewall)
  - [Enable SSH](/computer-science/operating-systems/ubuntu-server/guides/#enable-ssh)
  - [Enable SFTP](/computer-science/operating-systems/ubuntu-server/guides/#enable-sftp)
    (Optional)
  - [Set Static IP](/computer-science/operating-systems/ubuntu-server/guides/#set-static-ip)

### Create User

1. Create a Minecraft admin user:

   ```bash
   sudo adduser --system --home /srv/mcadmin
   sudo addgroup --system mcadmin
   sudo adduser mcadmin mcadmin
   ```

### Install Server

1. Install java:

   ```bash
   sudo apt install openjdk-18-jre-headless
   ```

1. Download the latest [Fabric Installer](https://fabricmc.net/use/installer/):

   ```bash
   wget https://maven.fabricmc.net/net/fabricmc/fabric-installer/0.11.2/fabric-installer-0.11.2.jar
   ```

1. Use Fabric Installer to install a minecraft server jar:

   ```bash
   java -jar fabric-installer-<VERSION>.jar server -dir new-server -mcverion <MINECRAFT_VERSION> -downloadMinecraft
   ```

   > Note: Fabric will install the server into `./new-server`

1. From within the `new-server` directory, run the installed server launch jar:

   ```bash
   java -jar fabric-server-launch.jar nogui
   ```

   > Note: The server _will_ fail to start, asking you to accept the EULA.

1. Change `eula=false` to `eula=true` in `eula.txt` to accept the EULA:

   ```bash
   vim eula.txt
   ```

### Create system service

1. Create systemd unit file at `/lib/systemd/system/minecraft.service`:

   ```toml
   [Unit]
   WorkingDirectory=/srv/mcadmin/new-server
   User=mcadmin
   Group=mcadmin
   Restart=on-failure
   RestartSec=20 5
   ExecStart=/usr/bin/java -Xms12G -Xmx12G -jar fabric-server-launch.jar nogui

   [Install]
   WantedBy=multi-user.target
   ```

   > Note: This guide assumes a dedicated host machine with at least 16GB of
   > RAM. Adjust the `-Xms` and `-Xmx` values accordingly based on your system's
   >resources.

1. Reload systemctl daemon:

   ```bash
   sudo systemctl daemon-reload
   ```

1. Enable system service:

   ```bash
   systemctl enable minecraft
   ```

### Allow through firewall

```bash
sudo ufw allow 25565
```

### Setup Port forwarding

In order for the minecraft server to be accessible beyond the local network, the
service must be forwarded to a port externally. This is typically handled in your
router settings, which differ greatly depending on brand and model.

> Generalized instructions for this section are coming soon.

## Configure

Configure desired Minecraft server behavior.

### Operators

Allow specific players to moderate the server.

- Add desired moderators to `ops.json` list:

  ```json
  [
    {
      "uuid": "{UUID}",
      "name": "{USERNAME}",
      "level": 4,
      "bypassesPlayerLimit": false
    }
  ]
  ```

### AllowList

Only allow listed players to connect to the server.

Prerequisite: [Operators](#operators)

Config:

- `server.properties`: `white-list=true`

Server Operators can manage the allowlist in game using the `/whitelist` sub
commands.

## Manage

Manage and maintain Minecraft server.

### Service Commands

Commands for managing the minecraft server.

- Status:

  ```bash
  systemctl status minecraft
  ```

- Start:

  ```bash
  systemctl start minecraft
  ```

- Stop:

  ```bash
  systemctl stop minecraft
  ```

  OR in game:

  ```txt
  /stop
  ```

- Restart

  ```bash
  systemctl restart minecraft
  ```

### World Management

- Backup:

  > Coming soon.

- Swap:

  > Coming soon.

### Minecraft Versions

Update server to a new Minecraft version.

- From the directory that contains `./server`:

  ```bash
  java -jar fabric-installer-<VERSION>.jar server -dir <SERVER_DIR> -mcversion <NEW_MINECRAFT_VERSION> -downloadMinecraft
  ```

- [Update Mods](#install-mods)

## Install Mods

Install [server-side mods](/minecraft/mods#server-side) that optimze and improve
gameplay.

Minecraft server-side mods simply need to be downloaded and placed in the
server's `mods/` folder. Follow the guides below to download and install mods
from the command line. It is also possible to install them via [SFTP](/computer-science/operating-systems/ubuntu-server/guides/#enable-sftp)
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
