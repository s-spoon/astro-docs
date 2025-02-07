---
title: "Understand Job Priorities"
draft: false
type: Article
---

Shop Floor Manager assigns priority to each job operation on a released job which has work remaining in the work center. If you use a scheduling engine, Shop Floor Manager uses the information that it generates to set the priority. In addition, it looks at the following criteria:

-   Operations that have a scheduled start date are given higher priority than the operations without a scheduled start date.
-   Operations are prioritized in the following order:

     * Scheduled Start Date of the operation

    * Job Due Date

    * Job Number

    * Operation number

-   You can manually change the priority in the **Work Center Status - Job Order Operations** window if you select **Allow Editing Of Priority** in the Company Setup tab of the **Setup** window.
-   If you manually change the priority on an operation, the priority overrides all other criteria unless you change the due date or scheduled start date after the priority is set. Once you change the date, and refresh the Supervisor Console, the priority setting is no longer relevant and the job is re prioritized in the order listed above.

    For example, if you have these three jobs:

| **Job**       | **Scheduled Start Date** | **Due Date** |
|---------------|--------------------------|--------------|
| JO 1, Op 10   | 09/20/06                 | 09/29/06     |
| JO 2, Op 10   | 09/15/06                 | 09/30/06     |
| JO 3, Op 10   | 00/00/00                 | 09/28/06     |

They would be prioritized as follows:

| **Job**     |
|-------------|
| JO 2, Op 10 |
| JO 1, Op 10 |

Since jobs 1 and 2 both have a scheduled start date and due date, they are prioritized based on the scheduled start date. Since job 2 has an earlier start date than job 1, it receives top priority, even though the due date is later. Job 3 is assigned the lowest priority because the scheduled start date is blank, even though it has an earlier due date than the other two jobs.