---
title: "Void an unpaid invoice or credit memo"
draft: false
type: Article
---

When you no longer need an unpaid invoice or credit memo, void it.

Voiding an invoice or credit memo is permanent. You cannot void invoices in other statuses. You can change or remove a new, not confirmed invoice.

To change status of unpaid invoices and credit memo to void

1.  Open the **Customer Invoices & Credit Memo (ARINV)** page.

    Select Financial Management > Financial Transactions > Accounts Receivable > Customer Invoices & Credit Memo.

Or

1.  *Search for* **ARINV** *or* **Customer Invoices & Credit Memo** *in the* **Navigation box** *and then select* **Customer Invoices & Credit Memo**.

    **Customer Invoices & Credit Memo (ARINV)** *page appears.*

2.  On the **Toolbar**, click **Browse**.

    The **Browse For Customer Invoices & Credit Memo** window appears.

3.  Select the required row and click **Select**. Or, double-click the required invoice or credit memo.
4.  Click on the **Status** button.

    A message, *Preparing to change status to Void for Invoice \<number>. Proceed?*

    is displayed.

5.  Click **Yes** to continue.

    The **Change AR Invoice/CM Status** window appears.

6.  The current date is displayed in the **Void Date** field. Change the date if required.
7.  To print the invoice, select the **Also Print the Selected Invoices(s)** check box.
8.  Click **OK**.

    If any credit card pre-authorization exists for the AR invoice and the credit card details were specified in the invoice and not in the sales order associated with the invoice, the message, *Pre-Authorizations Exists. Continuing will void the author- ization. Do you want to proceed?* is displayed.

9.  Click **Yes** to void the invoice and the pre-authorization. Click **No** to cancel the voiding of the invoice.

    If you click **Yes**, the pre-authorization token is deleted and the invoice is not dis- played in the **Batch Processing - Authorized Payments (CCBATCH)** page.

1.  On successful voiding of the invoice, the status of the credit memo or accounts receivable invoice changes to **Void**.