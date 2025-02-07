---
title: "Understanding the effects of inventory cost rollups"
draft: false
type: Article
---

Although you can change the cost of each item separately, cost rollups are more efficient for two reasons:

- Cost rollups let you change the costs on many items at once.

- When you roll up costs on an item, Made2Manage changes the costs for the associated parent item. For example, if an assembly includes a particular part and you roll up the costs on the part, Made2Manage rolls up the costs on the assembly, too.

To view the effects of a cost rollup, you can look at the parts in the item master or generate a report (see the **). You can also print this report before you roll the costs.

Because a cost rollup can affect so many items, your company should have procedures that indicate how often to roll up costs. For example, you could roll up costs when few items are inventory, when a new year or quarter begins, or when few jobs are in process. You could roll up costs once or twice a year, or several times a year.

To be sure you fully understand the effects of cost rollups, first roll up costs in a test company.

Cost rollups have two phases:

1. Made2Manage replaces standard or average costs of purchased items with average or last actual costs, depending on your costing setup.

2. Made2Manage recalculates costs for parent make or assembly items.

Made2Manage always checks the costing setup before rolling up costs and rolls up costs according to those specifications.

When you roll up costs, you post transactions to the general ledger. If you reduce the cost of inventory, you debit the **Facility** and **Product Class Material Variance** account and credit the **Facility** and **Product Class Inventory** account. If you increase the cost of inventory, you debit the **Facility** and **Product Class Inventory** account and credit the **Facility** and **Product Class Material Variance** account.


​