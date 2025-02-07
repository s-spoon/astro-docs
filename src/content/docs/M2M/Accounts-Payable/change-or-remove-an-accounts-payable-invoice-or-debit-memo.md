--- 

title: "Change or remove an accounts payable invoice or debit memo"  
draft: false 
type: Article

---

You can change an accounts payable invoice or debit memo if its status is new, not confirmed, or unpaid. You can remove an accounts payable invoice or debit memo when its status is new, not confirmed.

**To change an accounts payable invoice or debit memo**

1.  Select the invoice or debit memo to change.

2.  Click the tab that contains the information you want to change: For example, **Accounting Summary** tab.

    1.  Make the required changes.

    When the invoice status is **Partially Paid** or **Paid in Full**, you cannot change the value of the **Payment Mode** field.

    When the invoice status is **Unpaid**, you cannot change the payment mode if amount is applied for payment in the **(APCASH) – ‘Approve Invoice for Payment page’** page.

3.  If the payment mode of the invoice is **EFT**:

    1.  On the **Toolbar** click **More Actions**

    1.  Select **More Actions** > **Actions** > **EFT Payment Details**. **EFT Payment Details** window appears to view the following details:

        ≡ EFT File Created Date

        ≡ EFT Batch ID

        ≡ CSAP Bank Account Name

        ≡ CSAP Bank Account ID

        ≡ EFT Batch Currency

        ≡ EFT Settlement Date

        ≡ EFT Amount Paid

        ≡ Batch Line Status

        ≡ Void Date

        ≡ Vendor Bank Account Name

        ≡ Vendor Bank Account ID

If the payment mode of the invoice is **EFT** and if the EFT **Batch ID** of the invoice is in any status other than **Exported** or **Voided**, you cannot change the value of the **Payment Urgency** field.

**Partially Paid**, changing the **Payment Urgency** to:

» **1- Pay Immediately** results in the net due invoice amount to be auto applied in the **(APCASH) - Approve Invoice for Payment page** window EFT fields.

» **9- Don't Process** results in the net due invoice amount to be auto unapplied in the **Approve Invoice for Pay- ment(APCASH)** window EFT fields.

1.  On the **Toolbar**, click **Save** to save the changes.

## To remove an accounts payable invoice or debit memo

1.  Select the invoice or debit memo to remove.

2.  Click **Delete** on the **Toolbar**.

3.  A message, ‘*Preparing to delete this information. Are you sure?’* appears.
4.  Click **OK** to confirm.

**To select the invoice or debit memo**

1.  Open the **Vendor Invoice & Debit Memo (APINV)** page.

    - Select **Financial Management** > **Financial Transactions** > **Accounts Payable** > **Vendor Invoice & Debit Memo**.

    Or

    - Search for **APINV** in the **Navigation box** and then select **Vendor Invoice & Debit Memo.**

    The **Vendor Invoice & Debit Memo (APINV)** page appears.

2.  On the **Toolbar**, click **Browse**.

The **Browse For Vendor Invoice & Debit Memo** window appears.

1.  Highlight a row and click **Select**. Or double-click the invoice or debit memo.
