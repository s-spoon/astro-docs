---
title: "What's New in Version 8.01 2023 R1 Release"
draft: false
type: Article
---

## New Features

#### CUSTOMIZATION

With this new feature, users will be able to customize various Made2Manage screens. This feature enables the Screen Maintenance screen, through which users can personalize the screens and manage different extensions for the screen, as well as personalize the screen using the form designer added under the Customize option in the More Actions for all Metadata driven screens.

Users with permission to Customize can now:

-   Modify the font/font settings for labels/captions displayed on pages to highlight fields that are more important to their business processes.
-   Rearrange the tab order on the page to make data entry more efficient for their own business processes.
-   Make existing fields that are not mandatory in standard M2M as mandatory/required fields to meet their business processes.
-   Add new linked reports or related screens to existing pages that will be displayed in More Actions, including filtering to pass specific filters before rendering the related page or running the linked report.
-   Apply the personalization to a specific user groups.
-   Disable the extensions applied or Unassign an extension to return the screen to its default state.
-   Ensure that personalization is not lost when new deployments or builds are released.

#### M2M Customer/Vendor Portal

With the release of 8.01 2023 R1 we have uplifted the optional module known as M2M VIP. This module is a Customer/Vendor Portal that is integrated with M2M allowing you to provide your customers access to your product catalog to request quotes, enter or check their orders and review their outstanding invoices. You can extend to your vendors to assist in the purchasing process as well.

#### One-Way uniPoint Integration

As part of this feature, the APIUNIPOINT screen is included, which allows the user to configure all of the objects in the APICONFIG screen that are required for a one-way uniPoint integration allowing data to be pulled down from M2M into your uniPoint application. UniPoint is expected to release a version of their application that will use this integration in late Q3 of 2023. There is a new Activation code for uniPoint Integration, and this screen is only visible when the uniPoint Activation code is enabled.

As part of the one-way integration to uniPoint, we have added 4 new fields to each table in the database: Created Date, Created By, Modified Date and Modified By. For transactions entered after upgrading to version 8.01, this information will be populated with the date and user that initiated the transaction. If the transaction was initiated through a process instead of an individual user, the Created By or Modified By would be populated with a reference to that transaction. For example, labor or inventory postings coming in through Shop Floor Data Collection will have SFDC for the user. All records created prior to upgrading to this version will retain the blank date if the Created and Modified Date fields did not exist in prior versions and the Created and Modified By fields will be populated with Migrate to indicate these records existed prior to this functionality being added.

#### Aptean print agent

Aptean print agent (version 1.3.0) is certified for Made2Manage 8.01.

## Resolved Issues

The following issues have been fixed in this release:

| ID         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEV-152149 | When users who don’t have permission to access the Currency/Country page change the status on the Cash Receipts after selecting the Multiple Cash Receipt option, the details on the Cash Receipt grid disappear once the status is changed from Started to Paid.                                                                                                                                                                                                                                                                                               |
| DEV-140123 | When grouping by a column in the Shipping Queue page, once the column is grouped to aggregate by the value of other columns, there is no way to undo the aggregation.                                                                                                                                                                                                                                                                                                                                                                                           |
| DEV-150414 | When adding line items to the Sales order that is created from an RMA, users were receiving an exception error.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| DEV-148421 | When applying a discount in price summary screen of a sales order, the list price is getting changed instead of the Net Price/Discount.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Internal   | The double-click functionality on the **Amount Applied** field in the **Approve Invoice for Payment** screen has been removed; the user must now select the **Apply Amount** checkbox of the respective record and click **Apply Amt to Selected Rows** from the Grid Toolbar to populate the Amount Applied field.                                                                                                                                                                                                                                             |
| Internal   | In the **Customer Invoice & Credit Memo** screen, from the **Select Shipper for Invoicing** pop-up, the **Customer Company** field has been removed as the **Customer** field Lookup and **Customer Company** field Lookup displays the same details. In the **Cash Receipt** screen, from the **Cash Receipt Invoice Selection** pop-up, the **Customer Company** field has been removed as the **Customer** field Lookup and **Customer Company** field Lookup displays the same details. Users can type the name or number in the Customer field for lookup. |