# Configure

## Setup Operators

Allow specific players to moderate the server.

Setup:

- Add desired moderators to `ops.json` list:

    ```json
    [
    {
        "uuid": "{UUID}",
        "name": "{USERNAME}",
        "level": 4,
        "bypassesPlayerLimit": false
    }
    ]
    ```

## Setup AllowList

Only allow listed players to connect to the server.

Prerequisite: [Setup Operators](#setup-operators)

Config:

- `server.properties`: `white-list=true`

Server Operators can manage the allowlist in game using the `/whitelist` sub
commands.
