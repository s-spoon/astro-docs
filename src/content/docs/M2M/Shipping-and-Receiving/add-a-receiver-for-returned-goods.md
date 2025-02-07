---
title: "Add a receiver for returned goods"
draft: false
type: Article
---

You can create a receiver against an RMA number for goods that customers return to you.

To add a receiver against a purchase order or to add a receiver without a purchase order, see the **.

## To add a receiver for returned goods

1. Open the **Receiving (RECV)** page.

   1. Select **Production Management** > **Production Transactions** > **Inventory** > **Receiving** > **Receiving**.

        Or

   2. Search for **RECV** or **Receiving** in the **Navigation box** and then select **Receiving**.

        **Receiving (RECV)** page appears.

2. Specify which customer is returning the goods:

   1. Click **Copy** on the toolbar.

   2. Select **Returned Goods** from the list.

        The **Copying Returned Goods** window appears.

        If there are multiple entries within a line item then the **Next** button is enabled.

   3. Select a row and click **Next**.

   4. Select the required part and then click **Select**.

        Click **Cancel** to exit.

3. Set information in the **Receiving (RECV)** page (these fields are mandatory):

   1. Click the **Freight Carrier** arrow and select how the goods came to you.

   2. Check the **Instructions** field for the RMA Instructions.

   3. Click the **Qty Recd In** drop down list to select the required value.

   4. If the item is marked for inspection in the **Return Material Authorization (RMA)** page or **Purchase Order (PO)** page**, Item Master (INV)** page or **Sales (CSSALE)** page then the location will be defaulted to the Inspection location. Customer can change to another location, if required.

     To mark and send items for inspection, select one of the following to send all the items for inspection:

   - **Inspect** check box in the **Return Material Authorization (RMA)** page.

   - **Inspection Required** check box in the **Purchase Orders (PO)** page.

   - **Inspection Required?**  check box in the **Item Master (INV)** page.

   - **Inspect Items**  check box in the **Sales (CSSALE)** page.

4. Click **Save** to retain the values.

    If the RMA is not entered, all the items have to be manually added to the Receiver and then assign an RMA Number through **RMA Review (RMARVW)** page.

​