---
title: Cleanup
---

# macOS - Cleanup

Over time the macOS filesystem will become cluttered with unnecessary log files
and application data. Not only can these files take up unnecessary disk space,
but they can also pose a privacy and security risk if a malicious script or
actor were to gain access to your system.

This guide covers where to look for and how to cleanup these pesky files.

## Automated Cleanup

<!-- Todo: Cover tools like AppCleaner and Raycast for automatically removing app files when removing apps. -->

> Coming soon.

## Manual Cleanup

Unfortunately not all data and files can be easily removed automatically. In
these cases you might need to do the work yourself. I recommend searching
through the following locations for unwanted files on a semi regular basis.

### Local Data

- `~/Downloads/`
- `~/Library/Application Scripts/`
- `~/Library/Application Support/`
- `~/Library/Caches/`
- `~/Library/Logs/`

### iCloud Data

Some macOS and iOS applications may store data in iCloud to enable cross-device
syncing, data backups, or other features. Often folders and data will exist in
iCloud long after the app was deleted or had its iCloud access revoked.

Be sure to only remove folders and files for applications you have deleted from
all of your devices or have revoked iCloud access from.

Here are some locations to check for needed cleanup:

- `~/Library/Application Support/CloudDocs/session/containers/`
- `~/Library/Mobile Documents/`

  Since macOS treats iCloud as the source of truth for this data, locally
  running `rm -rf` won't work. As soon as the folders/files are deleted, they
  will be redownloaded from iCloud. Instead, use the System Settings on macOS or
  iOS to clear the data.

  System Settings -> User -> iCloud -> Manage Account Storage.

  If you do not see the application listed in System Settings but you do see a
  folder for it in `Mobile Documents`, do the following to make it appear:

  In the `iCloud~com~app~name/Documents` folder create a text file:

  ```
  touch iCloud~com~app~name/Documents/tmp.text
  ```

  If the `Documents` subdir doesn't exist, create it.
