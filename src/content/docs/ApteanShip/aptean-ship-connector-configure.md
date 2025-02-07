---
title: "Aptean Ship Connector Configuration"
draft: false
type: Article
---

The Aptean Ship Connector controls the connection to the printing agents necessary for generating labels and shipping docs, and electronic scales.

### Desktop Application vs. Windows Service

The Aptean Ship Connector can be run as either a desktop application or as a Windows service. The installer will install the files necessary to run in both modes. The mode in which you run the Connector is up to you. You may want to run in Service mode so you can control the user that runs the service, giving that user account Administrator rights, vs Desktop mode, where logged in shippers will have Administrator rights.

The mode in which the Connector is running is indicated at the top of the Connector screen.

### Service mode


When running the Connector in service mode, we advise running the Connector service as the user that will be signed into the local machine with the printers attached and this user should have local administrative rights.  This will provide the print agent service with the permission to run and allow the logged-in user to see all of their previously added printers.

### Set Up the Connector


The Aptean Ship Connector can be launched from Aptean Ship Program menu (Start > Programs > Aptean Ship > Aptean Ship Connector). The Connector runs in the Windows System Tray. Doubleclick the icon to open it.

Any component  Scales, and/or Printing  can be unchecked if not needed on this PC. Components that are not enabled will not appear in Aptean Ship.
### Scales


On the Scales tab, check “Scales Support Enabled” to enable and set up a scale. Then, enter the Scale Server address.

![aptean-connector-8](assets/images/aptean-connector-8.png)

Click **Setup Scales** to set up a USB or COM scale. For USB scales, the list of scales will display any USB scales that are currently connected and active in Windows.

To add a COM scale, click the Add COM Scale button. Select the scale type and the COM port from the dropdown lists.

![aptean-connector-9-1](assets/images/aptean-connector-9-1.png)

Configure the scale communication parameters and click Save. You can review the factory settings for all supported scales here [Supported Scales](supported-scales.md).

![connector-com-scale](assets/images/starship-connector-com-scale.png)

Once you are done configuring scales, click the Save Config for Selected Scale button.

### Printing/EDI Support

In Printing, you can configure printing settings, enable Print Agents and set the number of Print Agents for each Aptean Ship Location, and set the location of the Shared EDI folder.

**Configure Printing Values**

* Printing Support Enabled: This check box must be checked in order to print or to enable EDI.
* Aptean Ship Server Address: This is the address and port for the Aptean Ship Server.
* Printing Service Address: This is the Aptean Ship Server address and port 20003. Ex: “net.tcp:ApteanShipServer:20003”
* Print Agent Timeout: This is the maximum time in seconds to start and initialize the Print Agent before timing out.
* Print Job Timeout: This is the maximum time in minutes to complete a printing task before timing out.
* Printing Path Folder: Select a folder to which files should be printed.
* Shared EDI Folder: Aptean Ship will create the EDI files and save them to a shared folder that is defined here. Each person using a different Connector for printing will also need to point to the same shared EDI folder. Therefore, each user with a different printing Connector needs to set up this shared location in their Connector's Printing settings. If the EDI path is remote you should use a UNC path instead of a mapped drive.
Aptean Ship will create subfolders under the folder specified here for each EDI Provider in use.


**Set Up Printing Locations**

1. Click the Configure button to see the list of locations.
2. Check the “Enabled” column for the locations to use with this Connector.
3. Set the number of Print Agents per location.


### Settings

The settings section contains the paths to locations of the logging and config files. Check the AutoUpdate Enabled check box to enable automatic updating of the Connector. If the current Connector won't work with the new Aptean Ship version, the Connector will auto update immediately; if it will work with the new Aptean Ship version, the Connector waits until 3-4 AM to auto update.

### Diagnostics

This section allows you to tests communications between the Connector and the Aptean Ship Server.

 

