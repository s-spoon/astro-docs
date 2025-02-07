---

title: "Set up the planned purchase order queue for recommended changes to existing purchase orders"
draft: false
type: Article

---

This feature is only available if you have the optional module Planning and Scheduling activated. You also must be using M2M Planning as part of your material planning.

There are many areas in Made2Manage where you must make decisions on how you will handle the planning of buy materials. The planned purchase queue handles all the planning functions associated with purchasing parts.

Use the **Planned Purchase Queue Setup (CSPLNPOQ)** page to set up the planned purchase order queue for newly planned purchase orders, for handling the change recommendations for existing purchase orders, and for started and awaiting approval purchase orders.

**To set up the planned purchase order queue for started and awaiting approval purchase orders**

1. Open the **Planned Purchase Queue Setup (CSPLNPOQ)** page.

    - Select **Utilities** > **Company Setup** > **Module Setup** > **Planned Purchase Queue Setup**.

        Or

    - Search for **CSPLNPOQ** or **Planned Purchase Queue Setup** in the **Navigation box** and then select **Planned Purchase Queue Setup**.

       The **Planned Purchase Queue Setup (CSPLNPOQ)** page appears.

2. Click the **Recommended Changes to Existing POs** tab.

    In the **User Name** field, **Default** is displayed and applies to settings for all users with access to the **Planned Purchase Queue (PLNPOQ)** page.

      1. To setup specific settings for all users:

         - If only **New** is available on the **Toolbar**, no settings have been established for the **Default** user. Click **New** and make your selections based on how you want the **PLNPOQ** tabs displayed for **ALL** users.

         - If you can make changes to the settings that have been established for the **Default** user. Change your settings for **ALL** users when they access the **PLNPOQ**.

    2. To set up specific settings for a single/specific M2M User:

        1. On the **Toolbar**, click **Browse**, and select that **M2M User Login** from the **Browse For Planned Purchase Queue Setup** window.

        2. When that **M2M Login** is showing in the list, click **New** and enter the settings/selections you want applied to that **User Login** only.

        3. If you can make the changes to the settings/selections have already been entered for this single/specific **User Login**. Click to change the settings for that specific/single user login.

3. Select or clear each check box to display or not display the option on the **Planned Purchase Queue (PLNPOQ)** page. Items not checked will be grayed out on the **PLNPOQ** page.

   - Select the **Highlight Recommendations to Expedite Purchase Orders** check box to display those items highlighted in the selected color on the **Planned Purchase Queue (PLNPOQ)** page.

        To change the color that these items will be highlighted in, click the arrow at the end of **Highlight Color** field and select a different color. Follow this instructions for the rest of the bulleted items.

   - Select the **Highlight Recommendations to Delay Purchase Orders** check box to display those items highlighted in the selected color on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Highlight Recommendations to Delete Purchase Orders** check box to display those items highlighted in the selected color on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Make From Qty & To Qty Italic, if To Qty < From Qty** check box to display those items highlighted in the selected color on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Font Color for Planned Purchase Orders** having **Started Status** check box to display those items highlighted in the selected color on the **Planned Purchase Queue (PLNPOQ)** page.

   - Select the **Font Color for Planned Purchase Orders** having **Awaiting Approval Status** check box to display those items highlighted in the selected color on the **Planned Purchase Queue (PLNPOQ)** page.

4. On the **Toolbar**, click **Save**.

​