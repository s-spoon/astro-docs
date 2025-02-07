---  

title: "Add, Change, or Remove a vendor contact"  
draft: false 
type: Article

---

A vendor may use one or more banks to handle Electronic Fund Transfer (EFT) transactions. Use the **Vendor Bank Details (VENDEFT)** window to record the vendor bank details for processing EFT payments.

You can open the **Vendor Bank Details (VENDEFT)** window only if the following conditions are met:

-   The **EFT Vendor** check box in the parent **Vendors (VEND)** page is selected.

-   The required permissions for the window are set.

-   The vendor status is **Started** or **Active**. This window has the following two sections:

-   **Remit To Details**: To specify the remittance details.

-   **Bank Details**: To record the bank details. The **Remit To Details** section has the following fields.

| **Field**                  | **Description**                                                                                                                                                                                                                                              |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Vendor No                  | The vendor number of the vendor selected in the parent **Vendors (VEND)** page. This is a read-only field.                                                                                                                                                   |
| Remittance Delivery Method | The method by which the EFT remittance advice is delivered: Print, Email, or Fax. The default value is **Print**. Based on the value selected, the **Remittance Advice Prin- ted** check box in the **Vendor Invoice & Debit Memo (APINV)** page is updated. |
| Remittance Advice Email    | The email address to which the remittance advice must be sent. The default value is the email ID entered in the **E-Mail** field of the parent **Vendors (VEND)** page. However, you can change it if required.                                              |

| **Field**             | **Description**                                                                                                                                                                                             |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Remittance Advice Fax | The fax number to which the remittance advice must be sent. The default value is the fax number entered in the **Fax** field of the parent **Vendors (VEND)** page. However, you can change it if required. |

The **Bank Details** section has a grid in which you can record the details of the various banks used by the vendor for handling EFT transactions. However, you must set one bank as the primary bank.

The **Bank Details** grid has the following columns:

| **Column**        | **Description**                                                                                                                                                                                                                                                   |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bank Name         | The name of the bank used by the vendor for EFT liability settlement processing. This is a mandatory field.                                                                                                                                                       |
| Bank Account Name | The bank account description.                                                                                                                                                                                                                                     |
| Bank Account ID   | The vendor bank account number to which the payment amount according to the EFT file instructions is credited. This is a mandatory field.                                                                                                                         |
| Bank Currency     | The currency in which transactions are made to the bank account. The default value is the currency of the vendor country selected in the **Country** field of the parent **Vendors (VEND)** page.                                                                 |
| Routing Number    | The nine-digit routing number that identifies the bank for EFT transactions. This is a mandatory field.                                                                                                                                                           |
| Primary Pay Bank  | Select this check box to indicate that the bank is the default vendor bank that handles EFT transactions. You must select one bank as the primary bank that handles EFT transactions. By default, the system designates the first bank added as the primary bank. |
