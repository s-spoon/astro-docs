---

title: "Add parts to enhanced fixed price list"
draft: false
type: Article

---

After you create an enhanced fixed price list, add parts to the list. You can set up enhanced fixed price lists using fixed or variable pricing types. An enhanced fixed price list using variable pricing includes price adjustments for up to nine ranges of volume. When you add a quotation or sales order, you can select the enhanced fixed price list to use.

**To add parts to customer contract**

1. Open the **Customer Contracts** (CONTPR) page.

    a. Select **Utilities** > **Company Setup** > **Sales** >  **Customer Contracts**.

    Or

    b. Search for **CONTPR** or **Customer Contracts** in the **Navigation box** and then select **Customer Contracts**.

    The **Customer Contracts (CONTPR)** page appears.

2. On the **Toolbar**, click **Browse**.

    The **Browse For Customer Contracts** window appears.

3. Select the desired row that contains the required contract, and click **Select**.

    Or double-click the enhanced fixed price list and the values are populated in the respective fields.

    Click **Cancel** to exit from the **Browse For Customer Contracts** window.

4. Select the item to add to the price schedule:

    a. Click the **Parts** tab.

    b. On the grid toolbar, click **New**.

    Or

    The **Parts** tab appears to add items to the price schedule. You can enter the parts to be included in the contract.

    You will notice that the **Contract Code**, **Customer Number**, **Distributor**, and **Description** is retrieved from the **Contract** tab.

5. Set the values for the following fields:

    a. In the **Part Number** field, enter the part number. Or click the **Part Number** lookup reference.

    The **Lookup For Part Number** window appears.

    b. Select the row that contains the required part number, and click **Select**. Or double-click the row that contains the required part number.

    Click **Cancel** to exit from the **Lookup For Part Number** window.

    The **Part Number**, **Rev**, **Description**, and **Unit Price** fields are automatically filled.

6. Enter the Revision number.

    If the selected part does not have Selling Price defined in the **Item Master (INV)** page, then a message, *Selling Price is not available in the Item Master* appears.

    Click **Close** on the message box to continue.

    This will not pull up the Item Master price.

    If the Selling price is specified in the **Item Master** page, both the **Current** and **When Added To Contract** fields are populated.

7. In the **Price Type** section, set pricing information:

    There are two types of pricing types:

    a. Fixed Pricing Type

    i. Click **Fixed** to use a fixed price schedule.

    ii. In the **Unit Price** box, enter the unit price.

    Or

    Click the Calculator icon to display the Calculator. Enter the required value.

    iii. On the **Toolbar**, click **Save**.

    The price will be pulled into the **SO** or **Quote**.

    b. Variable Pricing Type

    i. Click **Variable** to use a variable price schedule.

    ii. In the **Quantity Ranges** section, specify each quantity.

    See [CONTPR Parts tab]() for more information about each of these fields.

8. In the **Price List** section, select a discount:

    a. Select the **Discount By** checkbox.

    b. Select one of the following:

    - **Percentage**: Specify a discount in percentage. This is the default value.

    - **Amount**: Specify a discount as an amount.


9. In the **Discount Percentage** or **Discount Amount** fields, enter the required value.

    Unit Price is calculated and displayed.

    In order to receive this discount, a Purchase Commitment has to be made.

10. On the child toolbar, click **Recalculate Prices**.

    See [CONTPR Parts tab]() for more information about each of these fields.

11. On the **Toolbar**, click **Save**. The price schedule is saved.

​