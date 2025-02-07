---

title: "**View supply and demand by sales order**"
draft: false
type: Article

---

If you monitor sales orders, you can view supply and demand information for a specific sales order. The **Releases** grid shows the releases belonging to the current sales order line item. The **Supplies** grid shows the supply supporting the current sales order release.

You can also add a capable-to-promise (CTP) sales order for which there are multiple releases. For more information, see the Related topics.

**To view supply and demand by sales order**

1. Open the **Interactive Planning by Sales Order (PSINTPLS)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Planning** > **Interactive Planning by Sales Order**.

    Or

    - Search for **PSINTPLS** or **Interactive Planning by Sales Order** in the **Navigation box** and then select **Interactive Planning by Sales Order**.

        The **Interactive Planning by Sales Order (PSINTPLS)**  page appears.

2. Select the sales order:

- **Method 1**

    i. On the **Toolbar**, click **Search** .

    ii. In the **SO No** field, type the sales order number.

> [!TIP] Type the starting characters of the sales order number to search all sales orders beginning with those characters.


    iii. On the **Toolbar**, click **Search** .

    iv. Select the sales order from the **Search For Interactive Planning by Sales Order** window.

- **Method 2**

    i. On the **Toolbar**, click **Browse** .

    ii. Select the sales order from the **Browse For Interactive Planning by Sales Order** window.

3. To view sales order release items that meet a specific sales order demand, in the **Filter** area, choose how to limit the information:

| **Click…**     | **…to**                                                                                                                   |
|----------------|---------------------------------------------------------------------------------------------------------------------------|
| All            | Include all sales order release items.                                                                                    |
| Early          | Include parts that have at least one supply (job or purchase order) currently set to arrive earlier than needed.          |
| In Ship Buffer | Include parts that have at least one supply (job or purchase order) currently in the shipping buffer                      |
| Late           | Include parts that have at least one supply (job or purchase order) currently set to finish or arrive later than needed.  |

> [!TIP] To see only the demands that satisfy the filter, select the **Filter on Detail** check box. The results appear in the **Releases** and **Supplies** grid.

4. View the information.

​