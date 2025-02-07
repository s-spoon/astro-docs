---

title: "Copy items to quote or sales order from existing source"
draft: false
type: Article

---

Follow these steps to copy items to a quote or sales order. Ensure the status of the Sales Order is in OPEN status.

**To copy item from existing source**

1. Open the sales order or quote and click the **Items** tab.

2. Add the item.

    - To add an item based on another item in the sales order or quote, or an item in another sales order, a quotation, or a job order:

    a. On the child toolbar, select **Copy** arrow, and then select either **Current** or **Quote** or **Quote Item** or **Sales Order** or **Sales Order Item** or **Job Order**.

    The respective **Copying \<form name>** window appears.

    b. Select the document from which you want to copy and click **Next**.

    c. Select the required item and click **Select**.

    - To use the **Advanced Configurator**:

    a. On the child toolbar, select **Copy** > **Advanced Configurator**. 

    On the sales order or quote page a message *Advanced Configurator has launched in a separate tab, please configure your product in that tab and click Submit. Upon submitting your configured product, return to the M2M tab and click import to add the line item to your document. appears and the **Product List Page** of the portal* is displayed.

    b. Select the product from the product list, which you want to configure.

    c. Configure the product and click **Submit**.

    The product Configurator page closes automatically and returns to the sales order or quote page.

    d. Click **Import**.

    On the sales order or quote page, the line item is added and data is saved automatically.

    e. If you don’t want to import the data from the product configurator to M2M, click **Cancel**.

    The Message *Are you sure you want to navigate away from this process? Closing this window will cancel the data importing from Product Configurator* is displayed.

f. Click **Ok**.

- To modify the line item using Reconfigure:

    a. To modify the line item you just added from Advanced Configurator, select the line item and click **Reconfigure** on the grid tool bar.This gets enabled if the line item is added from Advanced Configurator.

    On the sales order or quote page a message *Advanced Configurator has launched in a separate tab, please configure your product in that tab and click Submit. Upon submitting your configured product, return to the M2M tab and click import to add the line item to your document. appears and the **Product Page** of the portal* is displayed.

    b. Configure the product and click **Submit**.

    The product Configurator page closes automatically and returns to the sales order or quote page.

    c. Click **Import**.

    On the sales order or quote page, the line item is added and data is saved automatically.

    d. If you don’t want to import the data from the product configurator to M2M, click **Cancel**.

    The Message *Are you sure you want to navigate away from this process? Closing this window will cancel the data importing from Product Configurator* is displayed.

e. Click **Ok** .

- To add items in an SO created from a Replace-only RMA:

- On the child toolbar, click **Copy** .

> [!Note] Only **RMA** option is available when the SO is created from a Replace-only RMA.

- Click **RMA** .

    The **Copying RMA** window appears.

3.  Select the RMA and click **Finish**.

    The message *Do you want to update latest Item Master cost for copied Quote/SO Item(s)?* is displayed if you have copied items from another source document such as a Quote, Job Order, Sales Order, or an RMA.

    > [!Note] The message is not displayed if your copy source is the Advance Configurator.

4. In the message window that is displayed when you copy items from a Quote or Sales Order, click:

    -   **No**: To copy the cost of the item in the parent Quote or Sales Order as is.

    -   **Yes**: To copy the cost of the parent item(s) from the Item Master (INV) based on the following conditions:

    -   If the **Quote Detailed Bill of Material (QTDBOM)** or the **Quote Detailed Routing (QTDRTG)** is blank in the parent Quote, then the cost of parent items is updated only in the **Quote Price Summary (QTPSUM)** window according to the **CSPROD** – Estimates Costing Method.

    -   If the **Sales Order Detailed Bill of Material (SODBOM)** or the **Sales Order Detailed Routing (SODRTG)** is blank in the parent Sales Order, then the cost of parent items is updated only in the **Price Summary (SOPSUM)** window according to the **CSPROD** – Estimates Costing Method.

    -   If the **Quote Detailed Bill of Material (QTDBOM)** or the **Quote Detailed Routing (QTDRTG)** is not blank in the parent Quote, then the cost of **QTDBOM** standard items is updated according to the CSPROD – Estimates Costing Method. The Non Standard part costs are copied from parent Quote as is. The cost of **QTDRTG** is copied from the **Standard Routings (RTG)** window for all the matching operations and work center combinations.

    -   If the **Sales Order Detailed Bill of Material (SODBOM)** or the **Sales Order Detailed Routing (SODRTG)** is not blank in the parent Sales Order, then the cost of **SODBOM** standard items is updated according to the CSPROD – Estimates Costing Method. The Non Standard part costs are copied from parent Sales Order as is. The cost of **SODRTG** is copied from the **Standard Routings (RTG)** window for all the matching operations and work center combinations.The costs are automatically recalculated in the **Price Summary (SOPSUM)** window.
    
    > [!Note]  For a Make item, if the **Use Standard BOM and Routing** checkbox is selected in the **Items** tab, the **Quote Detailed Bill of Material (QTDBOM)** and **Quote Detailed Routing (QTDRTG)** cost details are copied from the Item Master and not from the previous Sales Order, or a Quotation, or a Job Order.

    5. Change the item's specifications as necessary.

        When your customer uses a different currency, in the Currency View field, click **Functional** to view prices in your currency Or click **Transactional** to view prices in the customer's currency.

    6. On the **Active Form** ribbon, click **Save**. The item is copied.

​