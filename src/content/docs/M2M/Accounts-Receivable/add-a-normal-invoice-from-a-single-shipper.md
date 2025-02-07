---
title: "Add a normal invoice from a single shipper"
draft: false
type: Article
---

After you ship goods to a customer, send an invoice. You can add a normal invoice from a shipper.

> [!Note] You cannot invoice a shipper that contains obsolete parts. The error message "Part is obsolete" is displayed when you try to save an invoice for a shipper with obsolete parts

To add a normal invoice from a single shipper

1.  Open the **Customer Invoices & Credit Memo (ARINV)** page.

    1. Select Financial Management > Financial Transactions > Accounts Receivable > Customer Invoices & Credit Memo.

        Or

    2.  *Search for* **ARINV** *or* **Customer Invoices & Credit Memo** *in the* **Navigation box** *and then select* **Customer Invoices & Credit Memo**.

        **Customer Invoices & Credit Memo (ARINV)** *page appears.*

2.  On the **Toolbar**, click **Copy**.
3.  Select **Normal Invoice** > **Single Shipper** > **Shipper** / **Items**. The **Copying Shipper** or **Copying Items** window appears.

    You can select the shipper from a list of shippers or from a list of shipper line items. (You might recognize a shipper more readily by its line items).

4.  Highlight a row of shipper items and click **Select**. Or, double-click to select the row.

    Highlighting a shipper from a list of shipper items selects the entire shipper.

    The invoice date is calculated as follows:

    - If you have selected the **Default Invoice/Post Date to Shipper Date** check box in the **Accounts Receivable (CSAR)** page, the invoice date is set to the shipper date provided the shipper date period is still open. If the shipper date falls in a closed period, a message is displayed seeking confirmation to use the system date. Click **Yes** to use the sys- tem date. Click **No** to cancel the invoice creation.
    <br>Or
    
    - If you have not selected the **Default Invoice/Post Date to Shipper Date** check box in the **Accounts Receivable (CSAR)** page, the invoice date is set to the system date.

1.  Review the invoice date, payment terms, and other settings and make any necessary changes.
2.  For a handwritten invoice:
1.  Select the **Hand Written Invoice** check box.
    1.  If necessary, in the **Invoice Number** field, type the invoice number.
2.  If the **Apply Prepayments** button is not disabled, the customer has prepaid some or all of the sales order. To apply the prepayments:
1.  Click **Apply Prepayments**.
    1.  Review the prepayments.
    2.  In the **Apply Now** column for each prepayment, type the amount to apply to this invoice.
    3.  On the **Toolbar**, click **Save** to apply the prepayments.

        Made2Manage applies the prepayment and changes its status to partially paid or fully paid, as appropriate.

2.  On the **Toolbar**, click **Save**.