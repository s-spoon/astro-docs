---  

title: "Approve an EFT batch"  
draft: false 
type: Article

---

If any authorization is required for the EFT payments of a particular bank, then the EFT payment batch created for the bank must be sent for approval. Use the **EFT AP Payment Batch Authorization (APEFTAUT)** page to approve the EFT payment batches that are awaiting approval.

Only one user can open the **EFT AP Payment Batch Authorization (APEFTAUT)**
page at a time.

**To approve an EFT payment batch**

1.  Open the **EFT AP Payment Batch Authorization (APEFTAUT)** page.

    - Select Financial Management > Financial Transactions > Accounts Pay- able> EFT AP Payment Batch Authorization.

    Or

    - Search for **APEFTAUT** or **EFT AP Payment Batch Authorization** in the **Navigation box** and then select **EFT AP Payment Batch Authorization**.

    The **EFT AP Payment Batch Authorization (APEFTAUT)** page appears.

2.  Select the EFT payment batch:

    1.  Click the **EFT Batch ID** lookup reference.

    The **Lookup For EFT Batch ID** window appears.

3.  Select the row that contains the required EFT batch to approve and click **Select**. Or double-click the row that contains the required EFT batch to approve.

        The following fields are automatically updated for the EFT payment batch selected:

        ≡ Batch Creation Date

        ≡ Bank Name

        ≡ Bank Account ID

        ≡ Currency

        ≡ Conversion Factor (if applicable)

        ≡ As Of (if applicable)

        The vendors and their invoices are displayed in the respective grids. By default, all the vendors and the invoices that are part of the batch are selected for approval.

3.  In the **Vendors** grid, select the invoices that you want to approve for payment:

    » Select the check box in the **Select** column for all the vendors whose invoices you want to add in the batch.

    » Select the **Select** check box to select all the listed vendor records.

    » Clear the **Select** check box to clear all the selections made.

    When you clear the **Select** check box for a vendor, all the invoices of that vendor are automatically deselected.

    » On the grid toolbar, click **Refresh List** to refresh the vendors and the invoices displayed based on any changes made in the **(APCASH) - Approve Invoice for Payment page** page.


4.  In the **Invoices** grid, for each selected vendor in the batch, select the check box in the **Select** column for the invoices that you want to approve.

    Or clear the **Select** check box for the invoices that you do not want to approve.

5.  To approve the EFT payment batch:

    1.  On the **Vendors** grid toolbar, click **Approve**.
    
    1.  On the **Toolbar**, click **Save**.

        The message, *Selected vendors and vendor invoices are approved for payment.* is displayed.

    2.  Close the message window.

        The EFT batch status is set to **Approved** in the **AP Payment EFT (APEFT)** page.