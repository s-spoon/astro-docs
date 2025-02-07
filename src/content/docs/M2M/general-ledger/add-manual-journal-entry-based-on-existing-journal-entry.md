---
title: "Add a manual journal entry based on an existing journal entry"
draft: false
type: Article
---

Made2Manage records most transactions in the four subledgers. But certain transactions, such as filling the petty cash box, making corrections, and making adjustments at period-end, require manual journal entry. Manual journal entries post directly to the general ledger. You can add a manual journal entry based on an existing journal entry.

To distribute a posting from one account to others by pre-assigned percentages: First, set up an automatic journal entry distribution. Then, to apply the distribution, make a manual journal entry.

**To add a manual journal entry based on an existing journal entry**

1. Open the **Journal Entry (GLJE)** page.

    a. Select **Financial Management** > **Financial Transactions** > **General Ledger** > **Journal Entry**.

    Or

    b. Search for **GLJE** or **Journal Entry** in the **Navigation box** and then select **Journal Entry**.

    The **Journal Entry (GLJE)**  page appears.

2. Select the journal entry you want to copy:

    - Browse and select the required journal entry:

        i. On the **Toolbar**, click **Browse**.

        The **Browse For Journal Entry** page appears.

        ii. Select a row that contains the required journal entry, and click **Select**.

        Or, double-click the row that contains the required journal entry.

    - Base the journal entry on information on the page

        i. On the **Toolbar**, click **Copy**.

        The **Copying Journal Entry** window appears.

        ii. Select the journal entry information you want to copy:

        - Click the **Same Account Numbers-–Same Amounts** to copy this journal entry's account numbers and amounts.

        - Click the **Same Account Numbers–Zero Amounts** to copy this journal entry's account numbers and enter your own amounts.

        - Click the **Reversing Journal Entry** to create a reversed journal entry based on the one in the **Journal Entry** page.

        - To copy a recurring journal entry:

        Click the **Recurring Journal Entry**.

        In the **Recurring Journal Entry** section, click the lookup reference at the end of the **Starting Period** field.

        The **Lookup For Period From** window appears.

        Select a row that contains the required starting period, and click **Select**.

        Or, double click a row that contains the required starting period.

        Click the lookup reference at the end of the **Ending Period** field.

        The **Lookup For Period To** window appears.

        Select a row that contains the required starting period, and click **Select**.

        Or
        
        Double-click a row that contains the required starting period.

        In **Every** field, select how often you want the entry to occur.

3. Identify the journal entry:

    a. Type the journal entry number in the **Journal Entry \#** field, if you use manual sequencing.

    b. In the **Transaction Date** field, type the transaction date.

    Or click the calendar icon at the end of the **Transaction Date** field to display the Calendar. Select the required date.

    c. Select the **Auto Reverse** checkbox, to automatically reverse this journal entry's transactions in the next period.

4. Enter a transaction:

    a. Click the **GLAccount** lookup reference.

    The **Lookup For GL Account** window appears.

    b. Select a row that contains the required account, and click **Select**.

    Or
    
    Double-click the row that contains the required account.

    c. In the **Transaction Description** field, enter a brief description of the transaction.

    d. In the **Debit or Credit** fields, as appropriate, enter the debit or credit.

    Or
    
    Click the calculator icon at the end of the **Debit or Credit** fields to display the Calculator. Enter the required value.

    e. On the **Toolbar**, click **Save**.

    Note: Total debits and credits must be equal.

5. For each remaining transaction you must enter:

    a. On the **Toolbar**, click **New**.

    Or
    
    On the **Toolbar**, click **Copy** to base this transaction on the one shown at the bottom of the **Journal Entry** page.

    b. Repeat **step 4**.

6. To change or remove a transaction:

    - To change a transaction:

        i. Click the transaction in the list of transactions.

        ii. Make your changes.

        iii. On the **Toolbar**, click **Save**.

    - To remove a transaction:

        i. Click the transaction in the list of transactions.

        ii. On the **Toolbar**, click **Delete**.

        A message, *Preparing to delete this information. Are you sure?* appears.

        iii. Click **Yes**. The transaction is deleted.

        Or

        Click **No** to retain the value.

7. Post the journal entry:

    a. On the **Toolbar**, click **Status**.

    The **Post Journal Entries** window appears.

    - To post only the current journal entry:

        i. Click the **Current Journal Entry Only**.

        ii. Click **OK**.

    - Or to post multiple journal entries:

        i. Click the **Select From a List of Started Journal Entries**.

        ii. Click the lookup reference at the end of the **Year** field.

        The **Lookup For Accounting Year** window appears.

        iii. Select a row that contains the required accounting period, and click **Select**.

        Or
        
        Double click the row that contains the required accounting period.

        The **Period** and **End** fields are populated with the selected values.

        iv. You can manually select the checkbox in the **Post[?]** column. Select the checkbox next to the journal entries you want to post.

        Or
        
        To select all started journal entries, click **Select All**.

        Or
        
        To clear the selected check box(es), click the **Unselect All**.

        v. Click **OK**.

​