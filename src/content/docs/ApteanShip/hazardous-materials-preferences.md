---
title: "Hazardous Materials Preferences"
draft: false
type: Article
---

Preferences setup for Hazardous Materials allows you to configure Hazardous Materials options. The contact information populates the Hazardous Materials contact fields on the Ship screen when you are processing a shipment. There is also an option that lets you control how Hazardous Material line items affect Packaging.
## Aptean Ship will control the Hazardous Materials option and profile for a package based on its line items


Decide how Aptean Ship will populate Hazardous Materials detail based on line items.
### Always


This option is geared towards users bringing over items from source interface orders or from Aptean Ship inventory, and provides the most automation. You would create Hazardous Materials Profiles and assign them to inventory items before processing shipments.

Aptean Ship will automatically set the Hazardous Materials/Dangerous Goods option and Profile based on the line items packed. The user will not be able to select/deselect the Hazardous check box for the Line Item > Item Details, or the Hazardous Materials check box under Shipment Details.

>[!Tip] **Best Workflow for Automation** <br>This is the best workflow for users who are shipping with line items that have assigned Hazardous Materials profiles; Hazardous Details are populated automatically.


### For packages with line items only


This option is geared towards users who may ship both with and without line items. The Hazardous check box and HazMat Profile are based on items in the package; If any line items in the package are designated as hazardous, the Hazardous Materials/Dangerous Goods option will be checked and the associated Hazardous Materials profile will be selected. If a package has no items, the user can select the Hazardous option and HazMat Profile manually on the Package in Package Details.


>[!Tip] **Best Workflow for Flexibility** <br>This is best solution for users who want Hazardous options to be based on items, and Hazardous Materials options are set either automatically by Aptean Ship or manually by the user.


### Never


This option is good for users who want to select Hazardous Materials options at the package level. It's a good solution if you don't use line items or you don't want to set up Hazardous Materials Profiles for each item.

The Hazardous Materials/Dangerous Goods flag will not be based on line items. It must be checked manually in Shipment Details, and the shipper will select a Hazardous Materials profile under the Line Item > Item Details. If a line item is hazardous, the user must check the Hazardous option or the shipment cannot be processed.


>[!Tip] **Best Workflow for Manual Processing** <br>The workflow here would be shipping without line items or no item-to-hazardous-profile connection; user controls Hazardous Details for each shipment.


## Emergency Contact Information


If you want to use the contact information from the default Sender address (MAIN) entered in Setup > Company, check the Default to Main Company Contact check box.

![](assets/images/aptean-ship-hazmat-1.png)

Alternately, you can uncheck that option and type the contact information into the provided fields. If you are shipping Infectious Substances, enter the information into the Infectious Substances Contact field.

>[!Note]  
>* The signature and title fields are required for FedEx Hazmat shipments.
>* If these fields are mapped from the source interface in Customize Interface (Target Fields > Shipment > Shipment Options > HazMat Settings), the values that are imported from the source interface will overwrite the defaults set here.



