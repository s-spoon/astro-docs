---  

title: "Create Voucher"  
draft: false 
type: Article

---

The invoice module allows the users to create vouchers to track the supplier's
invoice. You can create three types of vouchers based on the invoice type:

  * Purchase Order Invoice

  * Direct Charge Invoice

  * Credit Memo

## Creating a Voucher from a Purchase Order Invoice

To create a voucher from a purchase order, please follow these steps:

  1. From the left navigation pane, click Invoice and then click Create Voucher. The **Create New Voucher** page will appear.

  2. Under Voucher Type, click on Create From Purchase Order and enter the **Purchase Order** number or the **Supplier** number.
      > [!note]
      > You can use the search icon to search and select the purchase order in the Issued state.

     > [!note]
     > Inactive suppliers are not accepted while creating voucher.

      >[!note] 
      > You can select multiple purchase orders (POs) when creating an invoice using the **Add Line** button. Additionally, you can generate a comprehensive report detailing the number of purchase orders successfully added and those that failed.

  3. Click Next. The PO Item Selection page will appear.

      > [!note]
      > If a voucher already exists for the purchase order, an information message will appear. If the selected purchase order is not in the Issued state, an error message will appear. If the selected purchase order is a blanket PO, another error will appear.

  4. Select the required lines and click Next.

  5. The MAIN tab will appear, which includes the basic header information.
      1. In the MAIN tab, under the Invoice Detail section, enter the Invoice # received from the supplier.

      2. Click on the date icon next to the Invoice Date field and select the invoice date.

      3. The Due Date defaults to an automatically calculated date based on the Discount Method at supplier level or in Voucher Setup screen. Use can also click on the date icon next to the Invoice Due Date field and select the invoice due date.

          >[!note]
          >The availability of these date fields depends on the configuration in Invoice Matching Setup Options.
      4. In the Terms section, if the voucher currency from PO is different from the plant currency, if needed, update the Exchange Rate.

            >[!note]
            >All other details will be fetched from the supplier and purchase order, but you can change them as needed.

      5. Click CREATE.

          The voucher will be created.

  6. Navigate to the DETAILS tab, you can see the lines copied from the purchase order.
      1. To create a new line click **NEW LINE**.

          The Add New Voucher Line window appears, which contains the lines of the selected Purchase Order.

      2. Select the lines and click SELECT.

          >[!note]
          >If you select a line that has already been added to the voucher, an information popup will appear.

      3. For existing lines, click on a line to view its details.

      4. Navigate to the Line Invoice Information section, which includes the cost, quantity, cost variance, and tax details.

      5. The invoice quantity will be automatically calculated and populated in the Invoice Quantity field if the Setup Option **Default Received Not Invoiced value into the invoice when a new voucher is entered** is turned on in Invoice Validation Setup screen. However, you can change the quantity as needed.

     6. The supplier unit cost will be automatically calculated based on the PO unit cost and populated in the Supplier Unit Cost field. However, you can change the quantity as needed.

        The values for Unit Variance and Supplier Extended Cost will be calculated based on the supplier unit cost on the voucher line and PO line.

      7. The tax code will be fetched based on the purchase order. However, you can change it as needed.

     8. Enter the Supplier Non Taxable Cost, will affect the calculation on **Tax** and Tax Accrual.

      9. Navigate to the Distributed Charges section.

          The charges will be fetched from the PO line items and listed in this section.

      10. Click on a line, then click the EDIT button to add the account details to a charges line.

      11. Click SAVE to save the changes.

          >[!note]
          >You cannot proceed without adding an account to a charges line.

      12. Click NEW to add new charges to an account.

     13. Navigate to the Extended Description section.

      14. Enter any description/comments, if necessary.

      15. Click CREATE. A line will be updated for the Invoiced Items.

  7. Navigate to the Totals tab, which includes the calculations from the lines and additional amount details for freight.

      1. The Voucher Totals will be calculated based on the line item values in the DETAILS tab and displayed.

      2. To enter the Freight Amount, click the EDIT button and enter the Freight Amount.

          >[!note]
          >The Freight Amount field functions based on the configuration at Validation Codes > Freight.

      3. In the Other 1 Account and **Other 1 Amount** fields, select an account and enter the amount.

          >[!note]
          >These are based on the **Invoice Matching Setup Options** > **Invoice Accounts** configuration.

      4. In the Other 2 Account and **Other 2 Amount** fields select an account and enter the amount.

          These values will be included to calculate the Totals > Calculated Gross.

      5. If you have received an invoice from the supplier with the total amount, you can enter that amount in the Control Total field.

      6. The difference between the Calculated Gross and the Control Total will be displayed in the Out of Balance By field.

      7. Click Save. If there is any out of balance by amount, an error information popup will appear.

