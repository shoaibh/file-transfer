# file-transfer
Fastest way to transfer files to devices connected on the same wifi. This app should be ran on a Laptop or Desktop.

This is a basic nodejs app with which you can upload any file from any device and download on some different device given that they both are connected on the same wifi.

The idea to make this came because I was unable to transfer file from my Android phone to Macbook.

## Step 1

- Install git on your laptop/Desktop:
    for mac - https://git-scm.com/download/mac
    for windows - https://git-scm.com/download/win
- Install nodejs:
    https://nodejs.org/en/download)https://nodejs.org/en/download
- Install nvm:
    https://codedamn.com/news/nodejs/nvm-installation-setup-guide

## Step 2

- Clone this repo ` `
- go to the directory in your terminal `cd /path_to_cloned_repo/file-transfer`
- run  `nvm use`
- run `npm i`

## Step 3

- run `npm start`
- Now go to `http://localhost:3000`
- you'll see something like this <img width="551" alt="image" src="https://github.com/shoaibh/file-transfer/assets/31370134/70d7c2b9-68f0-4595-b63b-1ec64390b764">

## Step 4

- On your terminal, run this command to see the ip
    on mac: ifconfig | grep "inet " | grep -v 127.0.0.1
    on windows: ipconfig | findstr "IPv4" | findstr /V "127.0.0.1"
- you'll see something like this <img width="445" alt="image" src="https://github.com/shoaibh/file-transfer/assets/31370134/7d5cb794-1124-44aa-815d-3ba4e51a3cd3">

- copy the ip after inet and then go to that ip from some other device. Don't forget to put the port after ip i.e. `192.168.1.7:3000` for me.
- on mobile, it should look like this 
![1697279639965-Screenshot_20231014_160346_Chrome](https://github.com/shoaibh/file-transfer/assets/31370134/3f540d2f-cef7-4dcb-945a-d002b3ef5e54)


And it's done. Now upload and download files from different files. Since, the devices are connected through the same wifi, you'll get upto the maximum speed of your wifi.


  
