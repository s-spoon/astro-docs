---

title: "View supply and demand information for parts"
draft: false
type: Article

---

The **Interactive Planning by Part** window shows supply and demand information for standard parts. Use this window to view part information and to modify job quantities to meet demand, subject to capacity and material constraints.

> [!Note] To view supply and demand information for non-standard parts, see "[View supply and demand information for sales orders](view-supply-and-demand-by-sales-order.md)".

**To view supply and demand by part**

1. Open the **Interactive Planning By Part (PSINTPLP)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Planning** > **Interactive Planning By Part**.

    Or

    - Search for **PSINTPLP** or **Interactive Planning By Part** in the **Navigation box** and then select **Interactive Planning By Part**.

        The **Interactive Planning By Part (PSINTPLP)** page appears.

2. Select the part:

- **Method 1**

    i. On the **Toolbar**, click **Search** .

    ii. In the **Part No** field, type the part number.

    > [!TIP] Type the starting characters of the part number to search all part numbers beginning with those characters. For example, type **PB** to search all parts starting with "PB".

    iii. On the **Toolbar**, click **Search** .

    iv. Select the part from the **Search For Interactive Planning By Part** window.

- **Method 2**

    i. On the **Toolbar**, click **Browse** .

    ii. Select the part from the **Browse For Interactive Planning By Part** window.

3. In the **Show Parts** area of **Filters**:

    a. Choose which parts on the bills of material to view:

    | Click…             | …to                                                     |
    |--------------------|---------------------------------------------------------|
    | Make Parent        | Show the highest level non-stock part you manufacture.  |
    | Stock              | Show parts you keep in inventory.                       |
    | Make Component     | Show component non-stock parts.                         |
    | Purchased          | Show items you purchase.                                |
    | Inter Fac Sourced  | Show items that come from another facility.             |
    | Auto Planned       | To view automatically planned parts.                    |
    | Manually Planned   | To view manually planned parts.                         |

    b. From the **Planner** list, select the inventory management level.

    c. In the **View Based on** area, click:

    - **Plan**: To view the supply/demand information based on planning parameters.

    - **Schedule**: To view the supply/demand information based on scheduling parameters.

    d. Choose how you want to limit the kind of information to display in the **PAB Filter** list:

    | Click…        | …to                                                                                                             |
    |---------------|-----------------------------------------------------------------------------------------------------------------|
    | All           | Include all parts.                                                                                              |
    | PAB(SO) \< 0    | Include parts for which the Projected Available Balance on the Sales Order is negative for at least one period. |
    | PAB(SO) > 0  | Include parts for which the Projected Available Balance on the Sales Order is positive for at least one period. |

    e. Select the **Filter on Details** check box to only view demands that satisfy the filter condition.

4. To match supply to demand, select **More Actions** > **Actions** > **Balance**.

5. To choose specific part information to view for a make or stock part, select **More Actions** > **Actions** > **Display Options**.

6. To view the detailed demands for a specific period.

    a. Select the time period in the grid.

    b. Under the **Action** column, click the ellipsis.

    c. Select **Grid Actions** > **View Demands**.

    d. The **View Demands (PSVUDMD)** window appears.

7. To view the purchase order details of purchased parts:

    a. In the **Supplies** grid, select the purchase order.

    b. Under the **Action** column, click the ellipsis.

    c. Select **Grid Actions** > **Purchase Order**.

​