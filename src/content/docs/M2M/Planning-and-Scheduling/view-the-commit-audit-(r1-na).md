---

title: "View the Commit Audit (R1-NA)"
draft: false
type: Article

---

Use the **Commit Audit (PSCMAUDT)** window to view detailed information about the failed and successful transactions of the commit process.

The **Commit Audit (PSCMAUDT)** window displays the commit audit information for a period that is within the **CommitAuditPurgeHorizon** setting present in the **[RecvHandler]** section of the **M2MWin.ini** file..


**To view the commit audit**

1. On the **Home** ribbon, click **What If Session Management** to open the **What If Session Management (PSWIMGNT)** window.

2. On the header, click **Commit Audit** () to open the **Commit Audit (PSCMAUDT)** window.

1.  Apply the required filters:

    -   If you have multi-facility enabled, from the **Facility** list, select the facility for which you want to view the commit audit details.

    -   To specify a time period for which you want to view the commit audit, in the **From** and **To** fields, specify the start and end dates of the period.

2.  To apply the filters set, on the grid toolbar of the **General** tab, click **Apply Filter**.

    > [!TIP] To clear the set filters and show all commit batches within the commit period horizon, on the grid toolbar of the **General** tab, click **Clear Filter**.

3.  In the **General** tab, select the commit batch row for which you want to view the commit audit.

4.  Click any of the following tabs to obtain the required audit information:

    -   **Errors**: To view the details of the failed transactions of the commit batch selected in the **General** tab.

    -   > [!Warning]  To view the details of the warnings generated for the commit batch selected in the **General** tab.

    -   **All Transactions**: To view the details of the successful and failed transactions of the commit batch selected in the **General** tab.

    >[!Note] You can view the **All Transactions** tab only if the **ShowAllTransactions** setting present in the **[RecvHandler]** section of the **M2MWin.ini** file is set to **Yes**.

5.  Close the **Commit Audit (PSCMAUDT)** window.