---

title: "Add bank account for each foreign currency"
draft: false


---

If you work with multiple currencies, you should create a separate bank account for each currency. Any bank account without a currency assignment uses the functional currency set up on the **General Ledger (CSGL)** page. 

Once you add an account, you cannot change its currency or remove the account.

**To add bank account for each foreign currency**

1.  Open the **Accounts Payable (CSAP)** page.

    1. Select **Utilities** \> **Company Setup** \> **Module Setup** \> **Accounts Payable**.

    Or

    2.  Search for **CSAP** or **Accounts Payable** in the **Navigation box** and then select **Accounts Payable**.

    The **Accounts Payable (CSAP)** page appears.

2.  Click the **Bank Names** tab.

3.  On the child toolbar, click **New**. The **Bank Detail** page appears.

4.  In the **Bank Name** box, enter the name of the account.

## Add Currency and GL Account Details

1.  Select the currency to use:

    1.  Click the **Currency** Lookup Reference.

    The **Lookup For Currency** window appears.

    2.  Select the row that contains the required currency and click **Select**. Or double-click the row that contains the required currency.

2.  Specify the GL account to use:

    1.  Click the **GL Account No** Lookup Reference.

    The **Lookup For GL Account No** window appears.

    2.  Select the row that contains the required GL account, and click **Select**.

    Or double-click the row that contains the required GL account.

3.  Set as Default or Inactive and Enable EFT:

    1.  Select the **Default** checkbox to make this account the default account if you have multiple accounts.

    2.  Select the **Inactive** checkbox if you want to inactivate this account. You cannot delete an account once it's created and there are transactions.

    3.  Select the **EFT Enabled** checkbox if you require Electronic Fund Transfer. See [Set up Bank/EFT Account Information](set-up-bank-eft-account-information.md).

4.  Enter the check details:

    1.  Select the **Check Enabled** checkbox to enter the check details in the **Check Details** section. This section appears only when you select the **Check Enabled** checkbox.

    2.  In the **Next Check Number** box, enter the required value.

    3.  Select the check layout to use:

        1.  Click the **Check Layout Filename** Lookup Reference. The **Lookup For Check Layout Filename** window appears.

        2.  Select the row that contains the required check layout, and click **Select**.

        Or double-click the row that contains the required check layout.

        4.  In the **Number of Detail Lines** box, enter the required value that specifies the number of lines to fit on a page before printing on the next page.

        5.  In the **Number of Detail Stubs** box, enter the required value that specifies the number of check stubs to print.

5.  On the toolbar, click **Save**. The bank account is added.

    If the selected GL account is already used for another currency, a warning message is displayed and Made2Manage prompts you for confirmation. Click **Yes** to continue saving. Else, click **No**. Click **Cancel** to discard the changes made.
    