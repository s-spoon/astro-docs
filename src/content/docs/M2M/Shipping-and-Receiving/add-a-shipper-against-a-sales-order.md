---
title: "Add a shipper against a sales order"
draft: false
type: Article
---

A shipper is a record of items in a shipment. After a customer makes a sales order, add a shipper to send the items to the customer.

While shipping the **Ship Back SO**, the Serial Number entered in the RMA is picked from **Assign Serial Numbers in RMA (RMASERL)** window and is displayed.

## To add a shipper against a sales order

1. Open the **Shipping (SHIP)** page.

   1. Select **Production Management** > **Production Transactions** > **Shipping** > **Shipping**.

        Or

   2. Search for **SHIP** or **Shipping** in the **Navigation box** and then select **Shipping**.

        **Shipping (SHIP)** page appears.

2. On the **Toolbar**, click **Copy** > **Sales Order**.

    The **Copying Sales Order** window appears.

3. Copy the items you want to ship from the sales order.

   1. Select a item and click **Next**.

        The **Next** button is enables only if there are multiple items in the selected sales order.

   2. Select one or more rows and click **Select**.

        Click **Cancel** to exit from the Copying Sales Order window.

4. There are two possible messages that can display if the system detects that two or more items have different ship-to addresses.

   - If you used the **Address Key** field to select an address, a message displays to let you know that you selected sales order releases with different ship to addresses. Click:

   - **Proceed**: To use the address selected.

   - **Select**: To select a different address.

   - **Cancel**: To exit without creating a shipper.

   - If you did not use the **Address Key** field to select an address, a message displays to let you know that you must either cancel the shipper creation or select a single ship-to address to use on the shipper header. If you select a ship-to address, the system will automatically update the **SOSHIP** records for all of the selected releases to match the ship to address you select.

5. Click **Cancel** to escape without creating a shipper. Or, click **Select** to display the **Select Ship To Address** window. Highlight the ship-to address you want to use, and click **OK**.

    The ship-to address on the selected releases is not updated until you save the Shipper. If you cancel out of the shipper without saving, the ship-to address is not changed. Once you save, if you need to change the ship-to addresses back to their original setting, you must do so through the **Sales Order(SO)** page. Deleting a shipper does not change the ship-to address on the Sales Order.

6. Set information about the shipper:

   - If the goods are not shipped on the current date, in the **Ship Date** field, specify the shipping date.

   - In the **Ship Weight** and **No of Boxes** fields, specify the weight shipped and the number of boxes shipped.

   - In the **Collected By** field, type who prepared the items for shipment and in the **Entry By** field, type your initials.

   - From the **Ship Via** list, select the carrier used to ship the items.

   - If you use United Parcel Service as your shipping method, you can configure Made2Manage to share shipping information with the **UPS OnLine WorldShip** software. For more information, see the *UPS OnLine WorldShip Installation and Setup Guide*.

7. From the **FOB Point** list, select the freight on-board point.

8. In the **Freight Charge** and **Bill-Of-Lading** fields, type the freight charge and the bill of lading number.

    If you use the **Bill Of Lading** feature, this number will populate automatically when you create the Bill of Lading from the Shipper.

9. On the **Toolbar**, click **Save** to save the shipper.

10. After you ship the items, set the shipper's status to shipped.

    >[!NOTE]
    >For Inter-Company Sales Orders, based on your settings for Inter-Company Receiver creation, creating the shipper may automatically create the receiver in the corresponding company.

​