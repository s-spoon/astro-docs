---  

title: "Manage Shifts"  
draft: false 
type: Article

---

Enables users to schedule and organize work hours for employees.

## Action Bar

Select a **Shift** from the grid result to enable the buttons from the action
bar. The **Shifts** window remains open when you navigate to another window
using the action buttons.

Action Button | Function  
---|---  
Employee Assignments  | Assign specific employees to shifts.   
Exceptions  | Manage shift exceptions like holidays or time off.   
New Shifts  | Create and define new shifts.  
Copy Shifts  | Duplicate existing shift configurations.   
Delete Shifts | Remove specific shifts from the schedule.  
  
### Employee Assignments

The Employee Assignments feature enables the users to assign, edit, and
unassign employees for shifts.

**Assign:**

  1. Choose **Scheduling** > **Manage Shifts** in the navigation pane.

  2. Search for and select the desired **Shifts** from the grid result.

  3. Click the **Employee Assignments** button in the action bar. The **Employee Assignments** window opens in a new tab.

  4. Select one or more **Employees** , click the **Assign** button, the **Assign Employee** pop-up opens.

  5. Enter the **Start and End date** or click the **Calendar** icon to enter it. 

> [!NOTE]
>The Start Date field is mandatory; it defaults to the current date. Users can
set a past date as a start date, but the start date cannot be set after the
end date.

6. The **Notes** field is optional; fill it if necessary and then click
**Save**. Selected employees are added to the **Assigned Employee** list.

**Unassign**:

  1. To remove an employee from a shift, select one or more the employee from the **Assigned Employees** grid result and click **Unassign**.

**Edit**

  1. To edit the shift details, select one or more **Employees** from the **Assigned Employees** grid result and click **Edit**.

  2. Enter the new **Start and End date** or use the **Calendar** icon, then click **Save.**

>[!NOTE]
>Only employees with primary craft can be assigned to a shift. If multiple
employees are assigned to a shift, the system will save the entered shift data
for all employees in the database and display it in the grid result. If an
employee is added to a shift while already active on another shift, set the
end date of the existing shift as the start date of the newly assigned shift;
otherwise, a **Clean Shift Assignments** error will appear. If this error
occurs, it indicates that the user is assigned to multiple shifts, and the
system is unable to determine which shift to end. In such cases, the user will
need to manually resolve the shift assignment.

### Exceptions

Enables users to schedule shift overtime or shift exceptions.

**Add Exception**

  1. Choose **Scheduling** > **Manage Shifts** in the navigation pane.

  2. Search for and select the **Shift** from the grid result.

  3. Click the **Exceptions** button in the action bar, and the **Shift Exceptions** window opens in a new tab.

  4. To add a new exception, click the **Add exception** button or a specific date on the calendar. A **Shift Exception Details** pop-up opens.

  5. Select the **All Day** checkbox to set the shift exception as an all-day event. For partial-day events, ensure that the **All Day** check box is unchecked, and specify the **Start Date and Time** along with the **End Date and Time**.

  6. Enter the details in the **Description** field and then click the **Save** button.

**Add Overtime**

  1. Follow the first three steps outlined for **Add** exceptions.

  2. To add overtime, click the **Add Overtime** button. A **Shift Overtime Details** pop-up opens.

  3. Select the **All Day** checkbox to set the shift overtime as an all-day event. For partial-day events, ensure that the **All Day** check box is unchecked, and specify the **Start Date and Time** along with the **End Date and Time**.

  4. Enter the details in the **Description** field and then click the **Save** button.

>[!NOTE]
>An Overlap Shift exception alert prompt opens when a shift exception overlaps
with a date and time. An Outside of Shift alert prompt opens when a shift
exception is scheduled outside of the shift hours. All Exceptions appear on
the calendar, highlighted in red with a minus symbol (-). Hovering over the
date displays the Shift name, Start, and End date in a box. Overtime entries
are shown on the calendar, highlighted in green with a plus symbol (+).
Hovering over the date reveals the Shift name, Start, and End date in a box.

### New Shift

