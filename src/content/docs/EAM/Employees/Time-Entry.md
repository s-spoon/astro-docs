---  

title: "Time Entry"   
draft: false 
type: Article

---

Using Time Entry window, you can:

  * Post time spent on work for a given employee on a particular day. 
  * To make changes to charges already posted.
  * View time charged by users over a specified period of time. 

## Searching for Time Entry

Perform the following procedure to search for time entry:

  1. Choose **Employees > Time Entry** from the main menu or select **Time Entry** from Employee/Labor Search screen **contextual panel** to open the time entry screen.

The **Time Entry: < Logged In User/Employee Id >** page opens.

  2. Enter the required **Start Date** and **End Date** fields. By default, Today's date will be displayed in both the fields. 

  3. Optionally, enter full or partial values in the **Employee** and **Work Order** fields. The Employee field will be defaulted to the logged in Employee. If you select **Time Entry** from Employee/Labor Search screen **contextual panel** , Employee field will be auto populated with the selected employee Id.
  4. Click **Search** button to display the list of time entries that match the selection criteria. See Generic Components also.

## Time Entry Search Screen Grid

In time entry screen, a list of time entries matching the selection criteria
will be displayed in grid. See Grid Components for more details on grid.

## Action Bar

In the ****Time Entry: <Logged In User/Employee Id**** window, you can select
the required record to see the following action bar items:

  1. **New** : Opens **Enter New Time** window to add the new time entry. See for more details.
  2. **Edit** : Opens **Time Reported for \<Employee Id>** window to update the existing details. You can update the required details and click on **Save** button to update the new values. You can click on **Cancel** button to exit the window. The fields will be similar to the Enter New Time fields in window.
  3. **Delete** : Opens the pop up with **Are you sure you want to delete Time Entry?** message.

      * You can click on **Delete** to delete the time entry from the grid. If deleted successfully, **Time Entry deleted successfully.** message pop up appears and the record will be removed from the grid. If not error message will be displayed and you can read the error and proceed.
      * You can click on **Cancel** to exit the pop up.

### Enter New Time

In Enter New Time window, you can add a new time entry. The window consists of
the following fields:

  * **Work Date*** : By default, it is the today's date. You can enter or select the required date.
  * **Work Order #*** : You can enter or search the required work order number.
  * **Employee*** : You can see the current logged in user in this field. You can search and update the different employee if you have security access to the **Has access to other employee IDs** field in Worker Time Reporting security window.
  * **Craft*** : By default, employee's default craft is displayed. You can select the required value from the drop down.

  * **Hours*** : You can enter the required hours or click on increment/decrement to update the required value.

  * **Occurrence*** : By default, 1 is selected. You can enter or click on increment/decrement to update the required value.

All the above fields are mandatory fields and you must enter them.

  * **Rate Name** : By default, Str.Time (Standard Time) is selected. You can select the required value from the drop down if required.
  * **Comments** : You can enter the comments if required.

After updating the fields, you can select any of the following:

  * **Add** : This will save the new time entry data and the new record will be displayed in **Time Entry** grid. The record will also be added in Labor Activity Search grid.
  * **Cancel** : This will cancel the process of adding the new time for the selected employee.

>[!note]
>You can add multiple time entries if required.

