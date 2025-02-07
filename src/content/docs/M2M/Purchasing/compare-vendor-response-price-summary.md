---

title: "Compare vendor response price summary"
draft: false
type: Article

---

You can compare prices quoted from different vendors. This helps you to select the best price.

**To compare vendor response prices for a part**

1. Open the **Request For Quote (RFQ)** page.

    - Select **Production Management** > **Production Transactions** > **Purchasing** > **Request For Quote**.

        Or

    - Search for **RFQ** or **Request For Quote** in the **Navigation box** and then select **Request For Quote**.

       The **Request For Quote (RFQ)** page appears.

        >[!NOTE]
        >You can compare prices only if the RFQ is in **Open** status.

2. On the **Toolbar**, click Browse.
    
    The **Browse for Request for Quote** window is displayed.

3. Select a row and click **Select** or double-click the required RFQ for which you want to compare the vendor prices.

4. On the **Toolbar**, click **More Actions**.

5. Select **More Actions** > **Actions** > **Compare Prices By RFQ**.

    The **RFQ Vendor Response Summary (RFQSUMM)** page appears.

    The **RFQ Vendor Response Summary by RFQ** comprises of two grids:

    - **Item**

   - **Vendor**

    The **Item Grid** consists of the **Facility, Part Number, Rev, Vendor, Vendor Name, Promise Date, Order Qty, U/M, Order Unit Price**, and **Description**.

   - Item related information appears below the **Item** grid.

    The **Vendor Grid** consists of the **Vendor**, **Vendor Name**, **Price1**, **Price2**, **Price3**, **Price4**, and **Price5** (Vendor response for each quantity break point).

   - You will find various vendor responses listed in the **Vendor** grid.

   - You can select the **Show Price With Landed Cost** check box to include the landed costs in the Vendor Price.

    Vendor related information appears below the **Vendor** grid.

    This **Vendor Response** grid holds the vendor breakpoints and its respective prices.

    Landed Cost is enabled when landed cost exists for the particular breakpoint quantity.

    You can raise a purchase order for the selected vendor.

    RFQ Items cannot be split across vendors.

**To select a particular vendor based on the response**

1. Highlight to select part in the **Item** grid.

    Its related vendors is displayed in the **Vendor** grid.

2. Select the **Vendor** check box to select the best price vendor in the **Vendor** grid.

3. Click the **Assign vendor**.

    A message, *Vendor assigned successfully* appears.

4. Highlight the vendor attached part in the **Item** grid.

    The **Quantity Thru Breakpoints** and its **Vendor Prices** is displayed in the **Vendor Response** grid.

5. The selected part is attached to the selected vendor.

    If the RFQ has a **Demand Document No**, then the **QTY** mentioned in the **Demand Document NO**. is used as **Order Quantity**.

6. As long as a Purchase Order is not created, a vendor can be assigned / re-assigned any number of times.

7. If the **Demand Document Qty** and the **Vendor Qty** does not match exactly, then price taken will be the one where the **Vendor Qty** is closest to the **Demand Document Qty**.

    For example,

   - If the **SO Qty** is 50

   - Vendor responds 65,  **Order Price** - $100

   - Since the closest match to **SO Qty** is 65 in vendor response, $100 will be taken as **Order Price**.

   - This assigns the vendor to the selected part and assigned the price.

## Attach Vendor

   1. Select the vendor assigned part in the **Item** grid.

   2. In the Item grid, select the part and click **Attach Vendor**  to attach the vendor to the **Vendor** tab in the **Item Master (INV)** window.

        If no vendors are attached then the attached vendor is prioritized.

        If there are multiple items in the grid you can select multiple vendors from the **Vendor** grid.

## Update Price Summary

   - Material cost on the **Price Summary** page is updated in the Sales Order or Quote.

   - Item price and Material cost are updated in the **Sales Order Detailed Bill of Material (SODBOM)** and **Quote Detailed Bill of Material (QTDBOM)** pages respectively.

   - The price summary will be updated with the total price quoted by the vendor including the landed costs, if any.

## Create PO

You can create the purchase order from the **RFQ** using the **RFQSUMM** after assigning the vendor. For more information, see [Create PO from RFQ](create-po-from-rfq.md).

## Refresh

This refreshes the grid.

## RFQ Vendor Response Summary by Part

The **RFQ Compare Prices by Part** page displays a detailed summary of the **RFQ Vendor Summary** screen.

There are no standard operations buttons for the **RFQ Compare Prices by Part** screen. You can only view the Item and the associated vendor with prices per quantity that have been entered.

​