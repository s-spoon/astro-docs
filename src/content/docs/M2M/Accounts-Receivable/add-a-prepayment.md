---
title: "Add a prepayment"
draft: false
type: Article
---

When a customer prepays an order, apply the cash to the sales order.

To add a prepayment

1.  Set up the receipt. 
2.  On the **Toolbar**, click **Copy** > **Prepayment**.   
    The **Cash Receipt Invoice Selection** window is displayed.

3.  Click the **Customer** lookup reference button.  
    The **Lookup For Customer** window is displayed.  
    Highlight a row and click **Select**. Or, double-click to select the customer.

5.  Click **OK** in the **Cash Receipt Invoice Selection** window.   
The sales orders available for applying prepayment are listed in the grid.

6.  Select the sales order for prepayment:

    » In the **Select** column, select the check box to include the sales order.

    » Select the **Select** check box to select all listed sales orders.

7.  Select the customer currency:
1.  Click the **Currency** lookup reference button.

    The **Lookup For Currency** window is displayed.

    1.  Highlight a row and click **Select**. Or double-click to select the cus- tomer's currency.
2.  Click **OK**.
3.  Set payment information:
1.  In the **Date Deposited** field, type the deposit date. Or click the icon to display the calendar. Select the deposit date.

    This date becomes the general ledger posting date.

    1.  From the **Payment Method** list, select the payment method.
    2.  In the **Ref/Check No** field, type the reference or check number.
2.  In the **Cash Amount** field, specify the payment amount. Or click the icon to dis- play the calculator. Select a value.

    The **Yet to Apply** field shows the payment available to apply.

1.  To set the account to which to credit the payment, click the **Cash Acct** lookup ref- erence button and select the general ledger account from the **Lookup For Cash Acct** window.

    The **Gain/loss Acct** field displays the general ledger account to which Made2Manage posts currency exchange gains and losses.

2.  To let Made2Manage automatically apply the payment to invoices, select the **Dis- tribute Automatically** check box.
3.  To manually distribute the payment:
1.  Clear the **Distribute Automatically** check box.
    1.  In the **Amount Paid** column of the appropriate invoice, type the amount to apply to that invoice.

        The value in the **Yet to Apply** field is reduced by the amount entered in the **Amount Paid** column.

    2.  In the **Discount** or **Adjustment** column, type the applicable dis- counts or adjustments.
    3.  On the grid toolbar, click **Apply Discount Amt to this Row**.
2.  On the **Toolbar**, click **Save**.

    When you finish working with this prepayment, mark it as paid.