Allows users to add a new shift and define a shift pattern. The shift pattern
allows a scheduler to enter each day of a shift and define it as a working day
with available hours, or an off day with no available hours. When creating a
shift pattern, the days are entered one at a time and the day number will be
generated by the system in the order they are entered.

  1. Choose **Scheduling** > **Manage Shifts** in the navigation pane.

  2. Click the **New Shift** button in the action bar; an **Add Shift** t pop-up opens.

  3. Enter the name of the shift in the **Shift** field and click the **Create** button. This is a mandatory field. **Created shift** opens on the right side of the panel.

  4. To set the shift pattern, click the **Add Day** button; the **Add Day** grid expands below the panel. Enter the data for the **Day Name** , **Start Time** , and **End Time**. The system calculates the **Available hours** based on the **Start and End** timings entered. All the fields are mandatory.

      >[!NOTE]
      >If the start and end times are the same, the available time will be zero; this
    can be used to set a shift pattern for off days.

  5. Click **Add** to save; Use **Add Another** for additional entries and repeat the steps if required.

      >[!NOTE]
      >Data from the previous day, except for the day name, is taken as default for
      new entries.

  6. To edit, select a **Day** from the grid, click **More** , click the **Edit Day** button from the drop-down. The **Edit Day** grid expands below the panel. Make the changes in the required field, and then click **Save**.

  7. To delete, select a **Day** from the grid, click **More** , click the **Delete** button from the drop-down, **Confirm Delete** alert prompt opens; click **Delete** to remove the day.

>[!NOTE]
>Based on the screen resolution, action buttons like Edit Day and Delete can be
arranged next to one another on the header or grouped in a More drop-down
menu.

### Copy Shift

Allows users to copy the shift pattern and exception from an existing shift to
a new shift.

  1. Choose **Scheduling** > **Manage Shifts** in the navigation pane.

  2. Search for and select the **Shifts** from the grid result.

  3. Click the **Copy Shift** button in the action bar; the **Copy Shift** pop-up opens.

  4. In the **Shifts** field, enter the name of the new shift. This field is mandatory; entering a duplicate name will be rejected.

  5. Select the check box for **Copy Day Pattern** , **Copy Shift Exceptions** or both as required and then click the **Copy** button.

### Delete Shift

Allows user to delete a shift.

  1. Choose Scheduling > **Manage Shifts** in the navigation pane.

  2. Search for and select the **Shifts** from the grid result.

  3. Click **More** in the action bar, and then select **Delete Shift** from the drop-down. <br>A **Confirm Delete** alert prompt opens; click **Delete** to remove the shift.

>[!NOTE]
>A shift can only be deleted if is not on an active calendar. Based on the
screen resolution, action buttons like Delete Shift can be arranged on the
header or grouped in a More drop-down menu.

## Contextual Panel

In the **Manage Shifts** grid, select a **Shift** from the grid result to
enable the **Contextual Panel**. The **Manage Shifts** window remains open
when you navigate to other windows using the Contextual Panel. The Contextual
Panel consists of the following functions:

### Manage Shifts

Allows users to oversee shifts by adding or removing days from the shift.
Users can also edit details for a specific day.

Refer to New Shift (add link to it)

**Calendars** : Users can assign shifts for one or more calendars, and the
calendar defines start and end times. Multiple calendars can exist for a
shift, but they cannot overlap.

  1. Choose **Scheduling** > **Manage Shifts** in the navigation pane.

  2. Search for and select the **Shifts** from the Grid Result.

  3. Click on the **Calendars** icon in the contextual panel; a **Calendar** window opens as a the right side panel.

  4. Click the **More** button from the header, then click the **Add Calendar** button from the drop-down.

  5. Enter details in the following fields:

     * **Calendar Name** : Enter a name for the calendar.

     * **Description** : Enter a description for the calendar.

     * **Start Date** : Specify the starting date by entering or using the calendar icon.

     * **Start With** : Choose a day from the drop-down menu that corresponds with the Start Date.

     * **Repeat Until** : Specify the end date by entering or using the calendar icon.

All fields are mandatory.

  6. Click the **Add** button.
  7. Use **Add Another** for additional entries and repeat the steps if required.
  7. To edit, select a **Calendar** from the grid, click **More** , click the **Edit Calendar** button from the drop-down. The **Edit Calendar** grid expands below the panel. Make the changes in the required field, and then click **Save**.

  8. To delete, select a **Calendar** from the grid, click **More** , click the **Delete Calendar** button from the drop-down, a**Confirm Delete** alert prompt opens; click **Delete** to remove the **Calendar**.

