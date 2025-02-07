---
title: "What's New in Version 8.01 October 2023 Release"
draft: false
type: Article
---

## New Features

#### Type-ahead Search functionality Enhancement

Type-ahead search functionality has been updated. As you enter the search text, it will display more information in the drop-down search results, similar to a Browse window with columns enabled in the Data Dictionary form. Users can also select an item with a simple press of the Enter key on a specific row, improving the user experience.

#### Open NCR screen from SFMS screen

In the Supervisor Console, users can now access the Non-conformance Request link by clicking "More Actions" on the Job Order Status tab and quickly navigating any NCR raised against the job order. When you click the link, it opens the NCR page as a breadcrumb displaying relevant data. However, if no NCR is raised against the job order, the NCR page will appear blank with New and other options.

#### Inter-Company Buy-Sell

With this release, a new functionality has been added to Made2Manage that will allow you to have a purchase order created in one company automatically create a sales order in another company within your M2M tenant. Once the feature is enabled, you will be able to designate a vendor as inter-company and select which corresponding M2M company the vendor would have sales orders created in, along with the account number in the corresponding company for that vendor. You will have control at setup to have the sales order created in either open or awaiting approval status, as well as control on whether the receivers are automatically created when the shipper of the sales order is confirmed; and if they are created, whether they are in open or received status. Enabling this feature does require a minimum of two (2) companies in your Made2Manage tenant and will not be available to enable if you only have one (1) company.

## Resolved Issues

The following issues have been fixed in this release:

| ID         | Description                                                                                                                                                                                                                                                                                   |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEV-170489 | When loading the account records with proper addresses, the default first linked addresses for ship to and sold to keys are not being created.                                                                                                                                                |
| DEV-161050 | Using the widget for Sales Orders Scheduled to Ship is displaying a total count number of the individual line items available to ship and not the total Sales Orders. The tile has been renamed to indicate the count represents the SO line items.                                           |
| DEV-166787 | When voiding an invoice as part of an exported EFT Batch, after doing several voids in a row the system will throw an error and you are no longer able to void any EFT batches or invoices within the batch.                                                                                  |
| DEV-168221 | The description field for the part number on the Invoice Approval page for on hold invoices is not the same size as the field on the AP Invoices causing errors when the description is larger and the user goes to approve the invoice.                                                      |
| DEV-171367 | When attempting to filter the parts via Query Parts on the ECO Generation tab of the ECO Master Summary throws errors and does not allow the user to see or select parts to add to the ECO summary.                                                                                           |
| DEV-170137 | When the logged in M2M user closes the individual browser tab without logging out, the system was leaving ghost sessions logged in for certain pages within the application and causing the users to see duplicated data and errors on the screen.                                            |
| DEV-162866 | When using the auto filter row on the search or browse results screen, the focus of the cursor was not staying in the field on the auto filter row causing the user to constantly click back to the field to enter their criteria.                                                            |
| DEV-167489 | When using the Import Wizard to import any of the Bill of Material items available, the standard template was not available for download and instead providing a collection of files that were not the template.                                                                              |
| DEV-169769 | When using the Part Availability screen and leaving the tab open, subsequent entry of parts that are checked were showing the incorrect bill of material components.                                                                                                                          |
| DEV-168526 | When multiple users are in the Shipping Queue confirming shipments with different selected shippers, the confirmation message of the sales order closure lists the SO number of the other users shipper instead of the corresponding SO that was tied to the shipper that was just confirmed. |
| DEV-168682 | When using the auto filter row to reduce the number of lines or releases on an SO to change status, the change status popup would load but throw errors when actually selecting a line item or release to change status on.                                                                   |
| DEV-167242 | When the line item on a Sales Order has the source of Misc., the part number is still displayed as a hyperlink to the Item Master but clicking the link opens a blank Item Master screen.                                                                                                     |