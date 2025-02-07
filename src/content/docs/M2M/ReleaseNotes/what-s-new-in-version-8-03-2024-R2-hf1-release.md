---
title: "What's New in Version 8.03 2024 R2 HF1 Release"
draft: false
type: Article
---

## Enhancement

### Performance Improvements - Notification Panel and Alert Central
The Alert Central screen has been redesigned with enhanced filtering options, allowing you to quickly find the notifications you need. Notifications are now automatically reviewed based on the configured retention days in System Setup (CSSYS), and you can control the number of notifications displayed in the notification panel through System Setup (CSSYS). These enhancements provide greater control and efficiency in managing notifications and alerts, streamlining your workflow.

## Resolved Issues

The following issues have been fixed in this release:

| ID          | Description                                                                                                          |
|-------------|----------------------------------------------------------------------------------------------------------------------|
| DEV-242559  | The search function in the Vendor tab of the Item Master (INV) screen is missing the ability to search by vendor part number, a feature available in the previous version (7.51). This omission has resulted in a loss of functionality and reduced productivity. |
| DEV-243998  | Logs have been added to capture errors related to sub-job creation. Since the logs were implemented, the error has not reoccurred. No code changes were made beyond the additional logging, as the issue could not be reproduced. The logs will remain in place to capture any future occurrences of the issue. |

