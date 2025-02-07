---
title: "Record Job Order Completion"
draft: false
type: Article 
---


-   [Using the work center console](using-the-work-center-console.md)
-   [Using the supervisor console](using-the-supervisor-console.md)

You can report completed quantities without reporting labor.

## To record Job Order Completion

1.  Open the **Work Center Console (SFMWC)** page.

    Select **Production Management** > **Production Transactions** > **Shop Floor** > **Work Center Console**.

    *Or*

    Search for **SFMWC** or **Work Center Console** in the **Navigation box** and then select **Work Center Console**.

    The **Work Center Console (SFMWC)** page appears.

2.  Click **JO Completions**.

    The **Job Order Completions** window appears in the right hand pane.

3.  In the left-hand pane, highlight the job for which you want to record completion information.

    The Job Order Completion detail for the selected job displays.

4.  Enter the quantity completed in the **Quantity Completed** field.
5.  Enter any scrapped quantities in the **Quantity Scrap** field.
6.  Click **Qty Complete** to save, else click **Cancel**.

    The JO Operation Details for the job number displays in the right hand pane.

    The **Qty Completed** and **Qty To Go** information is updated in the left-hand pane of the **Work Center Console** for the selected job.

    >[!Note]
    >-   If you enter **Qty Completed** number greater than the quantity required for this job, an error message will be displayed. <li>Check the **Auto Move To Inventory at last operation** option in the **Facility Setup** tab if you want to automatically move the quantity complete to inventory when the last operation of the Job Order is complete (for non-lot controlled parts only), and the quantity complete is reported.