---
title: "What's New in Version 8.02 August 2024 Release"
draft: false
type: Article
---

## Enhancement

### Removal of ReportHelper.dll Dependencies

The dependency on ReportHelper.dll has been removed from all reports in this release.

## Resolved Issues

The following issues have been fixed in this release:

| ID         | Description                                                                                                                                                                                                    |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEV-146982 | When the Work Center Console screen refreshes at the interval set in SFMUPREF, the focus incorrectly shifts back to the job queue, even though the Indirect JOs tab remains highlighted.                       |
| DEV-207688 | The GL account field initially displays both the number and description in GLJE, but after interacting with a few entries, only the number appears without the description.                                    |
| DEV-52540  | In BANKREC, a previously cleared transaction reappears incorrectly for clearing again in "Other Transactions," which can lead to discrepancies in the bank statement summary if cleared a second time.         |
| DEV-222651 | The system throws an error when the user navigates to EFT Payment Export, selects the record, and clicks on "Generate EFT File."                                                                               |
| DEV-226170 | The support phone number in the M2M 8.0 ABOUT screen is incorrect.                                                                                                                                             |
| DEV-226429 | In a multi-facility environment, the Item Master search auto-populates the Facility and Source Facility fields with the first facility in the list, leading to skewed search results if unnoticed by the user. |
| DEV-192702 | When using the API to create Accounts Payable invoices from Purchase Orders, users encountered errors.                                                                                                         |