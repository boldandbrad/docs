# Minecraft Server

This document walks through installing and running a dedicated Minecraft
Server on an Ubuntu Server host. I prefer Ubuntu Server as host because it is
lightweight and not windows.

## Prerequisites

- [Ubuntu Server Setup](environments/ubuntu-server/_home.md)
  - [Enable Firewall](environments/ubuntu-server/enable-firewall.md 'Enable Firewall')
  - [Enable SSH](environments/ubuntu-server/enable-ssh.md 'Enable SSH')
  - [Configure Static IP](environments/ubuntu-server/set-static-ip.md 'Config Static IP')

## Setup

1. Create `minecraft` user:

    > Coming soon.

1. Create folder structure:

    > Coming soon.

## Install

1. Install dependencies:

    > Coming soon.

1. Download minecraft server jar:

    > Coming soon.

1. Install minecraft server jar:

    > Coming soon.

1. Run minecraft server jar:

    > Coming soon.

1. Accept EULA:

    > Coming soon.

## Create system service

Systemd unit file example at `/lib/systemd/system/minecraft-server.service`:

```systemd
[Unit]
WorkingDirectory=/srv/minecraft-server/server
User=minecraft
Group=minecraft
Restart=on-failure
RestartSec=20 5
ExecStart=/usr/bin/java -Xms12G -Xmx12G -jar {server-jar} --nogui

[Install]
WantedBy=multi-user.target
```

## Allow through firewall

```bash
sudo ufw allow 25565
```

## Port forwarding

> Coming soon.
