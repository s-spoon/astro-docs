---
title: "Check customer history"
draft: false
type: Article
---

Use the **Customer/Distributor History** page to generate:

-   All current and prior invoices
-   Display the actual invoice record
-   Related **Sales Order** or **Shipper** information

    You can sort and filter the invoices, and then print them as a report or export them to an Excel spread- sheet.

To generate Customer/Distributor History Report:

1.  Open the **Accounts (CUST)** page.
1.  *Select* **Sales Management** > **Master Data** > **Accounts**.

Or

1. *Search for* **CUST** *or* **Accounts** *in the* **Navigation box** *and then select*

    Accounts.

**Accounts (CUST)** *page appears.*

1.  Click **Browse** on the **Toolbar**.

    The **Browse For Accounts** window appears.

2.  Highlight a record and click **Select**. Or, double-click the record to use.
3.  On the **Toolbar**, click **More Actions**.
4.  Select **More Actions** > **Actions** > **History**.

    The **Customer/Distributor History (CHIST)** page is displayed.

5.  Review the information displayed.

To check customer history using the Customer Credit Status (ASTAT) page:

1.  Open the **Customer Credit Status (ASTAT)** page.

    Select Financial Management > Financial Transactions > Accounts Receivable > Customer Credit Status.

Or

1.  *Search for* **ASTAT** *in the* **Navigation box** *and then select* **Customer Credit Status**.

    **Customer Credit Status (ASTAT)** *page appears.*

2.  Click **Browse** on the **Toolbar**.

    The **Browse For Customer Credit Status** window appears.

3.  Select a record and click **Select**. Or, double-click the record to use.
4.  On the **Toolbar**, click **More Actions**.
5.  Select **More Actions** > **Actions** > **Customer History**.

    The **Customer/Distributor History (CHIST)** page is displayed.

6.  Review the information displayed.

    Apart from the information shown in the **CUST** page, the following fields are dis- played at the top of the **Customer/Distributor History (CHIST)** page:

    » **YTD Goods/Svcs** – The amount of goods and services ordered so far in the current year.

    » **Prev Cal. Year** – The amount of goods and services ordered in the previous calendar year.

    » **Aging** – Five different aging periods are displayed along with a total due for all invoices. By default, aging calculates based on the **Due Date**. Select the required option in the **Calculate Aging By** drop- down menu to calculate aging based on the **Invoice Date** or **GL Posting Date**.

    The grid in the middle of the page displays detailed information about the customer/distributor’s invoices. The following table describes the fields displayed in the grid.

| **Field Name** | **Description**                     |
|----------------|-------------------------------------|
| Invoice No     | The number assigned to the invoice. |
| Inv Date       | The date of the invoice.            |

| **Field Name** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Due Date       | The date the invoice is due to be paid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Status         | The status of the invoice.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Paid Date      | The date that the last payment on this invoice was received.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Chk No.        | The number of the check received in payment for this invoice. If you have received multiple payments for an invoice, the word **MULTIPLE** displays and the **Associated Checks** but- ton is enabled when you select this row. Click this to display the **Check List** window that shows each check number, check date, and the check amount applied to the invoice. If a receipt has been voided the check number is displayed twice: once for the receipt, and a second time with the word **VOIDED**, and a negative amount. |
| Amt Paid       | The total amount paid toward this invoice.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Rem Balance    | The amount of the invoice that has not been paid. This balance does not include any discounts or adjustments applied to this invoice                                                                                                                                                                                                                                                                                                                                                                                              |
| Source         | The type of document that was the source of the invoice. Any of the fol- lowing entries can appear in this field. **AUTO Generated –** an Invoice Prepayment (ARINV) **Invoice –** a Credit Memo (ARINV) **Misc Cust Inv –** aCustomer Invoice (ARINV) **Receiver** – a Credit Memo created from a Receiver (RECV) **Shipper –** a Shipper (SHIP) **SO –** a Sales Order (SO)                                                                                                                                                     |
| Source Doc     | The number associated with the record used to create the invoice, that is, the Invoice, Shipper, or Sales Order number. If the invoice was created from multiple shippers, the word **MULTI** displays and the **Shipper List** button is enabled when you select the row. Click this button to display the **Shipper List** window that shows each line item, shipper number, and sales order associated with the invoice.                                                                                                       |

| **Field Name** | **Description**                                                           |
|----------------|---------------------------------------------------------------------------|
| SO No.         | The number of the Sales Order associated with the invoice.                |
| PO No.         | The customer Purchase Order number, if any.                               |
| Currency       | The currency used to pay the invoice.                                     |
| Txn Paid       | The payment amount converted to the currency used to make the pay- ment.  |
| Txn Balance    | The invoice balance converted to the currency used to make the pay- ment. |

Filter the information displayed in the grid

You can filter the information displayed in the grid from the fields available in the **Filter By** section. To filter:

1.  From the **Invoice Status View** list, select the status of the invoices you want to view.
2.  From the **View Invoices Related To** list, select the type of documents whose related invoices you want to view.
3.  Select the type of date you want to use: **Invoice Date**, **Due Date**, or **Last Pay- ment Date**. Then, enter the range of dates you want to view in the **From** and **To** fields.

    » On the grid toolbar, click **Apply Filter**.

    Following fields are displayed at the bottom of the page:

    » **Amt Paid** - Displays the total amount paid by the customer for all invoices listed in the grid.

    » **Rem. Balance** - Displays the balance amount due from the cus- tomer for all invoices listed in the grid.

To print or export the invoices displayed to an Excel spreadsheet

-   On the grid toolbar in the **Filter By** section, click **Print** to preview the customer history and print the report.