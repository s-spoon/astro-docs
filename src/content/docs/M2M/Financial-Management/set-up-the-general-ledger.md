---

title: "Set up general ledger"
draft: false


---

Setting up the general ledger mainly involves setting the account number format and choosing a method for posting each subledger to the general ledger.

**To set up general ledger**

1.  Open the **General Ledger (CSGL)** page.

    1.  *Select* **Utilities** *\>* **Company Setup** *\>* **Module Setup** *\>* **General Ledger***.*

    *Or*

    2.  *Search for* **CSGL** *in the* **Navigation box** *and then select* **General Ledger General Ledger (CSGL)** *page appears.*

2.  Select the default country*.*

    1.  *Click the* **Default Country** *lookup reference.*

    *The* **Lookup For Default Country** *window appears.*

    2.  *Select the row that contains the required country, and click* **Select***. Or double-click the row that contains the required country.*

        *The* **Country** *field must be empty for all the available countries to be listed.*

        *The currency associated with the country automatically displays in the* **Default Currency** *field.*

3.  Set the *account* number format in the **Account Number Format** section.
    1.  From the **1st** *row, under* **Sequence Order**, select the first number type to appear in the account number.

    You can select from the following number types
    
    - AccountNumber
    
    - Company
    
    - Division
    
    - Location
    
    - DeptCenTer
    
    - Facility

    2.  In the **Starting At** field of the **1st** row, enter the starting position of the first number.

    3.  In the **Length** field of the **1st** row, enter the number of characters in the first number.

    4.  In the **Separator Character(s)** box of the **1st** row, enter one or more characters to be used to separate the first and second numbers that you defined under **Sequence Order**.

    5.  Specify the values in the **Sequence Order**, **Starting At**, **Length**, and **Separator Character(s)** fields for each of the remaining number type in your account number.

4.  Set the account numbers for the **Retained Earnings GL Account No**, **GL Account No For Errors (Expense)**, **Current Period**, and currency options under the **Default Account and Fiscal Year** section.

    1.  Click the **Retained Earnings GL Account No** lookup reference. The **Account Number** field must be empty for all the available Account Numbers to be listed.

        The **Lookup For Retained Earnings GL Account No** window appears.

    2.  Select the row that contains the required account number, and click **Select**.

    3.  Click the **GL Account No For Errors (Expense)** lookup reference.

        The **Lookup For GL Account No For Errors (Expense)** window appears.

    4.  Select the row that contains the required account number, and click **Select**. The **Account Number** field must be empty for all the available Account Numbers to be listed.

    5.  The **Current Period** box displays the current financial period of the company that is used in all finance related transactions. This period is fetched from the **Period Closing (EOP)** page.

    6.  Select the **Multi-Currency** checkbox if your company allows multiple currency transactions.

    7.  Click the **Frgn Currency Translation Adjustment Acct** lookup reference to select the account to use for foreign currency adjustments.

        The **Account Number** field must be empty for all the available Account Numbers to be listed.

5.  Select the **Check For Out of Balance** checkbox to receive a notification if postings are out of balance after you process journal entries or post transactions.

6.  Select the **Allow Order Costing Postings to Closed Period** checkbox to allow users to post order costings and payroll transactions to a closed period. Leave the check box cleared if you do not want to permit postings to a closed period. By default, the **Allow Order Costing Postings to Closed Period** checkbox is selected to allow postings to a closed period.

3.  Select the **Show Warning Message For Order Costing Postings to Closed Period** checkbox to display a warning message when the user enters a document date that falls in the closed period.

    » By default, the **Show Warning Message For Order Costing Postings to Closed Period** checkbox is cleared to prevent the display of warning messages when the user enters a date that falls in a closed period.

    » If the **Allow Order Costing Postings to Closed Period** check box is cleared, then the **Show Warning Message For Order Costing Postings to Closed Period** check box is also cleared and is read-only.

8.  Specify how you want to create invoices for the skipped periods.

        1.  Select the* **Recur Make-Up** checkbox to create multiple invoices according to the frequency set up for the skipped period considering the **Next Scheduled Date** specified in the **Recurring Events (RECUR)** page.

        2.  Clear the **Recur Make-Up** checkbox to create a single invoice with regular monthly amount considering the **Next Scheduled Date** specified in the **Recurring Events (RECUR)** page.

        The invoices are created in **New, Not Confirmed** *status, irrespective of the

        **Auto Confirm New Invoices** *setting in the

        -   **AP Invoicing Defaults** *tab of the* **Accounts Payable (CSAP)** page.

        -   **Accounts** tab of the **Accounts Receivable (CSAR)** page.

9.  Choose if you want to allow the modification of the **Next Scheduled Date** field in the **Recurring Events (RECUR)** page.

        a.  Select the **Allow Backdating In Recur** checkbox to allow modification. 

        [!Note]: You can modify the **Next Scheduled Date** field only if you have defined the
        **EDIT** permission for the **RECUR1** item in the **User Permission Wizard (PERMWIZ)** page.

        - The following validations are performed for the modification of the **Next Scheduled Date** field:

        - You cannot enter a date in a period for which an invoice has been already created by the RECUR event.

        - The entered date must be greater than the last document date created by the RECUR event.*

        - If any invoice in* **New, Not Confirmed** status created by the RECUR event is deleted, then the greatest date of invoices created by the RECUR event is set to the **Last Transaction Date** only if the greatest date is lesser than the **Next Scheduled Date**.

        2.  Clear the **Allow Backdating In Recur** checkbox to prevent modification irre- spective of the user permissions.

10.  Select **Use VAT / GST Tax At Product Level** checkbox if you want to attach tax jurisdictions to Item Master parts rather than basing taxes on a customer or vendor and their address. If the checkbox is selected:

    - Document jurisdictions will no longer be allowed and entry of the customer jur- isdiction and the customer or vendor address jurisdictions will no longer be avail- able.

    - Customers and vendors marked taxable and used in documents (SO, PO, invoices, etc.) will automatically have taxable* **Item Master** *parts pulled in as taxable.

    - Other customers and vendors or non-taxable parts will automatically be marked as non-taxable although item flags will be editable.

    - All jurisdictions will come from the **Item Master** unless dealing with a non-stand- ard part.

    - Item jurisdictions will not be editable through the tax detail.

11.  Select how to post each subledger to the general ledger in the **Default Posting** section.

    - In the **AP** list, under the **Default Posting** section, select an appropriate option to post accounts payable nightly, immediately, manually, or not at all.

    -  In the **AR** list, under the **Default Posting** section, select an appropriate option to post accounts receivable nightly, immediately, manually, or not at all.

    - In the **OC** list under the **Default Posting** section, select an appropriate option to post order costing nightly, manually, or not at all.

    - In the **PR** list, under the **Default Posting** section, select an appropriate option to post payroll nightly, manually, or not at all.

12.  On the toolbar, click **Save** to save the changes.