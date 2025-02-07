---

title: "View and analyze the infinite planning audit report"
draft: false
type: Article

---

If you checked the **Create Audit** option on the Plan – Infinite , and an Audit report is created when you execute the plan. Click on the **Audit** button to open the **Infinite Planning Audit** window.

1. Open the **Plan - Infinite (PSINPLAN)** page.

    - Select **Planning and Scheduling**> **Planning** > **Plan - Infinite**.

    Or

    - Search for **PSINPLAN** or **Plan - Infinite** in the **Navigation box** and then select **Plan - Infinite**.

        The **Plan - Infinite (PSINPLAN)** page appears.

2. On the **Toolbar**, click **Browse**.

3. Select the plan from the **Browse For Plan - Infinite** window.

4. On the toolbar, click **More Actions**.

5. Select **More Actions** > **Actions** > **Planning Audit**.

The tabs on the **Infinite Planning Audit** page provide the following information:

| Tabs               | Description                                                                                                                |
|--------------------|--------------------------------------------------------------------------|
| General            | The name of the script that was run, the date range of the planning horizon, and the date/time that the planning session started and ended.                                                                                                                                      |
| Redundant          | A list of the jobs that the system cannot delete, even though they are not needed, because they have a Released status, or an open PO. You should consider canceling or deleting these jobs. Select any job, and on the grid toolbar, click **Related** to display the **Supply/Demand by Part**, **Material Availability**, **Peg To Demands**, **Interactive Planning by Sales Order**,  **Job Gantt**, or **Peg Supplies** window.  |
| No Operations      | A list of the parts that cannot be included in planning since they do not have a routing. Select any part, and on the grid toolbar, click **Related** to display the **Material Availability**, **Supply/Demand by Part**, or  **Interactive Planning by Part** window.                                                                                                                                                                |
| Added              | A list of the jobs added due to additional demand since the last time the plan was executed. Select any job, and on the grid toolbar, click **Related** to display the **Supply/Demand by Part**, **Material Availability**, **Peg To Demands**, or **Interactive Planning by Part** window.                                                                                                                                           |
| Cancelled/Deleted  | A list of the jobs that were cancelled or deleted because there was no longer demand for the part. Select any job, and on the grid toolbar, click **Related** to display the **Supply/Demand by Part**, **Material Availability**, or **Interactive Planning by Sales Order** window.                                                                                                                                                  |
| Modified           | A list of the jobs that were modified due to changing demand for the material. Select any job, and on the grid toolbar, click **Related** to display the **Supply/Demand by Part**, **Material Availability**, **Peg To Demands**, **Interactive Planning by Sales Order**, **Job Gantt**, or **Peg Supplies** window.                                                                                                                 |
| On Hold            | A list of jobs that have been placed on hold.                                                                                                                                |
| Exceptions         | A list of transactions that resulted in an error or caused an exception. For example, if planninhg encounters a job operation with a high number of hours, the job is listed on this tab as an exception.                                                                                                                          |
|

​