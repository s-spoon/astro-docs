---

title: "Close sales order"
draft: false
type: Article

---

Close a sales order when its last item ships.

**To close a sales order**

1. [Select the sales order]()

2. On the toolbar, click **Status**. 

    The **Sales Order Change Status (SOCHNG)** window appears. The **Change Date**, **Changed By**, **Contact**, **Amount Invoiced**, **Order Total**, **History**, and **Reason** fields are auto-populated.

    By default, the **Use History** checkbox is selected. The **History** textbox is displayed only when the **Use History** checkbox is selected.

3. In the **Status** dropdown at the top-right side of the window, select **Closed**.

4. To print the sales order, select the **Print Order Acknowledgment** checkbox.

5. In the **Reason** field, if required, enter the reason the SO is being closed.

6. Click **OK** to confirm the changes.

    One of the following actions takes place:

    - If any credit card generated prepayment exists for the SO and if the SO has not been invoiced or does not have a shipper created for it, the message *Cannot close. Credit Card generated prepayment exists. Void the prepayment to proceed.* is displayed. Click **Close** to close the message window and the **Sales Order Change Status (SOCHNG)** window. The status of the SO remains unchanged.

    - If any credit card pre-authorization token exists for the SO and has not expired and if the SO has not been invoiced or has a shipper created for it, the pre-authorization token is voided through the payment gateway. The status of the SO is set to **Closed**.

    - If any shipper exists for any of the SO line items, the message Shipper exist for Line Item(s). Do you wish to proceed? is displayed. Click **Proceed** to change the status of the SO. Click **Cancel** to abandon the status change. If you had clicked **Proceed**, the status of the items and the status of the SO is set to **Closed**.

    - If no shipper exists for the SO line items and if no credit card prepayment exists for the SO, the status of the items and the SO is set to **Closed**.

    - If any credit card transaction exists for the SO, but the SO has been invoiced or has an associated shipper, the status of the items and the SO is set to **Closed**.

    If you had selected the **Print Order Acknowledgment** check box and if the SO was closed, the sales order is printed by the **default** printer.



​