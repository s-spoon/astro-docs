---
title: "Add a bank account for each foreign currency"
draft: false
type: Article
---

If you work with multiple currencies, you should create a separate bank account for each currency. Any bank account without a currency assignment uses the functional currency set up in the **General Ledger (CSGL)** page. See **Related Topics**.

Once you add an account, you cannot change its currency or remove the account.

**To add a bank account for each foreign currency**

1. Open the **Accounts Payable (CSAP)** page.

    a. Select **Utilities** > **Company Setup** > **Module Setup** > **Accounts Payable**.

    Or

    b. Search for **CSAP** or **Accounts Payable** in the **Navigation box** and then select **Accounts Payable.**

    The **Accounts Payable (CSAP)** page appears.

2. Click the **Bank Names** tab.

3. On the child toolbar, click **New**.

    The **Bank Detail** page appears.

4. In the **Bank Name** field, enter the name of the account.

Add Currency and GL Account Details

1. Select the currency to use:

    a. Click the **Currency** Lookup Reference.

    The **Lookup For Currency** window appears.

    b. Select the row that contains the required currency, and click **Select**.

    Or, double-click the row that contains the required currency.

2. Specify the GL account to use:

    a. Click the **GL Account No** Lookup Reference.

    The **Lookup For GL Account No** window appears.

    b. Select the row that contains the required GL account, and click **Select**.

    Or, double-click the row that contains the required GL account.

3. Set as Default or Inactive or EFT Enabled:

    a. Select the **Default** check box to make this account the default account if you have multiple accounts.

    b. Select the **Inactive** check box if you want to inactivate this account. You cannot delete an account once it's created and there are transactions.

    c. Select the **EFT Enabled** check box if you require Electronic Fund Transfer. See Set up Bank/EFT Account Information.

4. Enter the check details:

    a. Select the **Check Enabled** checkbox to enter the check details in the **Check Details** section. This section appears only when you select the **Check Enabled** checkbox.

    b. In the **Next Check Number** field, enter or select the required value.

    c. Select the check layout to use:

    i. Click the **Check Layout Filename** Lookup Reference.

    The **Lookup For Check Layout Filename** window appears.

    ii. Select the row that contains the required check layout, and click **Select**.

    Or, double-click the row that contains the required check layout.

    d. In the **Number of Detail Lines** field, enter or select the required value that specifies the number of lines to fit on a page before printing on the next page.

    e. In the **Number of Detail Stubs** field, enter or select the required value that specifies the number of check stubs to print.

5. On the **Toolbar**, click **Save** to save your changes.

    If the selected GL account is already used for another currency, a warning message is displayed and Made2Manage prompts you for confirmation. 
    Click **Yes** to save changes. 

    Or

    Click **Cancel** to discard the changes.

​