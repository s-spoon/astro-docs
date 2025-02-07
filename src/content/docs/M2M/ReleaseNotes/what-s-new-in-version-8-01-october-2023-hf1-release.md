---
title: "What's New in Version 8.01 October 2023 HF1 Release"
draft: false
type: Article
---

## Resolved Issues

The following issues have been fixed in this release:

| ID         | Description                                                                                                                                                                                                                                                       |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEV-156591 | When using the Shipping Service with UPS World Ship, for a shipment with multiple tracking numbers, only the first tracking number was updated on the shipper in M2M.                                                                                             |
| DEV-160481 | When double clicking in the Amount Applied field to auto fill the amount, the screen would flicker constantly and not allow the user to save the transaction to apply the amount.                                                                                 |
| DEV-164767 | When filtering the Items tab on the PO page and selecting one of the results of the filtered lines to open the PO Item Details, when edits are made to the line item upon saving the system will jump to another PO line and not stay on the line you had edited. |
| DEV-168612 | When attempting to change status on the Sales Order lines or releases of an SO with over 150 lines or releases was not loading the change status popup in a timely manner and eventually leading to a time out error.                                             |
| DEV-168655 | When creating a Bill of Lading from a Shipper that has a Ship Via that is longer than 20 characters users were receiving an error.                                                                                                                                |
| DEV-174922 | Using Data Loader to import standard routings was not updating the SPQ with the operation quantity from the import sheets.                                                                                                                                        |
| DEV-174963 | When custom variants are created and flagged as the default to use for the report, opening the report interface was selecting the M2M standard instead of the custom variant as it should.                                                                        |