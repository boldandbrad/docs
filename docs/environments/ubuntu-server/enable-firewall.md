# Enable Firewall

Enable firewall on Ubuntu Server.

## Setup

1. Ensure `ufw` is installed:

    ```bash
    sudo apt install ufw
    ```

1. Set firewall defaults:

    ```bash
    sudo ufw default deny incoming
    sudo ufw default allow outgoing
    ```

1. Enable firewall:

    ```bash
    sudo ufw enable
    ```

## Allow Connection

```bash
sudo ufw allow {port}
```

## Check Status

```bash
sudo ufw status verbose
```
