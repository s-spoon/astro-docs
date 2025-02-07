---
title: "Advanced Export Setup"
draft: false
type: Article
---

Advanced Export allows you to create and manage Export Templates and Export Fields Templates for Shipment Export.

When you use Advanced Export for the first time, you will need to create at least 1 Export Template and one Export Fields Template.

>[!Info] **About Export Templates**
<br>Export Templates allow you to save a configuration of export settings and an Export Fields Template under an assigned name so it can be selected for future shipment export. The Export Fields Template saves the shipment fields you selected for export, and the field order and column headings for the export file.

Note that if you are also using the Aptean Ship Desktop Client, templates are not compatible between the Desktop Client and the Aptean Ship Web or Aptean Ship Online interfaces. 
### Create an Export Template


1. On the Shipments page, click the **Export** button.

2. Select **Advanced Export**, and click the **Add** button next to the Export Template field.

![aptean-shipping-software-export8-1](assets/images/aptean-shipping-software-export8-1.png)

3. On the Add Export Template dialog box, enter a **Template Name** and configure the following fields:
	* **Auto Export on Post** - When selected, Aptean Ship will automatically export shipments when they are posted at End of Day.
	* **File Formatting** - Specify the delimiter character used to separate export fields in the export file (comma or tab delimited).

	![software-export21-1](assets/images/aptean-shipping-software-export21-1.png)

4. Next, configure the Export Fields. Click the **Add** button to add the Aptean Ship shipment fields that will be exported. See [Export Fields](advanced-export-setup.md#export-fields) below for more information.


### Export Fields


The group of Export Fields selected for this template will be saved under the name you specify in the **Export Fields Name** field. You can also decide whether to export one row of data per BOL Entry, Line Item, Order, Package, Pallet, Rate Quote, Reference or Shipment.

Next, select the Export Fields by expanding each section and enabling the check box next to the fields you want to include. You can select from any Aptean Ship shipment or User Definable fields.

![shipping-software-export9-1](assets/images/aptean-shipping-software-export9-1.png)

 

When all the fields you want to include are selected, click the **Field Order and Headings** page.

![shipping-software-export10](assets/images/starship-shipping-software-export10.png)
 

This page allows you to drag and drop the fields into the order you want them to appear in the export file.

![software-export11-1](assets/images/aptean-shipping-software-export11-1.png)

 

After ordering the fields, you can choose to include the column headings as the first row of the export file. When you check the "Include Column Headings in the First Row" option, you can modify the Column Headings text. When you're done, click **Save**.

![software-export12-1](assets/images/aptean-shipping-software-export12-1.png)

 
### Managing Export Templates and Fields


From the Export Shipments screen, you can add, edit, copy, and delete both Export Templates and Export Fields using the tool buttons.

>[!Info] **Next Steps**
<br>After clicking Save, you’ll be brought back to Export Shipments where you can set Filters, and Preview or Export shipments.
	<br>- [Preview](export-preview.md) - How to preview the export shipments.
	- [Advanced Shipment Export](advanced-shipment-export.md) - Configuring the Export Shipments screen to export shipments.

