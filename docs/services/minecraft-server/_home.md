# Minecraft Server

This document walks through installing and running a dedicated Minecraft Java Edition
Server on an Ubuntu Server host. I prefer Ubuntu Server as host because it is
lightweight and not windows.

The modding toolchain and server launcher used in this tutorial is [QuiltMC](https://quiltmc.org/en/).
Quilt provides an installer that makes setup and maintenance simpler, while
offering compatibility
with Fabric API mods.

> Note: QuiltMC is still in beta. Though I have not run into any compatibility
> or stability issues with the [mods](services/minecraft-server/mods.md) I use,
> it may not yet work as expected in ALL use cases.

## Prerequisites

- [Ubuntu Server Setup](environments/ubuntu-server/_home.md)
  - [Enable Firewall](environments/ubuntu-server/enable-firewall.md 'Enable Firewall')
  - [Enable SSH](environments/ubuntu-server/enable-ssh.md 'Enable SSH')
  - [Configure Static IP](environments/ubuntu-server/set-static-ip.md 'Config Static IP')

## Setup

1. Create `minecraft` user:

    ```bash
    sudo adduser --system --home /srv/minecraft-server
    sudo addgroup --system minecraft
    sudo adduser minecraft minecraft
    ```

## Install

1. Install java:

    ```bash
    sudo apt install openjdk-18-jre-headless
    ```

1. Download the latest QuiltMC Installer:

    ```bash
    wget https://maven.quiltmc.org/repository/release/org/quiltmc/quilt-installer/latest/quilt-installer-latest.jar
    ```

1. Use QuiltMC Installer to install a minecraft server jar:

    ```bash
    java -jar quilt-installer-latest.jar install server MINECRAFT_VERSION --download-server
    ```

    > Note: QuiltMC installs the server into `./server`

1. Run the installed launch server jar:

    ```bash
    java -jar quilt-server-launch.jar --nogui
    ```

    > Note: The server *will* fail to start, asking you to accept the EULA.

1. Change `eula=false` to `eula=true` in `eula.txt` to accept the EULA:

    ```bash
    vi eula.txt
    ```

## Create system service

1. Create systemd unit file at `/lib/systemd/system/minecraft.service`:

    ```systemd
    [Unit]
    WorkingDirectory=/srv/minecraft-server/server
    User=minecraft
    Group=minecraft
    Restart=on-failure
    RestartSec=20 5
    ExecStart=/usr/bin/java -Xms12G -Xmx12G -jar quilt-server-launch.jar --nogui

    [Install]
    WantedBy=multi-user.target
    ```

    > Note: This guide assumes a dedicated host machine with 16GB of RAM. Adjust
    > the `-Xms` and `-Xmx` values accordingly based on your system's resources.

1. Reload systemctl daemon:

    ```bash
    sudo systemctl daemon-reload
    ```

1. Enable system service:

    ```bash
    systemctl enable minecraft
    ```

## Allow through firewall

```bash
sudo ufw allow 25565
```

## Port forwarding

In order for the minecraft server to be accessible beyond the local network, the
service must be forwarded to a port externally. This is typically handled in your
router settings, which differ greatly depending on brand and model.

Generalized instructions for this section are coming soon.
