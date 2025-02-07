---
title: "Add a credit memo"
draft: false
type: Article
---

When you owe a customer because of returns, bad parts, or disputes, you can issue a credit memo for the amount you owe which can be used against future purchases.

Made2Manage automatically adds a credit memo when a customer overpays you.

> [!Note] The **Quantity Invoiced**, **Extended Price**, **Goods Amount**, and the **Invoice Amount** values are displayed according to the **Negative Numbers** display format setup in the **Country/Currency Formats (CURR)** page when they have negative values.

To add a credit memo

1.  Open the **Customer Invoices & Credit Memo (ARINV)** page.

    1. Select Financial Management > Financial Transactions > Accounts Receivable > Customer Invoices & Credit Memo.

        Or

    1.  *Search for* **ARINV** *or* **Customer Invoices & Credit Memo** *in the* **Navigation box** *and then select* **Customer Invoices & Credit Memo**. **Customer Invoices & Credit Memo (ARINV)** *page appears.*

2.  On the **Toolbar**, click **Copy** and select **Credit Memo**.

    Select the entity for which you want to add the credit memo: Single Receiver, Sales Order, Customer, Invoice, RMA.

3.  Add the credit memo for the selected entity:

    » To add a credit memo for a Single Receiver, follow these steps.

    » To add a credit memo for a Sales Order, follow these steps.

    » To add a credit memo for a Customer, follow these steps.

    » To add a credit memo for an Invoice, follow these steps.

    » To add a credit memo for an RMA, follow these steps.

4.  If you want to apply a contract to the Customer Invoices and Credit Memo, then select the **Contract** check box. This enables the contract browse text box. Click the lookup reference button and select the contract for the associated customer from the **Lookup For Contract** window.

    The **Contract** check box is enabled only in the following scenarios:

    » Copy from Miscellaneous > Customer

    » Copy from Credit Memo > Customer

    The **Contract** field displays the value based on the following conditions:

    » If the invoice is created using documents (SO / Shipper) with a con- tract, then the **Contract** field is populated from the document and is read-only in the **Order Info** tab and **Line Items** tab.

    » If a new line item is added in an existing invoice created from an SO/Shipper with a contract, it is considered miscellaneous allowing you to select or remove a contract for the added line item.

    » In the case of only a Miscellaneous Invoice, you can remove the con- tract from the **Order Info** tab or **Line Items** tab.

    » For Miscellaneous invoices, the **Contract** field in the **Line Items** tab is enabled if the Invoice status is **New, Not Confirmed** and becomes read-only when the status of invoice changes to **Unpaid**.

1.  On the **Toolbar**, click **Save** to record the credit memo.

    To change the credit memo's status to unpaid, see "Confirm invoices and credit memos".

    To create a credit memo for progress billing for which a final invoice has been cre- ated, you must credit the final invoice before you can credit previous invoices.

    When you credit the final progress billing invoice, as long as you are using unearned revenue for progress billing, the revenue amount is put back in the unearned revenue account.