---  

title: "Check vendor history"  
draft: false 
type: Article

---


You can check the vendor history from the **Accounts Payable Invoice (APINV)** page or the **Vendor (VEND)** page. All current and prior vendor invoices are available, and you can display the actual invoice record or any related records such as the **PO**, **Receiver**, or **Shipper**. You can sort and filter the invoices, and then export them to an excel spreadsheet.

**To check vendor history**

1.  Open the **Vendor Invoice & Debit Memo (APINV)** page.

    - Select **Financial Management** > **Financial Transactions** > **Accounts Payable** > **Vendor Invoice & Debit Memo**.

    Or

    - Search for **APINV** in the **Navigation box** and then select **Vendor Invoice & Debit Memo.**

    The **Vendor Invoice & Debit Memo (APINV)** page appears.

2.  On the **Toolbar**, click **Browse**.

    The **Browse For Vendor Invoice & Debit Memo** window appears.

3.  Highlight a row and click **Select**. Or double click the row to select.

4.  On the **Toolbar**, click **More Actions**.

5.  Select **More Actions** > **Actions** > **Vendor History.**

    The **Vendor History** page appears. By default, this page displays all invoices and document types column header says **Invoice No**, as well as the aging based on **Due Date** for the records displayed.

6.  In the **Calculate Aging Using** box, select the appropriate option to calculate aging by due date or invoice date.

    You can double-click on most column headings in the invoice grid to re-sort the records based on that column.

7.  Use the **Filter By** fields to filter the vendor history information.

    1.  Select the required option from the **Invoice Status View** list to view invoices with a specific status.

    2.  Select the appropriate option from the **View Invoices Related To** list to view invoices associated with a specific type of document and click **Apply Filter** on the grid toolbar. The default is set to view **ALL DOCUMENTS**, but you can also view invoices related to the **PO Number**, **Receiver**, **Part Number**, or **Check Number**.

    If you select a different type of document, a field is displayed. Enter the number associated with the document or click the **lookup reference** and select the number.

    3.  To view invoices for a specific range of dates, select the type of date you want to use. You can select **Invoice Date**, **Due Date**, or **Last Payment Date**. Specify the date range in the **Date Range From** and **To** fields.



The following table lists the fields displayed in the invoice grid.

| **Field Name** |  **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Invoice No.    | The number assigned to the invoice.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Invoice Date   | The invoice date.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Due Date       | The date the invoice is due to be paid.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Status         | The [status](Accounts-payable-invoice-and-debit-memo-statuses.md) of the invoice.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Paid Date      | The date that the last payment on this invoice was made.                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  Check Number  | The number of the check that was used to pay this invoice. If you have made multiple payments for an invoice, the word **MULTIPLE** displays. If there are multiple payments, right-click in this field to display the **Check List** screen that shows each check number, check date, and the check amount paid toward the invoice. If a check has been voided it displays twice; once for the original check, and a second time with the word VOIDED, and a negative amount. |
| Amount Paid    | The total amount paid toward this invoice.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Rem. Balance   | The amount of the invoice that has not been paid. This balance does not include any discounts or adjustments applied against this invoice.                                                                                                                                                                                                                                                                                                                                     |
| Source         | The source of the invoice can be a **Receiver, Misc Vend Invoice**, or **PO**.                                                                                                                                                                                                                                                                                                                                                                                                 |
|  Source No     | The number associated with the record used to Copy the invoice, that is, the PO, Shipper, or Receiver number. If the invoice was created from multiple receivers, the word **MULTI** displays.                                                                                                                                                                                                                                                                                 |

| **Field Name** |  **Description**                                                  |
|----------------|-------------------------------------------------------------------|
| Currency       | The vendor’s default currency.                                    |
| TXN Paid       | The amount of the transaction converted to the vendor’s currency. |
|  TXN Balance   | The invoice balance converted to the vendor’s currency. |          |

1.  After filtering and displaying the invoices, you can export them to an excel spread- sheet. Any filters and sorts applied will carry over to the report or spreadsheet.
1.  Right-click on the grid and select **Export**.
1.  Select the required format. The grid will be downloaded.
