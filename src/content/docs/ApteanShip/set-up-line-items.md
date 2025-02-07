---
title: "Set Up Line Items"
draft: false
type: Article
---

Aptean Ship uses line items as commodities. International shipments can be driven by line item detail imported from the source document (orders, shipments, etc.).

To make processing international shipments as efficient as possible, consider these methods for getting international data automatically populated.
* [Map international fields](#map-international-fields) from your source interface to Aptean Ship fields so values are imported automatically;
* [Set up defaults for international fields](#set-default-values-for-international-fields) that are required for shipping but not available in your source interface;
* [Modify imported line items on-the-fly](#modify-imported-line-items-on-the-fly) while shipping; item detail will be saved to the Aptean Ship database and used the next time you ship those items. Note that in order to save and use line item detail from the Aptean Ship database, you need to have both line item settings in [General Preferences](general-preferences.md) enabled.


## Map International Fields

To ensure all of the international data for your items is brought over into Aptean Ship when you import a source document, you can map international shipment fields to fields in the source interface or set them to specific default values. For fields that do not exist in your source interface, you can set defaults in Aptean Ship for those fields.

To map international shipment fields for your source interface, go to Setup > Source Interfaces and select your source interface.

Click the **Interfaces** page heading and then select the **Customize Interface** button for the document(s) you are shipping against.

![commodities-1](assets/images/starship-shipping-software-international-commodities-1.png)

On the **Select Mappings** page, expand the **Shipment** folder.
## International Shipment-level Fields


Select the **International** folder to map the international shipment fields found at the shipment level in the Transportation section of the shipment (in both the Details and International sections). 

![commodities-2](assets/images/starship-shipping-software-international-commodities-2.png)

Select an Aptean Ship shipment field and then choose the source interface field you want to map to.

![commodities-3-1](assets/images/aptean-shipping-software-international-commodities-3-1.png)
## Line Item-Level Fields


To map international fields for line items from the source interface, select the **Line Item** folder and then the **Commodity Info** folder. This includes Schedule B, Commercial Invoice, Certificate of Origin, EEI, etc.

![](assets/images/starship-shipping-software-international-commodities-8.png)
## Set Default Values for International Fields


Some international fields may not exist in your source interface. In this case, you can set those fields to a fixed value. For example, if you know you always want to use either the USMCA or Standard Certificate of Origin, you can set the Certificate Type to default to that value.

![](assets/images/aptean-shipping-software-international-commodities-9-2.png)

As another example, if the Country of Manufacture will always be "United States", you can set it to a fixed value to have that field automatically populated on the Certificate of Origin.

![](assets/images/aptean-shipping-software-international-commodities-10-1.png)

 

> [!Tip] "Required Fields" show\_icon\="true" id\="" class\="" style\="" ]Certain fields are required in order to successfully ship an international shipment. You can make sure these fields are mapped, set to a default value, or saved with the inventory item to avoid any extra manual configuration while shipping. See [Required International Fields](http://ask.shipping.apteancloud.com/akb/required-international-fields/) for a list of fields and more information.
## Modify Imported Line Items On-the-fly


You can also build your items library as you ship by adding any missing detail to items that are imported from the source document. Any of the items' data is saved to the Aptean Ship database when you process the shipment and used the next time you ship the same item(s).

After you've selected a source document to ship against, go to the **Line Items** section of the shipment and select Edit.

![commodities-11](assets/images/starship-shipping-software-international-commodities-11.png)

Once your line items are expanded, edit an item by clicking the **Open** button.

![commodities-12-1](assets/images/aptean-shipping-software-international-commodities-12-1.png)

Select the **International** heading and select or modify international values. When you ship the item, your modifications will be saved for the next time you ship the item.

![commodities-14-1](assets/images/aptean-shipping-software-international-commodities-14-1.png)
## Inventory Item Data


Items that are saved to the Aptean Ship database can be modified in Maintain > Inventory Items.

![commodities-4](assets/images/starship-shipping-software-international-commodities-4.png)

Select the International section to update field values. For a description and more information about each of these fields, see [International Data](inventory-item-international-data.md).

![commodities-5](assets/images/aptean-shipping-software-international-commodities-5-1.png)


## Note About Importing Inventory Items


New users may want to use the [Data Import](import-data.md) function in Maintain Inventory to import items from a text or . csv (comma-delimited) file. To import inventory items, go to Maintain > Inventory Items and click the Import button.

![commodities-6-1](assets/images/aptean-shipping-software-international-commodities-6-1.png)

You'll then be able to configure the target fields and how imported values are translated into Aptean Ship shipment values, and view the import results. See [Data Import](import-data.md) for in-depth information.

 

