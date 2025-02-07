---

title: "Associate transaction types with product classes, group codes, and units of measure"
draft: false
type: Article

---

In order for field service to create Made2Manage sales orders and customer invoices for the basic type of services, it is necessary to define for each of these items, the particular product class, group codes, and the unit of measure. The corresponding sales-order line items will be treated as non-inventory parts that use these assigned product class codes to determine the related sales and cost of goods sold general ledger accounts.

If you have not already done so, set service order information first. See the Related Information.

To associate **transaction** types with product classes, group codes, and units of measure

1. Open the **Field Service Setup Information (CSFSM)** page.

    a. Select **Customer Relationship Management** > **Master Data** > **Field Service** > **Field Service Setup Information**.

    Or

    b. Search for **CSFSM** or **Field Service Setup Information** in the **Navigation box** and then select **Field Service Setup Information**.

    The **Field Service Setup Information (CSFSM)** page appears.

2. Click the **Sales Order Classes** tab.

3. For each transaction type for which you want to associate a product class, group code, and unit of measure:

    a. In the **Transaction** column, click the transaction to use. The selected value is populated in the field at the bottom of the page.

    b. In the **Product Class** field, click the Lookup Reference.

    The **Lookup For Product Class** window appears.

    c. Select the row that contains the required class, and click **Select**.

    Or <br> double-click the row that contains the required class.

    Click **Cancel** to exit from the **Lookup For Product Class** window.

    d. In the **Group Code** field, click the Lookup Reference.

    The **Lookup For Group Code** window appears.

    e. Select the row that contains the required code, and click **Select**.

    Or <br> double-click the row that contains the required code.

    Click **Cancel** to exit from the **Lookup For Group Code** window.

    f. In the **U/M** list, select the unit of measure to use.

    g. Select the **This Can Be Billed to the Customer**checkbox, to have the system treat this type of charge as something that is billable.

    If you leave this box empty, the system assigns a zero sales price for these types of charges.

5. Select the **This Item Is Taxable**checkbox, to have the item subject to sales tax calculations.

6. On the **Toolbar**, click **Save**. The changes are saved.

For information about **GL** **Expenses 1** tab, **GL Expenses 2** tab, **GL Expenses 3** tab and setting up general ledger information, see the Related Information.

The next step is to set service order numbering. See the Related Information.

​