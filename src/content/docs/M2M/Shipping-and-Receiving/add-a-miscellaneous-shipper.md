---
title: "Add a miscellaneous shipper"
draft: false
type: Article
---

A shipper is a record of items in a shipment. In certain scenarios, you may ,to ship goods without a sales order when vendors or customers request product samples. In such cases, you must add a miscellaneous shipper.

Since miscellaneous shippers are added without a sales order, items shipped using a miscellaneous shipper will not affect inventory levels or post a transaction to the general ledger.

## To add a miscellaneous shipper

1. Open the **Shipping (SHIP)** page.

   1. Select **Production Management** > **Production Transactions** > **Shipping** > **Shipping**.

        Or

   2. Search for **SHIP** or **Shipping** in the **Navigation box** and then select **Shipping**.

        **Shipping (SHIP)** page appears.

2. Select the shipper options:

    *You cannot select the account number of an inactive customer. If you do so, the error message "Cannot Create Shipper for an INACTIVE Customer." is displayed.*

   1. On the **Toolbar**, click **New**.

   2. Click the **Customer Number** lookup reference.

        The **Lookup For Customer Number** window appears.

   3. Highlight a row and click **Select**.

   4. Click the **Ship-To Address Key** lookup reference.

        The **Lookup For Ship-To Address Key** window appears.

    5. Highlight a row and click **Select**.

3. If you are not shipping the items on the current date, in the **Ship Date** field, type the shipping date.

4. *Set information about the shipper:*

   1. In the **Ship Weight** field, type the weight shipped.

   2. In the **No Of Boxes** field, enter the number of boxes being shipped.

   3. In the **Collected By** and **Entry By** fields, type the initals of the user preparing the items for shipment and of the user making the entry respectively.

   4. From the **Ship Via** list, select the carrier used to ship the item.

        If you use United Parcel Service as your shipping carrier, you can configure Made2Manage to share shipping information with the UPS OnLine WorldShip software. For more information, see the "**UPS OnLine WorldShip Installation and Setup Guide**".

   5. From the **FOB Point** list, select the freight on board point.

        From the **FOB Point** list, click **Edit FOB Point** to either add a new Freight On Board point or modify the value.

   6. In the **Freight Charge** and **Bill-Of-Lading** fields, type the freight charge and the bill of lading number respectively.

5. On the **Toolbar**, click **Save** to save the shipper details.

    The next step is to add the items to ship.

​