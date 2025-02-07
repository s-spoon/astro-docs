---

title: "View supply and demand information for sales orders"
draft: false
type: Article

---

You can view sales order information and modify job quantities to meet demand, subject to capacity and material constraints. The table at the top of the window shows the releases belonging to the current sales order line item. The table at the bottom of the window shows the job orders supporting the current sales order release.

You can also add or modify sales order line items and releases using Capable-to-promise (CTP).

**To view supply and demand information for sales orders**

1. Open the **Interactive Planning by Sales Order (PSINTPLS)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Planning** > **Interactive Planning by Sales Order**.

    Or

    - Search for **PSINTPLS** or **Interactive Planning by Sales Order** in the **Navigation box** and then select **Interactive Planning by Sales Order**.

        The **Interactive Planning by Sales Order (PSINTPLS)**  page appears.

2. Find the sales order:

- **Method 1**

    i. On the **Toolbar**, click **Search**.

    ii. In the **SO No** field, type the sales order number.

    > [!TIP] Type the starting characters of the SO number to search all sales order numbers beginning with those characters.

    iii. On the **Toolbar**, click **Search**.

    iv. Select the part from the **Search for Interactive Planning By Sales Order** window.

- **Method 2**

    i. On the **Toolbar**, click **Browse**.

    ii. Select the part from the **Browse for Interactive Planning By Sales Order** window.

3. In the **Show SO For** area of **Filters**, choose which parts on the sales order to view:

    | Click… | …to                                   |
    |--------|---------------------------------------|
    | Make   | Show non-stock parts you manufacture. |
    | Stock  | Show parts you keep in inventory.     |
    |

4. In the **Filter** area, choose how you want to limit the kind of information to display:

    | Click…          | …to                                                                                                                      |
    |-----------------|----------------------------------------------------------------------------|
    | All             | Include all parts.                                                                                                       |
    | Early to Demand | Include parts that have at least one supply (job or purchase order) currently set to arrive earlier than needed.         |
    | Late to Demand  | Include parts that have at least one supply (job or purchase order) currently set to finish or arrive later than needed. |
    |


    To see only the demands that satisfy the filter, select the **Filter on Details** check box. The results appear in the table at the top of the page.

    The main scroll list displays sales order release information for the sales order. The bottom scroll list shows job orders created to fulfill the sales order releases.

5. To change a sales order release using Capable-to-promise:

    - Highlight the release to change.

    - Under the **Action** column, click the ellipsis.

    - Select **Grid Actions** > **CTP Modify**.

        The **Add/Modify CTP** page appears.

    - Adjust the number of items in the **Quantity** box.

    - Click the **Calculate** button.

    > [!TIP] If you can supply the requested quantity, M2M Synchronizer bases the demand due date on the requested date and the earliest possible delivery date.

    The calculated results appear in the table at the bottom of the **CTP Modify** window.

    - If you are satisfied with the CTP order results, click the **Take Order** button.

    Or to cancel the CTP order, click the **Cancel** button.

Updated release information appears in the first table and updated job information appears in the second table on the **Interactive Planning by Sales Order** page.

6. To add a release to this sales order using Capable-to-promise:

    - On the **Toolbar**, click **More Actions**.

    - Select **More Actions** > **Actions** >**CTP Add**.

    The **CTP Add** window opens.

    - Click the arrow at the end of the **Date** box and choose the due date.

    - Type the number of items in the **Quantity** box.

    - To further specify acceptable delivery dates:

    i. In the **Early** box, type the number of days earlier than the requested due date that the customer would accept delivery.

    ii. In the **Late** box, type the number of days later than the requested due date that the customer would accept delivery.

    - To use minimum order quantity when responding to CTP requests, check the **Min Ord Qty** box, and change the number as needed.

    - To use maximum order quantity when responding to CTP requests, check the **Max Ord Qty** box, and change the number as needed.

    - To use multiple quantities when responding to CTP requests, check the **Mlt Ord Qty** box.

    - Click the **Calculate** button.

    > [!TIP] If you can supply the requested quantity, M2M Synchronizer bases the demand due date on the requested date and the earliest possible delivery date.

The calculated results appear in the table at the bottom of the **CTP Add** window.

    - If you are satisfied with the CTP order results, click the **Take Order** button.

    Or to cancel the CTP order, click the **Cancel** button.

The **CTP Add** window closes, and the new demand information appears in the first table on the **Interactive Planning by Sales Order** page.

7. To view or change job order information:

    - To change a job order due date to fulfill a sales order release:

    i. Click on the sales order in the list.

    ii. Under the **Action** column, click the ellipsis.

    iii. Select **Grid Actions** > **Add Job**.

    The **Add Supply** page appears.

    iv. Click the arrow at the end of the **Due Date:** box and choose a new due date.

- Click the **Save** button.