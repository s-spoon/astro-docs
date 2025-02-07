---
title: "Negative work in process"
draft: false
type: Article
---

Negative Work In Process(WIP) is a result of the following:

1. **Make to stock job:**

    - When moving the product to inventory and the estimate on the job is greater than the actual job costs posted.

    - The job has been closed and a labor entry gets deleted after the job closed.

    - You confirmed an AP invoice for the job after you closed the job, and its total amount was less than that of your Purchase Order.

2. **Make to order job:**

    - When shipping the job and the estimate on the job is greater than the actual job costs posted.

    - The job has been closed and a labor entry gets deleted after the job closed.

    - Shipping or other processes are done after the job is closed.

    - You confirmed an AP invoice for the job after you closed the job, and its total amount was less than that of your Purchase Order.

    **Method to check what is driving Work in Process negative**

    Review the following steps for one of your jobs with large negative **Work in Process (WIP)**. This allows you to follow where the numbers are coming from and why. For instance, you may see that you are closing jobs before you are shipping them based on the time stamps showing on the **OC Data Transferred to GL (RPOCTG)** report.

    If the job is closed, or if you need to restate the WIP before month-end for long jobs, use the **WIP Adjustments (AWIP)** page to move some of the WIP to the appropriate bucket, Cost of Goods Sold or Variance.

    >[!Tip] The estimated costs of the job are identified in the **Job Order Cost Summary (JOSUMM)** window. To access this, click the **Cost Summary** in the **Job Order (JO)** page.  
<br> The actual costs of the job are identified in the **Job Order Status/Cost (JOSTAT)** page. To access this, click the **Job Packet** tab on the **Job Order (JO)** page. Next, click the **Job Order Status**.

    a. The **WIP Adjustments (AWIP)** page for the job should show you the amount in both **WIP** and **COGS** or **Variance**. The amount in WIP should conform to the **Work in Process Report (RPWIP)**.

    b. The postings for the job, except for any postings from AP (receiver invoices for which the receipt and invoice costs differed), is seen by running the **OC Data Transferred to GL (RPOCTG)** report. Use the following selections to view the account totals posted by the job (including total WIP):
    
    i. Selection = account-all

    ii. Sort = acct. date

    iii. Layout = acct. detail

    iv. Summary only box is flagged

    v. Date = leave blank to get ALL DATES

    vi. ALL accounts (could also filter for just WIP accounts)

    vii. FILTER = ocdist.fjob_so = 'xxxxx-xxxx', replacing xxxxx-xxxx with a job number.

3. Once you have this format of the **OC Data Transferred to GL (RPOCTG) report**, you can compare it to the **Work in Process Report (RPWIP)**. If the numbers do not conform for total **WIP**, then review all receiver invoices, to see if the vendor invoices posted to **WIP** come up with the difference. This can be seen on the accounting summary of the vendor invoice for the receiver invoices. The receiver numbers are listed in the Received Goods account detail of the above printing of the **RPOCTG** without summary only for the Received Goods account.

4. Other reports are: The  **Order Cost Detailed Transactions (RPJOTS)** report and the **Job Order Cost Variance (RPJOCV)** report, showing estimated and actual costs. Transactions after the job close show us the, negative **WIP** means there is a variance between actual and estimated costs. This can be corrected by reviewing your **BOMs** and **Routings** for parts with large **WIP** variances, or if non-standard parts, the **Job Order Detailed Bill of Material (JODBOM)** and **Job Order Detailed Routing (JODRTG)** for the jobs, which take precedence over the standard BOM and Routing.