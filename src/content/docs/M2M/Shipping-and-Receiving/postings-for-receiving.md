---
title: "Postings for Receiving"
draft: false
type: Article
---

When you record the receipt of an item, that transaction posts to a different account depending on the type of item. This sample ledger shows how receiving transactions post when you use **standard costing**:

| **Date**   | **Transaction/Accounts**             | **Debit** | **Credit** |
|------------|--------------------------------------|-----------|------------|
| June 1     | Stock item received                 |           |            |
|            | Product class inventory account     | 80        |            |
|            | Received goods account              |           | 80         |
| June 2     | Buy to sales order item received    |           |            |
|            | Buy/resell account                  | 100       |            |
|            | Received goods account              |           | 100        |
| June 3     | Buy to job order item received      |           |            |
|            | Product class WIP account           | 75        |            |
|            | Received goods account              |           | 75         |

This sample ledger shows how receiving transactions post when you use **weighted average costing**:

| **Date**   | **Transaction/Accounts**             | **Debit** | **Credit** |
|------------|--------------------------------------|-----------|------------|
| June 1     | Item received to inventory          |           |            |
|            | Product class inventory account     | 67        |            |
|            | Received goods account              |           | 67         |
