---  

title: "Add a normal invoice from multiple receivers"  
draft: false 
type: Article

---

You can add an *account payable* invoice based on multiple receivers, which is most useful when a *vendor* sends one *invoice* for many shipments.

**To add a normal invoice from multiple receivers**

1.  [Set up the invoice](Set-up-accounts-payable-invoicing-defaults.md).

2.  On the **Toolbar**, select **Copy** > **Normal Invoice** > **Multiple Receivers**. The **APINV Multi Receiver** window appears.

3.  Select the vendor and receiver information.
    1.  Click the **Currency** Lookup Reference.

        The **Lookup For Currency** window appears.

    2.  Select the row that contains the vendor’s currency if it's different from the default currency and click **Select**.

        Or double-click the row that contains the required currency.

    3.  Click the **Vendor** Lookup Reference.

        The **Lookup For Vendor** window appears.

    4.  Select the row that contains the required vendor and click **Select**. Or double-click the row that contains the vendor to use.

    5.  Select the **receiver**.

    6.  ≡ Click **Select All** to include all receivers in the window.

        ≡ Select the check box in the receiver's **Include** column to select a specific receiver.

    7.  Click **OK**.

4.  Specify the vendor invoice number and date to post to the general ledger.

    1.  In the **Invoice Number** field, type the vendor invoice number.

    1.  If required, in the **Post GL Date** field, change the date to post to the *general ledger.*

5.  For EFT vendors, in the **Payment Mode** list, select the payment mode: **EFT** or **Check**.

    For EFT vendors, the default payment mode is **EFT**.

    1.  Specify payment terms.

    » Use the vendor's payment terms

    » Use COD.

    » Use cash.


    1.  Specify the shipping charges.

    2.  Click the **Accounting Summary** tab.

    3.  In the **Shipping Charges** field, type the shipping charges.

    4.  Add tax information.

    5.  Click the **Order Info** tab.

    6.  In the **Tax Point Date** field, type the date.

    7.  If your company uses *geographic-based taxes*, click the **Jurisdiction** Lookup Reference, and from the **Lookup For Jurisdiction** window, select the *jurisdiction.*

        You can also click the **Accounting Summary** tab, and in the **Tax total** field, type the total tax.

6.  On the **Toolbar**, click **Save** to save the changes.
