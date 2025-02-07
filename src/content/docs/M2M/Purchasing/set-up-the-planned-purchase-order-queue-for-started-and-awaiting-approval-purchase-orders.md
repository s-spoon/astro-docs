---

title: "Set up the planned purchase order queue for started and awaiting approval purchase ordersSet up the planned purchase order queue for started and awaiting approval purchase orders"
draft: false
type: Article

---

This feature is only available if you have the optional module **Planning and Scheduling** activated. You also must be using **M2M Planning** as part of your material planning.

There are many areas in Made2Manage where you must make decisions on how you will handle the planning of buy materials. The planned purchase queue handles all the planning functions associated with purchasing parts.

Use the **Planned Purchase Queue Setup (CSPLNPOQ)** window to set up the planned purchase order queue for newly planned purchase orders, for handling the change recommendations for existing purchase orders, and for started and awaiting approval purchase orders.

**To set up the planned purchase order queue for started and awaiting approval purchase orders**

1. Open the **Planned Purchase Queue Setup (CSPLNPOQ)** page.

    - Select **Utilities** > **Company Setup** > **Module Setup** > **Planned Purchase Queue Setup**.

        Or

    - Search for **CSPLNPOQ** or **Planned Purchase Queue Setup** in the **Navigation box** and then select **Planned Purchase Queue Setup**.

       The **Planned Purchase Queue Setup (CSPLNPOQ)** page appears.

2. Click the **Started/Awaiting Approval POs** tab.

3. In the **User Name** field, **Default** is listed and applies to settings for all users with access to the **Planned Purchase Queue (PLNPOQ)** page.

    1. To set up specific settings for all users:

         - If **New** on the **Toolbar** is available, no settings have been established for the **Default** user. Click **New** and make your selections based on how you want the **PLNPOQ** tabs displayed for **ALL** users.

         - If you can make the changes, settings have been established for the **Default** user. Change your settings for **ALL** users when they access the **PLNPOQ**.

    2. To set up specific settings for a single/specific M2M User:

        1. On the **Toolbar**, click **Browse** and select that **M2M User Login** from the **Browse** **For Planned Purchase Queue Setup** window.

        2. When that **M2M Login** is showing in the drop list, click **New** and enter the settings/selections you want applied to that **User Login** only.

        3. If you can make the changes to the settings/selections have already been entered for this single/specific **User Login**. Click to change the settings for that specific/single user login.

4. Select the filtering options:

   - Select the **Place PO Date Through a Specified Date** check box to filter PPO items with a place PO date on or before the **Place PO Date** specified on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Dock Date Through a Specified Date** check box to filter PPO items with Place Dates on or before the **Dock Date** specified on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Available Date Through a Specified Date** check box to filter PPO items whose Place Date is on or before the **Available Date** specified on the **Planned Purchase Queue (PLNPOQ)** page.

   - In the **Default Through Date To Current Date + (Days)** field, specify the default value in the **Planned Purchase Queue (PLNPOQ)** page.

     For example, if the value is 0, the default value is **Current Date**. If the value set here is **1** then the default value is current **Date plus 1**, and so on.

   - Select the **Highlight Planned Purchase Orders With Place PO Date** **< Current Date** check box to display those items highlighted in the selected color on the grid on the **Planned Purchase Queue (PLNPOQ)** page.

        To change the color that these items will be highlighted in, from the **Color** color picker, select a different color. Follow this instruction for the rest of the bulleted list.

   - Select the **Font Color** **For Purchase Orders Having Started Status** check box to display those items highlighted in the selected color on the grid on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Font Color** **For Purchase Orders Having Awaiting Approval Status** check box to display those items highlighted in the selected color on the grid on the **Planned Purchase Queue (PLNPOQ)** page.

5. On the **Toolbar**, click **Save**.

​