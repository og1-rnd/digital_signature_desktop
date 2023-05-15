#!/bin/bash

# Get the root user
if [ $SUDO_USER ];
	then getSudoUser=$SUDO_USER;
	else getSudoUser=`whoami`;
fi

# Get the path for app desktop entry which is created by auto-launch script
getDesktopEntry=/home/$getSudoUser/.config/autostart/ЭЦП.desktop;

# Remove desktop entry if exists
if [ -f $getDesktopEntry ]; then
    sudo rm $getDesktopEntry;
fi

# App directory which contains all the config, setting files
appDirectory=/home/$getSudoUser/.config/ЭЦП/;

if [ -d $appDirectory ]; then
    sudo rm -rf $appDirectory;
fi

# Delete the link to the binary
echo 'Removing binary link'
sudo rm -f '/usr/local/bin/${executable}';
