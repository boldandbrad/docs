---
title: Install
order: 0
---

# Ubuntu Server - Install

Install and setup a new Ubuntu Server environment.

## Create Installation Media

Flash the Ubuntu Server installer to a bootable drive.

<!-- TODO: Add format USB drive steps? -->

1. Download the latest [Ubuntu Server LTS ISO](https://ubuntu.com/download/server)

1. Install [balenaetcher](https://www.balena.io/etcher) drive flasher:

        - macOS: `brew install balenaetcher`

        - Windows: `winget install balena.etcher`

1. Plugin a 2GB+ removable USB drive

1. Use balenaetcher to flash the USB drive with the Ubuntu Server ISO

1. Safely eject the USB drive

## Install Ubuntu Server

> [!tip]
> Before proceeding, visit your target device's BIOS settings to check or alter
> the boot order to allow booting from USB.

1. Plugin the installation media USB drive to the target device.

2. Boot the target device.

3. Follow the on screen prompts to install Ubuntu Server!
