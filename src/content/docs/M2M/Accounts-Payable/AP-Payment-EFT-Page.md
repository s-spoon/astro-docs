---  

title: "AP Payments EFT Page"  

draft: false 
type: Article

---

Use the **AP Payment EFT (APEFT)** page to create an electronic funds transfer (EFT) batch for pro- cessing EFT payments. You can include multiple invoices of different vendors in an EFT batch. Each EFT batch is assigned a unique ID for each EFT enabled bank account set up in the **Accounts Pay- able (CSAP)** page.

The **AP Payment EFT (APEFT)** page is divided into three areas:

-   [Header](AP-Payment-EFT-Page.md#header-area)
-   [Vendors grid](AP-Payment-EFT-Page.md#vendors-grid)
-   [Invoices grid](AP-Payment-EFT-Page.md#invoices-grid)

## Header area

The header area of the **AP Payment EFT (APEFT)** page has the following controls.

| **Field**           | **Description**                                               |
|---------------------|------------------------------------------------------------|
| EFT Batch ID        | The EFT Batch ID. This is generated automatically and is based on the **Next Batch ID** field value of the **Accounts Payable (CSAP)** page. The EFT Batch ID is created only if at least one vendor invoice or vendor is selected for payment in the **(APCASH) - Approve Invoice for Payment page** page.                                                                                            |
| Status              | The EFT batch status. An EFT batch can have various statuses depending on the **Authorization Required** setting set in the **Accounts Pay- able (CSAP)** page.                                                                                                                                                     |
| Batch Creation Date | The date the EFT batch is created. By default, the **Batch Creation Date** is set to the system date. This is a read-only field.                                                                                                                                                       |
| Bank Name           | An EFT enabled bank account for which an EFT file is cre- ated for vendor payment processing. The **Bank Account** field automatically displays the EFT- enabled account that is set as the default account in **Bank Names** tab of the **Accounts Payable (CSAP)** page. If no EFT-enabled bank is set as the default account, then the **Bank Account** field displays the EFT-enabled bank that is |

| **Field**              | **Description**                                                                                                                    |
|------------------------|-----------------------------------------------------------------|
|                        | first added in the **Bank Names** tab of the **Accounts Pay- able (CSAP)** page.                                                            |
| Currency               | The corresponding currency of the bank. This is a read-only field. If the bank currency is the functional currency of the com- pany, then all the applied AP invoices in the **(APCASH) - Approve Invoice for Payment page** page, irrespective of the AP invoice currency, are displayed in the **Invoices** grid. However, if the applied amount in the **(APCASH) - Approve Invoice for Payment page** page is in the trans- action currency, then only those invoices that match the bank currency are displayed in the **Invoices** grid. |
| Highest Urgency        | The highest payment urgency code of the invoices that you want to display. By default, this is set to **1**. You cannot enter a value lower than **1** or higher than **8**.                                                                                        |
| Lowest Urgency         | The lowest payment urgency code of the invoices that you want to display. By default, this is set to **8**. You cannot enter a value lower than **1** or higher than **8**. The **Lowest Urgency** value must be greater than the **Highest Urgency** value.                                                         |
| EFT File Creation Date | The date the EFT file is generated for the EFT batch ID in the **EFT Payment Export (APEFTEXP)** page. This is a read-only field.                                                      |
| EFT Settlement Date    | The posting date of the EFT payment in the system. This is a read-only field. This date is updated when the EFT file is generated for the EFT batch ID in the **EFT Payment Export (APEFTEXP)** page.                                                                            |
| Authorized By          | The name of the user who approved the EFT batch ID for payment in the **EFT AP Payment Batch Authorization (APEFTAUT)** page. This is a read-only field and is displayed only if the **Author- ization Required** check box in the **Accounts Payable (CSAP)** page is selected.                                                                                     |
| Authorized Date        | The date the EFT batch ID was approved for payment in the **EFT AP Payment Batch Authorization (APEFTAUT)** page.                                                          |

| **Field** | **Description**                                                                                   |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
|           | This is a read-only field and is displayed only if the **Author- ization Required** check box in the **Accounts Payable (CSAP)** page is selected. |

## Vendors grid

The **Vendors** grid displays the following details.

| **Column**    | **Description**                                                                                  |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Select        | A check box to select the vendor. On the grid tool bar: Select the **Select** check box to select all the vendors. Clear the **Select** check box to clear all the selections made.                                                                                                                                |
| Vendor Number | The vendor number of the vendor to whom the EFT payment must be made.                                                                                                                                                                                                                                              |
| Vendor Name   | The name of the vendor to whom the EFT payment must be made.                                                                                                                                                                                                                                                       |
| Batch Amount  | The sum of the selected invoices applied amount.                                                                                                                                                                                                                                                                   |
| Status        | The batch line status. This is a read-only field. By default, this is blank. The status is automatically set to: **Exported**: When the EFT file is generated for the EFT batch ID in the **EFT Payment Export (APEFTEXP)** page. **Void**: When the EFT batch is voided in the **EFT Batch Void (APEFTVD)** page. |

## Invoices grid

When you select a vendor in the **Vendors** grid, the invoices of the selected vendor for which EFT pay- ment is applied are displayed in the **Invoices** grid.

>[Tip]: To change the orientation of the Invoices grid with respect to the Vendors grid, right- click the grid splitter in between the two grids.

The following details are shown in the **Invoices** grid.

| **Column**            | **Description**                                             |
|-----------------------|----------------------------|
| Select                | A check box to select the invoice. On the grid tool bar, click: Select the **Select** check box to select all the invoices. Clear the **Select** check box to clear all the selections made. |
| Invoice No.           | The invoice number.                                                        |
| Invoice Total Amount  | The total amount that must be paid for the invoice.                                                                                                                                          |
| Till Date Paid Amount | The amount that has been paid for the invoice to date.                                                                                                                                       |
| Applied EFT Amount    | The EFT mode payment amount that has been applied for the invoice in the **(APCASH) - Approve Invoice for Payment page** page.                                                               |
| Urgency               | The payment urgency of the invoice.                                                                                                                                                          |
| Invoice Due Date      | The date the payment for the invoice is due.                                                                                                                                                 |

## EFT batch status

The EFT batch can have the following sequence of statuses when the **Authorization Required**

check box in the **Accounts Payable (CSAP)** page is not selected for the bank.

![](../Accounts-Payable/assets/images/AP-EFT-Image-1.png)


The EFT batch can have the following sequence of statuses when the **Authorization Required**

check box in the **Accounts Payable (CSAP)** page is selected for the bank.

![](../Accounts-Payable/assets/images/AP-EFT-batch-status-Image-2.PNG)


The following table describes the EFT batch statuses.

| **Status**        | **Description**                                              |
|-------------------|--------------------------------------------------------------|
| Started  | This is the default status when the EFT batch is generated and saved. You can change the records selected when the EFT batch is in the **Started** status. If the EFT Batch ID is modified and if you have not selected any vendor record, then you cannot change the status from **Started** to any other status. |
| Awaiting Approval | This status indicates that the EFT batch has not been approved. This status is available only when the **Authorization Required** check box in the **Accounts Payable (CSAP)** page is selected for the bank. You can change the records selected when the EFT batch is in the **Awaiting Approval** status.  |
| Approved  | The EFT batch is automatically set to the **Approved** status when it is approved in the **EFT AP Payment Batch Author- ization (APEFTAUT)** page. This status is available only when the **Authorization Required** check box in the **Accounts Payable (CSAP)**     |

| **Status**      | **Description**                                        |
|-----------------|-------------------------------------------------------
| | page is selected for the bank. If you make any changes to the EFT batch, its status auto- matically reverts to **Started**.                                                     |
| Ready to Export | This status indicates that the EFT payment file can be gen- erated for the selected invoices of the EFT batch in the **EFT Payment Export (APEFTEXP)** page. You cannot modify any of the EFT batch ID records when its status is **Ready to Export**. You can set the EFT batch status to **Ready to Export** only if the vendor invoices and **Accounts Payable (CSAP)** bank account EFT details are available for the EFT batch records. |
| Exported        | The EFT batch is automatically set to the **Exported** status when the EFT file is generated for all the invoices of the EFT batch in the **EFT Payment Export (APEFTEXP)** page.                                                       |
| Void   | The EFT batch is automatically set to the **Void** status when it is voided in the **EFT Batch Void (APEFTVD)** page and if all the vendors in the EFT batch are set to **Void** status.                                                                               
|