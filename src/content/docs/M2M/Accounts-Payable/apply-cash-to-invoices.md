---  

title: "Apply cash to invoices"  
draft: false 
type: Article

---

You can apply cash to invoices and print a report of the cash you applied.

**To apply cash to invoices**

1.  Open the **(APCASH) - Approve Invoice for Payment page** page.

    - Select **Financial Management** > **Financial Transactions** > **Accounts Payable** > **Approve Invoice for Payment**.

    Or

    - Search for **APCASH** or **Approve Invoice for Payment** in the Navigation box and then select Approve Invoice for Payment.

    The **(APCASH) - Approve Invoice for Payment page**  appears.

2.  The following options are available on the grid toolbar:

    - **Clear Filter:** Click this to clear the applied filter.

    - **Refresh Data**: Click this to refresh the data.

    - **Apply All**: Click this to apply all the selection criteria to information fetched.

    - **UnApply All**: Click this to remove all the selection criteria applied to information fetched.

    - **Apply Amt to Selected Rows**: Click this to apply amount to the selected invoices.

    - **Unapply Amt to Selected Rows**: Click this to remove amount applied to the selected invoices.

2.  Display the invoices to which you want to apply cash.

    1.  In the **Due Thru** and **Discount Thru** fields, type the date through which you want to display the invoices and the date through which the discount is applicable.

    Made2Manage by default displays a date two weeks from the current date.

    1.  Select **And** if both the selected dates are to be considered. Select

        Or if any one of the date is to be considered.

    2.  Select the vendor:

        1.  Click the **Vendor** lookup reference.

        The **Lookup For Vendor** window appears.

        2.  Select the row that contains the required vendor and click **Select**. Or double-click the row that contains the required vendor to use.

        The Past due amounts appear in red.

    3.  If you use multiple currency feature, to display invoices created in a specific currency:

        1.  Click the **Currency** lookup reference.

            The **Lookup For Currency** window appears.

        2.  Select the row that contains the required currency and click **Select**. Or double-click the row that contains the required currency.

    4.  In the **Show Invoices Of Payment Mode** list, select the payment mode: **Check** or **EFT**.

        If you select **Check**, only invoices with **Payment Mode** as **Check** and debit memos are listed. If you select **EFT**, only invoices with **Payment Mode** as **EFT** and debit memos are listed.

    5.  From the **Show Only Urgencies<=** list, select the payment urgency for which you want to view the invoices.

3.  Apply the cash to the invoice(s).

    1.  Select the invoice from the grid and select the **Apply Amount** check box from the **Apply Amount** column and enter the amount to be applied in that invoice's **Amount Applied** column.

    The value of the **Amount Applied** field is deducted from the **Net Due** amount.

    2.  To apply cash to all the invoices in the form, select **Apply All** from the grid toolbar.

        The amount is not applied for invoices selected for payment processing in an EFT Batch ID of the **AP Payment EFT (APEFT)** page.

        The value of the **Amount Applied** field now changes to the net due amount and the **Net Due** field is set to zero for all invoices.

    2.  To discard changes, select **UnApply All** from the grid toolbar.

        The amount applied for invoices selected for payment processing in an EFT Batch ID of the **AP Payment EFT (APEFT)** page is not changed.

4.  Specify any discounts and/or adjustments.

    1.  In the grid, in the **Amount Applied** column, change the amount applied and in the invoice's **Discount** column type the discount amount.

    2.  In the invoice's **Adjustment** column in the grid, type the adjustment amount.

        The **Total Applied Cash** field is updated.

        You cannot modify the amount applied, or discounts, or adjustments for invoices selected for payment processing in an **EFT Batch ID** of the **AP Payment EFT (APEFT)** page. An error message is displayed when you try to modify the amount applied, or discounts, or adjustments for such invoices. However, you can modify applied amounts after deselecting the respective invoice in the **EFT Batch ID** grid of the **AP Payment EFT (APEFT)** page.

5.  On the **Toolbar** click **Save** to save the applied amounts.