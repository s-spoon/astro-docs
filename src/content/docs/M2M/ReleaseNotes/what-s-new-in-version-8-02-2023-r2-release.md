---
title: "What's New in Version 8.02 2023 R2 Release"
draft: false
type: Article
---

## New Features

### Customization

With this new Enhancement, users will be able to customize various Made2Manage screens. This functionality enables creating a customized form for specific business needs, incorporating advanced fields, importing entities, establishing relationships, and adding collections. It includes designing new grids, live previewing changes, and adding related screens and reports with filter options. The system supports drag-and-drop for attributes, allows rearrangement of fields, and offers the addition of new CSPOPUP Keys.

Users with permission to Customize can now:

-   Create a new form, add new Entities and Attributes to the form to meet their business processes.
-   Create advanced fields such as Lookup, Dropdown etc. by adding references.
-   Import existing entities to a new form or for any existing screens.
-   Add relationships and Collections for the entities.
-   Add New Grids and row details to the layout.
-   Live Preview the property changes on the form designer.
-   Add related screens and related reports to existing screens that will be displayed in More Actions, including filtering to pass specific filters before rendering the related page or running the linked report.
-   Drag and drop newly added or existing attributes to the layout.
-   Rearrange the fields directly in the layout.
-   Customize SFM Screens.
-   Ability to add New CSPOPUP Keys.

### Action Center

Enhancement of Action Center Dashboard by implementing the below features.

-   Implemented tolerances to update the colors of the tiles.
    -   Item designated as late the tile will be in Red.
    -   Item designated as early will be in Green.
    -   Item designated as at risk then the tile will be in Yellow.
-   Implemented users to set up custom refresh intervals per widget per user.
-   Provided a visual indicator on the widget when a non-default filter is in use.
-   Implemented Due Date in Last ‘X DAYS’ filter so that the volume or count of documents being returned is more manageable.

### M2M EAM Integration

This Integration establishes a link between Made2Manage ERP and Aptean EAM. It syncs the requisition from EAM to ERP for purchasing requirements for your assets to be processed; and then pushes the Purchase Order and Receiver back to EAM for greater visibility.

## Resolved Issues

The following issues have been fixed in this release:

| ID         | Description                                                                                                                                                                                                                                                                                                                                   |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEV-145970 | Pressing CTRL +A in a memo field selects text only while the keys are held down, and the selection is deselected as soon as the keys are released.                                                                                                                                                                                            |
| DEV-151101 | No code changes were implemented in the M2M or P&S code, the changes were done within the environment as the issue was caused by a DNS Server setting that has been corrected.                                                                                                                                                                |
| DEV-174464 | The Total Amount field on the Quote, Sales Order (SO), and Purchase Order (PO) was a calculated field that restricted users from searching records based on it or adding the field in the browse/lookup window.                                                                                                                               |
| DEV-178968 | The reordering of columns on the [SFMS] Supervisor Console screen is not retained when the user closes and reopens the SFMS screen.                                                                                                                                                                                                           |
| DEV-186601 | Assigning a Vendor in PLNPOQ by selecting Vendor first and then the part in the Assign Vendor popup was not assigning Vendors.                                                                                                                                                                                                                |
| DEV-167871 | When opening P&S screens for a tenant that has P&S configured throws an error stating "Planning and Scheduling Server is not configured for \<CompanyName>. Please contact Aptean Support to set up the Planning & Scheduling module."                                                                                                       |
| DEV-150711 | Importing data without any applied formats through the Import Wizard results in errors for fields with predefined formatting, such as Phone number, City, State, and Zip Code.                                                                                                                                                                |
| DEV-156972 | When dealing with a high volume of transactions to be posted in UTEOP, attempting to post any transactions results in a UI timeout. This leaves users with errors and without confirmation regarding the posting status, making it unclear whether the transactions have successfully posted to the General Ledger (GL) from the sub-ledgers. |
| DEV-163225 | When attempting to generate the Cash Receipts register report and opting for 'Single' or 'Range' in the Sort Range, an error arises if the Sort Order is configured as 'Customer number or Check'. The system displays an error message indicating, "You must fill in the control for Single."                                                |
| DEV-179759 | The automatic breaks were not being deducted correctly from the daily labor input for a job because the break time was not being properly converted to UTC.                                                                                                                                                                                   |