---

title: "Change or remove items in a sales order"
draft: false


---

A sales order specifies a customer's request to buy something from your company. You can change or remove items in a sales order before you convert the sales order into a job order.

## To change a sales order item

1.  Select the sales order and click the **Items** tab.

2.  Highlight the item to change.

3.  Make your changes.

    If you make the item taxable, the jurisdiction used is determined based on the fol- lowing conditions:

    » If the part is taxable in inventory, then the jurisdiction defined in inventory is used irrespective of whether the customer is taxable or not.

    » If the part is not taxable in inventory, then the ship-to address jur- isdiction of the sales item is used. If the item's ship-to address has no jurisdiction, the ship-to address jurisdiction of the sales order is used. If the sales order ship-to address jurisdiction is not defined, then the item's **Jurisdiction** field remains blank.

    ***When an invoice exists for an item***:

    » You cannot change the item's jurisdiction.

    » You cannot deselect the **Taxable** check box.

    When you try to mark an item as taxable which was earlier not taxable and an invoice exists for the item, an error message displays informing the user about the existing invoice.

    If any credit card prepayment exists for the sales order, the message, *Credit Card generated prepayment exists. Void the prepayment to proceed* displays. Click **Close** to close the message window. On the **Toolbar**, click **Cancel** to roll back the changes done. Locate the credit card prepayment related to the sales order in the **Customer Invoices & Credit Memo (ARINV)** page and void it to make the required changes in the sales order line item. After you void a credit card pre-payment, you must process the credit card refund through your payment gateway only.

4.  On the **Toolbar**, click **Save** to save the changes.

## To remove an item from a sales order

**Note:**

You can remove items from a sales order only if the following conditions are met:

- No invoice or shipper must exist for the sales order.

- No non-voided credit card prepayment must be associated with the sales order.

1.  Select the sales order and click the **Items** tab.

2.  Highlight the item to remove.

3.  On the **Toolbar**, click **Delete**.

    A message, *Preparing to delete this information. Are you sure?* is displayed.

4.  Click **OK** to confirm.

    If an invoice exists for the sales order, the message, *Cannot delete sales order Item, Invoices exist* is displayed. If a shipper exists for the sales order, the message, *Cannot delete Sales Order Item, Shippers exist* displays. Click **Close** to close the message window. The sales order item is not deleted.

    If a credit card prepayment exists for the sales order, the message, *Cannot delete. Credit Card generated prepayment exists. Void the prepayment to proceed* displays. Click **Close** to close the message window. The sales order item is not deleted. Locate the credit card prepayment related to the sales order in the **Customer Invoices & Credit Memo (ARINV)** page and void it to delete the sales order line item. After you void a credit card prepayment, you must process the credit card refund through your payment gateway only.


## To selectively modify the status of a sales order item

1.  Select the sales order and click the **Items** tab.

2.  Select the item row.

3.  On the header, click **Status**.

    The **Sales Order Change Status (SOCHNG)** window appears.

4.  In the **Status to be changed to** area, perform one of the following actions:

    » Click **Open** to change the line item status to open.

    » Click **On Hold** to put the line item on hold.

    » Click **Closed** to close the line item.

    » Click **Cancelled** to cancel the line item.

5.  In the **Change Date** field, change the date if required.

    The current date is displayed by default in the **Change Date** field.

6.  In the **Changed By** field, enter the initials of the user making the changes.

7.  Select / Clear the **Use History** check box based on the following options:

    By default, the **Use History** check box is selected. The **History** text box is dis- played only when the **Use History** check box is selected.

    When the **Use History** check box is selected, the status change history for the master, item, or release is included in the **SOCHNG** table along with any inform- ation entered in the **Reason** field.

    When the status is changed for multiple items or releases at the same time, only the item or release specific history is included to the **SOCHNG** table.
    
    When the **Use History** check box is cleared, only the information entered in the **Reason** field is included in the **SOCHNG** table.

4.  In the **Reason** field, type any notes.

5.  Click **OK**.

    If a non-voided credit card prepayment exists for the sales order, an error mes- sage is displayed. Click **Close** to close the message window. The item status remains unchanged.

    If a shipper exists for the SO and if you change the status of the line item to **Closed** or **Cancelled**, the error message *Active Shipper exist for Line Item(s). SO Line Item(s) with active Shipper will be set to CLOSED status. Do you wish to proceed?* displays. Click **Yes** to proceed with the status change. Click **No** to revoke the status change.

    If an invoice exists for the SO and if you change the status of the line item to **Closed** or **Cancelled**, the error message, *Active Invoice exist for Line Item(s). SO Line Item(s) with active Invoice will be set to CLOSED status. Do you wish to proceed?* displays. Click **Yes** to proceed with the status change. Click **No** to revoke the status change.

    If any credit card pre-authorization token exists for the sales order and has not expired, when you change the status of the line item to **Closed** or **Cancelled**, the status of the sales order line item is accordingly changed. When the sales order is shipped and the invoice is processed, the pre-authorized token is closed at a lower amount than originally approved according to the value of the item closed or cancelled.