---

title: "Set up GL accounts for accounts receivable"
draft: false


---

You need to specify default general ledger accounts for cash, receivables, adjustments, freight charges, interest income, discounts, miscellaneous revenue, customer credit, and unearned revenue. You also need to specify the aging periods that appear on Made2Manage's statements for accounts receivable, and optionally set the path where you will export sales commissions data.

**To set up general ledger accounts for accounts receivable**

1.  Open the **Accounts Receivable (CSAR)** page.

    1.  Select Utilities \> Company Setup \> Module Setup \> Accounts Receivable.

        Or

    2.  Search for **CSAR** or **Accounts Receivable** in the **Navigation box** and then select **Accounts Receivable**.

        The **Accounts Receivable (CSAR)** page appears.

2.  In the **Accounts** tab, make the required changes:

    1.  To select the general ledger accounts to use for each category:
        1.  Click the Lookup Reference at the end of the account fields. The respective **Lookup For** window appears.

        2.  Select the row that contains the required account, and click **Select**. Or, double-click the row that contains the required account.

    2.  Select the **Verify Postings** checkbox, to verify that there are postings in the distribution table when you change the status of an invoice.

[!Note] 
If the postings have not occurred, a message is displayed.


    3.  Select the **Update Currency Factors Upon Invoicing SOs or SO Shippers** checkbox, if your company has multi-currency enabled and if you want to use the most current conversion factor when invoicing from a sales order (SO) or an SO shipper.

    4.  To specify the aging periods to show on accounts receivable statements, in the **Aging Periods (in Days)** section, enter in each box the number of days in the first, second, and third overdue periods for a statement.

    5.  Select the **Use Unearned Revenue For Progress Billing** checkbox, to use unearned revenue for progress billing.

[!Note]

You cannot change the setting of the Use Unearned Revenue For Progress Billing checkbox if there are existing, non-voided and non-credited, progress billing invoices.

    6.  Select the **Tax Freight** checkbox, to add tax and freight charges to the invoices.

    7.  Select the **Discount Tax** checkbox, if your company uses product-based taxes and if you want to tax the total amount before applying discounts to invoices.

    8.  Select the **Auto Confirm New Invoices** checkbox, to automatically confirm all new invoices and place them directly in unpaid status.

    9.  Select the **Discount Shipping/Freight** checkbox, to include the shipping and freight charges while computing discount.

    10.  Select the **Display Message For Multiple Shippers** checkbox, to display a warning message while creating an invoice from multiple shippers.

    5.  Select the **Default Invoice/Post Date to Shipper Date** checkbox, to set the invoice date to the shipper date instead of the system date when creating an invoice from a shipper provided the **Account- ing Years (AYRS)** period of the shipper is open.

[!Note] 

    When you select the Default Invoice/Post Date to Shipper Date checkbox, if the invoice is created from multiple shippers, the invoice date is set to the maximum shipper date provided the Accounting Years (AYRS) period is open.

3.  In the **VAT Start Date** box, enter the beginning date for your value-added tax period, if your company uses product-based taxes.

[!Note] 

This field is only visible if you have selected the Use VAT / GST Tax At Product Level check box in the General Ledger (CSGL) page.

[!Tip] 

Update the value-added tax period start date in the Accounts Receivable (CSAR) page each time a new period begins.

4.  On the toolbar, click **Save** to save the settings.