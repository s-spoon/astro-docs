---

title: "Change the quantity or date for sales order line item release based on Capable-to-Promise"
draft: false
type: Article

---

You can change a plan or schedule by changing an item on an existing sales order. If a customer decides to increase the quantity of an item or change the demand date, you can enter the change to see if you can deliver the customer's new request by the due date before you accept the change.

An item's demand appears in the **Demands** grid. Several supplies may support each demand. The supplies appear in the **Supplies** grid.

You can change only the quantity and requested date of the sales order release.

**To change the quantity or date for a sales order line item release based on Capable-to-Promise**

1. Open the **Interactive Planning by Sales Order (PSINTPLS)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Planning** > **Interactive Planning by Sales Order**.

    Or

    - Search for **PSINTPLS** or **Interactive Planning by Sales Order** in the **Navigation box** and then select **Interactive Planning by Sales Order**.

        The **Interactive Planning by Sales Order (PSINTPLS)**  page appears.

2. On the Toolbar, click **More Actions**.

3. Select **More Actions** > **Actions** > **CTP Add**.

    The **Add/Modify CTP (PSCTP)** window appears.

4. In the **Quantity** field, change the number of items.

5. Click **Calculate**.

    If you can supply the requested quantity, M2M Planning and Scheduling bases the demand due date on the requested date and the earliest possible delivery date.

    The calculated results appear in the **Supplies** grid of the **Add/Modify CTP (PSCTP)** window.

6. If you are satisfied with the CTP order results, click **Take Order**.

> [!TIP] To cancel the CTP order, click **Cancel**.

The updated release information appears in the **Releases** grid of the **Interactive Planning by Sales Order (PSINTPLS)** page.

​