---  

title: "Time Reporting"  
draft: false 
type: Article


---

You can select **Time Reporting** button from the action bar to open **Worker
Time Reporting For: \<Work Order #>** window.

Using this window, you can:

  * Post time spent on work for a given employee on a particular day. 
  * To make changes to charges already posted.
  * View time charged by different user roles over a specified period.  

**Worker Time Reporting For: \<Work Order #>** window consists of **Previous
Time Reported to This Work Order** grid which lists all the time spent on work
for a given employee on a particular day. See for more details on grid.

You can perform the following operations in the grid:

  1. Select any record to view its details in a separate **Time Reported for \<Employee>** window. The details will be visible in the fields similar to the fields in window.
  2. Select **Add Time Entry** button to add a new entry in **Enter New Time** window. See for more details.
  3. Select **Delete Line** button to delete the selected line from the grid.

### Enter New Time

In Enter New Time window, you can add a new time entry. The window consists of
the following fields:

  * **Work Date** : By default, it is the today's date. You can enter or select the required date.
  * **Employee** : You can see the current logged in user in this field. You can search and update the different employee if you have got security access to the **Has access to other employee IDs** field in Worker Time Reporting security window.
  * **Craft** : By default, employee's default craft is displayed. You can select the required value from the drop down.
  * **Occurrence** : By default, 1 is selected. You can enter or click on increment/decrement to update the required value.
  * **Hours** : You can enter the required hours or click on increment/decrement to update the required value.

All the above fields are mandatory fields and you must enter them.

  * **Rate Name** : By default, Str.Time (Standard Time) is selected. You can select the required value from the drop down if required.
  * **Comments** : You can enter the comments if required.

After updating the fields, you can select any of the following:

  1. **Save** : This will save the new time entry data and the new record will be displayed in **Previous Time Reported to This Work Order** grid. The record will also be added in Labor Activity Search grid.
  2. **Cancel** : This will cancel the process of adding the new time for the selected work order.

>[!note]
>If required, you can add multiple time entries.

>[!note]
>You cannot post worker time if you are changing the status of the work order
to **79 - Closed for Charges**.

