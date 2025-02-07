---
title: "What's New in Version 8.02 October 2024 Release"
draft: false
type: Article
---
## Enhancement

### Revenue Recognition
The Revenue Recognition feature now allows you to analyze revenue recognized for an order within a specified period. It helps identify whether revenue is over-recognized, under-recognized, or accurately recognized.

### Inline Edit Grid
The following fields on the item grid in the specified transaction screens are now editable out of the box, enabling quicker edits and improving the user experience:

- **Quote Items:** Quantity, Unit Price, Description, Delivery, and Memo
- **Sales Order Items:** Quantity, Unit Price, Description, Shipping Address, Ship Date, Request Date, Delivery Commitment, and Memo
- **Purchase Order Items:** Order Quantity, Unit Cost, Description, Last Promise Date, and Memo
- **AR Invoice Items:** Invoiced, Description, Unit Price, Discount Percent, and Discount Amount
- **AP Invoice Items:** Invoiced Quantity (VEND), Unit Price (VEND), Description (VEND), Invoiced Quantity (INV), Unit Price (INV), Description (INV), Discount Percentage, Discount Amount, and Fixed/Lot Cost

### Form Customization in 8.0
- **New Features:** Index View, Menu View, and Archive extension, along with the Arrange Tab Indexes popup, have been added to enhance form customization capabilities.
- **Migration Scripts:** Scripts have been implemented to automate the migration of customizations from version 7.51 to 8.0, streamlining the transition process.

These enhancements offer users greater flexibility and efficiency in tailoring forms to their specific needs.

### SFDC Certified Version
The SFDC system has been tested and certified with the following versions:
- **Engine Service:** 6.8.24190.1028
- **Made2Manage.Sfdc.SsPlugin (plugin):** 8.1.24261.1013

## Resolved Issues
The following issues have been fixed in this release:

| ID          | Description |
|-------------|-------------|
| **DEV-159527** | For customers who migrated from older versions and have a blank Currency ID in their records, the system now displays the Euro symbol in the Vendor Invoice & Debit Memo [APINV] screen, instead of the default currency symbol defined in CSGL. |
| **DEV-159582** | The system only prints the default copy of the RPSO report when the user changes the Sales Order status and confirms printing. |
| **DEV-165618** | Clicking an M2M 8.0 document link from an external app inconsistently prompts users to log in, depending on whether they have previously viewed documents in their current session. |
| **DEV-173195** | The REPLPN screen misleadingly indicates that components will be deleted when using a blank New Part Number. In reality, the components are only set to "Expired" with an Effective End Date. |
| **DEV-175491** | Customers who migrated from older versions encountered an exception when attempting to modify settings in the User Settings panel. |
| **DEV-189838** | Adding a new report parameter triggered the error "Primary key fields are not unique" when a previously selected parameter was chosen again. |
| **DEV-192221** | A warning message has been implemented to inform users that a job order has not been created for the buy item on the detailed BOM that requested the RFQ. You cannot purchase to a Sales Order Detailed BOM component; purchases can only be made for Sales Order line items, Job Order Detailed BOM components, Inventory stock items, or user-defined purchasing categories that do not increase on-hand balances from the RFQSUMM. |
| **DEV-202634** | The advanced filter icon on the PSMTLAVL and PSINTPLP screens disappears immediately after clicking, preventing users from accessing and using available options. |
| **DEV-221829** | The Grand Total, including tax, was missing in the Quote report. |
| **DEV-224217** | The Cash Receipts screen displayed both AR and AP payments in the Browse view. |
| **DEV-227682** | The account selected in the Expense GL number field from the type-ahead option on the APINV Items tab reverted to the Received Goods account. |
| **DEV-232882** | Running the Check Register report with "Check Date" sorting threw an error. |
| **DEV-233479** | Selecting "Use Misc Shipping Address" on a Sales Order doubled the total due to an extra record being added to the soship table when printing the Sales Order Document report. |
| **DEV-233593** | The Part Number field remained editable for NON-STANDARD parts in Sales Orders, even after creating the corresponding Job Order. |
| **DEV-233764** | No code changes were implemented for this CR. The system is functioning as designed. The "Started/Approved to Void" will only display tags in "Started" status. Tags in "Unused" status require selecting the "Unused to Void" option on change status. Tags automatically change from "Unused" to "Started" when you click through the quantity field on the tag. If you have not clicked through the quantity field, the tag will remain in "Unused" status and will not show for change status under "Started/Approved to Void." |
| **DEV-238546** | The breadcrumb navigation was incorrect when switching between parent and child screens. |
| **DEV-235562** | The Planned Purchase Queue sorted Dock Dates (mm/dd/yyyy) by the month number only, preventing proper filtering by the earliest to latest dates. |
| **DEV-236253** | The Vendor History screen in M2M 8.0 failed to sort Invoice Dates correctly. |
| **DEV-156321** | The Sales Person field on ARINV was not searchable, limiting user efficiency in filtering and locating specific records. |
| **DEV-241276** | When an Internal-Internal Use job is set up for idle time on SFM, clocking off another Internal-Internal Use job does not work correctly, leaving employees clocked in twice. |

