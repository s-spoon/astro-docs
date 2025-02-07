---
title: "Repost barcode records"
draft: false
type: Article 
---

If you lose records when barcode records are posted because of a system crash, you can restore those records by reposting them instead of re-entering them manually. Use the **Bar Code RePost (BCREPOST)** page to repost barcode records.

Reposting barcode records is risky. Do so only with the guidance of Made2Manage Technical Support.

Before you repost barcode labor records, ensure that these entries do not already exist in the **Daily Labor (LABR)** page. If the entries exist, delete them before you perform this task. (For instructions, see the **.) Begin reposting only from the beginning of a shift. If you do not, your entries will all be on hold.

Before you repost barcode inventory records, ensure that these entries do not already exist in the **Bar Code Physical Inventory (BCPINV)**, **Inventory Transactions (INVTR)**, **Receiving (RECV)**, **Shipping (SHIP)**, **Receiving Inspection (RINS)**, or **Production Inspection (PINS)** page. If the entries exist in any of the specified pages, delete them before reposting. Failure to do so may result in an error. Also, check the **Inventory Movement (RPIMOV)** report that lists the inventory movement of standard parts before reposting these entries.

Refer to the **Bar Code Labor / Inventory Errors (RPBCER)** report to identify the errors that occurred during reposting.

### To repost barcode records

1. Prepare to repost barcode records:

    - Print reports of your current barcode information.



    - Be sure posting is turned off.



    - Specify repost settings.



    - Lock users out of the system.



2. Open the **Bar Code RePost (BCREPOST)** page.

    1. Select **Production Management** \> **Production Transactions** \> **Shop Floor** \> **Bar Code** \> **Bar Code RePost**.

    Or

    2. Search for **BCREPOST** or **Bar Code RePost** in the **Navigation box** and then select **Bar Code RePost**.

    **Bar Code RePost (BCREPOST)** page appears.

3. Specify the filters for reposting records:

    1. In the **From** and **To** fields, specify the date range of the records to repost.

    2. Click the **Employee No** Lookup Reference, and select the employee number of the employee whose records you want to repost.

        - Select the **Include Inventory Postings?** check box to include inventory postings.

        - Select the **Include Labor Postings?** check box to include labor postings.

4. On the grid toolbar, click **Refresh Data** to load records into the grid.

    The barcode records are listed in the grid.

5. In the grid, select the check box beside the column header of the **Select** column to select the transactions to be reposted.

6. On the grid toolbar, click **Load Selected Rows to Repost**.

7. If you selected labor transactions, a message appears that alerts you to important issues you must consider before continuing. Read this message.

8. Click **Yes** to repost the records.

9. When the records selected for reposting have been loaded, turn posting on.



    After you repost labor records, review the **Bar Code Labor Recorded (RPBCLR)** and the **Daily Labor Input (RPLINP)** reports. Make sure the labor postings are valid before allowing other users on the system.

    After you repost inventory records, review the **Bar Code Inventory Recorded (RPBCIR)** report. Make sure the inventory postings are valid before allowing other users on the system.

    Review the **Bar Code Labor / Inventory Errors (RPBCER)** report to identify the errors that are recorded by the barcode system.

    If you reposted transactions in error, restore your Made2Manage data using your backup from the period immediately before the duplicate or erroneous postings occurred.

​