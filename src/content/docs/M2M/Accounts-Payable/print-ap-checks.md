---  

title: "Print AP checks"  
draft: false 
type: Article

---


After you apply amounts to an invoice, you can print checks to send it to vendors. When you print these checks, the payments post to the general ledger. You can also test print and reprint checks (a reprint voids the posting).

**To generate AP Checks Report**

1.  Open the **Print AP checks (APPCHK)** page.

    - Select **Financial Management** > **Financial Transactions** > **Accounts Payable** > **Print AP checks**.

    Or

    - Search for **APPCHK** in the **Navigation box** and then select **Print AP checks**. The **Print AP checks (APPCHK)** page appears.

2.  The **Bank Name** field displays the bank account set as the default bank account in the **Bank Names** tab of the **Accounts Payable (CSAP)** page. If no default bank account exists, the **Bank Name** field displays the first bank account created.

3.  To change the bank account:

    1.  Click the **Bank Name** lookup reference.

        The **Lookup For Bank Name** window appears.

        Select the bank account from which you want to pay the checks and click **Select**.

4.  If you use multiple currency feature, in the **Currency** field, select the currency to use.

5.  In the **Highest Urgency** and **Lowest Urgency** fields, enter the range to display only the payment urgencies within the range.

6.  In the **Starting Check Number** field, set the first check number to print.

    You cannot change the check number to a number that was used previously. To view previously used check numbers, print the check register.

7.  If the date on the checks is not the current date, in the **Check Date** field, enter the check date.

8.  In the **Check Sequence** area, select **Vendor Name** or **Vendor Number** to specify the order in which to print the checks.

9.  On the **Toolbar**, click **Save** to save, else click **Cancel**.

**To select AP Checks to Print**

1.  To print one check, select the check box in **Select** column. Or

    To print all the checks, select the **Select** check box. Or

    To print all but a few of the checks, highlight the ones you do not want to print, and clear the check box(es) manually.

    Or

    To clear all the check boxes, clear the **Select** check box.

2.  On the **Toolbar**, click **Refresh List** to refresh the checks displayed in the grid.

3.  Select the AP checks required to print.

4.  On the **Toolbar**, click **More Actions**.

5.  Select **More Actions** > **Actions** > **Print Checks**. The **Print Checks** window appears.

6.  To pause the printer after each check, select the **Pause After Each Check** check box.

7.  To use a printer other than the default printer, on the grid toolbar, click **Change Printer**.

    The **Printer Settings** window is displayed.

8.  Select the printer and click **Save**.

9.  To print a test check, on the **Toolbar**, click **Test Print**, else click **Print**.

10. Use the **Check Verification** tab to reprint any checks that did not print correctly the first time.

    When you reprint a check, Made2Manage voids the check shown in this window and creates a new check.

11. To re-print, highlight the check number you want to reprint and click **Re-Print**.

12. On the **Toolbar**, click **Save** to void and reprint the check, else click **Cancel**.

13. To void a check without reprinting it, highlight the check number you want to void.

14. Click **Void Check**.

15. On the **Toolbar**, click **Save**.

    A message is displayed stating that this action will void the checks.

16. To undo void check without reprinting, click **Cancel**.