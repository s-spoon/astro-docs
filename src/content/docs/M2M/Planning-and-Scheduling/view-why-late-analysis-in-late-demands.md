---

title: "View Why Late Analysis in Late Demands"
draft: false
type: Article

---

1. Open the **Why Late Analysis (PSWHYLTA)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Scheduling** > **Why Late Analysis**.

    Or

    - Search for **PSWHYLTA** or **Why Late Analysis**  in the **Navigation box** and then select **Why Late Analysis** .

        The **Why Late Analysis (PSWHYLTA)**  page appears.

2. Click on the **Late Demands** tab.

3. In the **Filter** grid, select any one of the following options:

    - **Late Demand** to filter based on late demands.

    - **Inside Shipping Buffer** to filter orders which are within the shipping buffer.

    - In the **How Late (Days)** field, fill the minimum number of day/days the demand is late by.

    - Enable the check box/boxes from the following options to filter the type of demand to display:

    - Sales Orders

    - Unconsumed Forecasts

    - Safety Stock

    - IDOs

    The list of delayed demands are displayed in the grid below.

4. Click on a Order number, this will populate the reasons for lateness in the Why Late table.

5. Click on a **Late Reason**, this will expand the **Peg Supplies** grid and display the Part number which is causing the delay.

The following table describes the grids in the **Late Demands** tab:

    | Field        | Description                                                                                                                                 |
    |--------------|----------------------------------------------------------------------------------------------|
    | Filter       | Filter settings lets the user filter the late demands based on the degree of lateness and the demand types. The default is to show all the late demands.                                                                                                                                             |
    | Late Demands |  This grid is populated with all the late external demands (SOs, IDOs, UFCSTs and Safety Stock) subject to the user defined filter settings. By default the late demands are sorted in descending sequence on Late Days. Upon selection of a demand record, the corresponding late reasons along with the associated job operation/material are listed in the bottom left pane.  The grid shows the following information: Order No. Type Part No./Rev Due Date Schedule Date Days Late The **Late Days** is the difference between the Schedule Date and the Due Date indicating the magnitude of the lateness. |
    | Late Reasons | This grid is populated with the list of reasons causing lateness to the selected demand on the above pane. Each late reason is associated with either a delayed job operation, or a delayed job material. The grid shows the following information: Late Reason Constraint Type Op No. Part No./Rev Days Late Due Date Schedule Date                                                                                                                       |
    | Peg Supplies | Upon selection of a Late Reason on the left side, the Peg Supplies pane on the right side is populated as follows:  The root of the Peg Supplies tree is the selected demand on the left side.   The selected record on the Peg Supplies tree is the late job selected on the bottom left pane.   If the Type on the bottom left pane is **Job Op**, then this Operation is visible and is selected on the Peg Supplies.  If the Type on the bottom left pane is **Job Material**, then this Material is visible and is selected on the Peg Supplies.                                                            |
    |

​