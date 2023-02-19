# Enable SSH

Enable remote SSH on Ubuntu Server.

## Setup

1. Ensure SSH service is installed:

   ```bash
   sudo apt install openssh-server
   ```

1. Enable SSH system service:

    ```bash
    sudo systemctl enable --now ssh.service
    ```

1. Allow SSH through firewall:

    ```bash
    sudo ufw allow ssh
    ```