##  Creating a Voucher from a Direct Charge

To create a voucher for a direct charge, please follow these steps:

  1. From the left navigation pane, click Invoice and then click Create Voucher. The **Create New Voucher** page will appear.

  2. Under Voucher Type, click on Create Direct Charge and click Next.

  3. The MAIN tab will appear, which includes the basic header information.

     1. In the MAIN tab, under the Invoice Detail section, enter the Invoice # received from the supplier.

     2. In the Supplier field, search and select the supplier to whom the voucher is created.

      3. Click on the date icon next to the Invoice Date field and select the invoice date.

      4. The **Due Date** defaults to an automatically calculated date based on the Discount Method at supplier level or in Voucher Setup screen. Use can also click on the date icon next to the Invoice Due Date field and select the invoice due date.

          >[!note]
          >By default, the Due date is calculated based on the option selected in the Invoice Matching setup option.

      5. In the Terms section, enter the Exchange Rate if the Voucher Currency is different from the Plant Currency..

          >[!note]
          >In the Terms section, all the values will be defaulted from the selected supplier for the Direct Charge. The exchange rate will be editable only when the plant currency does not match the supplier currency. For the PO type of voucher, default values in the Terms section will be taken from the respective PO.

      6. Select the Payment Terms. With the **Payment Terms** selected, if there are discounts defined on it, then after the voucher lines are entered, the Discount Amount will be automatically calculated based on that discount percentage and the voucher Total.

          >[!note]
          >In the **Payment Terms** section, all values will be defaulted from the supplier if they are already defined.

      7. Click CREATE.

          The voucher will be created.

  4. In the DETAILS tab:

      1. To create a new line click NEW LINE.

          The Add New Line Item appears.

      2. In the Add New Line Item section, search for and select the desired item.

      3. The system verifies whether the entered item already exists. If the item is not found, a prompt will appear asking for confirmation. Click YES to proceed on creating a **No Create** Item. If the item is found, the system will retrieve the description and item type associated with it.

      4. For **No Create** item enter the description, and choose the item type.

      5. Click ADD to include the line.

          >[!note]
          >If you want to add another line and create a new one simultaneously, click on ADD ANOTHER.

     6. For existing lines, click on a line to view and fill in its details.

      7. Navigate to the Line Invoice Information section, which includes the cost, quantity, cost variance, and tax details.

     8. Manually enter the invoice quantity.

        >[!note]
        >The unit cost of the item will be defaulted from the item if the selected item is from Inventory. The user should select the quantity. For other 'n' type items, the user should select the quantity and unit cost.

      9. The supplier unit cost will be in the Supplier Unit Cost field based on the users input in the lines. However, you can change it as needed.

          The values for Supplier Extended Cost will be calculated based on the supplier unit cost.

      10. Manually choose a tax code.

      11. Enter the Supplier Non Taxable Cost, which will affect the calculation on Tax and Tax Accrual.

      12. Navigate to the Distributed Charges section.

     13. Click on a line, then click the **New** button to add the account details to a charges line.

      14. Click SAVE to save the changes.

          >[!note]
          >You cannot proceed without entering the mandatory fields such as Area, Account, Department, etc.

      15. Click NEW to add new charges to an account.

      16. Navigate to the Extended Description section.

      17. Enter any description/comments, if necessary.

     18. Click CREATE. A line will be updated for the Invoiced Items.

  5. Navigate to the Totals tab, which includes the calculations from the lines and additional amount details for freight.

      1. The Voucher Totals will be calculated based on the line item values in the DETAILS tab and displayed.

      2. The voucher totals will be displayed in multicurrency, with the left section showing the supplier currency and the right section showing the plant currency. The values will be calculated to synchronize with each other based on the exchange rate.

      3. To enter the Freight Amount, click the EDIT button and enter the Freight Amount.

          >[!note]
          >The Freight Amount field functions based on the configuration at Validation Codes > Freight.

      4. In the Other 1 Account and **Other 1 Amount** fields select an account and enter the amount.

          >[!note]
          >These are based on the **Invoice Matching Setup Options** > **Invoice Accounts** configuration.

      5. In the Other 2 Account and **Other 2 Amount** fields, select an account and enter the amount.

          These values will be included to calculate the Totals > Calculated Gross.

      6. If you have received an invoice from the supplier with the total amount, you can enter that amount in the **Control Total** field.

      7. The difference between the Calculated Gross and the Control Total will be displayed in the Out of Balance By field.

      8. Click Save. If there is any out of balance by amount, an error information popup will appear.

