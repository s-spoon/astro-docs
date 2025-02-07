---

title: "Close accounting period or year"
draft: false


---

Closing a period or year involves processing three modules: Accounts Receivable, General Ledger, and Production.

Before you close an accounting period or year, you must adjust for financial activity that has occurred but that you have yet to record. Do this by making manual journal entries.


**Important**:

Before processing End of Period for the year-end transaction, ensure that the Processor Service Host is not running.


**To close an accounting period or year**

1.  Open the **Period Closing (EOP)** page.

    1.  Select **Financial Management** \> **Financial Transactions** \> **Period Closing**.

    Or

    2.  Search for **EOP** in the **Navigation box** and then select **Period Closing Period Closing (EOP)** page appears.

    **Note**: 

    The first time you do this task, Made2Manage may prompt you to enter the current calendar year and period.

2.  In the **Select Desired Modules to Process** section, select the checkboxes corresponding to the modules that you want to process.

3.  On the toolbar, click **Process Selected Modules**.

    » If you are processing End of Period for a year-end transaction, and if the Processor Service Host is running, a message, *M2M Processor Services - PROC is Running. Stop Processor Service in PROC to Execute EOP.* appears.

    1.  Click **Close** to close the message window.

    2.  Click **Stop Processor Service** in the **M2M Processor Service Configuration (PROC)** page to stop the Processor Service Host, and then process the End of Period transaction.

    » If you are processing End of Period for a transaction that is not the year-end transaction, or if the Processor Service Host is not running, a message, *Ready to Process?* appears.

        ≡ Click **Yes** to process the transaction.

        ≡ Click **No** to cancel the processing.

4.  Close the **Period Closing (EOP)** page.