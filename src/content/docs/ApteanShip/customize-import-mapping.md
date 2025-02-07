---
title: "Customize Import Mapping"
draft: false
type: Article
---

After [importing your data and defining the input columns](import-template-setup.md#define-input-columns) for the template, the next step in setting up the Import Template is to customize the field mapping between the input columns and Aptean Ship Shipment fields. The customization applies only to the import template that is currently open in the Import Template Setup window.
## Which Fields to Map


### Minimum Field Mapping


In order for shipment data to be properly imported, the following Aptean Ship fields must be mapped to the template input columns.
* Order > Order Number: This field can be mapped to the shipment or order Primary Key, depending on the input data.
* Recipient Address fields (Address 1, City, State, Postal Code, Telephone)


### Line Items


For line item data to be imported, the following Aptean Ship fields must be mapped:
* Shipment > Line Item > Item Number
    >[!Tip] If the item number matches an item in your Aptean Ship inventory, Aptean Ship will populate the shipment with the inventory data.
* Shipment > Line Item > Ordered Units
* Shipment > Line Item > Units to Ship


### Package Contents


To import package contents data, the four fields under Shipment > Packaging > Contents must be mapped to your input columns.
* Sales Order Number
* Item Number
* Item Quantity
* Unit of Measure


### Handling Units


Map this field if packages will be placed onto handling units, such as pallets.
* Shipment > Handling Unit > Handling Unit ID:


### Other Fields


Beyond these basic requirements, any other Aptean Ship Shipment fields can also be mapped, based on your company's needs. Please make sure that the data level for each input column is correctly assigned.

>[!Note] Write-Back can be supported through Shipment Export.

## How to Map Fields


If you're setting up a template for the first time and following the documentation, you should be back at the Shipment Import Setup screen after defining your input columns. This screen gives you access to field mapping for a template.

You can also access this screen by clicking the **Import** button on the Shipments page and selecting the template you want to edit.

![shipping-software-import-16-1](assets/images/aptean-shipping-software-import-16-1.png)
 

To access the field mapping area, click the **Customize** button.

![shipping-software-import-14-1](assets/images/aptean-shipping-software-import-14-1.png)

### View: Aptean Ship Shipment or Input Columns


At the top of the screen, you'll see a drop-down list that gives you the choice to view this page from a Aptean Ship Shipment field perspective or from an Input Columns perspective. To map specific shipment fields, you can leave the default setting and either navigate to or use the Search field to find and map those fields to your input columns. The Input Columns setting will show you the input columns from the template and allow you to map the values to Aptean Ship Shipment fields.

**Aptean Ship Shipment**

This is the Aptean Ship Shipment view, with Aptean Ship Shipment fields on the left.

![shipping-software-import-18-1](assets/images/aptean-shipping-software-import-18-1.png)

Map the Aptean Ship field to "Maps from Import Shipment Field" (this is the input column) and select the field.

![shipping-software-import-22-1](assets/images/aptean-shipping-software-import-22-1.png)

**Input Columns**

This is the Input Columns view, with Input Column fields on the left.

![shipping-software-import-19-1](assets/images/aptean-shipping-software-import-19-1.png)

Map the Input Column field to the Aptean Ship field.

![shipping-software-import-20-2](assets/images/aptean-shipping-software-import-20-2.png)

You can type into the Search field to find a specific field.

![shipping-software-import-21-1](assets/images/aptean-shipping-software-import-21-1.png)

 
## Done Mapping Fields?


Click the **Save All Maps** button to save your work. This will bring you back to the Shipment Import Setup screen. You can see the number of fields you mapped and if you click the "Show" link, your mapped fields display in a table. Click the "Hide" link to hide the fields.

![shipping-software-import-23-1](assets/images/aptean-shipping-software-import-23-1.png)

 

>[!Note] **Next Steps** <br>[Import Template Settings](import-template-settings.md) - Configure additional settings for batch import and handling shipment data.

