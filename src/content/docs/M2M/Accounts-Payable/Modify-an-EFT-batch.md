---  

title: "Modify an EFT batch"  
draft: false 
type: Article

---

You can change the vendors, or the invoices selected in an **Electronic Funds Transfer (EFT)** batch provided the batch is in one of the following statuses:

-   Started
-   Awaiting Approval
-   Approved


**To modify an EFT batch**

1.  Open the **AP Payment EFT (APEFT)** page.

    - Select Financial Management > Financial Transactions > Accounts Pay- able > AP Payment EFT.

    Or

    - Search for **APEFT** in the **Navigation box** and then select **AP Payment EFT**. The **AP Payment EFT (APEFT)** page appears.

    If many Made2Manage (M2M) Clients are connected to the same M2M Server, then only one user can open the **AP Payment EFT (APEFT)** page at a time.

2.  Select the EFT batch:

    1.  On the **Toolbar**, click **Browse**.

    The **Browse For AP Payment EFT** window appears.

    1.  Highlight the EFT batch row that you want to modify and click **Select**. Or double-click the row that contains the required EFT batch.

3.  To filter the records displayed in the **Vendors** and **Invoices** grids, in the **Highest Urgency** and the **Lowest Urgency** fields specify the urgency values.

    By default, the **Highest Urgency** value is set to **1**. You cannot enter a value lower than **1** or higher than **8**. By default, the **Lowest Urgency** value is set to **8**. You cannot enter a value lower than **1** or higher than **8**. The **Lowest Urgency** value must be greater than the **Highest Urgency** value.

4.  Make the necessary changes in the **Vendors** grid:

    - Select the check box in the **Select** columns for all the vendors whose invoices you want to add in the batch.

    - Select the **Select** check box to select all the listed vendor records.

    - Clear the **Select** check box to clear all the selections made.

    - On the grid toolbar, click **Refresh List** to refresh the vendors and the invoices displayed based on any changes made in the **(APCASH) - Approve Invoice for Payment page** page.

5.  To modify the invoices selected for each vendor:


    1.  Select the vendor in the **Vendors** grid.

    The invoices of the vendor that have been approved for payment, and that have the payment mode EFT, and the same currency as that of the selected bank are listed in the **Invoices** grid. The debit memos that are approved for payment and that have the same currency as that of the selected bank are also listed in the **Invoices** grid.

    1.  In the **Invoices** grid, select the check box in the **Select** column for the invoices and the debit memos that you want to include in the batch.

        Or clear the check box in the **Select** column for the invoices and the debit memos that you do not want to include in the batch.

    2.  Repeat Steps 6a - 6b for each vendor whose invoices you want to modify.
    
6.  On the **Toolbar**, click **Save**.