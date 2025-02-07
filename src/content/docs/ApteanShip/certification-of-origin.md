---
title: "Certification of Origin"
draft: false
type: Article
---

The Certification of Origin (CO) is a document issued by the exporter that confirms and certifies the country of origin of its products.

When you are shipping between the U.S., Puerto Rico, Canada, and Mexico, you should use the US-Mexico-Canada Agreement (USMCA) Certification of Origin to qualify for the reduced or eliminated duties allowed under the USMCA. As of July 1, 2020, the US-Mexico-Canada Agreement (USMCA) replaces NAFTA (North American Free Trade Agreement).
## Where to Set Up the Certification of Origin


Under Setup > Printing & Scale, go to Printing Profiles and edit the Printing Profile that you use for international shipments. Type “Origin” into the Search field to display the available Certification of Origin documents.

![software-international-coo-1-1](assets/images/aptean-shipping-software-international-coo-1-1.png)

Check the “Enabled” check box next to the document and expand it to set up printing options. If you choose to enable Aptean Ship’s US or USMCA Certification of Origin, you can print it for all carriers or select specific carriers. For more detail on this dialog, see [Document Settings](document-settings.md).

![international-coo-2-1](assets/images/aptean-shipping-software-international-coo-2-1.png)

### When to Use?


Aptean Ship can print the UPS and FedEx Certification of Origins forms. Note that when designating the CO for items in a shipment, you cannot have different Certification of Origin types on the items. If you need to mix CO types, you can print the Aptean Certification of Origin forms.

## Define Certification of Origin for Line Items


You can set up Certification of Origin details for Inventory Items so that when you ship an item, the CO information is automatically populated by Aptean Ship.

In Setup > Maintain > Inventory Items, select the International heading. Scroll down to the Certification of Origin section to set default values for the item.

![international-coo-5-1](assets/images/aptean-shipping-software-international-coo-5-1.png)

 
### Field Mapping


If fields containing these values are available in your source interface, you can map them to the Aptean Ship fields to automatically populate them when you import a source document. This is discussed in the [Mapping International Fields](set-up-line-items.md#map-international-fields) section.

If your CO values will be the same for all of your items, you can also set defaults for these fields at the source document level by setting the field maps for these fields to fixed values. For more information, see [Set Default Values for International Fields](set-up-line-items.md#set-default-values-for-international-fields).
## Shipment Processing


### USMCA Shipment


When processing a shipment, Aptean Ship will automatically check the "USMCA Shipment" option in Transportation > Details when the recipient is located in either Canada or Mexico and at least one line item requires a USMCA Certification of Origin.

![international-coo-4-1](assets/images/aptean-shipping-software-international-coo-4-1.png)
### Certification of Origin Fields


CO fields for an item are located in the Line Item section when you edit (open) an item. Changes or additions to the international fields will be saved [on-the-fly](set-up-line-items.md#modify-imported-line-items-on-the-fly) for items when you process the shipment.

The updating of line items is dependent on the [General Preferences settings](general-preferences.md#line-items-settings) for line items.

>[!Tip] More Information <br>[Certificate of Origin field descriptions](inventory-item-international-data.md#certificate-of-origin)

### View or Print the Certification of Origin


Once your shipment is processed, you can open it to view or print additional copies of the Certificate of Origin. Click the **Recent Shipments** icon and select the shipment.

![international-ci-3-1-1](assets/images/aptean-shipping-software-international-ci-3-1-1.png)

 

The Certificate of Origin appears in the Shipping Documents section. Click the link to view it or click the Print button to print it.

![software-international-coo-6](assets/images/starship-shipping-software-international-coo-6.png)

>[!Tip] If you chose the "Save PDF" option when setting up the Certificate of Origin, the PDF will save to the Printing Folder Path on the Printing tab in the Aptean Ship Connector.

