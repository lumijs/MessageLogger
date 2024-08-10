# MessageLogger
A message logger for Discord that runs silently in the background and stores deleted messages/media to disk even when the client is closed.

This project was written out of boredom and is lacking many features (and is also useless to most).

## Planned

- [ ] Saving attachments to disk.
- [ ] Displaying attachments in dashboard.
- [ ] Ability to disable dashboard or even rework how the logged content is displayed.
- [ ] Better dashboard (current is temporary).
- [ ] idk, something
## Notice
This package is intended to be used with user accounts and utilises a self-bot package to do so. Using self-bots are against Discord's terms of service. I am not responsible if your account gets disabled, locked, etc.

## Missing folders
For this to work you need to make the following folders in the main directory of the project:

"databases" then inside of the databases folder make two folders named "guilds" and "dms"

 databases will be a folder, then guild and dms will be nested folders and this is where the databases for messages will be stored locally.
