#!/bin/bash

ln -sf '/opt/${productFilename}/${executable}' '/usr/local/bin/${executable}';
echo 'Successfully added /opt/${productFilename}/${executable} to /usr/local/bin/${executable}'
