---
title: "Split a job order"
draft: false
type: Article
---

Sometimes a customer needs fewer items than they originally ordered. In those cases, you can split the job order and put any extra items in inventory or towards another job order. You can also split a job order to relieve bottlenecks at a work center.

You can select to manually set the quantity of materials and labor to transfer to the split job, or you can select to automatically transfer a set of default quantities that Made2Manage calculates.

How does Made2Manage calculate default quantities for materials and labor?

## To split a job order

1. Open the **Job Orders (JO)** page.

    1. Select **Production Management** > **Production Transactions** > **Shop Floor** > **Job Orders**.

        Or

    2. Search for **JO** or **Job Orders** in the **Navigation box** and then select **Job Orders**.

        **Job Orders (JO)** page appears.

2. Prepare to split the job:

    1. On the **Toolbar**, click **Browse**.

        The **Browse For Job Orders** window appears.

    2. Select the row that contains the required job order, and click **Select**. Or double-click the row that contains the required job order.

        Click **Cancel** to exit from the **Browse For Job Orders** window.

3. On the **Toolbar**, click **More Actions**.

4. Select **More Actions** > **Actions** > **Job Splitting**.

    The **Job Order Splitting** page appears.

5. On the child toolbar, click **New**.

    The **Adding Item** window appears.

6. To add a new internal job order to manufacture the items for inventory:

    1. Select **Internal JO**.

    2. Click **Accept**.

        Click **Cancel** to exit from the **Adding Item** window.

    3. In the **Split JO Quantity** box, type the number of items to split from the original job order.

        Or, click the icon at the end of the **Split JO Quantity** box to display the calculator. Enter the required value.

7. Or to add a new job order for this customer or another customer:

    1. On the child toolbar, click **New**.

        The **Adding Item** window appears.

    2. Select **Customer JO**.

    3. Click **Accept**.

        Click **Cancel** to exit from the **Adding Item** window.

    4. Click the **Sales Order Number** Lookup Reference.

        The **Lookup For Sales Order Number** window appears.

    5. Select the row that contains the sales order for the new job order, and click **Select**. Or double-click the row that contains the sales order for the new job order.

        Click **Cancel** to exit from the **Lookup For Sales Order Number** window.

    6. In the **Split JO Quantity** box, type the number of items to split from the original job order.

        Or, click the icon at the end of the **Split JO Quantity** box to display the calculator. Enter the required value.

8. To manually set the amount of labor and material to transfer to the split job order:

    1. Select **Edit** **BOM and Op Quantities Allocated To Split JO**.

    2. On the **Toolbar**, click **Save**.

        The **Job Order Splitting Transfers** is listed in the grid.

    3. Or, to transfer the default quantity of materials and labor to the split job order:

        By default, **Use Default BOM** and **Op Quantities Allocated To Split JO** is selected.

        The system updates the information now.

​