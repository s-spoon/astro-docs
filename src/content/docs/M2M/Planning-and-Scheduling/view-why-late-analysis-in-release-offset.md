---

title: "View Why Late Analysis in Release Offset"
draft: false
type: Article

---

1. Open the Why **Late Analysis (PSWHYLTA)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Scheduling** > **Why Late Analysis** .

    Or

    - Search for **PSWHYLTA** or **Why Late Analysis**  in the **Navigation box** and then select **Why Late Analysis** .

        The **Why Late Analysis (PSWHYLTA)**  page appears.

2. Click on the **Release Offset** tab.

3. On the **Late Job Operation Due to Release Offset** grid, select a Job Operation.

4. The **Peg Demands** grid on the right side shows the affected top level demands. The top level demands that are late are highlighted in red.

> [!Note] The **Peg Demands** may show multiple top level demands. At least one of the top level demands should be late, but not necessarily all of them.

> [!Note] The Job Gantt can be opened from the **Related** menu in the **Peg Demands** grid.

The following table describes the grids in the **Release Offset** tab:

    | Grid                                     | Description                                                                                                           |
    |------------------------------------------|-------------------|
    | Late Job Operation Due to Release Offset | For each of the jobs (or job trees) that are late due to Release Offset, the first scheduled job operation is listed on the left pane. The lateness magnitude is indicated by the Days Late. Upon selection of a job operation on the left side, the Peg Demands on the right side is refreshed accordingly. More details on the job schedule can be found on the Operations tab which is visible on the Peg Demand's right side. |
    | Peg Demands                              | The job selected on the left pane is at the root of the Pegging tree. The job operation selected on the left pane is visible and automatically selected on the job operations tab on the right side. The affected top level demands are visible at the leaves of the Pegging tree.                                                                                                                                                |
    |

​