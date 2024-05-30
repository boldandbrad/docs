---
title: Install
---

# Raspberry Pi OS - Install

Setup a new Raspberry Pi OS environment.

## SD Card Setup

Flash Raspberry Pi OS installer to an SD card.

1. Install the latest [Raspberry Pi Imager](https://www.raspberrypi.org/downloads/)

    - macOS:

        ```sh
        brew cask install raspberry-pi-installer
        ```

    - Linux:

        ```bash
        sudo apt install rpi-imager
        ```

    - Windows: Download from [raspberrypi.org](https://www.raspberrypi.org/downloads/).

2. Plugin an empty SD card

3. Run the Imager, select an OS, select an SD install location and click **Write**

4. Safely eject the SD card

> [!tip]
> Enable SSH (optional) - If you'd like to enable SSH in Raspberry Pi OS,
> _prior_ to ejecting the SD card and inserting it into the Raspberry PI, add an
> empty file called `ssh` to the root of the drive.

## Boot

> Coming soon.
