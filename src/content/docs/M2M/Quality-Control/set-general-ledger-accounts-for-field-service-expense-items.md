---
title: "Set general ledger accounts for field-service expense items"
draft: false
type: Article 
---

You can set or change general ledger accounts for field service.

Before you set general ledger accounts, you must set up field service to post service-order expenses and labor to the general ledger. Make sure you place a checkmark in the Post Expenses box. You only select this box if you want to create general journal entries for these expenses during the change status to the closed status of an event.

You can still assign general ledger accounts and then use these accounts to sum activity costs by accounts on a report and not have them be booked to your general ledger. The general ledger is still booked in the normal fashion for all shipments and invoices based upon the sales order line item product classes. This section deals only with these expenses detailed on the technicians expense Excel worksheet.

## To set general ledger accounts for field-service expense items

1.  Open the **Field Service Setup Information (CSFSM)** page.

    - Select **Customer Relationship Management** > **Master Data** > **Field Service** > **Field Service Setup Information**.

        Or

    -  Search for **CSFSM** or **Field Service Setup Information** in the **Navigation box** and then select **Field Service Setup Information**. <br> The **Field Service Setup Information (CSFSM)** page appears.

2.  Make the necessary changes.
3.  For the **GL** **Expenses 1**, **GL Expenses 2**, and **GL Expenses 3** tabs:
    1.  Click the tab.
    1.  Click the Lookup References at the end of the boxes. <br> The **Lookup For \<** *>* window appears.
    2.  Select a row, and click **Select**. Or, double-click the row to use.

        Click **Cancel** to exit from the **Lookup For \<** *>* window.

2.  On the **Toolbar**, click **Save**.

The selected accounts must be classified as active accounts and the appropriate category (that is, Asset, Expense, COGS, and so on).

The next step is to associate transaction types with product classes, group codes, and units of measure.