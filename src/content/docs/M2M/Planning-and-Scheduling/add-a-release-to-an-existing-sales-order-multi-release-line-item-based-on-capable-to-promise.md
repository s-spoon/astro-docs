---

title: "Add a release to an existing sales order multi-release line item based on Capable-to-Promise"
draft: false
type: Article

---

You can add sales order releases and all associated jobs to an existing multi-release sales order item. Several supplies may support each demand. You can add only a capable-to-promise (CTP) sales order for which there are multiple releases.

The **Releases** grid shows the releases belonging to the current sales order line item. The **Supplies** grid shows the job orders supporting the current sales order release.

**To add a release to an existing sales order multi-release line item based on Capable-to-Promise**

1. Open the **Interactive Planning by Sales Order (PSINTPLS)** page.

    a. Select **Planning and Scheduling** > **P&S Production** > **Planning** > **Interactive Planning by Sales Order**.

    Or

    b. Search for **PSINTPLS** or **Interactive Planning by Sales Order** in the **Navigation box** and then select **Interactive Planning by Sales Order**.

    The **Interactive Planning by Sales Order (PSINTPLS)**  page appears.

2. Select the sales order:

- **Method 1**

    i. On the **Toolbar**, click **Search** .

    ii. In the **SO No** field, type the sales order number.

    iii. On the **Toolbar**, click **Search** .

    iv. Select the sales order from the **Search For Interactive Planning by Sales Order** window.

- **Method 2**

    i. On the **Toolbar**, click **Browse** .

    ii. Select the part from the **Browse For Interactive Planning by Sales Order** window.

3. To filter the parts based on demand, in the **Filter on Demand** filed in **Filters** area, select one of the options listed in the following table:

    | Click...       | ...to                                                                                                                   |
    |----------------|-------------------------------------------------------------------------------------------------------------------------|
    | All            | Include all sales order release items                                                                                   |
    | Early          | Include parts that have at least one supply (job or purchase order) currently set to arrive earlier than needed         |
    | In Ship Buffer | Include parts that have at least one supply (job or purchase order) currently in the shipping buffer                    |
    | Late           | Include parts that have at least one supply (job or purchase order) currently set to finish or arrive later than needed |
    |

> [!TIP] To see only the demands that satisfy the filter, select the **Filter on Details** check box. The results appear in the **Releases** and **Supplies** grid.

4. On the Toolbar, click **More Actions**.

5. Select **More Actions** > **Actions** > **CTP Add**.

    The **Add/Modify CTP (PSCTP)** window appears.

6. In the **Date** field, specify the due date.

7. In the **Quantity** field, specify the number of items needed.

8. Click the **SO Number** lookup reference button and select the sales order number from the **Lookup For SO Number** window.

9. Specify the Lot Size:

    - To allow only the minimum order quantity for a CTP request, select the **Use Min Ord Qty** check box, and specify the minimum order quantity.

    - To allow only the maximum order quantity for a CTP request, select the **Use Max Ord Qty** check box, and specify the maximum order quantity.

    - To allow multiple quantities, select the **Use Mlt Ord Qty** check box, and specify the maximum order quantity.

10. Click **Calculate**.

If you can supply the requested quantity, M2M Planning and Scheduling bases the demand due date on the requested date and the earliest possible delivery date.

The calculated results appear in the **Supplies** grid.

11. If you are satisfied with the CTP order results, click **Take Order**. To cancel the new demand, click **Cancel**.

12. Close The **Add/Modify CTP (PSCTP)** window.

The new demand information appears in the **Releases** grid of the **Interactive Planning by Sales Order (PSINTPLS)** page.

​