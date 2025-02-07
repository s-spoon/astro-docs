---  

title: "Create Work Order"  
draft: false 
type: Article


---

This feature allows creating new work orders that can be scheduled to work at
a future date. The work orders can also be created from the Equipment Search
and Serial Search screens.

To create a Work Order, you can perform the following:

  1. Click **Create Work Order** under the **Work Management** menu. **New Work Order** page opens.
  2. Select the **Work Order Type** from the drop down. Click **Next**. Create New Work Order page continues to update the further information. See for more details.
     * **Routine** : allows you to create Routine Work Orders. Routine work orders involve scheduled maintenance tasks aimed at maintaining equipment or systems in optimal condition. These tasks, such as inspections, lubrication, cleaning, and minor repairs, occur regularly—daily, weekly, or monthly. It is the default work order type in the drop down.
     * **Emergency** : allows you to create Emergency Work Orders. Emergency work orders address urgent issues that require immediate attention to prevent significant downtime or safety hazards. These work orders are of high priority and demand a quick response, often bypassing normal approval processes to expedite resolution and ensure critical equipment or safety-related issues are handled promptly.
     * **Standard Request** : allows you to create Standard Request work orders. Standard Request work orders are used for general maintenance or repair requests that are expected during day-to-day operations. They come with default information, eliminating repetitive keystrokes and providing shortcuts for the work order entry process. These work orders streamline the handling of routine work requests, making the process more efficient.
     * **PM-Master Plan** : allows you to create Preventive Maintenance work orders. PM-Master Plan work orders are created for Preventive Maintenance (PM) tasks aimed at preventing equipment failures and prolonging asset life. These work orders are part of comprehensive schedules (master plans) for preventive maintenance tasks, ensuring consistent and thorough maintenance coverage over a defined period.

        >[!NOTE]
        >Based on the master plan the PM Work Order gets generated.



>[NOTE]
>Only four types of work orders can be created in EAM: **Routine** ,
**Emergency** , **Standard Request** , and **PM-Master Plan**. New work
order types cannot be added to the system. Standard Requests and Master Plans
are template-based work orders designed to generate pre-filled executable work
orders.

  3. You can also add the Task or Sub task to the existing work orders. To add, click **Task or Subtask** radio button. You can enter or search the required work order in **Base Work Order** field. Once entered, click **Next**. See for more details.

## Create New Work Order

You can consider the following in create new work order process:

  1. When you select any work order type to create new work order, two tabs are displayed. 

  2. **Standard Requests** : It displays all the Standard Requests work order in a grid. If the Equipment is selected, the work orders would be grouped by the equipment or else it would display the complete list of Standard requests for all equipment and the user can group by Equipment Class. 
  3. **Open Work Orders** : It displays all the open work orders in grid for the equipment selected by user.

      You can filter the required value using **Filter Results** field on top right
corner in the grids. See Grid Operations also.

  4. In the **Equipment** field, enter the equipment ID or click **Search** icon to select the equipment ID.  
  Equipment is a mandatory field for Routine and Emergency work order and optional for Standard Request and PM – Master Plan work order.

  1. Enter the work order number if required in **Work Order Number** field. 
  2. Click **Next**.
  3. **Create Work Order** window opens. You must fill the required fields in **Work Order** tab and click on **Create** to create the new work order. The new work order number will be generated and work order note book page opens. The status of the generated work order will be set to the default status defined for each work order type. See for more details.
  4. The default status is set in **Defaults** tab under **Setup > Setup Options > Work Orders** path. You can change the default status if required.
  5. The default numbering pattern for each work order type is set in **Numbering** tab under **Setup > Setup Options > Work Orders** path. The new work order number will be generated according to the defined pattern.

>[!tip]  
>*When a new routine work order is created with a valid value for the next
reviewer, the message log will contain the message ID "WONeedsReview" if the
following conditions specified in the rule are met. The "WONeedsReview"
message will be generated appropriately.  
If the work order is inserted with a non-null value of next_reviewer or the
next_reviewer is updated on an existing work order, and  
wo_type = ‘Routine’ and  
zz_modules_installed.messaging = 1 and  
(wo_control.status_for_approval is Null or  
(wo_control.status_for_approval is not Null and WO Status >=
wo_control.status_for_approval)),  
write a row to sy_message_log*

