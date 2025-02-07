---
title: "NMFC Overview"
draft: false
type: Article
---

Maintain NMFC allows you to keep an NMFC Codes database. You can add, edit, delete, or search NMFC information. See [Classification](classification.md) for more information about NMFC Codes.
## Manage NMFC


On the Maintain > NMFC page, click the Add Importer button to launch a dialog where you can enter a new Importer.

![maintain-nmfc-1-1](assets/images/maintain-nmfc-1-1.png)

 

If you want to edit an existing NMFC entry, select the Edit button in its row.

![maintain-nmfc-2-1](assets/images/maintain-nmfc-2-1.png)

 

The main window shows you the list of available NMFC Codes and their associated information. Click on the column headings to rearrange the columns or change the sort order (ascending/descending).

![maintain-nmfc-4-1](assets/images/maintain-nmfc-4-1.png)

## Search NMFC Codes


Add filters or type directly into the Search field to find specific NMFC Codes. The first column defines the Search field criteria. To change the Search field, you can drag a column to the first position.

![maintain-nmfc-5-1](assets/images/maintain-nmfc-5-1.png)

To create a more advanced search based on shipment fields, you can build a query that can be saved and reused in Maintain > NMFC. See [Queries](http://ask.shipping.apteancloud.com/akb/maintain-queries/) for more information.

## NMFC and Inventory


If you enter complete NMFC data (NMFC Code, Freight Class, NMFC Description) when adding/editing an inventory item in [Inventory Freight](inventory-item-freight.md), the NMFC data will be saved to the NMFC database. If the NMFC data is not complete, it will only be saved with the Inventory Item, not to the NMFC database. Similarly, when you type in the NMFC Code for an inventory item, and that code exists in the NMFC database, the remaining NMFC fields (Freight Class and Description) will be automatically populated with the data from the NMFC database.

## Inventory Item Adjustment


If you change the Freight Class for an existing inventory item and/or group, Aptean Ship displays an Adjustment Confirmation.  You can either:
* Update the freight class for the inventory item and group; references to the associated groups that no longer match will be cleared from the Group field;
* Cancel changes;
* Return to Maintain > NMFC.






