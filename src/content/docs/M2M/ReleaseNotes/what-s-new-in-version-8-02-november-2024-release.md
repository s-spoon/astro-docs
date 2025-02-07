---
title: "What's New in Version 8.02 November 2024 Release"
draft: false
type: Article
---
## Resolved Issues
The following issues have been fixed in this release:

| ID           | Description |
|--------------|-------------|
| **DEV-189493** | Logs have been added to capture any errors related to login issues. Since the logs were added, the error has not reoccurred. No code changes have been implemented other than the additional logging, as the issue was not reproducible. The logs will remain in place to capture any future recurrence of the issue. |
| **DEV-217718** | Comments added under "Accumulated Cost" during the Change Status process are not saved or displayed when the user revisits the Job Order Change Status screen. |
| **DEV-236965** | The PO number link in the [SOSTAT] Sales Order Status screen’s Details tab redirects to the Job Order Status screen instead of the Purchase Order screen. |
| **DEV-237202** | The "Select All" option on the PLNPOQ screen disables vendor selection for all parts, requiring manual selection of each part to assign vendors. |
| **DEV-239258** | The VO Error log is not being written to any files or logs on the machine, preventing visibility into errors like "Server Busy" or P&S stoppages. |
| **DEV-240171** | The "Include Totals" checkbox on quotes is not automatically selected, despite being enabled in CSSALE settings, even when copying from Sales Orders. |
| **DEV-239529** | The sorting functionality does not work on the Browse window when drilling down on widgets in the Action Center. |
| **DEV-243628** | The Customization Metadata Version upgrade process in M2M 8.0 is incorrectly flagging customizations as anomalies, leading to unnecessary alerts and confusion for customers. |
| **DEV-244268** | The email functionality for Sales Orders, Purchase Orders, and Job Orders is not working as expected, preventing users from sending emails directly from the screen. |


