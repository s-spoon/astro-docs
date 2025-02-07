---
title: "Add a normal invoice from multiple ship- pers"
draft: false
type: Article
---

After you ship goods to a customer, send an invoice. You can add a normal invoice from multiple shippers.

> [!Note] You cannot invoice a shipper that contains obsolete parts. The error message, Part is obsolete is displayed when you try to save an invoice for a shipper with obsolete parts.

To add a normal invoice from multiple shippers

1.  Open the **Customer Invoices & Credit Memo (ARINV)** page.

Select Financial Management > Financial Transactions > Accounts Receivable > Customer Invoices & Credit Memo.

Or

1.  *Search for* **ARINV** *or* **Customer Invoices & Credit Memo** *in the* **Navigation box** *and then select* **Customer Invoices & Credit Memo**.

    **Customer Invoices & Credit Memo (ARINV)** *page appears.*

2.  On the **Toolbar**, click **Copy**.
3.  Select **Normal Invoice** > **All Shippers**.

    The **Select Shippers for Invoicing** window appears.

4.  Click the **Customer** lookup reference button. The **Lookup For Customer** window appears.
5.  Highlight a row and click **Select**. Or, double-click the row. The shippers for the customer are listed in the grid.
6.  Specify the contract type:

    » To create the invoice using contract shippers:

1.  Select the **Contract** radio button.
    1.  Click the **Contract** lookup reference button.

        The **Lookup For Contract Code** window appears.

    2.  Highlight the required row and click **Select**. Or, double-click the required contract.

        » Select the **Non-Contract** radio button to create the invoice using non-contract shippers.

1.  Specify the number of invoices to create for the shippers:

    » To create an invoice for each shipper, select the **Create 1 Invoice Per Shipper** check box.

    When you create a separate invoice for each shipper, the invoice date is set as follows:

    ≡ If you have selected the **Default Invoice/Post Date to Shipper Date** check box in the **Accounts Receivable (CSAR)** page the invoice date is set to the shipper date provided the shipper date period is still open. If the shipper date falls in a closed period, a message is displayed seeking confirmation to use the system date. Click **Yes** to use the sys- tem date. Click **No** to cancel the invoice creation.

    ≡ If you have not selected the **Default Invoice/Post Date to Shipper Date** check box in the **Accounts Receivable (CSAR)** page, the invoice date is set to the system date.

    » To create a single invoice for the multiple shippers, clear the **Create 1 Invoice Per Shipper** check box.

    When you create a single invoice for the selected shippers, the invoice date is set as follows:

    ≡ If you have selected the **Default Invoice/Post Date to Shipper Date** check box in the **Accounts Receivable (CSAR)** page the invoice date is set to the maximum shipper date of the selected shippers provided the shipper date period is still open. If the shipper date falls in a closed period, a mes- sage is displayed seeking confirmation to use the system date. Click **Yes** to use the system date. Click **No** to cancel the invoice creation.

    ≡ If you have not selected the **Default Invoice/Post Date to Shipper Date** check box in the **Accounts Receivable (CSAR)** page, the invoice date is set to the system date.

2.  For each shipper to include on the invoices, select the **Invoice [?]** check box.
3.  To add or change shipping charges, the ship date, the total weight, and notes for the shipper:
1.  Highlight the shipper.
    1.  Type the information in the appropriate fields.
2.  Click **OK**.

    A message confirming the creation of the invoice is displayed.

3.  Close the message window.

    To change the invoice's status to unpaid, see "Confirm invoices and credit memos". You can do this now or after you create many invoices.