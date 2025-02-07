---
title: "Add an account"
draft: false
type: Article
---

You can add an account to the general ledger.

If your company uses the multi-facility feature, add accounts for each facility.

**To add an account**

1. Open the **Chart of Accounts Maintenance (GLMAST)** page.

    a. Select **Financial Management** > **Master Data** > **Chart of Accounts Maintenance**.

    Or

    b. Search for **GLMAST** in the **Navigation box** and then select **Chart of Accounts Maintenance**.

    The **Chart of Accounts Maintenance (GLMAST)** page appears.

2. On the child toolbar, click **New**.

    Or
    
    click **Copy** to base this account on the existing data displayed on the page.

3. Enter account information:

    a. In the **Account Number** box, type the new account number.

    b. Clear the **Inactive** check box.

    c. Select the **Cash and Cash Equivalent** checkbox to run the cash flow statement for appropriate general ledger accounts that meet cash or cash equivalent account requirements.

4. Select the **Revaluate At Current Factor** checkbox to make the currency adjustments in the **Period Closing (EOP)** page.

The **Revaluate At Current** **Factor** checkbox is enabled only for the following accounts:

- The **Accounts Payable** account in the **Accounts Payable (CSAP)** page.

- The **Received Goods** account in the **Production (CSPROD)** page.

- The **Customer Credit** account in the **Accounts Receivable (CSAR)** page.

- The **Accounts Receivables** account in the **Accounts Receivable (CSAR)** page.

If you select this check box, you must also set up the required account information to run the cash flow statement. For instructions, see the **Related Information**.

5. In the **Name/Description** box, type the account's name or description.

6. Specify account details.

7. Select the **Consolidate (IntraCompany)** check box to include this account when you consolidate companies.

    To consolidate companies to print a single financial statement, see the **Related Information**.

8. If the account is a sub-account:

    a. Select the **Sub - Account Of** check box.

    b. Click the **Sub - Account Of** Lookup Reference.

    The **Lookup For Parent Account Number** window appears.

    c. Select the row that contains the required account number and click **Select**. Or, double-click the row that contains the required account number to select the parent account.

    Click **Cancel** to exit from the **Lookup For Parent Account Number** window.

9. In the **Notes** box, type any notes regarding the account that you want to store.

    The notes appear on the **GL Chart of Accounts (RPGLCA)** page, if you select **Detail: Parent and Account.** See the **Related Information**.

10. On the **Toolbar**, click **Save**. The changes are saved.

​