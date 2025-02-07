---  

title: "Create New Requisition"   
draft: false 
type: Article

---

To create a new requisition, you can perform the following:

  1. From the **Requisition** menu, select **Create New Requisition** **or** in **Requisition \<Query Name>** window and click on **New Line Item** in action bar.
  2. **Create New Requisition** window opens and you can select the required radio button from the following:
  
      - [Charge to Account](Create-New-Requisition.md#charge-to-account)
      - [Charge to Work Order](Create-New-Requisition.md#charge-to-work-order)
      - [Add to Reorder](Create-New-Requisition.md#add-to-reorder)

## Charge to Account

The **Charge To Account** allows you to create requisitions that will be
charged to the account. When you create a requisition and choose **Charge To
Account** as the method for distributing costs, the system assigns the next
sequential requisition number designated in Setup Options.

To Create Charge to Account requisition:

  1. Navigate to **Create New Requisition > Charge To Account**.

The **Charge Information** grid opens with **Percent, Account, Area,
Department** , and **Project** columns. The **Total Percentage** field shows
the total percentage value. The value should not exceed 100%.

  2. You can perform the following operations in the grid:
     1. **Add Line** : Selecting this will allow you to add the new line. In the **New Charge** section, you can enter the value for **Percent** and **Amount**. You can select the required value for **Account, Area, Department** , and **Project** fields from the drop down. After updating the values, click **Add** to add that line to the grid. You can click **Cancel** to exit the New Charge section. You can add multiple lines but the total percentage value should not greater than 100.
     2. **Delete Line** : You can select any record in the grid and click on **Delete Line** to delete that line from the grid.
     3. **Edit Line** : You can select any grid record and in the New Charge window, you can update the existing values to the new required values. After updating the values, click **Add** to update the charge information. You can click **Cancel** to exit the New Charge section.


  3. Click **Next**. You can click Back to navigate to create new requisition page.
  4. If you selected Next, **Set Default Delivery Location** window opens. In the window, you can set default delivery information like Delivery number (starting with 1 for each requisition), Delivery date, time, area, deliver to, and delivery comments for the new requisition line. You cannot assign multiple delivery numbers to a single line item; however, you can connect the same item to different delivery numbers (which will display as multiple line items on the requisition).
  5. Click **Next** to proceed further and **Back** to navigate to previous page.
  6. If **Next** is selected, you can see that the Charge to account requisition is created (With **RQ** prefix) and the success toast message appears. The **New Requisition** opens in Update mode. For more information, see [Update Mode](Using-the-Requisition-Search.md#requisition-detail-window) section.

## Charge to Work Order

You can create a charge to work order requisition from the Planning tab of
Work Order Module. The requisition number will be as same the work order
number.

>[!note]
>Requisition can not be created for the work order with status **> =70**. Also,
requisition can not be created if the work order is not approved.

To Add a New Requisition using charge to work order:

  1. Navigate to **Create New Requisition > Charge To Work Order**.
  2. Enter the work order number in **Base Work Order** field. You can also search and update the required work order using search icon.
  3. Click **Next**. The **Charge Information** grid opens with **Percent, Account, Area, Department** , and **Project** columns. The **Total Percentage** field shows the percentage value. The value should not exceed 100%.
  4. Perform **Step 2 to Step 6** in [Charge to Account](Create-New-Requisition.md#charge-to-account).

>[!note]
>You can also see the created requisition in **Planning** tab of and expand the
**Requisition** panel.

## Add To Reorder

When creating an Add to Reorder requisition, the system assigns a requisition
number consisting of the constant MO plus a number generated from the today's
date. The date portion of the number uses the format YYYYMMDD (Defined in the
set up). For example, a reorder requisition created on January 16, 2011,
generates MO20110116 as the requisition number.

To create Add to Reorder requisition:

  1. Navigate to **Create New Requisition > Add To Reorder**.
  
  2. The **Charge Information** grid opens with **Percent, Account, Area, Department** , and **Project** columns. The **Total Percentage** field shows the percentage value. The value should not exceed 100%.
  3. See **Step 2 to Step 6** in [Charge to Account](Create-New-Requisition.md#charge-to-account) for more details.

