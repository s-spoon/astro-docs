---
title: "Add a final invoice for progress billing"
draft: false
type: Article
---

When final payment is due for a progress billing item, you can create a final invoice against the billing designated as the final billing in the payment schedule. When you create the final invoice, and you check unearned revenue for progress billing, the postings clear out the previous posting to the unearned revenue account and transfer it to the regular revenue account.

You should fully ship the product before you create the final progress billing invoice so that shipping costs are recorded. If your final invoice is for time and materials billing or percent complete billing, all jobs that have been created for the related sales order release must be in the completed or cancelled status.

There will be a separate miscellaneous line item the system creates for rounding adjustments to make sure the invoice amount matches the progress billing amount. This line item does not show up on the actual printed invoice. For more information, see the **.

To add a final invoice for progress billing

1.  Open the **Customer Invoices & Credit Memo (ARINV)** page.

    Select Financial Management > Financial Transactions > Accounts Receivable > Customer Invoices & Credit Memo.

Or

1.  *Search for* **ARINV** *or* **Customer Invoices & Credit Memo** *in the* **Navigation box** *and then select* **Customer Invoices & Credit Memo**.

    **Customer Invoices & Credit Memo (ARINV)** *page appears.*

2.  On the **Toolbar**, click **Copy**.
3.  Select **Normal Invoice** > **Progress Billing**. The **Copying Progress Billing** window appears.
4.  Highlight a row of **Order Items** and click **Select**. Or, double-click to select the order items.

    If you know the sales order number or the item number, select the blank row and type the number at the beginning of the table. If the system finds a match, the number gets filtered and displayed.

5.  Review the invoice date, payment terms, and other settings and make any neces- sary changes.

    You can add an item to the invoice.

6.  For handwritten invoices:
1.  Select the **Hand Written Invoice** check box.
1.  If necessary, in the **Invoice Number** field, type the invoice num- ber.
2.  Click **Save** to save the invoice.

    The **Progress Billing Item** field displays the progress billing item number for which you are creating the invoice. If you see this field, you cannot modify or delete the line item. If it is the final invoice for the progress billing item, **Final PB Invoice** is displayed at the end of the **Progress Billing Item** field.

    If freight costs exist, the final progress billing invoice contains the freight line item with the sum of the freight amount on all shippers for related sales order releases.