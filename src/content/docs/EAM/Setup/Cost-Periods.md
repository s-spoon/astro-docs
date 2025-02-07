---
title: "Cost Periods"
draft: false

---
The Cost Periods setup option is security controlled and visible only for those users who have inquiry or update access to window name w_cost_periods for the Setup module in the plant code in which the user is currently logged in.

Users who do not belong to a security group with access to the update action for the window name will be in inquiry-only mode, i.e. the users can view the cost period data, but cannot edit the data.

Following are the different access and its description.

**Delete** - Allows the user to delete cost year.

**Update** - Provides the access to edit button in details panel, add period, and delete period option.

**Inquiry** - Navigation page access, and access to **DETAILS** contextual icon.

**New** - access to new cost year button

## View/Edit Cost Periods

When cost periods is selected, all cost years are retrieved for the current
plant. If the cost year data is found:

  * In the left grid, you will have a list of year for which the cost period data is available.

  * In the contextual panel, you will have **COST YEAR DETAILS** button that provides a breakup of all cost period available for the selected cost year.

  * If you has access to update security, then the **EDIT** button would be visible.

  * The right side pane contains an editable grid with each row representing one period for the selected year.

Click the **EDIT** button to make the grid editable. This will display **NEW
COST PERIOD** button and **DELETE COST YEAR** button.

## Create New Cost Period

To add a new cost period to the existing period list, click the **NEW COST PERIOD** button and enter the required details such as start date, end date, cost month, cost quarter production_demand_hrs and direct_maint_avail_hrs.

This option is security controlled, and is not visible unless the user has access to the **NEW** action for cost periods.

when new year is created, by default, 12 periods will be created, each period representing one calendar month. January to March will be considered as the first quarter. The user can make changes to the default data.

## Delete Cost Period

To delete an existing period, select the cost period and click the **DELETE COST PERIOD** button. This option is security controlled, and is not visible unless the user has access to the **DELETE** action for cost periods.

>[!Note]  
>New and delete operation will be saved to db only when the page level save is done. You cannot update data of previous years other than the current year. Even in current year, you can update any period after the current date.

