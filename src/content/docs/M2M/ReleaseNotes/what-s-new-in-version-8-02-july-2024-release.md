---
title: "What's New in Version 8.02 July 2024 Release"
draft: false
type: Article
---

## Enhancement

### Antivirus Update

Following the U.S. government's restrictions on Kaspersky, we have implemented Microsoft Defender for Web as our new antivirus solution.

## Resolved Issues

The following issues have been fixed in this release:

| ID         | Description                                                                                                                                                         |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEV-204015 | Navigating to the next record within the Quote Price Summary and Sales Order Price Summary is broken.                                                               |
| DEV-150627 | After running Generate Material Status, the SFM Supervisor Console's JO Material Availability screen displays inaccurate On Hand and On Hand Inspection quantities. |
| DEV-154184 | The system encounters an error when generating RINS records from POs or RMAs that contain part descriptions exceeding 50 characters.                                |
| DEV-159832 | When clocking off an employee in SFMWC with the "Lead" checkbox checked and the queue is empty, the completed/scrap fields are disabled.                            |
| DEV-164035 | The advanced filter on the report is not updated correctly when the user has saved it as a Parameter List for the report and selected it.                           |
| DEV-204428 | Granting "Add" permission only on the INV screen prevents creating new parts.                                                                                       |
| DEV-207684 | The "Change Password" option in the User Settings fails to update passwords after users enter old/new passwords and click "Apply".                                  |
| DEV-209921 | In the SO screen, using a Miscellaneous Shipping Address triggers a validation error for empty Phone and Fax fields, even though these fields are not mandatory.    |
| DEV-209941 | Lot-controlled components issued to a Job Order (JO) for a lot-controlled finished good through the JOISS screen are not shown on the ASSIGN screen.                |
| DEV-210346 | Editing expression calculations removes the reference, preventing saving without an expression. Field type is also non editable in new templates.                   |
| DEV-214328 | Users receive notifications when they initiate report generation or printing from the change status windows.                                                        |