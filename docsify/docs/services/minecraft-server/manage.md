# Server Management

Commands for managing the minecraft server.

## Service Commands

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

## World Management

- Backup:

    > Coming soon.

- Swap:

    > Coming soon.

## Minecraft Versions

- Update Server:

    From the directory that contains `./server`:

    ```bash
    java -jar quilt-installer-latest.jar install server NEW_MINECRAFT_VERSION --download-server
    ```

- [Update Mods](services/minecraft-server/mods.md)
