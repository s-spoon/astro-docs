---

title: "Set up currency formats"
draft: false


---

Before you can work with multiple currencies, you must add a currency format and set up general ledger accounts for each currency.

Before you do this, add a general ledger account for gains and losses. Add it to your expense category with a debit class. If the currency has its own cash receipts account, add that as well. See **Related Information**.

## Set up currency formats

1.  Open the **Country/Currency Formats (CURR)** page.
    1.  Select Utilities \> Company Setup \> System \> Country/Currency Formats.

    Or

    2.  Search for **CURR** or **Country/Currency Formats** in the **Navigation box** and then select **Country/Currency Formats**.

        The **Country/Currency Formats (CURR)** page appears.

2.  On the toolbar, click **New**.

    Or click **Copy** to copy an existing currency format.

3.  In the **Country** box, enter the country name.

**Specify cash account**

If the currency has its own cash receipts account, specify the cash account:

    1.  Click the **Cash Account** Lookup Reference.

    The **Lookup For Cash Account** window appears.

    2.  Select the row that contains the required account, and click **Select**. Or, double-click the row that contains the required account.

    If you have not set up the currency–cash account combination in the **Accounts Payable (CSAP)** page, an error message appears and Made2Manage prompts you for confirmation. Click **Yes** to use the cash account. Click **No** to cancel.

> [!Note] If you do not specify a cash account in the Country/Currency Formats (CURR) page, cash receipts use the cash account specified in the **Accounts Receivable (CSAR)** page.

## Specify Gain/Loss account

If the currency has its own Gain/Loss account, specify the account. If you use multi-currency, you must select a gain/loss account. The gain/loss account is usually an expense account. Made2Manage records gains or losses when you settle transactions.

1.  Click the **Gain/Loss Account** Lookup Reference.

    This account records gains and losses that result from exchanging currency.

    The **Lookup For Gain/Loss Account** window appears.

2.  Select the row that contains the currency's gain/loss account, and click **Select**. Or double-click the row that contains the currency's gain/loss account.

### Set basic currency information in the **Currency Information** tab

1.  In the **Currency** box, enter the currency name. (**For example**, **Belgian Franc**).

2.  In the **Special Currency Symbol Selector** dropdown, select the currency's symbol.

    If the symbol doesn't appear in the **Special Currency Symbol Selector** dropdown, enter the symbol in the **Currency Symbol** field.

3.  In the **Currency Symbol Position** list, select whether or not to show this country's Currency Symbol for currency total types, and if so, whether to display it to the left or to the right of the currency amount.

4.  In the **Decimal Currency** box, enter the name of the decimal currency. **For example**, in the United States it is *cents*.

5.  In the **Decimal Currency Symbol** box, enter the decimal currency symbol.

6.  Set the date format:

    1.  In the **Date Display** dropdown, select the date format.

    2.  Select the **Date Separator** checkbox, and enter the character in the adjacent field. For example, type **/** or **-**. This indicates the date separator character.

    3.  Select the **Century (2021 Vs. 21)** checkbox, to include the century (2004) as opposed to showing only the decade (04).

    In the Default Language For Numeric Descriptions dropdown, select the locale for numeric formatting.

    Based on the locale selected, the character used as the thousands separator and the decimal separator is determined. In the United States, the thousands separator is a comma (,) while in Germany, it is a period (.). By default, **M2M Standard** is selected.

### Save the changes

    1.  On the toolbar, click **Save** to save the currency details.

    2.  Finish setting up a new currency by setting display formats. 