# Ubuntu Server Setup

## Create Ubuntu Server Install Media

> TODO: Add format USB drive steps?

1. Download the latest [Ubuntu Server LTS ISO](https://ubuntu.com/download/server)

1. Install [balenaetcher](https://www.balena.io/etcher) drive flasher

    - macOS: `brew install balenaetcher`
    - Windows: `winget install balena.etcher`

1. Plug in 2GB+ removable USB drive

1. Use balenaetcher to flash the USB drive with the Ubuntu Server ISO.

1. Safely eject the USB drive.

## Install Ubuntu Server

> Before proceeding, visit your target device's BIOS settings to check or alter
> the boot order to allow boot from USB.

1. Plug the flashed USB drive into the target target device.

1. Boot the target device.

1. Follow the on screen prompts to install Ubuntu Server.
