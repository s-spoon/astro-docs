---

title: "View and analyze the interactive planning changes"
draft: false
type: Article

---

The **Interactive Planning Grid (PSPLNGRD)** page lists all the planning changes done within a What-If session. You can set a scope and review the list of recommended planning changes related to your parts.

> [!Note] If you have set the new INI setting **ImmediatePersist4Purchasing** in the **[Plan]** section of the **SynchServ.ini** file to **Yes**, the supply changes for purchased parts are immediately persisted and the updated transactions are immediately sent to the ERP data base. As the purchased parts do not have any pending changes, they are not shown in the **Interactive Planning Grid (PSPLNGRD)** page.

**To analyze the interactive planning changes**

1. Open the **Interactive Planning Grid (PSPLNGRD)** page.

    - Select **Planning**  > **Interactive Planning Grid**.

    Or

    - Search for **PSPLNGRD** or **Interactive Planning Grid** in the **Navigation box** and then select **Interactive Planning Grid**.

        The **Interactive Planning Grid (PSPLNGRD)**  page appears.

2. Specify the scope:

    - From the **Planner** list, select the planner to filter by the planner.

    - From the **Product Class** list, select the product class to filter by the product class.

    - In the **Part No** field, type the part number to view the interactive planning changes of a specific part.

    - In the **Description** field, type the part description to select parts that match the description.

    The parts that match the scoping parameters are listed in a grid in the **Parts** pane.

3. In the **Parts** pane, select the part for which you want to modify the supplies.

4. In the **Supplies** pane, edit the transactions in the grid :

    - In the **Quantity** column, change the quantity to be supplied.

    - In the **Due Date** column, change the due date.

    - In the **Firm** column, select the check box to firm the supply order.

    > [!Note]     
    The Automatic Planning function cannot delete a firmed order nor can it modify its quantity.  
    Based on the corresponding INI settings in the **SynchServ.ini** file, firming also disallows changing of the other supply due dates:

    \- **ModifyFirmedJobDueDates**: Disallows the modification of the Job Due Date if set to "No".

    \- **ModifyFirmedPPODueDates**: Disallows the modification of the Planned Purchase Order Due Date if set to "No". 
    
    \- **ModifyFirmedISODueDates**: Disallows the modification of the Supply Order Due Date if set to "No".

    - In the **Accept** column, select the check box to approve the transaction.

5. In the **Scope** pane, apply / persist the transactions:

    > [!Note] All non-accepted changes that have not been applied or persisted are reversed when you commit the changes done in the What-If session.

    - Click **Apply** to delete the transactions that were not accepted.

    > [!Note] After you click **Apply**, you can use the interactive planning tools such as the **Material Availability** window and the **Supply/Demand by Part** window. Select the part in the **Parts** pane and click **Related** on the grid toolbar to access these windows and review/analyze the supply and demand and projected inventory situation based on the decisions made.

    - Click **Persist** to delete the transactions that were not accepted and persist all the accepted transactions to the ERP database.

    > [!Note] The What-If session does not end and all changes that have been committed are visible in the ERP system.

​