## Creating a Voucher from a Credit Memo

To create a voucher from a Credit Memo, please follow these steps:

  1. From the left navigation pane, click Invoice and then click Create Voucher. The **Create New Voucher** page will appear.

  2. Under Voucher Type, click on Create Credit Memo and enter the Voucher number.

      >[!note]
      >You can use the search icon to search and select the voucher number. You can only select vouchers that have the status Selected For Payment or Paid.

  3. Click Next.

      >[!note]
      >The system verifies whether the entered credit memo already exists for the selected voucher. If the credit memo is found, a prompt will appear asking for
confirmation. Click YES to proceed.  
You can also create the Credit Memo from the action button on **Invoice Matching Search** screen after selecting a proper existing voucher.  
You can also create the Credit Memo from **Voucher** screen by clicking on
**Create Credit Memo** button in the Action bar if the voucher displayed in
the screen is in status **Selected For Payment or Paid**.

  4. The MAIN tab will appear, which includes the basic header information.

  5. All the details will be copied from the original voucher to the MAIN tab, DETAILS tab, and TOTALS tab.

  6. Click CREATE.  
The voucher will be created. The only difference in the data is that either
the Invoiced Quantity or Supplier Unit Cost value becomes negative, allowing
for flexibility in adjusting the total amount on the credit memo. By referring
to the lines copied from the original voucher order, the credit memo can be
utilized to offset or write off the corresponding original voucher.

  7. Navigate to the Totals tab, which includes the calculations from the lines and additional amount details for freight.

      1. The Voucher Totals will be calculated based on the line item values in the DETAILS tab and displayed.

      2. The voucher totals will be displayed in multicurrency, with the left section showing the foreign currency and the right section showing the local currency. The values will be calculated to synchronize with each other based on the exchange rate.

      3. To enter the Freight Amount, click the EDIT button and enter the Freight Amount.

          >[!note]
          >The Freight Amount field functions based on the configuration at Validation Codes > Freight.

      4. In the Other 1 Account and **Other 1 Amount** fields, select an account and enter the amount.

          >[!note]
          >These are based on the **Invoice Matching Setup Options** > **Invoice Accounts** configuration.

      5. In the Other 2 Account and **Other 2 Amount** fields, select an account and enter the amount.

          These values will be included to calculate the Totals > Calculated Gross.

      6. If you have received an invoice from the supplier with the total amount, you can enter that amount in the Control Total field.

      7. The difference between the Calculated Gross and the Control Total will be displayed in the Out of Balance By field.

      8. Click Save. If there is any out of balance by amount, an error information popup will appear.

## Voucher Actions

The following actions can be performed by navigating to the voucher, clicking
the **ACTIONS** button, and selecting the appropriate option, or choose the
voucher in **Invoice Matching Search** screen then click on the Action buttons
above the search result.

In **Invoice Matching Search** screen, user can also do the Massive Update
with multiple selection when needed.

**Change Voucher Status from Incomplete to Complete**:

This action allows you to transition a voucher from an incomplete status to a
complete status, indicating that all necessary information has been provided,
and all errors on that voucher has either been resolved or been overridden by
an approval.

**Change Voucher Status from Complete to Selected**:

This action enables you to change the status of a complete voucher to
selected, indicating that it has been chosen for further processing or
payment.

Then, the voucher will no longer allow any updates, except to fill in the
Check # and Paid Date.

During this action, the related **Store Activity** records are generated. The
**Discount** , **Tax** , or **Freight Amount** may update the **Average Unit
Cost** for the item on that voucher line or generate the **Cost Posting**
records to an associated Work Order based on the Charge-related options in the
**Voucher Item Type Accounts** Setup screen.

**Change Voucher Status from Selected to Paid**:

By selecting this option, you can update the status of a selected voucher to
paid, indicating that the payment has been successfully processed.

**Cancel Voucher**:

This action allows you to cancel a voucher, which means it will no longer be
considered for payment or further processing.

Only the vouchers in status of Incomplete or Complete can be cancelled.

**Reopen Cancelled Voucher**:

If a voucher has been previously canceled, this action allows you to reopen
it, making it available for further modifications or processing.

The re-opened voucher will be in Incomplete status.

