---
title: "Record Advanced Planning and Demand Planning information for a part"
draft: false

---

You need to record an item's actual landed costs and reconcile (distribute) the estimated landed costs with the actual landed costs. When you distribute a cost, you update the landed costs clearing account.

## To record and distribute actual landed costs for an invoice

1.  Create a miscellaneous invoice with the landed costs.

2.  Open the invoice:

    1.  Open the **Vendor Invoice & Debit Memo (APINV)** page.

        - Select **Financial Management** > **Financial Transactions** > **Accounts Payable** > **Vendor Invoice and Debit Memo**.

            Or

        -  *Search for* **APINV** *in the* **Navigation box** *and then select* **Vendor Invoice and Debit Memo**. <br>*The* **Vendor Invoice & Debit Memo (APINV)** *page appears.*

    1.  On the **Toolbar**, click **Browse**.
    2.  Highlight the invoice and click **Select**. Or, double-click the invoice to use.
3.  Find the item:
    1.  Click the **Line Items** tab.
    2.  Highlight the item for which you want to record and distribute costs.
    3.  On the **Toolbar**, click **More Actions**.
    4.  Select **More Actions** > **Actions** > **Dist Land Cost**. **Dist Land Cost** page.appears.
4.  Find the receiver that contain the items:
    1.  On the grid toolbar, click **Copy** > **Receivers**. **Copying Receivers** window appears.
    2.  Click the **Receiver** lookup reference and double-click the receiver to use.
    3.  Click the **Item** lookup reference and double-click the item to use.
    4.  Click **Save**.
    5.  Repeat Steps 4.1 - 4.4 for all the receivers you want to include.
5.  Record the actual landed costs for the item:
    1.  Type the miscellaneous invoice's actual landed cost in the **Amount to Reconcile** field.
    2.  On the **Toolbar**, click **Save**.
6.  Distribute the difference between the estimated costs and the actual landed costs to the landed costs clearing account.
    1.  Click **Distribute Cost**. <br>The **Distribute Cost** window appears.

    2.  Select how to distribute costs in the **Distribute Cost By** area:
    3.  To distribute costs by quantity received, click **Quantity**.

        ≡ To distribute costs by receiver value, click **Receipt Value**.

        ≡ Click the **Receiver No** lookup reference button and double- click the receiver to use.

    4.  In the **Distribute** field, type the amount to distribute.
    5.  On the header, click **Save**.
    
    To post the difference between estimated and actual costs, see ["Reconcile a receiver with landed costs"](record-advanced-planning-and-demand-planning-information-for-a-part.md#to-record-and-distribute-actual-landed-costs-for-an-invoice) in the Related Information.
