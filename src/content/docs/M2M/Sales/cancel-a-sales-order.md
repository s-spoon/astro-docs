---

title: "Cancel sales order"
draft: false
type: Article

---

Cancel a sales order when the customer backs out of the deal. Canceling lets you select how to charge the customer for accrued costs, and asks you to dispose of the current costs.

**To cancel sales order**

1. [Select the sales order]()

2. Click **Status**.

    The **Sales Order Change Status (SOCHNG)** window appears. The **Change Date**, **Changed By**, **Amount Invoiced**, **Order Total**, and **Reason** fields are auto-populated.

3. In the **Status** dropdown at the top-right side of the window, select **Cancelled**.

4. Select or clear the **Use History** checkbox based on the following options:

    By default, the **Use History** checkbox is selected. The **History** text box is displayed only when the **Use History** checkbox is selected.

    - When the **Use History** checkbox is selected, the status change history for the master, item, or release is included in the **SOCHNG** table along with any information entered in the **Reason** field.   
    When the status is changed for multiple items or releases at the same time, only the item or release specific history is included to the **SOCHNG** table.

    - When the **Use History** checkbox is cleared, only the information entered in the **Reason** field is included in the **SOCHNG** table.

5. In the **Reason** field, enter the reason the SO is being cancelled.

6. Click the **Close/Cancel Charges** dropdown and select the charges.

7. Enter last name in **Last name** field and first name in **First Name** field.

8. To print sales order, select the **Print Order Acknowledgement** checkbox.

9. Click **OK** to confirm the changes.

    One of the following actions takes place:

    - If any credit card generated prepayment exists for the SO, the message, *Credit Card generated prepayment exists. Void the prepayment to proceed* is displayed. Click **Cancel** to close the message window and the **Sales Order Change Status (SOCHNG)** window. The status of the SO remains unchanged.

    - If any pre-authorization token exists for the SO and has not expired, the pre-authorization token is voided through the payment gateway. The status of the SO is set to **Cancelled**.

    - If any SO item has been shipped or invoiced, the message "At least one SO item is Shipped/Invoiced. Order will be Set to CLOSED status. Do you wish to proceed?" is displayed. Click **Proceed** to change the status of the SO. Click **Cancel** to abandon the status change. If you had clicked **Proceed**, the status of the items that were not shipped or invoiced is set to **Cancelled** and the status of the SO is set to **Closed**.

    - If no SO items were shipped or invoiced and if no credit card prepayment exists for the SO, the status of the items and the SO is set to **Cancelled**.

        If you had selected the **Print Order Acknowledgment** checkbox and if the SO was cancelled, the sales order is printed by the **default** printer.

10. Close the **Sales Orders (SO)** page.

​