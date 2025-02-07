---

title: "Set up the planned purchase order queue for started and awaiting approval purchase orders"
draft: false
type: Article

---

In Made2Manage ERP, use the **Planned Purchase Queue Setup (CSPLNPOQ)** page to set up the planned purchase order (PPO) queue for started and awaiting approval purchase orders.

**To set up the planned purchase order queue for started and awaiting approval purchase orders in Made2Manage ERP**

1. Open the **Planned Purchase Queue Setup (CSPLNPOQ)** page.

    - Select **Utilities** > **Company Setup** > **Module Setup** > **Planned Purchase Queue Setup**.

    Or

    - Search for **CSPLNPOQ** or **Planned Purchase Queue Setup** in the **Navigation box** and then select **Planned Purchase Queue Setup**.

        The **Planned Purchase Queue Setup (CSPLNPOQ)** page appears.

2. Click the **Started/Awaiting Approval POs** tab.

3. Set the filtering options:

    - Select the **Place PO Date Through A Specified Date** check box to filter PPO items with a place PO date on or before the Place PO Date specified in the **Planned Purchase Order Queue (PLNPOQ)** page.

    - Select the **Dock Date Through A Specified Date** check box to filter PPO items with Place Dates on or before the Dock Date specified in the **Planned Purchase Order Queue (PLNPOQ)** page.

    - Select the **Available Date Through A Specified Date** check box to filter PPO items whose Place Date is on or before the Available Date specified in the **Planned Purchase Order Queue (PLNPOQ)** page

    - In the **Default Through Date To Current Date + (Days)** fields, enter the number of days from the current date which should be considered as the default through date.

    For example, if you enter **0**, the default value is the Current Date. If you enter **1**, then the default value is one day after the current Date.

4. Specify the highlight options:

    - Select the **Highlight Planned Purchase Orders With Place PO Date \< Current Date** check box to display the planned purchase orders with a place purchase order date lesser than the current date. Specify the color in which you want to highlight these purchase orders in the **Highlight Color** field.

    - Select the **Font Color For Planned Purchase Orders Having Started Status** check box to display the planned purchase orders that have a **Started** status in the color specified in the **Highlight Color** field.

    - Select the **Font Color for Planned Purchase Orders Having Awaiting Approval Status** check box to display the planned purchase orders that have a **Awaiting Approval** status in the color specified in the **Highlight Color** field.

5. On the **Toolbar**, click **Save**.

​

