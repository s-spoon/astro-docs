---
title: "Postings for Shipping"
draft: false
type: Article
---


When you record the shipment of an item, that transaction posts to a different account depending on the type of item. This sample ledger shows how shipping posts for **standard** or **weighted average costing** methods:

| **Date**   | **Transaction/Accounts**             | **Debit** | **Credit** |
|------------|--------------------------------------|-----------|------------|
| Jan. 3     | Make to order                       |           |            |
|            | Product class COGS                 | 76        |            |
|            | Product class WIP Matl/Lbr/Ovhd     |           | 76         |
| Jan. 4     | Make to stock                       |           |            |
|            | Product class COGS material         | 34        |            |
|            | Product class inventory             |           | 34         |
| Jan. 5     | Buy to order                        |           |            |
|            | Product class COGS material         | 56        |            |
|            | Buy/resell account                  |           | 56         |
