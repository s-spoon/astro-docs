---
title: "What's New in Version 8.02 March 2024 HF1 Release"
draft: false
type: Article
---

## Enhancement

### Email Configuration to Support OAuth 2.0 for Gmail and Microsoft Outlook

This feature facilitates the setup of Gmail and Microsoft Outlook mail servers with OAuth 2.0 authentication. As part of these improvements, the Email Configuration functionality has been relocated from the System Setup (CSSYS) and Company Information (COMP) screens to a centralized screen named Mail Server Configuration (MAILCONF). This screen is accessible from the More Actions pane of the System Setup (CSSYS) screen. With this configuration, users gain the ability to configure mail servers for individual or all companies seamlessly.

## Resolved Issues

The following issues have been fixed in this release:

| ID         | Description                                                                                                                                                                                                |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEV-201031 | The WorkCenter ID field on the Job Order Detailed Routing screen lacks the index view necessary to display the WorkCenter name alongside the WorkCenter ID.                                                |
| DEV-199161 | If the width of the JO Number is configured to be 6 or greater in SYSEQU, it results in truncation of the JO Number within the BCSHARED table when customers utilize SFDC for the Shop Floor transactions. |
| DEV-141361 | A timeout error occurs when attempting to save a single record on the PHYINV screen that contains more than 3000 tags.                                                                                     |