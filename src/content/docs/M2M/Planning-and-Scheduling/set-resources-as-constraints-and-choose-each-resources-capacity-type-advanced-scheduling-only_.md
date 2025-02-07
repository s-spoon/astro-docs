---

title: "Set resources as constraints and choose each resource's capacity type (Advanced Scheduling only)"
draft: false
type: Article

---

Before you can set scheduling rules, choose which resources are constraints and set each resource's capacity type. Specify if the production capacity is standard or maximum.

The schedule considers three types of resources or work centers:

- Non-constraint resources are work centers that do not affect the schedule.

- Constraint resources are work centers that cause some disruption in your schedule but still require monitoring of the load to be within the limited capacity.

- (Advanced Scheduling only) Primary or critical capacity constrained resource (CCR) is a work center the schedule recognizes as the bottleneck in your production schedule and develops the schedule around this constraint. If simultaneous activities use the CCR work center, define this work center as a discrete resource with limited capacity.

- (Advanced Scheduling only) Partitioned work centers are single work centers considered during scheduling as a set of individual resources each of which possesses its own calendar. Because each resource in a partitioned work center maintains its own calendar, you can schedule each resource in a partitioned work center individually.

**To set resources as constraints and choose each resource's capacity type**

1. Open the **Constraint and Capacity** (PSCONCAP) page.

    - Select **Planning and Scheduling** > **P&S Production** > **Scheduling** > **Constraint and Capacity**.

    Or

    - Search for **PSCONCAP** or **Constraint and Capacity** in the **Navigation box** and then select **Constraint and Capacity**.

        The **Constraint and Capacity (PSCONCAP)**  page appears.

2. The details of each work center are listed in a grid.

> [!Note] Select a work center row, and in the **Action** column, select **Grid Related** > **Single Resource Gantt** to display the Resource Gantt for that work center.

> [!Note] You cannot change the information in the first three columns. You can change the values in the remaining columns by clicking the cell you want to change. The ID and name of the work center defaults from the Made2Manage ERP  **Work Center (WORK)** page and cannot be changed.

> [!Note] The Average Load/Capacity percentage is calculated by the system to define the most constrained resource or CCR and cannot be changed. The percentage is calculated as:  
 Load Sum over the Planning Horizon divided by the number of days in the Planning Horizon.

3. Highlight the work center, and modify any of the following fields:

    - Set the number of simultaneous operations the work center can perform for shifts 1, 2, and 3.

    - (Advanced Scheduling only) Indicate if the work center is a constraint. The **Constraint** value defaults from the Made2Manage ERP **Work Center (WORK)** page, but you can change it.

    > [!Note]     
    If the check box in the **Constraint** column is selected, the work center is a constraint, and is scheduled finitely.   
    If the check box in the **Constraint** column is unselected, the work center is not a constraint, and is scheduled infinitely.

    - Specify the workload capacity:

    - **MAX** indicates that the resource is at its maximum workload capacity.

    - **STD** indicates that the resource can handle the standard workload capacity. The default value is standard.

    - (Advanced Scheduling only) Indicate if the resource is partitioned:

    > [!Note] You can modify this field only if the **Constraint** check box for the work center is selected.

    - Select the check box in the **Partitioned** column if the resource is partitioned. Partitioning a work center allows unfinished work at the end of a shift to remain on the machine until the shift starts the next day.

    - Unselect the check box in the **Partitioned** column if the resource is not partitioned. The schedule will attempt to find capacity at another simultaneous operation.

4. On the **Toolbar**, click **Save** to save the changes.

> [!Note] In Basic Scheduling, the **Save** button is disabled since the changes are saved automatically.

​