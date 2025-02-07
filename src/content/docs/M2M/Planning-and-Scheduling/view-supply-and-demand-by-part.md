---

title: "View supply and demand by part"
draft: false
type: Article

---

The **Supply/Demand By Part (PSSUPDEP)** page has the following two grids:

- **Demands**: Shows the part's demand.

- **Supplies**: Displays the part's supply information.

Use the **Supply/Demand By Part (PSSUPDEP)** page to:

- Check if there are enough parts on the floor to meet the supply and demand on your job orders.

- View projected available balance (PAB) for supply and demand for both make and stock parts.

You can also filter on parts by specific demands. For stock parts, the demand could be forecast, sales order, or a dependent demand. The supporting supplies can come from several sources. For non-stock parts, the demand is usually either a sales order or a dependent demand. Supporting supplies come from a single source such as a job order.

**To view supply and demand by part**

1. Open the **Supply/Demand by Part (PSSUPDEP)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Planning** > **Supply/Demand by Part**.

    Or

    - Search for **PSSUPDEP** or **Supply/Demand by Part** in the **Navigation box** and then select **Supply/Demand by Part**.

   The **Supply/Demand by Part (PSSUPDEP)**  page appears.

2. Select the part:

- **Method 1**

    i. On the **Toolbar**, click **Search** .

    ii. In the **Part No** field, type the part number.

    > [!TIP] Type the starting characters of the part number to search all part numbers beginning with those characters. For example, type **PB** to search all parts starting with "PB".

    iii. On the **Toolbar**, click **Search** .

    iv. Select the part from the **Browse For Supply/Demand by Part** window.

- **Method 2**

    i. On the **Toolbar**, click **Browse** .

    ii. Select the part from the **Browse For Supply/Demand by Part** window.

3. In the **Show Parts** area of **Filters**, show which parts on the bills of material to view:

    | Click…            | …to                                                                                    |
    |-------------------|----------------------------------------------------------------------------------------|
    | Make Parent       | Only parent or top level make items display. No bill of material components display.   |
    | Make Component    | Displays Make To Order components as determined by the parent item’s bill of material. |
    | Stock             |  Displays only Make To Stock items.                                                    |
    | Purchased         | Displays both Buy To Order and Buy To Stock items.                                     |
    | Inter Fac Sourced | Displays items produced by another facility (multi-facility only).                     |
    |

4. In the **Filter on Demand** area of **Filters**, choose how you want to limit the kind of information to display:

    | Click… | …to                                                                                                                      |
    |--------|--------------------------------------------------------------------------------------------------------------------------|
    | All    | Include all parts.                                                                                                       |
    | Late   | Include parts that have at least one supply (job or purchase order) currently set to finish or arrive later than needed. |
    | Early  | Include parts that have at least one supply (job or purchase order) currently set to arrive earlier than needed.         |
    |

> [!Note] To see only the demands that satisfy the filter, select the **Filter on Detail** check box.

The results appear in the **Demands** grid at the top of the page. The **Demands** grid displays capacity and load information for the current part.

5. To view or change details about a certain job order:

    a. Select the job order in the **Demands** grid.

    b. Under the **Action** column, click the ellipsis.

    c. Select **Grid Actions** > **Job Order**.

    The **Job Order (PSJOB)** page appears.

    d. Perform any of the following actions:

- To view the Job Gantt for a job order, under the **Action** column, click the ellipsis and select **Job Gantt**.

- To display the sales order associated with the job order (parent or component):

If the part is a make-to-order part, under the **Action** column, click the ellipsis and select **Interactive Planning by Sales Order**.

If the part is a make-to-stock part, , under the **Action** column, click the ellipsis and select **Supply/Demand by Part**.

6. To change a job order's quantity, in the **Quantity** field, type the new job order quantity.

7. Close the **Job Order (PSJOB)** page.

8. To choose specific part information to view for a make or stock part:

    a. On the **Toolbar**, click **More Actions**.

    b. Select **More Actions** > **Actions** > **Display Options**.

​