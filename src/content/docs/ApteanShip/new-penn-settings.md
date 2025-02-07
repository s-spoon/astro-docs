---
title: "New Penn Settings"
draft: false
type: Article
---

These settings apply to all New Penn accounts and can be accessed from Setup > Carrier Interfaces > New Penn > Settings.
## Reference Fields


Reference fields allow you to print additional information on the BOL using a reference field, such as the PO#, or any other information that may not normally appear in a shipment’s details. Aptean Ship supports 2 reference fields at the shipment level.

Specify the shipment fields to include as reference fields by selecting them from the drop-down lists. You can type into the magnifying glass field to search for and select another shipment field.

>[!Tip] For more information, see [Reference Fields](carrier-reference-fields.md).
## Address 2 & 3 Fields


New Penn supports one address line. In cases where Address 2 and Address 3 field data is present, select how Aptean Ship should handle it.
* Ignore: Address 2 and Address 3 field data is discarded.
* Warn: Aptean Ship prompts the user with the option to stop processing the shipment and change the recipient address, or continue processing the shipment with the address as-is.
* Combine: Address 2 and Address 3 field data is appended to the Address 1 field, with a maximum character limit of 30 character


