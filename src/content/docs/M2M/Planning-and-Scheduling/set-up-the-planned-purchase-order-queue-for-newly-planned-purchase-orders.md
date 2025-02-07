---

title: "Set up the planned purchase order queue for newly planned purchase orders"
draft: false
type: Article

---

In Made2Manage ERP, use the **Planned Purchase Queue Setup (CSPLNPOQ)** page to:

- Set up the planned purchase order (PPO) queue for:

- Newly planned purchase orders

- Started and awaiting approval purchase orders

- Handle the change recommendations for existing purchase orders.

**To set up the planned purchase order queue for newly planned purchase orders in Made2Manage ERP**

1. Open the **Planned Purchase Queue Setup (CSPLNPOQ)** page.

    - Select **Utilities** > **Company Setup** > **Module Setup** > **Planned Purchase Queue Setup**.

    Or

    - Search for **CSPLNPOQ** or **Planned Purchase Queue Setup** in the **Navigation box** and then select **Planned Purchase Queue Setup**.

        The **Planned Purchase Queue Setup (CSPLNPOQ)** page appears.

2. Click the **New Planned Purchase Orders** tab.

3. On the **Toolbar**:

    - Click **New** if you want to specify new settings.

    - Click **Copy** to copy the settings of the user displayed in the screen.

4. Click the **User Name** lookup reference button and select the user name from the **Lookup For User Name** window.

5. Set the filtering options:

    - Select the **Release Date Through A Specified Date** check box to filter PPO items with a release date on or before the Release Date specified on the **Planned Purchase Order Queue (PLNPOQ)** page.

    - Select the **Place PO Date Through A Specified Date** check box to filter PPO items with a place PO date on or before the Place PO Date specified on the **Planned Purchase Order Queue (PLNPOQ)** page.

6. Specify the highlight options:

    - Select the **Highlight Planned Purchase Orders With Place PO Date \< Current Date** check box to display the planned purchase orders with a place purchase order date lesser than the current date. Specify the color in which you want to highlight these purchase orders in the **Highlight Color** field.

    - Select the **Highlight Planned Purchase Orders With Release Date \< Current Date** check box to display the planned purchase orders that have a release date lesser than the current date. Specify the color in which you want to highlight these purchase orders in the **Highlight Color** field.

    - Select the **Highlight Planned Purchase Orders, If a Started/Awaiting Approval PO Exists for a Part/Vendor** check box to display the planned purchase orders which are in the **Started**/**Awaiting Approval** Status. Specify the color in which you want to highlight these purchase orders in the **Highlight Color** field.

    - Select the **Make Planned Purchase Orders, Having Non-Primary Assigned Vendor, Italic** check box to display planner purchase orders that have non-primary vendors assigned in italics.

    - Select the **Font Color for Planned Purchase Orders, If Blanket PO item Exists for a Part/Vendor** check box to display the planned purchase orders that have a blanket PO item for a part/vendor in the color specified in the **Highlight Color** field.

    - Select the **Font Color for Planned Purchase Orders, If a Started/Awaiting Approval PO exists for a Vendor** check box to display the planned purchase orders that have a PO with a **Started**/**Awaiting Approval** status for vendor in the color specified in the **Highlight Color** field.

7. In the **Started/Awaiting Approval POs** tab:

    - Select the **Dock Date Through A Specified Date** check box to filter PPO items with Place Dates on or before the Dock Date specified on the **Planned Purchase Order Queue (PLNPOQ)** page.

    - Select the **Available Date Through A Specified Date** box to filter PPO items whose Place Date is on or before the Available Date specified on the **Planned Purchase Order Queue (PLNPOQ)** page.

    - In the **Default Through Date To Current Date + (Days)** fields, enter the number of days from the current date which should be considered as the default through date.

    For example, if you enter **0**, the default value is the Current Date. If you enter **1**, then the default value is one day after the current Date.

8. On the **Toolbar**, click **Save**.

​