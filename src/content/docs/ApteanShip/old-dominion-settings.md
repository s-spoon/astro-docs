---
title: "Old Dominion Settings"
draft: false
type: Article
---

These settings apply to all Old Dominion accounts and can be accessed from Setup > Carrier Interfaces > Old Dominion > Settings.
## Reference Fields


Reference fields allow you to define additional information for the shipment; for example, you can define a field that you want to print on the Old Dominion BOL. Aptean Ship supports 1 reference field at the shipment level.

Specify the shipment field to include as a reference field by selecting from the drop-down list. You can type into the magnifying glass field to search for and select another shipment field.

>[!Tip] For more information, see [Reference Fields](carrier-reference-fields.md).
## Address 3


Old Dominion Web Services supports two address lines. In cases where Address 3 field data is present, select how Aptean Ship should handle it.
* Ignore: Address 3 field data is discarded.
* Warn: Aptean Ship prompts the user with the option to stop processing the shipment and change the recipient address, or continue processing the shipment with the address as-is.
* Combine: Address 3 field data is appended to the Address 2 field, with a maximum character limit of 33 characters.


    ![](assets/images/od-4.png)

