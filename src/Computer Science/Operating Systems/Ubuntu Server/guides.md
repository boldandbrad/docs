---
title: Guides
order: 2
---

# Guides

Helpful commands and guides for Ubuntu Server.

## Firewall

Enable and manage the system firewall on Ubuntu server with `ufw`.

### Enable Firewall

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

### Allow Connection

```bash
sudo ufw allow {port}
```

### Check Status

```bash
sudo ufw status verbose
```

## Enable SSH

Enable remote SSH on Ubuntu Server.

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

## Enable SFTP

Enable secure FTP on Ubuntu Server.

> Coming soon.

## Set Static IP

Setup a static IP address in Ubuntu Server 17+ using the `netplan` utility to
perform network configurations.

> [!tip]
> It is recommended that you also reserve a static IP address for the machine in
> your router settings.

1. Verify which network interface to configure:

   ```bash
   ip link
   ```

2. Edit `netplan` configuration:

   ```bash
   vi /etc/netplan/{config-file}.yaml
   ```

3. Change configuration to match the following:

   ```yaml
   network:
     version: 2
     renderer: networkd
     ethernets:
       {network-interface}:
         dhcp4: no
         addresses:
            - {desired-static-ip}/24
         routes:
           - to: default
             via: {gateway-ip}
         nameservers:
           addresses: [8.8.8.8, 1.1.1.1]
   ```

   > Older ubuntu/netplan versions may use the deprecated `gateway4` keyword
   > and syntax in place of `routes`.

4. Apply changes:

   ```bash
   sudo netplan apply
   ```

5. Verify changes:

   ```bash
   ip addr show {network-interface}
   ip route show
   ```

## Get IP Addresses

Get internal IP Addresses (v4 & v6):

```bash
hostname -I
```

Get external IP Address (v4):

```bash
curl v4.ident.me
```

Get external IP Address (v6):

```bash
curl v6.ident.me
```

Get current network devices and interfaces:

```bash
ip link
```

## Reboot and Shutdown

Restart server:

```bash
sudo reboot now
```

Shutdown server:

```bash
sudo shutdown now
```
