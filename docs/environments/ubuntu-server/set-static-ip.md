# Set Static IP Address

This guide covers how to setup a static IP address in Ubuntu Server. It is also
possible, and recommended, to reserve a static IP address for the machine in
your router settings.

> Ubuntu 17+ uses `netplan` utility to perform network configurations.

## Setup

1. Verify which network interface to configure:

    ```bash
    ip link
    ```

1. Edit `netplan` configuration:

    ```bash
    vi /etc/netplan/{config-file}.yaml
    ```

1. Change configuration to match the following:

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

1. Apply changes:

    ```bash
    sudo netplan apply
    ```

1. Verify changes:

    ```bash
    ip addr show {network-interface}
    ip route show
    ```
