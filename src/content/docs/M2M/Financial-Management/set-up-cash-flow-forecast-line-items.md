---

title: "Set up cash flow forecast line items"
draft: false


---

A cash flow forecast projects your cash flow based on rules and variables you specify. You can set up line items for the cash flow forecast.

Before you do this, you must define the cash flow forecast and set cash flow forecast rules. 

**To set up cash flow forecast line item**

1.  Open the **Cash Flow Projections (CFP1)** page.

    1.  Select Financial Management \> Master Data \> Cash Flow Projections.

    Or

    2.  Search for **CFP1** or **Cash Flow Projections** in the **Navigation box** and then select **Cash Flow Projections**.

        The **Cash Flow Projections (CFP1)** page appears.

2.  Click the **Calculations/SetUp** tab.

3.  To add a line item:

    1.  On the child toolbar, click **New**.

    2.  In the **Line Item Description** box, enter the line item description.

    3.  In the **Cash Type** dropdown, select the cash type.

    4.  In the **Forecast Using** section, select to base the calculation on a **Recurring Amount** you select, or **Annualize GL Amounts**.

4.  If you're using a recurring amount, specify the details:

    1.  In the **Recurring Amount** box, enter the amount.

    Or click the Calculator icon to display the calculator. Enter the required value.

    2.  In the **Frequency** dropdown, select a frequency for adding the amount.

    3.  In the **Begin After Start Date** box, enter the number of days after the start of the forecast to begin adding the amount.

    4.  To incrementally change the amount:

        ≡ In the **Change Project Amount** box, enter a percentage value to increase or decrease the amount by a percentage.

        Or click the Calculator icon to display the calculator. Enter the required value.

    Made2Manage compounds the increase or decrease.

    ≡ If you indicated a change percentage, select the **Frequency** for applying it.

    ≡ In the **Step Forecast By** box, enter a value to increase or decrease the recurring amount by a fixed value.

Or click the Calculator icon to display the calculator. Enter the required value.

Made2Manage compounds the increase or decrease.

    ≡ If you indicated a fixed change amount, select the **Frequency** for applying it.

    ≡ In the **End Projection On** box, enter the date to stop the line item's calculations.

Or click the Calendar icon to display the calendar. Select the required date.

Or double-click in the box to enter the current date.

5.  To change a line item:

    1.  Select a row.

    1.  In the **Line Item Description** box, make the required changes.

    2.  If you do not forecast the line item using a recurring amount or if the line item is the beginning cash balance, you can add or remove accounts used in the calculation:

        1.  On the **Toolbar**, click **More Actions**.

        2.  Select **More Actions** \> **Actions** \> **GL Accounts**. The **GL Accounts (CFP5)** window appears.

            You can either manually select the account of your choice or select the **Select** checkbox in the child toolbar to select all the accounts.

        3.  Select the checkbox in the **Select** column.

            Or select the **Select** checkbox on the child toolbar to select all the account numbers.

            Click the **Select** checkbox on the child toolbar to clear all the selected checkboxes.

        4.  On the header, click **Save** to keep the changes.

Click **Cancel** to exit from the **GL Accounts (CFP5)** window.

6.  To remove a line item:

    1.  On the toolbar, click **More Actions**.

    1.  Select **More Actions** \> **Actions** \> **GL Accounts**. The **GL Accounts (CFP5)** window appears.

    2.  Select a row.

    3.  On the header, click **Delete**.

        A message, *Preparing to delete this information. Are you sure?* appears.

    4.  Click **OK** to remove the line item. Click **Cancel** to retain the line item.

        The next step is to run the forecast. 