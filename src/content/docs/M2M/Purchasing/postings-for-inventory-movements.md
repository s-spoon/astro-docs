---

title: "Postings for Inventory Movements"
draft: false


---


You can move items to inventory after a job is complete, or you can move items to inventory when you need them to complete a job. The following sample ledger shows how move to inventory transactions post when you use **standard costing**:

### Standard Costing

| **Date**   | **Transaction/Accounts**                       | **Debit** | **Credit** |
|------------|------------------------------------------------|-----------|------------|
| August 2   | Move finished material to inventory            |           |            |
|            | PC inventory                                   | 30        |            |
|            | PC WIP Matl/Lbr/Ovhd + Var                     |           | 30         |
| August 2   | Move finished material to job                  |           |            |
|            | Product class inventory                        | 30        |            |
|            | Product class WIP                              |           | 30         |

The following sample ledger shows how move to inventory transactions post when you use **weighted average costing**:

### Weighted Average Costing

| **Date**   | **Transaction/Accounts**                       | **Debit** | **Credit** |
|------------|------------------------------------------------|-----------|------------|
| August 2   | Move finished material to inventory            |           |            |
|            | Product class inventory at standard cost       | 40        |            |
|            | Product class WIP                              |           | 40         |
| August 2   | Move finished material to job                  |           |            |
|            | Product class inventory                        | 56        |            |
|            | Product class WIP                              |           | 56         |
