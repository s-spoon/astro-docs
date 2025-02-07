---

title: "Set up Made2Manage to use currency translation method"
draft: false


---

Made2Manage comes set up for the current vs. non-current foreign currency translation method. For this method, all general ledger accounts that are current assets or current liabilities revaluate at the current exchange rate at end-of-period. Revaluating means adjusting for anticipated but unrealized gains and losses to create more accurate financial reports.

You can set up Made2Manage to use the monetary vs. non-monetary translation method. If you use the monetary vs. non-monetary method, you must prevent non-monetary accounts from revaluating at end-of-period.

**To prevent account from revaluating**

1.  Open the **Chart of Accounts Maintenance (GLMAST)** page.

    1.  Select **Financial Management** \> **Master Data** \> **Chart of Accounts Maintenance**.

    Or

    2.  Search for **GLMAST** in the **Navigation box** and then select **Chart of Accounts Maintenance**.

       The **Chart of Accounts Maintenance (GLMAST)** page appears.

2.  On the toolbar, click **Browse**.

    The **Browse For Chart of Accounts Maintenance** window appears.

3.  Select the row that contains the required account, and click **Select**. Or, double-click the row that contains the required account.

    Click **Cancel** to exit from the **Browse For Chart of Accounts Maintenance** window.

4.  Make the necessary changes.

5.  Clear the **Revaluate At Current Factor** checkbox.

    The **Revaluate At Current Factor** check box is only visible if the account is marked as a current asset or current liability. 

6.  On the toolbar, click **Save**.