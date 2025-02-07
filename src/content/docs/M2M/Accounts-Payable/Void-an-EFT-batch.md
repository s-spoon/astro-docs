---  

title: "Void an EFT batch"  
draft: false 
type: Article

---

You can void an exported EFT Batch and undo the EFT payment to the invoices that are part of the batch.

**To void an exported EFT batch**

1.  Open the **EFT Batch Void (APEFTVD)** page.

    - Select **Financial Management** > **Financial Transactions** > **Accounts Payable** > **EFT Batch Void**.

    Or

    - Search for **APEFTVD** in the **Navigation box** and then select **EFT Batch Void**. The **EFT Batch Void (APEFTVD)** page appears.

2.  Select the exported EFT batch that you want to void:

3.  Click the **EFT Batch ID** lookup reference.

    The **Lookup For EFT Batch ID** window appears.

    i. Select the exported EFT batch row that you want to void and click Select. Or double-click the row to select.

    ii. In the **Vendors** grid, select the check box in the **Select** column for the vendor whose invoice payment you want to void.

4.  Select the **Void Selected Vendor Invoices** check box.

5.  To change the void date, in the **Void Date** field, specify the date on which you want to void.

    If the void date specified is less than the **EFT Settlement Date**, the error message, '*Entered Void Date should be Greater than or Equal to EFT Settlement Date.*' is displayed.

    An error message is also displayed if the void date specified is in a closed **Accounting Years** period or if it is not defined in an **Accounting Years** period.

6.  On the **Toolbar**, click **Save**.

    The following actions are performed when an EFT batch is voided:

    - In the **Vendors** grid of the **AP Payment EFT (APEFT)** page, the batch line **Status** of the selected vendors is changed from **Exported** to **Void**.

    - The EFT batch status is set to **Void** only if all the vendors in the batch are selected and voided.

    - The status of the corresponding vendor invoices are reverted appropriately to **Unpaid** or **Partially Paid**. These invoices are then available for applying for payment in the **(APCASH) - Approve Invoice for Payment page** page.

    - If any debit memos were applied to the invoices that were part of the voided EFT batch, then these are reversed and are also available for applying for payment in the **(APCASH) - Approve Invoice for Payment** page.