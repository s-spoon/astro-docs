---
title: "Printers"
draft: false
type: Article
---

Printers are handled by the Aptean Ship Connector(s). The printers are filtered by the Connector they are associated with. If you have more than one Connector, you can make a selection from the Connector field to display its linked printers.

![printers-1](assets/images/printers-1.png)

>[!Tip] **About Connectors** <br>For more information, see the [Aptean Ship Connector](aptean-ship-connector.md) topic.

## Adding a Printer

In the Printers section, click the Add Printer button to set up a new printer. To edit an existing printer, click the pencil icon (Edit Printer button) in the same row as the printer.

### Connector Name

Select the Connector associated with the printer you want to add.

### Printer Name
This drop-down list shows available printers. You can only add printers that have already been added through Microsoft Windows. If you add a printer in Windows while Aptean Ship is open, you must exit and relaunch the Aptean Ship window in order for that printer to appear in the Printer Name list.

### Printer Type

Select the type of printer you are adding. When a thermal printer is selected, you can configure the following fields will be enabled.

#### Print Model Type

Clicking this button will generate a printout of the model information to your printer.

#### Total Label Size

Select the label size. If you are using tear-off audit labels, the label cannot be smaller than 4 x 6.75.
### Move Print Down


This option moves all printing down by the specified number of inches.
### Move Print Right


This option moves all printing to right by the specified number of inches.
## Includes Tear-off Audit Label


Aptean Ship can append a custom Audit Label to the bottom of the parcel shipping label. Checking this option indicates that the label is perforated. When checked, the Tear-Off Type and Audit Label Height fields, and Orientation button, are also enabled.
* Tear-off Type: Horizontal or Notched: Notched label types are used with FedEx. When Tear-Off type is changed, the change will be reflected in the Orientation picture.
* Audit Label Height: Maximum height in inches of tear-off (disabled if "Includes Tear-off Audit Label" is unchecked).
* Orientation: This image shows the tear-off in relation to the direction in which the label is emitted from the printer. Click the Orientation button to change the orientation of the label to reflect the manner in which the label comes out of the printer. The arrow indicates the direction that the label feeds. Orientation determines the direction in which the notch will come out from the printer. For thermal labels that don't include audit labels, orientation is set in the Printing Profile under Laser Labels.


## Supported Printers


Aptean Ship only supports 203 DPI printers; printers that are 300 DPI are unsupported. Aptean Ship may work with 203 DPI printers that use EPL2 or ZPL II thermal programming language. The following printers have been tested and certified to work with Aptean Ship.

>[!Note] ZPLII printers are preferred for cross-carrier printing consistency. Some carrier labels, such as USPS, require printers that support ZPLII.



