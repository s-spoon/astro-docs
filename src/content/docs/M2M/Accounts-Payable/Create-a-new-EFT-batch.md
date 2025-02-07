---  

title: "Create a new EFT batch"  
draft: false 
type: Article

---

The **AP Payment EFT (APEFT)** page displays all the **Electronic Funds Transfer (EFT)** enabled vendors and their invoices with EFT payment mode and have been approved for payment. You can include multiple invoices from multiple vendors in an EFT batch.

**To create an EFT batch**

1.  Open the **AP Payment EFT (APEFT)** page.

    - Select **Financial Management** > **Financial Transactions** > **Accounts Payable** > **AP Payment EFT**.

    Or

    - Search for **APEFT** in the **Navigation box** and then select **AP Payment EFT**. The **AP Payment EFT (APEFT)** page appears.

2.  On the **Toolbar**, click **New**.

    The **Bank Name** field automatically displays the EFT enabled account as the default account in **Bank Names** tab of the **Accounts Payable (CSAP)** page. If no EFT-enabled bank is set as the default account, the Bank Name field displays the EFT-enabled bank first added in the Bank Names tab of the Accounts Payable (CSAP) page. The EFT-enabled vendors associated with the bank account are listed in the **Vendors** grid. The invoices approved for payment for the first vendor are listed in the **Invoices** grid.

3.  To select another bank:

    1.  Click the **Bank Names** lookup reference.

        1.  In the **Lookup For Bank Name** window, highlight the required bank and click **Select**.

    2.  To filter the records displayed in the **Invoices** grid, in the **Highest Urgency** and the **Lowest Urgency** fields, specify the urgency values.

    By default, the **Highest Urgency** value is set to **1**. You cannot enter a value lower than **1** or higher than **8**. By default, the **Lowest Urgency** value is set to **8**. You cannot enter a value lower than **1** or higher than **8**. The **Lowest Urgency** value must be greater than the **Highest Urgency** value.

3.  Make the necessary changes in the **Vendors** grid:

    - Select the check box in the **Select** column for all the vendors whose invoices you want to add in the batch.

    - Select the **Select** check box to select all the listed vendor records.

    - Clear the **Select** check box to clear all the selections made.

    - On the grid toolbar, click **Refresh List** to refresh the vendors and the invoices displayed based on any changes made in the **(APCASH) - Approve Invoice for Payment page** page.

4.  Select the invoices that you want to include in the batch:

5.  Select the vendor in the **Vendors** grid.

    The **Select** check box for the vendor must be selected.

    The invoices of the vendor that have been approved for payment, and that have the payment mode EFT, and the same currency as that of the selected bank are listed in the **Invoices** grid. The debit memos that are approved for payment and that have the same currency as that of the selected bank are also listed in the **Invoices** grid. By default, all the invoices and debit memos are selected.

    1.  In the **Invoices** grid, select the check box in the **Select** column for the invoices and the debit memos that you want to include in the batch.

        Or clear the check box in the **Select** column for the invoices and the debit memos that you do not want to include in the batch.

    2.  Repeat Steps 6a - 6b for each vendor whose invoices you want to include in the batch.
    
6.  On the **Toolbar**, click **Save**.

    If any of the invoices selected have a negative payment amount, an error message is displayed. Click **Close** to close the message window. Clear the check box in the **Select** column for that invoice.

    The EFT batch is created in the **Started** status. The **EFT Batch ID** is automatically generated based on the **Next EFT Batch ID** value in the **Checking Accounts** tab of the **Accounts Payable (CSAP)** page which is then incremented. The **Batch Creation Date** value is set to the current system date.