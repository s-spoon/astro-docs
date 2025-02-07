---
title: "Clocking off a Job Order"
draft: false
type: Article 
---

When you finish working on a job, you should **Clock Off** the job.

## To Clock off a Job Order

1.  Open the **Work Center Console (SFMWC)** page.

    Select **Production Management** > **Production Transactions** > **Shop Floor** > **Work Center Console**.

    *Or*

     Search for **SFMWC** or **Work Center Console** in the **Navigation box** and then select **Work Center Console**.

    The **Work Center Console (SFMWC)** page appears.

2.  Click **Clock Off JO** on the **Toolbar**.

    The **Clock Off JO** window appears in the right-hand pane of the **Work Center Console** page.

3.  Enter the **Employee Number** that you were assigned in Made2Manage. The system displays the **First Name** and **Last Name**.
4.  Select the type of job from which you are clocking off.
5.  Click the job order from which you want to clock off.
6.  Review the buttons in the center of the window to verify that they are set correctly. Click on a button to toggle the Description.

    - **Lead** - If the person clocking off the job is the team lead, **Lead** must display, else **Not Lead** must be selected.

    - **Setup** - If the work was done in preparation for performing a particular operation on a part or assembly, **Setup** must be selected.

    - **Rework** - If the work was done to perform corrective action on a part so it meets quality standards, **Rework** must be selected.

    - **Completed Op** - If the work on the operation for the part is complete, **Completed Op** must be selected.

7.  Click **Complete Clock Off** to clock off the job, else click **Cancel**.
8.  A message, *You are not clocked in for the day yet, do you want to also clock in for day?* appears.
9.  Click **Yes** to continue, or click **No**.

### Following are some issues you may need to consider, depending on your job type and set up options:

-   If you are clocking off serial JOs, you must clock off the jobs in the same order as they appear in the grid. Click **Next Serial JO** for each serial job listed. When only one job remains, the button name will change back to **Complete Clock Off**.
-   If you are clocking off a single, serial job order, the system will change it to a **Regular** type, and display a message to let you know. This is done to ensure that it is recorded properly.
-   If you are clocking off serial JOs for a team, serial JO time is posted proportionally to each member of the team based on the quantity complete entered by the Lead. If a non-lead team member clocks off the team, serial JOs are clocked off with quantities of zero, so the time is split between each job order.
-   If the **JO Clock On Required** option is enabled, you can only clock off a job that you have previously clocked on to.
-   If the **JO Clock On Required** option is not enabled, you can clock off a job you have not clocked on to. If you have clocked on jobs, you must clock off those job orders first before you can clock off any other job orders.
-   You can only clock off parallel JOs that you have previously clocked onto, since parallel JOs can have overlapping start and end times.
-   If **Auto Move To Inventory At Last operation** option in the **Setup** page is enabled, a posting is made to move the quantity complete to **Inventory** when the Lead clocks off an operation JO that is the last operation, and reports the quantity complete for a non-lot-controlled part.

>[!Note]
>For serial labor, when breaks occur in between a shift period, the breaks are deducted at the end of the serial Clock Off time to ensure that the total daily hours are valid. For example, if an employee takes a break between **10:30 AM** to **11:00 AM**, and the shift duration is from **08:00 AM** to **02:00 PM**, the shift end time is reduced by **30** minutes and is considered as **01:30 PM**. The actual breaks taken are however stored and displayed in the **Daily Labor Input (RPLINP)** report and in the **Daily Labor (LABR)** page after you execute the **ProcessBarCodePosting** process in the **M2M Processor Service Configuration (PROC)** page.