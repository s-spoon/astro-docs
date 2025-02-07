---
title: "What's New in Version 8.02 February 2024 Release"
draft: false
type: Article
---

## Resolved Issues

The following issues have been fixed in this release:

| ID         | Description                                                                                                                                                                                                                |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DEV-144831 | The List Price within the Sales Order (SO) Item Details undergoes adjustments when a Discount Percentage is applied in the Sales Order Price Summary screen, subsequently altering both the Discount Amount and Net Price. |
| DEV-183199 | Modifying the AP Invoice Number after the creation of an invoice from a receiver to change the invoice number creates duplicate records in the APMAST table.                                                               |
| DEV-183425 | Clicking "Add Child BOM" on the SODBOM screen introduces a new child line; however, it does not automatically shift the focus of the cursor to the added line, maintaining focus on the parent item instead.               |
| DEV-190596 | The Purchase Orders Past Due widget fails to display overdue purchase orders, and even adjusting the last promise date on the purchase order does not affect the data within the widget.                                   |