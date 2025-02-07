---
title: "Add a sales tax authority code"
draft: false
type: Article
---

You create sales tax codes to use when you collect sales taxes from your customers or prospects and when your vendors pay taxes on items they purchase from you.

To add a sales tax code

1.  Open the **Sales Tax (SLTAX)** page.
1.  *Select* **Utilities** > **Company Setup** > **Finance** > **Sales Tax**.

    Or

    *Search for* **SLTAX** *or* **Sales Tax** *in the* **Navigation box** *and then select* **Sales Tax**.

    **Sales Tax (SLTAX)** *page appears.*

2.  On the **Toolbar**, click **New** to add a new tax code.

    Click **Copy** to base the new tax code on the existing data displayed in the screen.

3.  Enter the tax code information:
1.  In the **Tax Code** field, type a code for the sales tax.
    1.  In the **Description** field, type a description for the code.
    2.  From the **Type** list, select the type of tax you are entering: **State**, **County**, **Federal**, **Country**, **Local**, or **VAT (Value Added Tax)**.
2.  Set the tax rate and chart of accounts information:
1.  In the **Tax Rate (%)** field, type the tax rate percentage.
    1.  From the **Calculation Type** list, select the method used to cal- culate the tax from the list.

        Select **Additive** to simply tax the cost of the item.
<br>Or
        <br>Select **Cumulative** to calculate tax on the item cost plus any taxes on that item up to this point.

    2.  Click the **AR Tax Account** lookup reference button. Highlight the Accounts Receivable sales tax account and click **Select**.
    3.  Click the **AP Tax Account** lookup reference button. Highlight the Accounts Payable sales tax account and click **Select**.
2.  In the **Effective Dates** field, enter the date the tax rate becomes effective.

    » Enter the effective date if you are entering a new rate for an existing sales tax code (the **Tax Code** and **Description** on both records is exactly the same). Made2Manage calculates the effective 'To' date,
and it cannot be modified. If you are entering a new tax, you need not need type the effective date.

    » When you save the new record, the system calculates an effective 'To' date for the original record. This date will be the day prior to the start date of the new tax rate. The system determines the tax rate to use on an **AP/AR** invoice by matching the invoice tax point date to the effective sales tax date range.

1.  On the **Toolbar**, click **Save** to save the sales tax code.