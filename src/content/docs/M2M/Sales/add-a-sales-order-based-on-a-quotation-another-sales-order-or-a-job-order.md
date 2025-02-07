---

title: "Add sales order based on quotation, another sales order, or job order"
draft: false
type: Article

---

1. Open the **Sales Orders (SO)** page.

    a. Select **Sales Management** > **Sales Transactions** > **Sales Orders**.

    Or

    b. Search for **SO** or **Sales Orders** in the **Navigation box** and then select **Sales Orders**.

    The **Sales Orders (SO)** page appears.

2. On the **Toolbar**, click **Browse**.

    The **Browse For Sales Orders** window appears.

3. Select the row that contains the required sales order, and click **Select**.

    Or double-click the row that contains the required sales order.

4. Copy the Sales Order:

- To base the Sales Order on the one displayed, on the **Toolbar**, select **Copy** > **Current**.

- To base the Sales Order on an existing Quote, RMA, Sales Order, or Job Order option as appropriate:

    i. On the **Toolbar**, click **Copy**, and select one of the following:

    - **Quote**

    - **Sales Order**

    - **RMA**

    - **Job Order**

    ii. Select the required Quote, Sales Order, RMA, or Job Order from the **Copying \<***name**>* window, and click **Select**.

    If there are multiple entries, click **Next**, select the required items and then click **Select**.

    The message, *Do you want to update the copied Item(s) and Component(s) with the latest estimated costs from the Item Master?* appears.

5. Click:

    - **No**: To copy the cost of the item in the parent Quote or Sales Order as is.

    - **Yes**: To copy the cost of the parent item(s) from the Item Master (INV) based on the following conditions:

    If the **Sales Order Detailed Bill of Material** or the **Sales Order Detailed Routing** is blank in the parent Sales Order, then the cost of parent items is updated only in the **Price Summary** screen according to the **CSPROD** – Estimates Costing Method.

    If the **Sales Order Detailed Bill of Material** or the **Sales Order Detailed Routing** is not blank in the parent Sales Order, then the cost of **Sales Order Detailed Bill of Material** standard items is updated according to the CSPROD – Estimates Costing Method. The Non Standard part costs are copied from parent Sales Order as is. The cost of **SODRTG** is copied from the **Standard Routings (RTG)** page for all the matching operations and work center combinations. The costs are automatically recalculated in the **Price Summary** screen.

    For a Make item, if the **Use Standard BOM and Routing** check box is selected, the **Sales Order Detailed Bill of Material** and **Sales Order Detailed Routing** cost details are copied from the Item Master and not from the previous Sales Order, or a Quotation, or a Job Order.

6. Make any necessary changes to the sales order's items.

7. On the **Toolbar**, click **Save**.

​