---

title: "View Why Late Analysis in Purchasing"
draft: false
type: Article

---

1. Open the **Why Late Analysis (PSWHYLTA)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Scheduling** > **Why Late Analysis**.

    Or

    - Search for **PSWHYLTA** or **Why Late Analysis**  in the **Navigation box** and then select **Why Late Analysis** .

        The **Why Late Analysis (PSWHYLTA)**  page appears.

2. Click on the **Purchasing** tab.

3. On the **Late Purchases** grid, select a Late Reason.

    The list of Delayed Material are displayed in the grid below.

4. In the **Delayed Material** grid, select a Type.

5. The **Peg Demands** grid on the right side shows the affected top level demands. The top level demands that are late are highlighted in red.

> [!Note] The **Peg Demands** may show multiple top level demands. At least one of the top level demands should be late, but not necessarily all of them.

The following table describes the grids in the **Purchasing** tab:

    | Grid              | Description                                                                                                                                |
    |-------------------|----------------------------------------|
    | Late Purchases    | All purchasing constraints that contribute to lateness are listed in this pane. By default they are sorted in descending order. Upon selection of a Purchasing constraint, the list of the related late job materials is refreshed in the pane below. A Purchasing constraint can be: PO Lead Time ISO   In the case of Lead Time, the PPO number is listed in the PO/PPO column, otherwise the PO Item number or ISO number is listed in this column. |
    | Delayed Materials | The demands (Job Materials, SOs item or IDOs) that are late due to the above purchasing constraint are listed in this pane. By default these demands are sorted by their schedule date. The Due Date and Schedule Date are properties of the job. The Days Late is the lateness due to the purchasing constraint.                                                                                       |
    | Peg Demands       |  The PO/PPO (or ISO) on the top left pane is at the root of the Pegging tree. The affected top level demands are visible at the leaves of the Pegging tree.                                                                                                    |
    |

​