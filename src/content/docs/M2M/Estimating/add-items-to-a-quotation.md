---

title: "Add items to a quotation"
draft: false


---

A quotation estimates the price of goods you can produce and deliver. A quotation lists all the items the prospect has asked you about. You can add items from scratch, or copy items from the current quotation, another quotation, a sales order, a job order, the estimate file.

## To add an item from scratch

1.  Open the quotation and click the **Items** tab.

2.  On the grid toolbar, click **New**. 
    
    The **Item Details** page appears.

3.  Set part information:

    » In the **DC Facility** list, select the distribution facility.

    If the Contract is selected on the **Quote** > **Quote Information** tab/ **Financial Information** section, it defaults to the newly added line items and the **Part Number** lookup is filtered based on the contract.

    If you want to add part numbers that are not on the defaulted con- tract, clear the **Contract** field from the line item and select any part/parts from all the part numbers displayed in the **Part Number** lookup.

    If you want to add part numbers that are on a different contract, select the required contract on the line item and then select the part/parts associated with the contract from the **Part Number** lookup.

4.  To select a standard part:
    1.  Click the **Part Number** lookup reference.
    
    The **Lookup For Part Number** window appears.

    2.  Select the row that contains the required part number, and click **Select.**

        Or double-click the row that contains the required part number.

5.  To add a non-standard part:

    1.  In the **Part Number** field, type the part number.

    2.  If the starting characters of the part number entered match the start- ing characters of an already existing part number in the **Item Master (INV)**, it appears in the list. Press enter to retain the value in the **Part Number** field. Select the **Non Standard Item** check box, the **Revision** value is automatically set to **NS**.

        If the part number entered does not match any of the existing part numbers in the **Item Master (INV)**, the value entered is retained, the **Revision** value is set to **NS** and the **Non Standard Item** check box is automatically selected.

    3.  In the **Quantity** field, specify the quantity.

    4.  Click the **Shipping/Billing Details** tab, and in the **Delivery** field, type the delivery notes.

6.  If the item is a non-standard make item, in the **Source Facility** list, select the source facility.

7.  When no price schedule is selected, specify the price of one item in the **Unit Price** field.

8.  When a price schedule is selected, the **Unit Price** field is read-only and is updated automatically when the quantity is changed. The unit price is calculated as per the Price Schedule in the **Variable Price Schedules (PRSCV)** page.

**Note:**

When the quantity is changed, a message stating the new unit price is displayed. Click **Yes** to change the unit price.

9.  To apply a price schedule:

    1.  Click the **Shipping/Billing Details** tab.

    2.  In the **Type** list, select **Fixed** or **Variable** according to the kind of price schedule to apply.

    3.  In the **Price Schedule** list, select the schedule.

10.  Select the **Taxable** check box, to make this item taxable.

11.  If your company uses geographic-based taxes, change the jurisdiction if required:
    1.  Click the **Jurisdiction** lookup reference.
    
    The **Lookup For Jurisdiction** window appears.

    2. Select the row that contains the required jurisdiction,
    and click **Select**.

    Or double-click the row that contains the required jurisdiction.


12.  To apply progress billing, in the **Progress Billing Type** list, select the type of progress billing.

**What do these values mean?**

If you select a type of progress billing, you must enter progress billing information after you save.

13.  On the **Toolbar**, click **Save** to save the item.