**Create Credit Memo**:

By choosing this option, you can generate a credit memo based on the selected
voucher, which can be used to offset or credit the corresponding transaction.

## Voucher Process Flow

This topic describes the available actions based on the different voucher
statuses:

**Incomplete**:

From the incomplete status, you have the option to change it to complete or
cancel the voucher. This allows you to either provide the missing information
and proceed with processing or cancel the voucher if necessary.

**Complete**:

If the voucher is in a complete status, you can either change it to selected
for payment or cancel the voucher. This gives you the choice to proceed with
selecting the voucher for payment or cancel it if needed.

**Selected for Payment**:

Once the voucher is in the selected for payment status, the only available
action is to change it to paid. This indicates that the voucher has been
approved for payment and the payment process has been initiated. You can enter
Check # and the Paid Date before changing the status to Paid.

**Paid**:

Once the voucher reaches the paid status, no further changes can be made. This
status indicates that the payment for the voucher has been successfully
processed.

**Cancelled**:

From the cancelled status, you have the option to reopen the cancelled
voucher. This allows you to reverse the cancellation and make the voucher
available for further modifications or processing.

## Set up Invoice Matching Setup Option

From the **Setup Options** > **Invoice Matching Setup Options** page, you can
configure the following for invoice matching:

  * General

  * Voucher Numbering

  * Invoice Validation

  * Invoice Accounts

  * Item Type Accounts

## General

In the Invoice Matching Setup Options > General section, you can configure the
following settings:

Allow Setup at Supplier Level:

Toggle on the Allow Setup at Supplier Level option to use the Discount Method
selected at the supplier level.

Discount Method:

In the Discount Method field, select one of the following options:

  * Always apply regardless of date: Apply the discount regardless of the date.

  * Calculate based on Current Date: Apply the discount and calculate the Due Date based on the current date.

  * Calculate based on Invoice Date: Apply the discount and calculate the Due Date based on the invoice date.

  * Calculate based on Received Date: Apply the discount and calculate the Due Date based on the received date.

## Voucher Numbering

In the Invoice Matching Setup Options > Voucher Numbering section, you can
configure the following settings for voucher numbering:

Allow Entry of Voucher Numbers:

Toggle on the Allow Entry of Voucher Numbers option to enable users to enter
the voucher number manually.

Voucher Numbering Method:

Select one of the following options for voucher numbering:

  * Use Date and Sequence Number

  * Manually assign Numbers

  * Use Prefix and Sequence Number

  * Use Sequential Number

Prefix:

Specify the number of digits and last number for the prefix.

### Invoice Validation

In the Invoice Matching Setup Options > Invoice Validation section, you can
configure the following validations:

>[!note]
>Wherever these options are set for error, then an entry will be logged in the
iv_error_message table, which can be viewed through the Show errors option. If
the setup is set to No Error or Warning, then no errors will be logged.

Total Quantity Invoiced Exceeds the Quantity Received:

Select one of the following options:

  * Give a warning message, allow status complete.

  * Give an error message, allow status incomplete only.

Computed Invoice Total Not Equal To Control Total:

Select one of the following options:

  * Give a warning message, allow status complete.

  * Give an error message, allow status incomplete only.

Freight Code Does Not Allow Charges:

Select one of the following options:

  * Give an error message, allow status incomplete only.

  * No message, allow status complete.

  * Give a warning message, allow status complete.

Item on a Direct Charge Invoice is also on a Current Purchase Order:

Select one of the following options:

  * Give an error message, allow status incomplete only.

  * No message, allow status complete.

  * Give a warning message, allow status complete.

Set voucher to this status if the invoice passes all edits:

From the dropdown menu, select Incomplete, Complete, or Selected for Payment.

Invoice Status Code Assigned in two-way match:

From the dropdown menu, select Incomplete, Complete, or Selected for Payment.

Include discount in control total calculation:

Toggle on the option to include the discount in the control total calculation.

Allow entry of a service contract invoice that exceeds the purchase order
limit:

Toggle on the option to allow entry of a service contract invoice that exceeds
the purchase order limit.

Default received not invoiced value into the invoice when a new voucher is
created:

Toggle on the option to automatically populate the "Received Not Invoiced"
value into the corresponding field of the invoice when a new voucher is
created, eliminating the need for manual entry.

Include unpaid invoice quantities in the edit for quantity invoiced exceeding
the quantity received:

