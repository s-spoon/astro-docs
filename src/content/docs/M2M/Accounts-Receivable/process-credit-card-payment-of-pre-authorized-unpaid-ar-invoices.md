---
title: "Process credit card payment of pre-authorized unpaid AR invoices"
draft: false
type: Article
---

Use the **Capture** tab of the **Batch Processing - Authorized Payments (CCBATCH)** page to pro- cess credit card payments of multiple AR invoices that were pre-authorized for credit card payment after shipping the items.

The following conditions must be met to process the credit card payment for a pre-authorized unpaid AR invoice:

-   Your company must have an account with a payment gateway supported by Made2Manage (PayPal, Authorize.Net, or Moneris).
-   You must set up the payment gateway for integration with Made2Manage.
-   A payment gateway must be set in the **Active** status.
-   The logged in user must have the required permissions to process credit card pay- ments.

To process the credit card payment of pre- authorized unpaid AR invoices

1.  *Open the* **Batch Processing - Authorized Payments (CCBATCH)** *page.*

    Select Financial Management > Financial Transactions > Accounts Receivable > Batch Processing - Authorized Payments.

Or

1.  *Search for* **CCBATCH** *in the* **Navigation box** *and then select* **Batch Pro- cessing - Authorized Payments**.

    **Batch Processing - Authorized Payments (CCBATCH)** *page appears.*

2.  The **Posting Date** displays the current system date. Modify it if required.

    The **Posting Date** must be in an Open **AYRS** period. It must not be less than the **Invoice GL Post Date** of any of the invoices that you plan to select for pro- cessing.

3.  Click the **Capture** tab if this is not the currently selected tab.

    The **Pre-Authorized Invoices** grid lists the unpaid invoices that have been authorized for credit card payment.

4.  On the **Toolbar**, click **Refresh List** to refresh the invoices displayed in the grid.
5.  Filter the invoices to process for credit card payment using any of the following methods, if required:

    » In the box below a column header, type appropriate values in the required columns to only display invoices that match the given cri- teria. For example, in the box under the **Customer Number** column, type **109** to display only the invoices of that customer.

    » Click the filter icon beside a column header's box, and then select a specific value to only display invoices that match the selected value.

1.  To select a specific invoice, select the check box that corresponds to the required invoice's row.

    Or, select the check box beside the column header of the **Select** column to select all invoices in the grid.

2.  On the grid toolbar, click **Process Capture** to process credit card payment for the selected invoices.

    The **Process Capture** button is enabled only when you select at least one invoice.

    If the transaction is processed successfully the message, *Transaction Status Suc- cessfully Completed Invoice List: \<Invoice Number>* appears. The status of the AR invoices are changed to **Paid in Full** or **Partially Paid** according to the pay- ment made. Cash receipt transactions are automatically generated with the **Paid** status and **Credit Card** payment method. All normal M2M postings for the cash receipts are then processed. The processed invoices are no longer displayed in the **Batch Processing - Authorized Payments (CCBATCH)** page.

    If the payment gateway is unable to process the transaction, the error message is logged in the file specified in the **Payment Gateway Setup (CCSETUP)** page.