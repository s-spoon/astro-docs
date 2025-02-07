---
title: "What's New in Version 8.01 August - September 2023 Release"
draft: false
type: Article
---

## New Features

#### IP Whitelisting

IP Whitelisting allows you to limit and control application access based on specified IP ranges for all users, regardless of the license type assigned. This ensures that only users within the defined IP range can access the application when the feature is enabled and preventing unauthorized login from outside the network. This feature is applicable exclusively to IPv4 addresses. Note that, if the IP restriction is enabled, there is an option at the user level to opt-out specific users from the IP restriction policies.

#### Grid Layouts with Conditional Formatting

With this feature, users will be able to save and share their specific layouts with conditional formatting. They can tailor the grids on the page by applying filters, sorting, conditional formatting, or grouping to emphasize specific elements. These customized configurations can be saved as layouts per user and shared with other users throughout the system who have access to the same pages in Made2Manage. The ability to designate a default layout is available per user, per page.

#### Report Printing

When using the related reports to print special documents, with the default set to Display a preview in PDF is opened in another tab, however this does not allow the ability to print all copies of the special document flagged to print. The same is true if you use Run Report from the report interface for a special document and have All Copies selected. With this release, you will not receive a message either on the document page or the report interface page after the PDF tab is displayed asking if you wish to print the document. Clicking yes, will send all copies to the printer, which must be setup and update any printed flags on the respective document; clicking No will return you to the document page with no printing.

#### NCR Creation from Shop Floor Manager

Non-conformance was added in the Fall of 2022, with this release we are adding the ability to have an NCR created automatically when a scrap quantity is entered, either at the job order labor clock off or through the job order completion transaction. In the SFM Setup, each company can enable the NCR function within the SFM Work Center Console when clocking off or completing a job. The checkbox to create the NCR will be enabled when a scrap quantity is entered, and based on the default setting, it will automatically be selected to create the NCR for that specific job order/labor entry upon processing the clock-off or job order completion. There is flexibility to uncheck this option and not create an NCR as needed during the clock-off or completion of the operation.

## Resolved Issues

The following issues have been fixed in this release:

| ID         | Description                                                                                                                                                                                                                                                                               |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEV-142042 | In Inventory Transaction, users are not able to proceed with a Miscellaneous issue unless they choose to add the part to the job order bill of materials, whereas they should be allowed to continue without adding it immediately.                                                       |
| DEV-156088 | When adding new transactions from the **Related** section of **More Actions** on documents like Quotes or Sales Orders, upon saving, the system incorrectly returns to the originally opened document instead of staying on the newly created or edited document, causing user confusion. |
| DEV-158879 | The Data Loader is not accepting **Y** and **N** as valid string representations for Boolean values during data import, causing errors instead of processing the data correctly.                                                                                                          |
| DEV-161020 | Users belonging to the AP Manager and AR Manager groups, both of which have permission to access the Financial Overview screen, encounter an error message indicating a lack of permission to access the screen.                                                                          |
| DEV-161819 | Opening Job Order Status from a Job Order with labor assigned to an additional operation results in a server error, preventing the successful use of Job Order Status.                                                                                                                    |
| DEV-162153 | Editing taxable line items on Customer Invoices results in duplicate sales tax entries, triggering an error message, impacting the ability to edit line items effectively.                                                                                                                |
| DEV-162276 | In Vendor Invoice and Debit Memo, the Payment Terms field displays only the code without its description, unlike previous versions where both code and description were displayed, causing user inconvenience.                                                                            |
| DEV-162277 | Cash Receipts screen displays New Balance and Discount fields even when the **Yet to Apply** amount is zero, causing confusion and misleading information for users.                                                                                                                      |
| DEV-162830 | In job order bill of materials, when attempting to modify the memo field for a purchased component triggers an wrong validation error with the message "Item X for job extended cost cannot be greater than 99,999,999.99," preventing a successful save.                                 |
| DEV-155339 | When attempting to save a quote after deleting items, users encounter an exception, preventing them from revising the quote as intended.                                                                                                                                                  |
| DEV-155623 | Running the RPGLTL detail subledger report with a range of accounts causes errors and requires repeated entry of criteria, impacting the efficiency of accounting and admin personnel who rely on this report.                                                                            |
| DEV-159736 | When selecting a customer contact in the sales order and clicking the email option, sometimes the email window populates with incorrect or random email addresses instead of the expected contact's email address.                                                                        |
| DEV-159841 | Users encountering No Data to Output error when attempting to print a duplicate copy of the Sales Order Document from More Actions\\Reports.                                                                                                                                              |
| DEV-160700 | The Bar Code Labor Recorded report displays times in UTC instead of the company's time zone.                                                                                                                                                                                              |
| DEV-161329 | Daily Labor entries closed before the upgrade display UTC start and end times in LABR instead of the server's Central Time.                                                                                                                                                               |
| DEV-162308 | Users encounter a server error when attempting to delete line items in the Sales Order Release.                                                                                                                                                                                           |