Toggle on the option to include unpaid invoice quantities in the editing
process to ensure that the total quantity invoiced does not exceed the
quantity received. This prevents overbilling by considering any previous
unpaid quantities from previous invoices related to the same transaction or
order.

### Invoice Accounts:

From the Invoice Matching Setup Options > Invoice Accounts section, you can
configure the following account details:

**Variance**:

Specify the account details for variances in this section.

**Other-1**:

Specify the account details for Other-1 in this section.

**Other-2**:

Specify the account details for Other-2 in this section.

**Adjustment**:

Specify the account details for adjustments in this section.

**Allow Override of Accounts on Invoice Totals**:

Toggle on the Allow Override of Accounts on Invoice Totals option to enable
users to manually modify the default account assignments for invoice totals in
an accounting or invoicing system, providing flexibility in account
allocation.

### Item Type Accounts

From the Invoice Matching Setup Options > Invoice Accounts section, you can
configure the following account details for each item types:

Tolerance:

In this section, you can set the tolerance percent and tolerance amount. You
can also determine the action to be taken when the Unit Cost Variance exceeds
the tolerance limit.

Accounts:

In this section, you can set the Freight Account and Discount Account.

Charges:

In this section, you can select the charges to include in the Average Unit
Cost calculation. Alternatively, you can choose to apply the charges to the
work order.

These actions occur when the **Voucher** is set to **Selected for Payment**
status .

Apply charges to any work order charged on a Direct Charge Invoice:

Toggle on the Apply the line Extended Cost on a Direct Charge Invoice to any
work order charged on this Direct Charge Invoice.

## Two-Way Matching

The Two-Way Match feature automates voucher generation by eliminating the need
for manual entry. When a purchase order is designated for two-way matching,
you can match the PO receipt and PO, which triggers the automatic generation
of voucher records.

To generate a voucher using the two-way matching process, follow these steps:

  1. Navigate to **Purchasing** > **PO Receipts**.

  2. Enter the purchase order number in the **Purchase Order #** field, ensuring that the PO is in the **Issued** status.

  3. Provide the Bill of Lading (BOL) number to assign a value for the invoice number, which will be updated in the newly generated voucher.

  4. Enter relevant details such as **Carrier** , **Packing List** , **Date Received** , **Employee** , and **Comments**.

  5. Click **NEXT** to proceed.

  6. The line items for the specific purchase order will be displayed.

  7. If necessary, adjust the **Qty Received** value.

  8. Click **Save** to save the changes. A confirmation message will appear, displaying the new generated or updated voucher number.

  9. Click **OK** to close the pop-up.

## Two-Way Matching Setup

To enable the Two-Way Match feature, follow these steps:

  1. On Purchase order, turn on the **Two-Way Match** option.

  2. Go to **Setup** > **Validation Codes** > **Invoice Matching Setup Options** > **Invoice Validation**.

  3. Click the **EDIT** button in the right pane.

  4. In the **Invoice Status Code Assigned in Two-Way Match** field, select a proper one.

## Three-Way Matching Voucher Exceptions

This section explains the exceptions processing on change orders and at
receipt time.

### Exceptions Processing On Change Orders

The following scenario explain how the exceptions are handled on change
orders.

Initially, Purchasing sends a purchase order with the initial quantity and unit price. Later, Purchasing verbally agrees to a different unit price with
the supplier. The supplier ships the material at the agreed price and sends an
invoice reflecting the new price. Accounting records the invoice but marks it
as incomplete due to a price discrepancy with the purchase order. How this
exception is handled depends on the setup options, which determine the allowed
tolerance for variances and specify the desired action for exceptions. To
resolve the error, Purchasing issues a Change Order to update the unit price.
The system automatically compares the invoiced price to the new purchase order
price, resolving the invoice error.

Once these errors are resolved, it's important to check for any other errors.
If no errors are found, review the Default Status (set to 20 or 30) configured
in the Settings screen and update the status if necessary.

### Exceptions Processing At Receipt Time

The following example explains how exceptions are handled during the receipt
of items after invoice processing.

Initially, the supplier ships the material as specified in the purchase order and promptly submits an invoice. However, when Accounting records the invoice, it marks it as incomplete if the invoiced quantity exceeds the quantity received. This incomplete status indicates an error condition. To rectify the situation, Stores enters the shipment using the purchase order receipts window, and the system instantly compares the received quantity to the
invoiced quantity, automatically resolving the error status for the invoice.

Once these errors are resolved, it's important to check for any other errors.
If no errors are found, review the Default Status (set to 20 or 30) configured
in the Settings screen and update the status if necessary.

