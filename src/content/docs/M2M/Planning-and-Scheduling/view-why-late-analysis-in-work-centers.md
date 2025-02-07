---

title: "View Why Late Analysis in Work Centers"
draft: false
type: Article

---

1. Open the **Why Late Analysis (PSWHYLTA)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Scheduling** > **Why Late Analysis** .

    Or

    - Search for **PSWHYLTA** or **Why Late Analysis**  in the **Navigation box** and then select **Why Late Analysis** .

    The **Why Late Analysis (PSWHYLTA)**  page appears.

2. Click on the **Work Centers** tab.

3. On the **Work Centers Causing Lateness** grid, select a Work Center Name.

The list of Late Job Operations are displayed in the grid below.

4. In the **Order No.** column, select an order number.

5. The **Peg Demands** grid on the right side shows the affected top level demands. The top level demands that are late are highlighted in red.

    > [!Note] The **Peg Demands** may show multiple top level demands. At least one of the top level demands should be late, but not necessarily all of them.

The following table describes the grids in the **Work Centers** tab:

| Grid                          | Description                                                                                                   |
|-------------------------------|-------------------------------------------------------------|
| Work Centers Causing Lateness | Work centers that contribute for a lateness of at least one job are listed in this pane. By default the work centers are sorted in descending sequence on Days Late. The Days Late is the sum of all the late job operations of a work center. Upon selection of a work center, the list of late job operations is refreshed in the **Late Job Operations** grid below. |
| Late Job Operations           | The job operations that are late due to the capacity constraint of the above work center are listed in this pane. By default the job operations are sorted by schedule start time of the operation (Operation Start).  The Due Date and Schedule Date are properties of the job. The Days Late is the lateness due to the above work center constraint.                 |
| Peg Demands                   | The Job selected on the bottom left pane in the **Late Job Operations** grid is at the root of the Pegging tree. The affected top level demands are visible on the leaves of the Pegging tree. The late top level demands are highlighted in red.  As needed the Resource Gantt can be opened via the Related menu.                                                     |
|

​