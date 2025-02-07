---
title: "What's New in Version 8.02 April 2024 Release"
draft: false
type: Article
---

## Enhancement

### Electronic Data Interchange

In this release, integration with Aptean EDI One has been introduced, employing the M2M Format, also known as fixed file format, to streamline the EDI process. Notably, Universal and Aptean Standard formats have been deprecated in version 8. The following documents are certified for Inbound processing: 850-Purchase Order, 830-Planning Schedule with Release Capability; and for Outbound processing: 810-Invoice, 855-Purchase Order Acknowledgement, and 856-Ship Notice/Manifest.

## Resolved Issues

The following issues have been fixed in this release:

| ID         | Description                                                                                                                                                                                                                                                                                                                                          |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEV-162245 | Updating a Salesperson on a Sales Order does not propagate the change to the Sales Order Lines.                                                                                                                                                                                                                                                      |
| DEV-13302  | On the Sales Setup, the ability to default the 'Include Totals' to be checked on all newly created quotes was not available. This functionality has been added to the Sales Setup to enhance the productivity of users creating Quotes so they no longer need to remember to check this on each created Quote if needed per your business processes. |
| DEV-188216 | The inventory movement for backflush items displays transaction time in UTC instead of the time zone setup in the COMP screen.                                                                                                                                                                                                                       |
| DEV-190197 | A generic message is displayed when attempting to close a Job Order that still has remaining unshipped quantities.                                                                                                                                                                                                                                   |
| DEV-195418 | The new button on the Production Calendar remains unavailable when there is no data present in the Production Calendar table.                                                                                                                                                                                                                        |
| DEV-199864 | Attempting to add a Labor record for an employee with a Last Name and First Name exceeding 20 characters results in an error message stating 'The maximum length for this field is 20'.                                                                                                                                                              |
| DEV-201527 | An error occurs when attempting to archive inventory tags generated from running the Cycle Count Listing (RPPICC) report due to null values in the Created and Modified dates.                                                                                                                                                                       |