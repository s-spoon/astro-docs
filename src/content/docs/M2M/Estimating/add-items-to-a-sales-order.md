---

title: "Add items to a sales order"
draft: false


---


A sales order specifies a customer's request to buy something from your company. You can add items to a sales order at any time before you convert the sales order into a job order.

You can add new items, or copy items from the current sales order, another sales order, a quotation, a job order, the estimate file, or something you configured in the Product Configurator.

## To add a new item

1.  Open the sales order.

2.  Click the **Items** tab.

3.  On the grid toolbar, click **New**. The **Item Details** page appears.
4.  Set part information:

    1.  In the **DC Facility** list, select the distributor facility.

        If the Contract is selected on the **Sales Order** > **Financial Info** tab, it defaults to the newly added line items and the **Part Number** Lookup is filtered based on the contract.

        If you want to add part numbers that are not on the defaulted con- tract, clear the **Contract** field from the line item and select any part/parts from all the part numbers displayed in the **Part Number** Lookup.

        If you want to add part numbers that are on a different contract, select the required contract on the line item and then select the part/parts associated with the contract from the **Part Number** Lookup.

        2.  For standard parts, click the **Part Number** lookup reference, and select the part number from the **Lookup For Part Number** window.

    2.  For non-standard items:
        1.  In the **Part Number** field, type the part number.
        2.  Click the **Tab** key.

            If the starting characters of the part number entered match the starting characters of an already existing part number in the **Item Master (INV)**, a browse window opens. If you click **Cancel** in the browse window or press **Esc**, the value entered in the **Part Number** field is retained, the **Revision** value is set to **NS** and the **Non Standard Item** check box is automatically selected.

            If the part number entered does not match any of the existing part numbers in the **Item Master (INV)**, the value entered is retained, the **Revision** value is set to **NS** and the **Non Standard Item** check box is automatically selected.

        3.  In the **Source** list, select the source.

            If the item is a non-standard make item, in the **Source** list, select **Make.**
            
            If the item is a non-shippable, non-demand driving line item, in the **Source** list, select **Misc**. Such items carry over to the invoice and are listed in the Sales Order document sent to the customer.

        4.  In the **Product Class**, and **Group Code** fields, specify appropriate values.

        5.  When a price schedule is selected, the **Unit Price** field is read-only and is updated automatically when the quantity is changed. The unit price is calculated as per the Price Schedule in the **Variable Price Schedules (PRSCV)** page.

**Note:**

When the quantity is changed, a message stating the new unit price is displayed. Click

**Yes** to change the unit price.

Or when no price schedule is selected, enter the appropriate value in the **Unit Price** field.

    6.  Select the **Lot/SN Required** check box and select some components from the **Extent Of Control** list.

    1.  Click the **Shipping/Billing Info** tab, and in the **Delivery Commitment** field, type the delivery commitment notes.

    2.  In the **Quantity** field, specify the number of parts.

5.  On the **Toolbar**, click **Save**.

    If you created a new SO, ensure that its status is **OPEN**.

6.  Set the price:

    1.  In the **Unit Price** field, specify the price per unit.
    1.  If your company has multiple facilities, type the cost of transporting the item from one facility to another in the **Interfacility** field.

    2.  To apply a price schedule:

        1.  Click the **Shipping/Billing Info** tab.

        2.  In the **Type** list, select the appropriate option for the kind of price schedule to apply: **Fixed** or **Variable**.

        3.  Click **Price Schedule** lookup reference and select the schedule from **Lookup For Price Schedule** window.

7.  Select the **Taxable** check box, to make this item taxable.

    The **Jurisdiction** field is automatically populated with the relevant jurisdiction under certain conditions. Refer to Identify Jurisdiction for more information.

8.  If your company uses geographic-based taxes, to change the jurisdiction:

    1.  Click the **Jurisdiction** lookup reference.
    
    The **Lookup For Jurisdiction** window appears.

    2.  Select the row that contains the required jurisdiction, and click **Select.**

        Or double-click the row that contains the required jurisdiction.

9.  If your company uses the Planning and Scheduling module:

    » In the **Planning** tab of **Item Master (INV**) page, select the **Manually Planned** check box to indicate that user interaction is required to manually create jobs instead of the Planning function automatically creating jobs.
    
    This check box is displayed only for **Make** parts, and only if you have purchased and activated one of the two Planning and Scheduling planning modules.

10.  To apply progress billing, in the **Progress Billing Type** list, select the type of progress billing.

**What do these values mean?**

If it is a multi-release item, you must select the type of progress billing on the **Sales Order Releases page.**

If you select a type of progress billing, you must enter progress billing information after you save.

11.  On the **Toolbar**, click **Save** to save the item.