---

title: "Add items to quotation"
draft: false
type: Article

---

A quotation estimates the price of goods you can produce and deliver. A quotation lists all the items the prospect has asked you about. You can add items from scratch, or copy items from the current quotation, another quotation, a sales order, a job order, the estimate file.

**To add an item from scratch**

1. Open the quotation and click the **Items** tab.

2. On the child toolbar, click **New**.

    The **Item Details** page appears.

3. Set part information:

    - In the **DC Facility** dropdown, select the distribution facility.

    If the Contract is selected on the **Quote** > **Quote Information** tab/ **Financial Information** section, it defaults to the newly added line items and the **Part Number** lookup is filtered based on the contract.

    If you want to add part numbers that are not on the defaulted contract, clear the **Contract** field from the line item and select any part/parts from all the part numbers displayed in the **Part Number** lookup.

    If you want to add part numbers that are on a different contract, select the required contract on the line item and then select the part/parts associated with the contract from the **Part Number** lookup.

4. To select a standard part:

    a. Click the **Part Number** lookup reference.

    The **Lookup For Part Number** window appears.

    b. Select the row that contains the required part number, and click **Select**.

    Or double-click the row that contains the required part number.

5. To add a non-standard part:

    a. In the **Part Number** box, enter the part number.

    b. If the starting characters of the part number entered match the starting characters of an already existing part number in the **Item Master (INV)**, it appears in the list. Press **Enter** to retain the value in the **Part Number** field. Select the **Non Standard Item** checkbox, the **Revision** value is automatically set to **NS**.

    If the part number entered does not match any of the existing part numbers in the **Item Master (INV)**, the value entered is retained, the **Revision** value is set to **NS** and the **Non Standard Item** checkbox is automatically selected.

    c. In the **Quantity** box, enter specify the quantity.

    d. Click the **Shipping/Billing Details** tab, and in the **Delivery** box, enter the delivery notes.

6. If the item is a non-standard make item, in the **Source Facility** dropdown, select the source facility.

7. When no price schedule is selected, specify the price of one item in the **Unit Price** field.

8. When a price schedule is selected, the **Unit Price** field is read-only and is updated automatically when the quantity is changed. The unit price is calculated as per the Price Schedule in the **Variable Price Schedules (PRSCV)** page.

    > [!Note]  When the quantity is changed, a message stating the new unit price is displayed. Click **Yes** to change the unit price.

9. To apply a price schedule:

    a. Click the **Shipping/Billing Details** tab.

    b. In the **Type** dropdown, select **Fixed** or **Variable** according to the kind of price schedule to apply.

    c. In the **Price Schedule** dropdown, select the schedule.

10. Select the **Taxable** checkbox, to make this item taxable.

11. If your company uses geographic-based taxes, change the jurisdiction if required:

    i. Click the **Jurisdiction**  lookup reference.

    The **Lookup For Jurisdiction** window appears.

    ii. Select the row that contains the required jurisdiction, and click **Select**.

    Or double-click the row that contains the required jurisdiction.

12. To apply progress billing, in the **Progress Billing Type** dropdown, select the type of progress billing.


    If you select a type of progress billing, you must enter progress billing information after you save.

13. Click **Save** to save the item.

​