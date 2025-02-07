---

title: "Add a quotation"
draft: false


---

A quotation lists the price of goods that you can produce and deliver. When a customer needs a quo- tation, before you can place a sales order, add the quotation in Made2Manage. You can add a fresh quotation or base the new quotation on an existing quotation, sales order, or job order.

## To add a fresh quotation

1.  Open the **Quotes (QUOTE)** page.

    -  *Select* **Sales Management** > **Sales Transactions** > **Quotes**.

    Or

    -  *Search for* **QUOTE** *or* **Quotes** *in the* **Navigation box** *and then select* **Quotes**. <br>The **Quotes (QUOTE)** *page appears.*
2.  On the **Toolbar**, click **New**.

3.  Click the Customer Number lookup reference and select the customer.

**Note:**   
You cannot select an inactive customer. A message, *Cannot Create Quote for an INACTIVE Customer. Invalid customer number* appears.

1.  Click the **Quote Information** tab, and perform the following:

2.  Click the **Address Key** lookup reference, and select the address key.
    1.  Click the **Ship to** lookup reference, and select the ship-to address key.
    2.  Click the **Jurisdiction** lookup reference, and select the jurisdiction, if your company uses geographic-based taxes.
3.  Click the **Financial Information** tab, and perform the following:
    1.  In the **Sales Code** list, select the sales code.
    2.  Click the **Currency** lookup reference, to change the currency for the quotation, if your company uses the multiple currency feature.
    3.  In the **Total Order Discount (%)** field, enter the discount per- cent for the order.
    4.  Select the **Contract Based** check box, if you want to apply contract to the quote. This displays the **Contract** field. Click the lookup reference, and select the contract for the associated customer from the **Lookup For Contract** window.

If the Contract is selected on the header, it defaults to the newly added line items in the **Items** tab and the **Part Number** lookup reference is filtered based on the contract.

1.  Click the **User Defined** tab to store details you do not find a place for on the **Quote Information** tab.

2.  On the **Toolbar**, click **Save** to save the quotation. The **Item Details** page appears.

3.  Add the first item:
    1.  In the DC Facility list, select the distribution facility.
    2.  Specify the part number:

**Note:**

If the Contract is selected on the header, it defaults to the newly added line items and the Part Number lookup reference is filtered based on the contract.

If you want to add part numbers that are not on the defaulted contract, clear the **Contract** field from the line item and select any part/parts from all the part numbers displayed in the **Part Number** lookup reference.

If you want to add part numbers that are on a different contract, select the required contract on the line item and then select the part/parts associated with the contract from the **Part Number** lookup reference.

» To add a standard part, click the **Part Number** lookup reference, and select a part number.

» To add a non-standard part:

1.  In the **Part Number** field, type the part number.
    1.  Press the **Tab** key.

        If the starting characters of the part number entered match the starting characters of an already existing part number in the **Item Master (INV)**, a browse window opens. If you click **Cancel** in the browse window or press **Esc**, the value entered in the **Part Number** field is retained, the **Revision** value is set to **NS** and the **Non Standard Item** check box is automatically selected.

        If the part number entered does not match any of the existing part numbers in the **Item Master (INV)**, the value entered is retained, the **Revi- sion** value is set to **NS** and the **Non Standard Item** check box is automatically selected.

    2.  In the **Quantity** field, type the part quantity.
2.  If the item is a non-standard make item, from the **Source Facility** list, select the source facility.

    1.  Click the **Shipping/Billing Details** tab, and perform the following:
        1.  In the **Delivery** field, type the delivery notes.
        2.  Select the **Taxable** check box, to make this item taxable.
        3.  Click the **Jurisdiction** lookup reference to change the jur- isdiction, if your company uses geographic-based taxes.
2.  To add more items:
    1.  On the **Toolbar**, click **Save & Add Another**.
    2.  Repeat steps **8a** - **8e** for the items that you want to add to the quotation.
3.  On the **Toolbar**, click **Save** to save the details.

## To base a new quotation on an existing quo- tation, sales order, or job order

1.  Open the **Quotes (QUOTE)** page.
    
    -  *Select* **Sales Management** > **Sales Transactions** > **Quotes**.

    Or

    -  *Search for* **QUOTE** *or* **Quotes** *in the* **Navigation box** *and then select* **Quotes**. <br>The **Quotes (QUOTE)** *page appears.*

2.  Copy the quotation:

    1.  On the **Toolbar**, click the arrow beside the **Copy** button.

    2.  Select one of the following:

        ≡ **Current**

        ≡ **Quote**

        ≡ **Sales Order**

        ≡ **Job Order**

    The respective **Copying \<form name>** window appears.

    2.  Select a row, and click **Select**.

    If there are multiple entries, click **Next**, select the required items and then click **Select**.

    The message, '*Do you want to update copied Item(s) and Component(s) with the latest estimated costs from the Item Master?*' appears.

3.  Click:

    » **No**: To copy the cost in the parent quote as is.

    » **Yes**: To copy the cost of parent item(s) from the **Item Master (INV)** based on the following conditions:

    ≡ If the **Quote Detailed Bill of Material** or the **Quote Detailed Routing** is blank in the parent Quote, then the cost of parent items is updated only in the **Quote Price Summary** screen according to the **CSPROD** – Estimates Costing Method.

    ≡ If the **Quote Detailed Bill of Material** or the **Quote Detailed Routing** is not blank in the parent Quote, then the cost of **Quote Detailed Bill of Material** standard items is updated according to the **CSPROD** – Estimates Costing Method. The Non Standard part costs are copied from parent Quote as is. The cost of **QTDRTG** is copied from the **Stand- ard Routings (RTG)** page for all the matching operations and work center combinations. The costs are automatically recalculated in the **Quote Price Summary** screen.

    For a Make item, if the **Use Standard BOM and Routing** check box is selected in the **Items** tab, the **Quote Detailed Bill of Material** and **Quote Detailed Routing** cost details are copied from the Item Master and not from the previous Sales Order, or a Quotation, or a Job Order.

4.  Enter the values in the respective fields.

5.  On the **Toolbar**, click **Save**.