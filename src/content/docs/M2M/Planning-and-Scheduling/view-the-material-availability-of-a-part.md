---

title: "View the material availability for a part"
draft: false
type: Article

---

The **Material Availability (PSMTLAVL)** page projects material availability based on each part's on-hand quantity and the orders that make/buy or use the part.

**To view the material availability for a part**

1. Open the **Material Availability (PSMTLAVL)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Planning** > **Material Availability**.

    Or

    - Search for **RPPSMTLAVLMAVL** or **Material Availability** in the **Navigation box** and then select **Material Availability**.

        The **Material Availability (PSMTLAVL)**  page appears.

2. Select the part:

- **Method 1**

    i. On the **Toolbar**, click **Search**.

    ii. In the **Part No** field, type the part number.

    > [!TIP] Type the starting characters of the part number to search all part numbers beginning with those characters. For example, type **PB** to search all parts starting with "PB".

    iii. On the **Toolbar**, click **Search**.

- **Method 2**

    i. On the **Toolbar**, click **Browse**.

    The **Browse For Material Availability** window appears.

    ii. Select the row that contains the required part, and click **Select**.

    Or double-click the row that contains the required part.

3. In the **Show Parts** section, select the parts to view:

    | Select…           | …to display                                                                   |
    |-------------------|-------------------------------------------------------------------------------|
    | Make Parent       | Only parent or top level make items. No bill of material components display.  |
    | Make Component    | Make-To-Order components as determined by the parent item’s bill of material. |
    | Stock             | Only Make-To-Stock items.                                                     |
    | Purchased         | Both Buy-To-Order and Buy-To-Stock items.                                     |
    | Inter Fac Sourced | Items produced by another facility (multi-facility only).                     |
    |

4. In the **Show Parts** section, in the **Planner** list, select the planner to filter by planner.

5. In the **Filter** section, choose how you want to limit the information to display:


| Click…     | …to show                                                                                                                                                                                      |
|------------|-------------------------------------------------------------------------------------|
| All        | All parts.                                                                                  |
| PAB \< 0   | Parts having a negative PAB (Project Available Balance). For Make parts, the PAB is calculated based on SO. For Stock parts, the PAB is calculated based on the maximum of SO and Forecast (M). |
| PAB \< SS  | Parts having a PAB lesser than the Safety Stock. This is applicable only for Stock parts.                                                                                                       |
| PAB >0    | Parts having a positive PAB.                                                                                                                                                                    |
|

6. In the **View Based On** area, click:

    - **Plan**: To view the supply/demand based on the Plan results.

    - **Schedule**: To view the supply/demand based on the Schedule results.

7. In the **Show Parts** section, select the following check boxes:

    - **Auto Planned**: To show automatically planned parts.

    - **Manually Planned**: To show manually planned parts.

    The results appear in the grid under the **Supplies And Demands** section.

8. To view or change details about a certain job order:

    a. In the grid, select the job order.

    b. Under the **Action** column, click the ellipsis.

    c. Select **Grid Actions** > **Job Order**.

    The **Job Order (PSSDJO)** page appears.

    d. In the **View Based On** area, click the ellipsis in the Action column and perform any of the following actions:

    - To view the Job Gantt for a job order select **Job Gantt**.

    - To display the sales order associated with the job order (parent or component) Select **Interactive Planning by Sales Order**.

    - If the part is a make-to-stock part, select **Supply/Demand by Part**.

    e. Close the **Job Order (PSSDJO)** page.

9. To choose specific part information to view for a make or stock part:

    a. Under the **Action** column, click the ellipsis.

    b. Select **Grid Actions** > **Display Options**.



​