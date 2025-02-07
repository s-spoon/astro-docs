---
title: "What's New in Version 8.02 May 2024 Release"
draft: false
type: Article
---

## Enhancement

### Action Center

In this release, a new widget for Purchase Orders in Started and Awaiting Approval is added to the Widget library.

### Shop Floor Data Collection

In this release, we have certified version 8.0 and Build No 8.0.24123.1315 of Shop Floor Data Collection with Made2Manage version 8.

### Screen Maintenance/Personalization

In this release, we have introduced the capability to generate customized extension packages for export and import when created through professional services.

### New Look

In this release you will now see a button next to the Notification icon that will allow you to review information about and then launch the new look for the application.

## Resolved Issues

The following issues have been fixed in this release:

| ID         | Description                                                                                                                                                                                                                                                                                                                                                        |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEV-87885  | When the job order number has been expanded beyond the original setting of 10 digits, the Regenerate SO Analysis Report in Command Scheduler does not execute properly leading to no data for the RPSL12 -12 Month Sales History report.                                                                                                                           |
| DEV-203211 | The description of the MATLAVAILABLE table in the Data Dictionary screen has a typo, where "Material Availability" is incorrectly spelled as "Material Availability."                                                                                                                                                                                              |
| DEV-202910 | When clicking on the Mail icon next to the email address on the Customer screen, the contact email is pulled instead of the customer email if the customer navigated to a contact beforehand.                                                                                                                                                                      |
| DEV-209198 | When the job order document number has been expanded beyond the original setting of 10 digits, the Shipped Goods report (RPSHGO) will error instead of returning the proper data.                                                                                                                                                                                  |
| DEV-202749 | When Sales Order line items for Make or Buy source items that are not completed or received show in the Shipping Queue (SCIFS), users had no visibility to know that the orders are not completed or received so that the item is truly available to ship. By default, the Job Order or Purchase Order number are now linkable fields in the Shipping Queue grid.  |
| DEV-135884 | When Sales Order line items have the Ship Early or Split Ship check boxes unchecked, users had no visibility within the Shipping Queue (SCIFS) to know that the orders cannot ship early or as a partial shipment. By default, the Ship Early and Split Ship fields are now available in the Shipping Queue grid.                                                  |
| DEV-148770 | The Shipping Queue incorrectly considers items in an inspection location as Available to Ship.                                                                                                                                                                                                                                                                     |
| DEV-206445 | If a Sales Order item is designated with progressive billing amounts, adding a subsequent item to the sales order causes the Total SO Amount to include the progressive billing item amount multiple times.                                                                                                                                                        |
| DEV-207583 | The Sales Order Detailed BOM (SODBOM) is not being updated with the correct material costs when the Update Price Summary is selected from the RFQ Summary.                                                                                                                                                                                                         |
| DEV-200801 | When the same Work Center is used on multiple operation steps on a Job Order Detailed Routing with different characteristics applied at each operation step, the Supervisor Console - Work Center Status tab will duplicate the information listed under that work center.                                                                                         |
| DEV-207425 | An error occurs when trying to clock off the team in the Shop Floor Work Center Console (SFMC).                                                                                                                                                                                                                                                                    |