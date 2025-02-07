---

title: "Set up the general ledger"
draft: false
type: Article

---

Setting up the general ledger mainly involves setting the account number format and choosing a method for posting each subledger to the general ledger.

To set up the general ledger

1. Open the **General Ledger (CSGL)** page.

    a. Select **Utilities** > **Company Setup** > **Module Setup** > **General Ledger**.
<br> Or
   <br> b. Search for **CSGL** in the **Navigation box** and then select **General Ledger**. The **General Ledger (CSGL)** page appears.

2. Select the default country.

    a. Click the **Default Country** lookup reference.

    The **Lookup For Default Country** window appears.

    b. Select the row that contains the desired country, and click **Select**. Or, double-click the row that contains the desired country.

    The **Country** field must be empty for all the available countries to be listed.

    The currency associated with the country automatically displays in the **Default Currency** field.

3. Set the *account*  number format in the **Account Number Format** section.

    a. From the **1st** row, under  **Sequence Order**, select any of the following number type.

    - **AccountNumber**

    - **Company**

    - **Division**

    - **Location**

    - **DeptCenTer**

    - **Facility**

    b. In the **Starting At** field of the **1st** row, type the starting position of the first number.

    c. In the  **Length** field of the **1st** row, enter the exact number of characters in the first number. Increment or decrement the value using upward or downward arrow.

    d. In the  **Separator Character(s)** field of the **1st** row, type one or more characters to be used to separate the first and second numbers that you defined under **Sequence Order**.

    e. Specify the values in the **Sequence Order**, **Starting At**, **Length**, and **Separator Character(s)** fields for each of the remaining number type in your account number.

4. Under the **Default Account and Fiscal Year** section, set the values for the **Retained Earnings GL Account No**, **GL Account No For Errors (Expense)**, **Current Period**, and **Multi-currency** option and **Frgn Currency Tranlation Adjustment Acct**.

    a. Click the **Retained Earnings GL Account No** lookup reference. The 
       **Account Number** field must be empty for all the available Account Numbers to be listed.
    <br> The **Lookup For Retained Earnings GL Account No** window appears.

    b. Select the row that contains the required account number and click 
       **Select**.

    c. Click the **GL Account No For Errors (Expense)** lookup reference.
    <br> The **Lookup For GL Account No For Errors (Expense)** window 
         appears.

    d. Select the row that contains the required account number and click 
       **Select**.The **Account Number** field must be empty for all the available Account Numbers to be listed.

    e. The **Current Period** field displays the current financial period 
       of the company that is used in all finance related transactions. This period is fetched from the **Period Closing (EOP)** page.

    f. Select the **Multi-Currency** check box if your company allows 
    multiple currency transactions.

    g. Click the **Frgn Currency Translation Adjustment Acct** lookup   
       reference to select the account to use for foreign currency adjustments.
    <br> The **Account Number** field must be empty for all the available Account Numbers to be listed.
5. Underneath the **Additional Configurations** section:
   Select the **Check For Out of Balance** checkbox to receive a notification if postings are out of balance after you process journal entries or post transactions.

   Select the **Allow Order Costing Postings to Closed Period** check box to allow users to post order costings and payroll transactions to a closed period. *Clear the checkbox, if you do not want to permit postings to a closed period. By default, the* **Allow Order Costing Postings to Closed Period** *checkbox is selected to allow postings to a closed period.*

   Select the **Show Warning Message For Order Costing Postings to Closed Period** checkbox to display a warning message when the user enters a document date that falls in the closed period.

   By default, the **Show Warning Message For Order Costing Postings to Closed Period** check box is cleared to prevent the display of warning messages when the user enters a date that falls in a closed period.

   If the **Allow Order Costing Postings to Closed Period** checkbox is cleared, then the **Show Warning Message For Order Costing Postings to Closed Period** check box is also cleared and is read-only.

6. Specify how you want to create invoices for the skipped periods.

    a. Select the **Recur Make-Up** check box to create multiple invoices according to the frequency set up for the skipped period considering the **Next Scheduled Date** specified in the **Recurring Events (RECUR)** page.

    b. Clear the **Recur Make-Up** check box to create a single invoice with regular monthly amount considering the **Next Scheduled Date** specified in the **Recurring Events (RECUR)** page.

    The invoices are created in **New, Not Confirmed** status, irrespective of the **Auto Confirm New Invoices** setting in the   
    - **AP Invoicing Defaults** tab of the **Accounts Payable (CSAP)** page.   
    - **Accounts** tab of the **Accounts Receivable (CSAR)** page.

7. Choose if you want to allow the modification of the **Next Scheduled Date** field on the **Recurring Events (RECUR)** page.

    a. Select the **Allow Backdating In Recur** checkbox to allow modification.

    You can modify the **Next Scheduled Date** field only if you have defined the **EDIT** permission for the **RECUR1** item in the **User Permission Wizard (PERMWIZ)** page.

    The following validations are performed for the modification of the **Next Scheduled Date** field:

    - You cannot enter a date in a period for which an invoice has been already created by the RECUR event.
    - The entered date must be greater than the last document date created by the RECUR event.
    - If any invoice in **New, Not Confirmed** status created by the RECUR event is deleted, then the greatest date of invoices created by the RECUR event is set to the **Last Transaction Date** only if the greatest date is lesser than the **Next Scheduled Date**.

    b. Clear the **Allow Backdating In Recur** checkbox to prevent modification irrespective of the user permissions.

8. Select **Use VAT / GST Tax At Product Level** checkbox if you want to attach tax jurisdictions to Item Master parts rather than basing taxes on a customer or vendor and their address. If the checkbox is selected:

    - Document jurisdictions will no longer be allowed and entry of the customer jurisdiction and the customer or vendor address jurisdictions will no longer be available.

    - Customers and vendors marked taxable and used in documents such as(SO, PO, and invoices) will automatically have taxable **Item Master** parts pulled in as taxable.

    - Other customers and vendors or non-taxable parts will automatically be marked as non-taxable although item flags are editable.

    - All jurisdictions will come from the **Item Master** unless dealing with a non-standard part.

    - Item jurisdictions will not be editable through the tax detail.

9. Select how to post each subledger to the general ledger in the **Default Posting** section.

    a. In the **AP** list, select an appropriate option to post. The available options are: Post Nightly, Post Immediately, Post Manually, and Never Post.

    b. In the **AR** list, select an appropriate option to post accounts receivable. The available options are: Post Nightly, Post Manually, Never Post.

    c. In the **OC** list, select an appropriate option to post order costing. The available options are: Post Nightly, Post Immediately, Post Manually, and Never Post.

    d. In the **PR** list, select an appropriate option to post payroll. The available options are: Post Nightly, Post Manually, and Never Post.

10. On the **Toolbar**, click **Save**. The changes are saved.