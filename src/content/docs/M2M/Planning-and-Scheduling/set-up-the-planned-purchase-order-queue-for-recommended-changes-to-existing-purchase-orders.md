---

title: "Set up the planned purchase order queue for recommended changes to existing purchase orders"
draft: false
type: Article

---

In Made2Manage ERP, use the **Planned Purchase Queue Setup (CSPLNPOQ)** page to handle the change recommendations for existing purchase orders.

**To set up the planned purchase order queue for started and awaiting approval purchase orders in Made2Manage ERP**

1. Open the **Planned Purchase Queue Setup (CSPLNPOQ)** page.

    - Select **Utilities** > **Company Setup** > **Module Setup** > **Planned Purchase Queue Setup**.

    Or

    - Search for **CSPLNPOQ** or **Planned Purchase Queue Setup** in the **Navigation box** and then select **Planned Purchase Queue Setup**.

        The **Planned Purchase Queue Setup (CSPLNPOQ)** page appears.

2. Click the **Recommended Changes to Existing POs** tab.

3. Set the filtering options:

    - Select the **Show Date Changes** check box to allow the user to view PPO change recommendations based on date changes on the **PLNPOQ** window.

    - Select the **Show Expedite Orders** check box to view only orders for which the required date has been brought forward.

    - Select the **Show Delay Order** check box to view orders that are delayed.

    - In the **Show Date Difference** fields, specify the number of days to view orders whose date differ by the set value.

    > [!TIP] You can overwrite this default in the **Planned Purchase Order Queue (PLNPOQ)** window.

    - Select the **Show Quantity Changes** check box to show planned purchase orders having the recommended quantity change.

    - Select the **Show Deletes** check box to show items with a recommended deletion.

    - Select the check box next to each individual range that you want to be available for filtering on the **Planned Purchase Order Queue (PLNPOQ)** window.

4. In the **Default Sort Order** area, select the field on which the planned purchase queue is sorted by default.

> [!TIP] You can change the sort order in the **Planned Purchase Order Queue (PLNPOQ)** window.

5. Specify the highlight options:

    - Select the **Highlight Recommendations To Expedite Purchase Orders** check box to highlight the purchase orders that are recommended to be expedited in the color selected in the **Highlight Color** field.

    - Select the **Highlight Recommendations To Delay Purchase Orders** check box to highlight the purchase orders that are recommended for delay in the color selected in the **Highlight Color** field.

    - Select the  **Highlight Recommendations To Delete Purchase Orders** check box to highlight the purchase orders that are recommended for deletion in the color selected in the **Highlight Color** field.

    - Select the **Make From Qty And To Qty Italic, If To Qty \< From Qty** check box to display the **From Qty** and **To Qty** values in italic in the grid of the **Recommended Changes to Existing POs** tab of the **Planned Purchase Order Queue (PLNPOQ)** window where the **To Qty** value is lesser than the **From Qty** value.

    - Select the **Font Color for Planned Purchase Orders Having Started Status** check box to display the planned purchase orders in **Started** status in the color selected in the **Highlight Color** field.

    - Select the **Font Color for Planned Purchase Orders Having Awaiting Approval Status** check box to display the planned purchase orders having **Awaiting Approval** status in the color selected in the **Highlight Color** field.

6. On the **Toolbar**, click **Save**.