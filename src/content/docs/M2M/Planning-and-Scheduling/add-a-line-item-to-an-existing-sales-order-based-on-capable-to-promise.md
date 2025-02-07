---

title: "Add line item to existing sales order based on Capable-to-Promise"
draft: false
type: Article

---

You can change a plan or schedule by adding an item to an existing sales order. If a customer decides to increase the quantity of an item, you can enter the change to see if you can deliver the customer's new request by the due date before you accept the change.

An item's demand appears in the window's first table. Several supplies may support each demand. The supplies appear in the window's second table.

**To add line item to existing sales order based on Capable-to-Promise**

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

2. Select the part from the **Browse For Supply/Demand by Part** window.

- **Method 2**

    i. On the **Toolbar**, click **Browse** .

    ii. Select the part from the **Browse For Supply/Demand by Part** window.

3. To filter the parts based on demand, in the **Filter on Demand** area, select one of the options listed from **Filters**:

    | Click | ...to                                                                                                                   |
    |-------|-------------------------------------------------------------------------------------------------------------------------|
    | All   | Include all parts                                                                                                       |
    | Late  | Include parts that have at least one supply (job or purchase order) currently set to finish or arrive later than needed |
    | Early | Include parts that have at least one supply (job or purchase order) currently set to arrive earlier than needed         |
    |

4. To see only the demands that satisfy the filter, select the **Filter On Detail** check box. The results appear in **Filters**.

5. On the Toolbar, click **More Actions**.

6. Select **More Actions** > **Actions** > **CTP Add**.

    The **Add/Modify CTP (PSCTP)** window appears.

7. In the **Date** field, specify the due date.

8. In the **Quantity** field, specify the number of items needed.

9. Click the **SO Number** lookup reference button and select the sales order number from the **Lookup For SO Number** window.

The **Take Order** button becomes active when you choose a sales order. If you do not choose a sales order, the process is considered a What-If query, and you cannot save the results or accept a capable-to-promise (CTP) order.

10. Specify the **Lot Size**:

    - To allow only the minimum order quantity for a CTP request, select the **Use Min Ord Qty** check box, and specify the minimum order quantity.

    - To allow only the maximum order quantity for a CTP request, select the **Use Max Ord Qty** check box, and specify the maximum order quantity.

    - To allow multiple quantities, select the **Use Mlt Ord Qty** check box, and specify the maximum order quantity.

11. Click **Calculate**.

If you can supply the requested quantity, M2M Planning and Scheduling bases the demand due date on the requested date and the earliest possible delivery date.

The calculated results appear in the **Supplies** grid.

12. If you are satisfied with the CTP order results, click **Take Order**.

> [!Note] To cancel the CTP order, click **Cancel**.

13. Close the **Add/Modify CTP** window.

You can view the new demand information in the **Demands** grid of the **Supply/Demand By Part (PSSUPDEP)** page.

​