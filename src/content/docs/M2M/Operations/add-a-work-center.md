---
title: "Add work center"
draft: false
type: Article
---

A work center is a specific production area consisting of one or more people, processes, or machines of identical capabilities that are one scheduling unit. You can add a new work center for your company at any time.

## To add work center

### Create a Work Center

1. Open the **Work Centers (WORK)** page.

    1. Select **Production Management** > **Master Data** > **Work Centers**.

    Or

    2. Search for **WORK** or **Work Centers** in the **Navigation box** and then select **Work Centers**.

    **Work Centers (WORK)** page appears.

2. On the **Toolbar**, click **New**.

    Click **Copy** to base the work center on the existing data displayed.

3. In the **Facility** dropdown, select the facility.

### Enter Work Center Details

1. In the **Work Center Id** box, enter a unique identification for the work center.

    *Note:*Ensure that the Work Center ID helps you identify the purpose of the work center. If the work center is a sub-contract operation, begin the identification with **SUB** so that you can easily recognize sub-contract work centers.

2. In the **Work Center Name** box, enter the work center's name.

3. To select the department:

    1. Click the **Department** Lookup Reference.

        The **Lookup For Department** window appears.

    2. Select the row that contains the required department, and click **Select**. Or, double-click the row that contains the required department.

4. In the **Comments** box, enter any other descriptive information you want to appear on the routing for the work center.

5. Select the **Partitioned** check box if the work center is a partitioned work center.

    >[!NOTE]
    >Partitioned work centers are single work centers considered during scheduling as a set of individual resources each of which possesses its own calendar. Because each resource in a partitioned work center maintains its own calendar, you can schedule each resource in a partitioned work center individually.

6. Select the **Allow Fractional Simultaneous Operations** check box if an operator from the work center labor pool can work on more than a single machine simultaneously.

    >[!NOTE]
    >Fractional simultaneous operations is supported only on additional resource routings.

    >[!NOTE]
    >Fractional simultaneous operations are not supported for partitioned work centers.

### Set Cost and Time Information

1. In the **Labor Cost/hour** box, enter the average labor rate charged to this work center.

2. In the **Overhead Cost/hour** box, enter the average overhead rate charged to this work center.

3. If a standard number of setup hours exists, in the **Setup Hours** box, specify the number of hours it takes to prepare the work center for a new job. If there is no standard number of setup hours for the work center, type **0** (zero).

4. In the **Production Hours/Unit** box, if required, enter the number of hours it takes to produce one unit.

### Set Queue Information

1. In the **Target Queue Hours** box, enter the expected number of hours that a job will wait in queue before it enters the work center.

2. In the **Avg Queue Hours** field, enter the average number of hours that a job will wait in queue before it enters the work center.

3. In the **Max Queue Hours** field, specify the maximum number of hours an operation waits to begin production in this work center.

4. In the **Queue Allowance** field, type the number of hours the work center can leave a job waiting in queue.

5. Select the Backflush Labor check box to backflush the entire labor even if you have already recorded labor on a job.

    *Note:*It is a global setting and NOT for each work center or part.

    The **Backflush Labor** check box is enabled only if you set appropriate values in the following fields of the **Production (CSPROD)** page:

    1. In the **Labor Backflush** section of the **Accounts/Labor** tab:

        1. Select the **Selective Labor Backflushing** check box.

        2. In the **Labor Backflush At** dropdown, select when to backflush labor for a job.

        3. In the **Quantity** dropdown, select the quantity to backflush.

    2. In the **Backflush** section of the **Material/Costing** tab:

        1. In the **At** dropdown, select when the backflush must be done.

        2. In the **Quantity** dropdown, select the quantity to backflush from inventory.

        3. Select the **Scrap Quantity At Job Close** check box to backflush any amount of scrap from inventory when you close a job.

### Set Operation Limits Information

1. For each shift, in the **Simultaneous Operation Limits** section, enter the standard (**Std**) number of operations that can be in process simultaneously in the work center.

2. For each shift, in the **Simultaneous Operation Limits** section, enter the maximum (**Max**) number of operations that can simultaneously be in process in the work center.

### Set Schedule Information

1. Select the **Capacity Constraint** check box, if your company uses Planning and Scheduling and you want to mark this work center as one that constrains the master plan/schedule.

2. Select the **Default Operations For This Work Center To Be Scheduled** check box to ensure that the routings schedule the operations that reference the work center. Clear the check box to ensure that the routings exclude the operation(s) from the schedule.

    >[!NOTE]
    >By default, the **Capacity Constraint** check box and the **Default Operations For This Work Center To Be Scheduled** check box are cleared.

### Save

- On the **Toolbar**, click **Save**.

​