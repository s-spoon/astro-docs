---
title: "GL Out of Balance Utility"
draft: false
type: Article
---

This general ledger comparison tool looks at all sub-ledger tables and compares them to actual general ledger tables, giving an exception report if discrepancies are found.

This Utility will perform the following:

-   Print a report with the difference between the distribution & the GLTRAN records.
-   Print a report with the difference between the GLTRAN & the GLITEM records.

**To compare the sub-ledger table to the actual ledger table**

1.  Open the GL Out of Balance Utility page.
    1.  *Select Utilities > Maintenance > Data Utilities > GL Out of Balance Utility.*

        *Or*

    2.  *Search for GL Out of Balance Utility in the Navigation box and select GL Out of Balance Utility.*

        >[!NOTE]The Utility Options field has the default value set as **COMPARE SUB LEDGERS TO GL POSTINGS**.

2.  In the **Date Range** area, type/select the date range to do the data comparison and generate the report.
3.  In the **Ignore Difference Up to** field, enter the value for which the differences between the sub-ledger table and the actual ledger table can be ignored.

    >[!TIP] The value enterd in the **Ignore Difference Up to** field cannot be less than 1.00.

4.  On the **Toolbar**, click **Execute**.

    A message *Preparing to Repair Data. Proceed?* appears.

5.  Click **Yes** to generate the report.

    Click **No** to exit.

    >[!NOTE]The report will be downloaded automatically once the data processing is completed.

6.  When the data processing is done, A message *Process is completed. GL Out of Balance Report is downloaded. Do you want to download the audit file?* appears.
7.  Click **Yes** to download the audit file.

    Click **No** to exit.

    >[!TIP] If you want to download the audit file for the last audit run any time later, click **Audit** on the **Toolbar**.