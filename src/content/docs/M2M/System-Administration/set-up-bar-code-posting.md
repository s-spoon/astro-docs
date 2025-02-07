---
title: "Set up barcode posting"
draft: false
type: Article
---

Bar Code Posting runs as a new Service Contract to the M2M Processor Service. Made2Manage creates a log file for each company for each day to keep track of the barcode postings. The system creates these XML log files in the \<SYSPATH\>/Logs/BarCodeLog/ folder. The naming format for the log files is **BarCodeLog_xx_yyyymmdd**, where **xx** is the company number and **yyyymmdd** is the date on which the log file was created.

Before information you collect using barcode equipment can go to Made2Manage, you must set up the barcode posting program.

### To set up barcode posting

1. Open the Bar Code Posting Setup (BCSETUP) page.

    1. Select **Production Management** > **Production Transactions** > **Shop Floor** > **Bar Code** > **Bar Code Posting Setup**.

    Or

    2. Search for **BCSETUP** or **Bar Code Posting Setup** in the **Navigation box** and then select **Bar Code Posting Setup**.

    **Bar Code Posting Setup (BCSETUP)** page appears.

2. In the **Settings** tab, specify the general settings:

    1. In the **Facility** list, select the facility to use as the default facility.

    If you have only one facility, the value of the **Facility** list is set to **Default**.

    2. Select the **Use Auto Breaks** check box, to enable automatic breaks.

    3. Select the **Move to Inventory – Allow Lot Number Entry** check box to:

        - Indicate the ASSIGN record creation is not required before the Move To Finished Goods function.

        - Allow insertion from the Lot Number entered on Move to Finished Goods function.

    4. Select the **Disable Daily Process Log (Except For Errors)** check box to disable the creation of the Bar Code Posting log file.

3. In the **Re-Posting Settings** section, specify the reposting settings:

    1. In the **Number of Days Before Purging Records Used For Re-Posting** field, specify the number of days for which the previously posted transactions are available for reposting. Made2Manage deletes the transactions that were posted before the specified number of days.

    2. In the **Time of Day to Purge Records Used For Re-Posting** field, specify the time at which the previously posted transactions are to be deleted.

    Use military time. 3:15 p.m. is 15:15. Midnight is 0:00, not 24:00.

4. On the **Toolbar**, click **Save**.

    A message, *Bar Code Posting Configuration configuration have been modified. Screen will auto refresh in \<number\> seconds.* Do not Refresh appears.

5. Click **X** to close the message window.

​