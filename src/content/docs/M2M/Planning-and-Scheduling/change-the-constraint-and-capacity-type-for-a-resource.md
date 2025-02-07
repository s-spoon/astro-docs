---

title: "Change the constraint and capacity type for a resource"
draft: false
type: Article

---

After a few weeks of running a schedule, you may find out that the work done at some work centers is greater or lesser than the actual requirement. You may have originally considered those work centers as constraints. You can change the resources you no longer want to consider a constraint on the schedule. You can also change the capacity type if you think one work center that was originally running at maximum capacity can no longer handle the workload at that capacity.

> [!Note] If you change a resource's constraint and capacity type, you may have to update the schedule.

**To change a resource's constraint and capacity type**

1. Open the **Constraint and Capacity** (PSCONCAP) page.

    - Select **Planning and Scheduling** > **P&S Production** > **Scheduling** > **Constraint and Capacity**.

    Or

    - Search for **PSCONCAP** or **Constraint and Capacity** in the **Navigation box** and then select **Constraint and Capacity**.

    The **Constraint and Capacity (PSCONCAP)**  page appears.

2. The details of each work center are listed in a grid.

> [!Note] The ID and name of the work center defaults from the Made2Manage ERP  **Work Center (WORK)** page and cannot be changed.

> [!Note] The **Average Load/Capacity** percentage is calculated by the system to define the most constrained resource or CCR and cannot be changed.

3. Highlight the work center, and modify any of the following fields:

    - Specify the number of simultaneous operations the work center can perform for shifts 1, 2, and 3 in the respective **Sim Ops Shift** columns.

    - (M2M Advanced Scheduling only) Indicate if the work center is a constraint:

    > [!Note] The **Constraint** value defaults from the Made2Manage ERP **Work Center (WORK)** page , but you can change it.

    - Select the check box in the **Constraint** column if the work center is a constraint and must be scheduled finitely.

    - Unselect the check box in the **Constraint** column if the work center is not a constraint and must be scheduled infinitely.

    - Specify the workload capacity.

> [!Note] **MAX** indicates that the resource is at its maximum workload capacity. **STD** indicates that the resource can handle the standard workload capacity. The default value is standard.

- (M2M Advanced Scheduling only) Indicate if the resource is partitioned:

> [!Note] You can modify this field only if the **Constraint** check box for the work center is selected.

- Select the check box in the **Partitioned** column if the resource is partitioned.

> [!Note] Partitioning a work center allows unfinished work at the end of a shift to remain on the machine until the shift starts the next day.

- Unselect the check box in the **Partitioned** column if the resource is not partitioned.

> [!Note] The schedule will attempt to find capacity at another simultaneous operation.

4. On the **Toolbar**, click **Save** to save the changes.

​