---  

title: "AP Payment EFT (APEFT) Page"  
draft: false 
type: Article

---


## Overview
Use the **AP Payment EFT (APEFT)** page to create an electronic funds transfer (EFT) batch for processing EFT payments. You can include multiple invoices of different vendors in an EFT batch. Each EFT batch is assigned a unique ID for each EFT-enabled bank account set up in the **Accounts Payable (CSAP)** page.

The **AP Payment EFT (APEFT)** page is divided into three areas:
- **Header**
- **Vendors grid**
- **Invoices grid**

---

## Header Area
The header area of the **AP Payment EFT (APEFT)** page has the following controls.

| Field                | Description                                                                                                                                                                                                 |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **EFT Batch ID**     | The EFT Batch ID. Generated automatically based on the `Next Batch ID` field value in the **Accounts Payable (CSAP)** page. Created only if at least one vendor invoice is selected for payment in **(APCASH)**. |
| **Status**           | The EFT batch status. Varies based on the `Authorization Required` setting in the **Accounts Payable (CSAP)** page. See [EFT Batch Status](#eft-batch-status) for details.                                   |
| **Batch Creation Date** | The date the EFT batch is created. By default, this is the system date. (Read-only)                                                                                                                     |
| **Bank Name**        | The EFT-enabled bank account for vendor payment processing. Automatically displays the default account set in the **Bank Names** tab of the **Accounts Payable (CSAP)** page.                              |
| **Currency**         | The corresponding currency of the bank. (Read-only)                                                                                                                 |
| **Highest Urgency**  | The highest payment urgency code (default: 1). Value must be between 1 and 8.                                                                                       |
| **Lowest Urgency**   | The lowest payment urgency code (default: 8). Must be greater than the **Highest Urgency** value.                                                                    |
| **EFT File Creation Date** | The date the EFT file is generated for the EFT batch in the **EFT Payment Export (APEFTEXP)** page. (Read-only)                                                                                  |
| **EFT Settlement Date** | The posting date of the EFT payment. Updated after the EFT file is generated in the **EFT Payment Export (APEFTEXP)** page. (Read-only)                                                              |
| **Authorized By**    | The name of the user who approved the EFT batch in the **EFT AP Payment Batch Authorization (APEFTAUT)** page. Displayed only if `Authorization Required` is enabled. (Read-only)                          |
| **Authorized Date**  | The date the EFT batch was approved. Displayed only if `Authorization Required` is enabled. (Read-only)                                                                                                    |

---

## Vendors Grid
The **Vendors grid** displays the following details:

| Column          | Description                                                                                                                                                          |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Select**      | A checkbox to select the vendor. Use the toolbar to select/deselect all vendors.                                                                                      |
| **Vendor Number** | The vendor number to whom the EFT payment must be made.                                                                                                             |
| **Vendor Name** | The name of the vendor to whom the EFT payment must be made.                                                                                                         |
| **Batch Amount** | The sum of the selected invoices' applied amounts.                                                                                                                   |
| **Status**      | The batch line status. (Read-only)                                                                                                                                    |

---

## Invoices Grid
When a vendor is selected in the **Vendors grid**, the invoices for that vendor are displayed in the **Invoices grid**.

| Column               | Description                                                                                                                                                  |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Select**           | A checkbox to select the invoice. Use the toolbar to select/deselect all invoices.                                                                            |
| **Invoice No.**      | The invoice number.                                                                                                                                           |
| **Invoice Total Amount** | The total amount to be paid for the invoice.                                                                                                                |
| **Till Date Paid Amount** | The amount paid to date for the invoice.                                                                                                                    |
| **Applied EFT Amount** | The EFT payment amount applied to the invoice in the **(APCASH)** page.                                                                                     |
| **Urgency**          | The payment urgency of the invoice.                                                                                                                           |
| **Invoice Due Date** | The payment due date for the invoice.                                                                                                                         |

---

## EFT Batch Status
### Without Authorization Required
The EFT batch can have the following statuses when `Authorization Required` is **not** selected:

1. **Started**  
   - Default status when the EFT batch is created. Records can be modified at this stage.
2. **Ready to Export**  
   - Indicates that the EFT payment file is ready to be generated. Records cannot be modified at this stage.
3. **Exported**  
   - Set automatically when the EFT file is generated.

### With Authorization Required
The EFT batch can have the following statuses when `Authorization Required` is **selected**:

1. **Started**  
   - Default status when the EFT batch is created.
2. **Awaiting Approval**  
   - Indicates the EFT batch is pending approval.
3. **Approved**  
   - Automatically set when the batch is approved. Any changes revert the status to **Started**.
4. **Ready to Export**  
   - Indicates the EFT payment file is ready to be generated.
5. **Exported**  
   - Automatically set when the EFT file is generated.

---

## Status Descriptions
| Status            | Description                                                                                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Started**        | Default status when the EFT batch is generated. Records can be modified.                                                                                            |
| **Awaiting Approval** | Indicates that the EFT batch has not been approved. Only available if `Authorization Required` is enabled.                                                       |
| **Approved**       | Automatically set when the batch is approved. Any changes revert the status to **Started**.                                                                         |
| **Ready to Export** | Indicates the EFT file can be generated. Records cannot be modified in this status.                                                                                 |
| **Exported**       | Automatically set when the EFT file is generated.                                                                                                                   |
| **Void**           | Automatically set when the EFT batch is voided.                                                                                                                     |
