---

title: "Add quotation"
draft: false
type: Article

---

A quotation lists the price of goods that you can produce and deliver. When a customer needs a quotation, before you can place a sales order, add the quotation in Made2Manage. You can add a fresh quotation or base the new quotation on an existing quotation, sales order, or job order.

**To add fresh quotation**

1. Open the **Quotes (QUOTE)** page.

    a. Select **Sales Management** > **Sales Transactions** > **Quotes**.

    Or

    b. Search for **QUOTE** or **Quotes** in the **Navigation box** and then select **Quotes**.

    The **Quotes (QUOTE)** page appears.

2. On the **Toolbar**, click **New**.

3. Click the **Customer Number** lookup reference, and select the customer.

    > [!Note] You cannot select an inactive customer. A message, *Cannot Create Quote for an INACTIVE Customer. Invalid customer number* appears.

4. Click the **Quote Information** tab, and perform the following:

    a. Click the **Address Key** lookup reference, and select the address key.

    b. Click the **Ship to** lookup reference, and select the ship-to address key.

    c. Click the **Jurisdiction** lookup reference, and select the jurisdiction, if your company uses geographic based taxes.

5. Click the **Financial Information** tab, and perform the following:

    a. In the **Sales Code** dropdown, select the sales code.

    b. Click the **Currency** lookup reference, to change the currency for the quotation, if your company uses the multiple currency feature.

    c. In the **Total Order Discount (%)** field, enter the discount percent for the order.

    d. Select the **Contract Based** checkbox, if you want to apply contract to the quote. This displays the **Contract** field. Click the lookup reference, and select the contract for the associated customer from the **Lookup For Contract** window.

    If the Contract is selected on the header, it defaults to the newly added line items in the **Items** tab and the **Part Number** lookup reference is filtered based on the contract.

6. Click the **User Defined** tab to store details you do not find a place for on the **Quote Information** tab.

7. On the **Toolbar**, click **Save** to save the quotation.

    The **Item Details** page appears.

8. Add the first item:

    a. In the **DC Facility** dropdown, select the distribution facility.

    b. Specify the part number:

    > [!Note] If the Contract is selected on the header, it defaults to the newly added line items and the **Part Number** lookup reference is filtered based on the contract.

    If you want to add part numbers that are not on the defaulted contract, clear the **Contract** field from the line item and select any part/parts from all the part numbers displayed in the **Part Number** lookup reference.

    If you want to add part numbers that are on a different contract, select the required contract on the line item and then select the part/parts associated with the contract from the **Part Number** lookup reference.

    - To add a standard part, click the **Part Number** lookup reference, and select a part number.

    - To add a non-standard part:

        i. In the **Part Number** dropdown, enter the part number.

        ii. Press the **Tab** key.

        If the starting characters of the part number entered match the starting characters of an already existing part number in the **Item Master (INV)**, a browse window opens. If you click **Cancel** in the browse window or press **Esc**, the value entered in the **Part Number** field is retained, the **Revision** value is set to **NS** and the **Non Standard Item** checkbox is automatically selected.

        If the part number entered does not match any of the existing part numbers in the **Item Master (INV)**, the value entered is retained, the **Revision** value is set to **NS** and the **Non Standard Item** checkbox is automatically selected.

        c. In the **Quantity** dropdown, enter the part quantity.

        d. If the item is a non-standard make item, from the **Source Facility** dropdown, select the source facility.

        e. Click the **Shipping/Billing Details** tab, and perform the following:

        i. In the **Delivery** box, enter the delivery notes.

        ii. Select the **Taxable** checkbox, to make this item taxable.

        iii. Click the **Jurisdiction** lookup reference to change the jurisdiction, if your company uses geographic-based taxes.

9. To add more items:

    a. On the **Toolbar**, click **Save & Add Another**.

    b. Repeat steps **8a** - **8e** for the items that you want to add to the quotation.

10. On the **Toolbar**, click **Save**.


**To base new quotation on existing quotation, sales order, or job order**

1. Open the **Quotes (QUOTE)** page.

    a. Select **Sales Management** > **Sales Transactions** > **Quotes**.

    Or

    b. Search for **QUOTE** or **Quotes** in the **Navigation box** and then select **Quotes**.

    The **Quotes (QUOTE)** page appears.

2. Copy the quotation:

    a. On the **Toolbar**, click **Copy** and select one of the following.


    - **Current**

    - **Quote**

    - **Sales Order**

    - **Job Order**

    The respective **Copying \<form name>** window appears.

    c. Select a row, and click **Select**.

    If there are multiple entries, click **Next**, select the required items and then click **Select**.

    The message, *Do you want to update copied Item(s) and Component(s) with the latest estimated costs from the Item Master?* appears.

3. Click:

- **No**: To copy the cost in the parent quote as is.

- **Yes**: To copy the cost of parent item(s) from the **Item Master (INV)** based on the following conditions:

    - If the **Quote Detailed Bill of Material** or the **Quote Detailed Routing** is blank in the parent Quote, then the cost of parent items is updated only in the **Quote Price Summary** page according to the **CSPROD** – Estimates Costing Method.

    - If the **Quote Detailed Bill of Material** or the **Quote Detailed Routing** is not blank in the parent Quote, then the cost of **Quote Detailed Bill of Material** standard items is updated according to the **CSPROD** – Estimates Costing Method. The Non Standard part costs are copied from parent Quote as is. The cost of **QTDRTG** is copied from the **Standard Routings (RTG)** page for all the matching operations and work center combinations. The costs are automatically recalculated in the **Quote Price Summary** page.

        For a Make item, if the **Use Standard BOM and Routing** checkbox is selected in the **Items** tab, the **Quote Detailed Bill of Material** and **Quote Detailed Routing** cost details are copied from the Item Master and not from the previous Sales Order, or a Quotation, or a Job Order.

4. Enter the values in the respective fields.

5. On the **Toolbar**, click **Save**.

​