---
title: "What's New in Version 8.01 June 2023 Release"
draft: false
type: Article
---

## Resolved Issues

The following issues have been fixed in this release:

| ID         | Description                                                                                                                                                                                                                                      |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEV-150701 | When attempting to use Import Wizard to load Account records, even with the system set to Automatic Sequence for the account number the system was throwing errors expecting the account number to be populated within the import template file. |
| DEV-151121 | Users were unable to launch CADLink because the activation code was expecting to have the full Web API enabled and should not be.                                                                                                                |
| DEV-150189 | When running reports which have no data to output, users were receiving an exception error instead of the standard 'No Data to Output' message that should have been displayed.                                                                  |