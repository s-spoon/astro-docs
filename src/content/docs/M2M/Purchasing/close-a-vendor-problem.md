---

title: "Close a vendor problem"
draft: false
type: Article

---

When you record an action for a vendor problem and mark the next step as resolved, Made2Manage closes the problem. But you can also close a problem without recording a resolving action.

**To close a vendor problem**

1. Open the **Vendor Service Request (SYCSLV)** page.

    - Select **Production Management** > **Production Transactions** > **Quality > Vendor Service Request**.

        Or

    - Search for **SYCSLV** or **Vendor Service Request** in the **Navigation box** and then select **Vendor Service Request**.

       The **Vendor Service Request (SYCSLV)** page appears.

2. On the **Toolbar**, click **Browse**.

    The **Browse For Vendor Service Request** window appears.

3. Select the row that contains the required service request, and click **Select**. Or double-click the row that contains the required service request.

    Click **Cancel** to exit from the **Browse For Vendor Service Request** window.

4. Click the **Status** button, and select **Closed**.

​

## Postings for inventory movements

You can move items to *inventory* Any item, whether finished goods, components, or raw material, that is available for use and is the property of the company or the property of another company given to your company for safekeeping. You issue inventory to specific job orders; an issued inventory item is removed from inventory and its costs become part of some work in process. after a job is complete, or you can move items to inventory when you need them to complete a job. The following sample ledger shows how move to inventory transactions post when you use *standard costing* A type of cost accounting that bases financial numbers on the information stored in the item master.:

| Date     | Transaction/Accounts                    | Debit  | Credit |
|----------|-----------------------------------------|--------|--------|
| August 2 | **Move finished material to inventory** |        |        |
|          | PC inventory                            | 30     |        |
|          | PC WIP Matl/Lbr/Ovhd + Var              |        | 30     |
| August 2 | **Move finished material to job**       |        |        |
|          | Product class inventory                 | 30     |        |
|          | Product class WIP                       |        | 30     |

The following sample ledger shows how move to inventory transactions post when you use *weighted average costing*:
 1. A type of inventory cost accounting that bases costs on information from existing inventory items and purchase orders for those items.
 2. A type of inventory cost accounting that bases costs on existing inventory plus total estimated values, divided by the total quantity in existing inventory plus the quantity moved to finished goods when the job order is complete.:

| Date     | Transaction/Accounts                     | Debit  | Credit |
|----------|------------------------------------------|--------|--------|
| August 2 | **Move finished material to inventory**  |        |        |
|          | Product class inventory at standard cost | 40     |        |
|          | Product class WIP                        |        | 40     |
| August 2 | **Move finished material to job**        |        |        |
|          | Product class inventory                  | 56     |        |
|          | Product class WIP                        |        | 56     |

## Postings for job closing

When you close a job, Made2Manage calculates whether the job costs more than expected (a negative work *in process* A status of physical inventory tag ranges that means you have added the individual tag records, but you have not yet posted them.) or less than expected (a positive work in process). This sample ledger shows how closing transactions post for standard or *weighted average costing* methods:

   1. A type of inventory cost accounting that bases costs on information from existing inventory items and purchase orders for those items.

   2. A type of inventory cost accounting that bases costs on existing inventory plus total estimated values, divided by the total quantity in existing inventory plus the quantity moved to finished goods when the job order is complete.

| Date     | Transaction/Accounts                  | Debit  | Credit |
|----------|---------------------------------------|--------|--------|
| March 17 | **Negative WIP, make to order item**  |        |        |
|          | Product class WIP Matl/Lbr/Ovhd       | 47     |        |
|          | Product class COGS Matl/Lbr/Ovhd COGS |        | 47     |
| March 19 | **Negative WIP, make to stock item**  |        |        |
|          | Product class WIP material.           | 68     |        |
|          | Variance or COGS                      |        | 68     |
| March 21 | **Positive WIP, Make to order item**  |        |        |
|          | Product class COGS Matl/Lbr/Ovhd      | 55     |        |
|          | Product class WIP Matl/Lbr/Ovhd       |        | 55     |
| March 29 | **Positive WIP, Make to stock item**  |        |        |
|          | Variance or COGS                      | 87     |        |
|          | PC WIP material                       |        | 87     |

## Postings for issues from inventory

You can issue parts from *inventory* Any item, whether finished goods, components, or raw material, that is available for use and is the property of the company or the property of another company given to your company for safekeeping. You issue inventory to specific job orders; an issued inventory item is removed from inventory and its costs become part of some work in process. for a job or *sales order* (SO) A record of information needed to authorize and process a customer's order. The sales order lists all items to be sold to the customer., or you can *scrap* Material, parts, or products that do not meet quality standards and cannot be reworked to meet them. parts in inventory. This sample ledger shows how issues from inventory transactions post for *standard costing* A type of cost accounting that bases financial numbers on the information stored in the item master. or *weighted average costing* methods:

   1. A type of inventory cost accounting that bases costs on information from existing inventory items and purchase orders for those items.

   2. A type of inventory cost accounting that bases costs on existing inventory plus total estimated values, divided by the total quantity in existing inventory plus the quantity moved to finished goods when the job order is complete.

| Date   | Transaction/Accounts            | Debit  | Credit |
|--------|---------------------------------|--------|--------|
| July 1 | **Issue from inventory to job** |        |        |
|        | Product class WIP material.     | 90     |        |
|        | Product class inventory         |        | 90     |
| July 3 | **Issue to scrap**              |        |        |
|        | GL Scrap Account                | 30     |        |
|        | Product class inventory         |        | 30     |
|
|