---
title: "What's New in Version 8.03 2024 R2 Release"
draft: false
type: Article
---

## Enhancement

### SFM – Job Order Material Available
Make-to-stock jobs for the components on other job orders with a due date the same as the other job due date will continue to show short with the highlighting color even when the JO is in Completed status but not moved to inventory.

### Certified Integrations

- **Aptean EAM 12.0** is tested and certified
- **SFDC** is tested & certified with the following versions:
  - **Engine Service**: 6.8.24304.1745
  - **Made2Manage.Sfdc.SsPlugin (plugin)**: 8.1.24320.0942
- **ARW 9.6** is tested and certified

## Resolved Issues

The following issues have been fixed in this release:

| ID          | Description |
|-------------|-------------|
| **DEV-221553** | When a user clocked out of a job order in the Shop Floor Work Center Console and received an error indicating that the job was canceled, the job order number was not included in the error message. This led to confusion when the job causing the error was the idle time job and not the actual job they had just clocked out of. |
| **DEV-237632** | When reports were scheduled to run through Command Scheduler, they did not appear in My Reports for the correct user who requested the report. Instead, they appeared in My Reports under the user ID used to execute the Processor Service. |
| **DEV-239047** | When the Chrome extension for SwagButton was installed on the Chrome browser, users encountered blank white pages loading instead of the M2M pages. A new version of SwagButton from its manufacturer was released, resolving the issue. No code changes were made to the Made2Manage code base, as the issue was in the extension. |
| **DEV-239258** | The VO Error log for Planning & Scheduling was not available on the View Log (VIEWLG) page for users to review the errors from Planning & Scheduling. |
| **DEV-243738** | The SOMAST User Defined fields were not available in the Column Chooser for inclusion in the grids of the Shipping Queue as they had been in prior versions. |
| **DEV-244400** | On the Customer Credit Notes in the Customer Credit Status (ASTAT) page, users were unable to save any activities they created. |
| **DEV-244487** | Purchase Orders created via the Purchase Queue Summary were not pulling in the tax jurisdiction assigned to the vendor for taxable parts. |
| **DEV-244816** | Users were receiving an error when running the Production Overview report for jobs with quantities completed but not closed. |
| **DEV-246155** | When adding a component to a Job Order Detailed BOM with several levels, users received an error stating that FBOMINUM must be numeric. |
| **DEV-246353** | When using the Miscellaneous Ship To Key of 9999 on the Shipping/Billing tab of the Sales Order, the address information was not saved to the SOSHIP table and was not available on the line items. |
| **DEV-247452** | When reviewing the widget for Jobs to be Released, if a job listed there was released, it was not being removed from the count of jobs to be released. |
| **DEV-251214** | Users were receiving a Time Out error when trying to issue components via the Job Order Issue page. |

---
