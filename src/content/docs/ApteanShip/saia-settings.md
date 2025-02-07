---
title: "Saia Settings"
draft: false
type: Article
---

These settings apply to all Saia accounts and can be accessed from Setup > Carrier Interfaces > Saia > Settings.
## Reference Fields


Reference fields allow you to define additional information for the shipment; for example, you can define a field that you want to print on the Saia BOL. Aptean Ship supports 2 different reference fields at the shipment level for Saia: Purchase Order Number and Department Number.

Specify the shipment fields to include as a reference field by selecting from the drop-down list. You can type into the magnifying glass field to search for and select another shipment field.

>[!Tip] For more information, see [Reference Fields](carrier-reference-fields.md).
## Address 3


Saia supports two address lines. The recipient's Address 3 field is uploaded to the carrier but not printed on the shipping label. In cases where Address 3 field data is present, select how Aptean Ship should handle it.
* Ignore: Address 3 field data is discarded.
* Warn: Aptean Ship prompts the user with the option to stop processing the shipment and change the recipient address, or continue processing the shipment with the address as-is.
* Combine: Address 3 field data is appended to the Address 2 field, with a maximum character limit of 33 characters.


 

