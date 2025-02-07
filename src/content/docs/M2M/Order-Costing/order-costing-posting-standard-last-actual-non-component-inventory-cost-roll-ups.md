---
title: "Order costing posting: Standard, last actual, non-component or Inventory cost roll-ups"
draft: false
type: Article
---

When you post to the general ledger in the **Inventory Cost Roll Up** (**CRUP**) page, the adjustments post to an account that depends on the kind of transaction you perform.

| Source (choice in the With area)                 | Transaction/Accounts                                                                                          | Debit | Credit |
|--------------------------------------------------|---------------------------------------------------------------------------------------------------------------|-------|--------|
| Percentage increase                            | Inventory account from the part's facility and product class for the net change in cost x on-hand             | DR    | CR     |
|                                                  | Inventory revaluation account from the part's facility and product class for the net change in cost x on-hand | DR    | CR     |
| Unit average cost                            | Inventory account from the part's facility and product class for the net change in cost x on-hand             | DR    | CR     |
|                                                  | Inventory revaluation account from the part's facility and product class for the net change in cost x on-hand | DR    | CR     |
| Unit average cost with percentage increase   | Inventory account from the part's facility and product class for the net change in cost x on-hand             | DR    | CR     |
|                                                  | Inventory revaluation account from the part's facility and product class for the net change in cost x on-hand | DR    | CR     |
| Last actual cost                           | Inventory account from the part's facility and product class for the net change in cost x on-hand             | DR    | CR     |
|                                                  | Inventory revaluation account from the part's facility and product class for the net change in cost x on-hand | DR    | CR     |
| Last actual cost with percentage increase  | Inventory account from the part's facility and product class for the net change in cost x on-hand             | DR    | CR     |
|                                                  | Inventory revaluation account from the part's facility and product class for the net change in cost x on-hand | DR    | CR     |
| Roll from costed BOM                     | Inventory account from the part's facility and product class for the net change in cost x on-hand             | DR    | CR     |
|                                                  | Inventory revaluation account from the part's facility and product class for the net change in cost x on-hand | DR    | CR     |

 Made2Manage increases each material, labor, and overhead value individually. You normally use this method to increase purchased parts. If you leave the percentage at 0.00, Made2Manage does not update any values.

 Made2Manage increases each material, labor, and overhead value individually. If your unit average cost is 0.00, Made2Manage does not update the part.

 Made2Manage updates only purchased parts.

 Made2Manage rolls sub-component material to sub-component material, sub-component labor to sub-component labor and sub-component overhead to sub-component overhead. You can see costs Made2Manage rolls into the **Costed BOMs** (**BOMCST**) page. If you make changes to your work centers, Made2Manage first updates the changes in the standard routings.