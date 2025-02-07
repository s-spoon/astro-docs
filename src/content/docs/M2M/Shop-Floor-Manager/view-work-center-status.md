---
title: "View the Status of Work Centers and their associated Job Order Operations"
draft: false
type: Article
---

The **Work Center Status** window provides an overview of all the work centers in a facility. When you highlight a work center, a detailed listing of the job order operations for that work center displays. Only released jobs with a quantity remaining are displayed. Except the **Priority** column, you cannot modify the records displayed in the **Job Order Operations** grid.

## To view the status of Work Centers and their associated Job Order Operations

1.  Open the **Supervisor Console (SFMS)** page.

    Select Production Management > Production Transactions > Shop Floor > Supervisor Console.

    *Or*

      Search for **SFMS** or **Supervisor Console** in the **Navigation box** and then select **Supervisor Console**.

   The **Supervisor Console (SFMS)** page appears.

2.  Click the **Work Center Status** tab.

    The **Work Center Status** grid at the top of the page appears with a summary of the work centers for each of your facilities, including the job order status, material status, and number of job operations.

    >[!Note]
    >- Only the work centers selected in the **[User Work Centers](user-work-centers.md)** tab of the **Setup** page are available for selection. <li>If any of a work center's jobs are late, the **JO Status** field is highlighted. If any of a work center's jobs have material shortages, the **Matl Status** field is highlighted.
3.  Select a work center in the **Work Center Status** grid.

    The jobs associated with the specific work center displays in the **Job Order Operations** grid based on the Job Priority.
    >[!Note]
    >If a job is late, the **Due Date** field is highlighted. If a job has material shortages, the
**Matl Status** field is highlighted.


4.  Click the ellipsis under the **Action** column.

    An additional menu option displays.

5.  The system assigns a priority to each job operation.
6.  To change an operation's priority:
    1.  Click in the appropriate priority field and type in the new priority number.
    1.  Click the **Priority** column heading to resort the operations based on the changes in priority.
    2.  Click **Save Priority For Operations** to save.

    >[!Note]
    >You can change the priority only if you have selected the **Allow Editing Of Priority**
checkbox in the **Company Setup** tab of the Setup page.

    >[!Tip]
    >For more information on how the system determines the priority of a job order operation, refer to **[Understanding Job Priorities](understanding-job-priorities.md)**.