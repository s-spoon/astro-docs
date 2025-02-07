---

title: "Set up the planned purchase order queue for newly planned purchase order"
draft: false
type: Article

---

This feature is only available if you have the optional module **Planning and Scheduling** activated. You also must be using **M2M Planning** as part of your material planning.

There are many areas in Made2Manage where you must make decisions on how you will handle the planning of buy materials. The planned purchase queue handles all the planning functions associated with purchasing parts.

Use the **Planned Purchase Queue Setup (CSPLNPOQ)** window to set up the planned purchase order queue for newly planned purchase orders, for handling the change recommendations for existing purchase orders, and for started and awaiting approval purchase orders.

**To set up the planned purchase order queue for newly planned purchase orders**

1. Open the **Planned Purchase Queue Setup (CSPLNPOQ)** page.

    - Select **Utilities** > **Company Setup** > **Module Setup** > **Planned Purchase Queue Setup**.

        Or

    - Search for **CSPLNPOQ** or **Planned Purchase Queue Setup** in the **Navigation box** and then select **Planned Purchase Queue Setup**.

       The **Planned Purchase Queue Setup (CSPLNPOQ)** page appears.

2. Click the **New Planned Purchase Orders** tab.

3. In the **User Name** field, **Default** is listed and applies to settings for all users with access to the **Planned Purchase Queue (PLNPOQ)** page.

    1. To setup specific settings for all users:

         - If **New** on the **Toolbar** only is available, no settings have been established for the **Default** user. Click **New** and make your selections based on how you want the **PLNPOQ** tabs displayed for **ALL** users.

         - If you can make changes to the settings that have been established for the **Default** user. Change your settings for **ALL** users when they access the **PLNPOQ**.

    2. To set up specific settings for a single/specific **M2M User**:

        1. On the **Toolbar**, click **Browse**, and select **M2M User Login** from the **Browse** **For Planned Purchase Queue Setup** window.

        2. When that **M2M Login** is showing in the list, click **New** and enter the settings/selections you want applied to that **User Login** only.

        3. If you can make the changes to the settings/selections have already been entered for this single/specific **User Login**. Click to change the settings for that specific/single user login.

4. Select the filtering options:

   - Select the **Release Date Through a Specified Date** check box to filter **PPO items** with a release date on or before the **Release Date** specified on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Place PO Date Through a Specified Date** check box to filter **PPO items** with a place **PO date** on or before the **Place PO Date** specified on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Highlight Planned Purchase Orders with Place PO Date < Current Date** check box to display those planned purchase orders highlighted in the selected color on the **Planned Purchase Queue (PLNPOQ)** page.

   - To change the color that these items will be highlighted, in the **Color** list select a different color. Follow this instruction for the rest of the bulleted list.

   - Select the **Highlight Planned Purchase Orders with Release Date < Current Date** check box to display those planned purchase orders highlighted in the selected color on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Highlight Planned Purchase Orders,** **If a** **Started/Awaiting Approval** **PO Exists For a** **Part/Vendor** check box to display those planned purchase orders highlighted in the selected color on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Make Planned Purchase Orders**, **Having Non-Primary Assigned Vendor**, **Italic** check box to display those planned purchase orders in italics on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Font Color For Planned Purchase Orders**, **If Blanket PO Item Exists For a Part/Vendor** check box to display those planned purchase orders highlighted in the selected color on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Font Color for Planned Purchase Orders**, **If a Start/Awaiting Approval PO** **Exists For a Vendor** check box to display those planned purchase orders highlighted in the selected color on the **Planned Purchase Queue (PLNPOQ)** page.

5. Click the **Started/Awaiting Approval POs** tab.

   - Select the **Dock Date Through a Specified Date** check box to filter **PPO items** with **Place Dates** on or before the **Dock Date** specified on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Available Date Through a Specified Date** check box to filter **PPO items** whose **Place Date** is on or before the **Available Date** specified on the **Planned Purchase Queue (PLNPOQ)** page.

   - Determine what should be the default value in the **Planned Purchase Queue (PLNPOQ)** page:

   - Select the **Default Through Date to Current Date + (Days)** check box and enter the numerical value.

        For example, if the value is **0**, the default value is **Current Date**. If the value set here is **1** then the default value is **Current Date plus 1**, and so on.

6. On the **Toolbar**, click **Save**.

​