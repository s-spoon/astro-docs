---
title: "Main Inventory Item Info"
draft: false
type: Article
---

The Main section contains all the basic information about the item that will populate the Line Item information in the Shipment Editor screen.
### Item Number


This is a required field. Items that have the same item number must have a different Unit of Measure.
### Unit of Measure


This is a required field. The default value is "Each". Item numbers for Inventory Items can be the same but you must define a different UOM for these items.
### Until Weight


Enter a weight in 0.000 format. This is the weight of each "unit of measure" of this item. Example: if you selected "Each" as the unit of measure, enter the weight of each item.

When you ship against items from an order or other source interface document, the weight data from the source interface is imported and saved for each item in Maintain > Inventory. You may change this weight on the Line Item tab, and if you do so, the new weight is saved to the Inventory Item. However, the next time that item is imported from an order, etc., the source interface weight will overwrite the Aptean Ship database weight for the item. The only exception is when the item does not have weight data defined in the source interface. In that case, Aptean Ship weight data is always used.
### Unit Value


0.000000 format: value of each "unit of measure" of this item. Example: if you selected
"Each" as the unit of measure, enter the value of each item.
### Part Number


The Part Number is the code that uniquely identifies an inventory item without reference to any list or manual. A part number can also consist of the model number, year of manufacture, and other such information.
### Marks/Numbers


These are the identifying symbols and numbers placed by the shipper on each piece of cargo in a shipment.
### UPC


Enter the Universal Product Code number, the 12 numeric digits that are uniquely assigned to each trade item.
### GTIN


Enter the Global Trade Item Number. The GTIN is a globally unique 14-digit number used to identify trade items, products, or services.

>[!Tip] UPC vs GTIN?" show\_icon\="true" id\="" class\="" style\="" ]A UPC-12 and GTIN-12 are one in the same. GTIN: GTIN numbers are correctly called Global Trade Item Numbers or GTINs. UPC: UPC numbers are correctly called Universal Product Code Numbers or UPCs. There are a variety of different types of barcodes. However, the UPC symbol is the most recognized barcode in the United States, since it appears on almost every retail product. The UPC (Universal Product Number) symbol is the barcode representation of the GTIN-12 which consists of twelve numeric characters that uniquely identify a company’s individual product. The GTIN-12 number is part of the family of GS1 global data structures that can be encoded into various types of data carriers. (Source: [QualityUPC.com](http://www.qualityupc.com))
### Stackable


Check this box if the item can be stacked.
### Hazardous


Check this option if the item is hazardous.
## Product Images


Aptean Ship allows you to store one image per inventory item. The file must be in a
standard image format and not more than 1MB in size : BMP, GIF, JPG or PNG.

To add or change a product image, click the Product Image box. You can then select an image to use.
### Where do product images display?


Product images display when the item is selected on the Line Item tab.

 

