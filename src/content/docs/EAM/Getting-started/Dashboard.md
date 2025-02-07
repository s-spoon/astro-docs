---  

title: "Dashboard"  
draft: false 
type: Article

---
The Aptean EAM dashboard allows you to access and create essential KPIs and metrics at a single convenient location. These metrics displays the essential the information that require your action or for further investigation. Additionally, they provide an easy way to navigate to the relevant records related to the scenario highlighted by the metric. 

![](../assets/Getting-started/image024.jpg)

To access the dashboard, you must enable the Dashboard action. 

To view or modify **Windows Access** for the dashboard follow the
instructions:

  1. Choose **Security** > **Security Groups** in the navigation pane. The **Security Group** window opens in a new tab with a list of plants in the grid result.

  2. Select the **Desired Plant** from the grid result and click the **Arrow** button. A drop-down menu opens.

  3. Select a desired **Group ID** from the drop-down menu, click the **Window Access** icon in the contextual panel. This action opens Windows Access in the right-side panel.

  4. Select **All** from the drop-down **Module** , scroll the grid result to view the available action and its access for the **Dashboard.**

  5. To make changes, click **Edit**, do the required changes, and click **Save**.   
    ![](../assets/Getting-started/image026.jpg)

      * Update access allows the user to change widgets on the dashboard.

      * New access allows the user to create new public or private widgets.

      * Inquiry access will enable users to view widgets without changing or creating new ones.

## Metric Types

The dashboard displays the following types of metrics:

### Summary Metrics

Summary metrics typically provides a condensed overview of a single aggregate value related to a specific query. It is designed to offer a quick snapshot of essential data, allowing you to grasp key insights in brief. Click on these metrics to view module and Query Wizard result set of the metric in Aptean EAM. 

![](../assets/Getting-started/image028.jpg)

The summary metric displays the following in each widget:

  * **Query Name** : Name of the system query that is used to fetch the record set which is the base for the aggregation.

  * **Total Count** : Total number of records in the query. The color of the count (Can be Green, Yellow, Blue or Red) is based on the threshold values defined for that widget. The threshold values are stored in the user's cache, and they will not be retained if you clear the user cache. 

Threshold  | Threshold Warning | Color   
---|---|---  
Beyond the threshold value | Beyond the threshold Warning value | Red  
Less than the threshold value | More than threshold Warning value | Orange  
Less than the threshold value  | Less than the threshold Warning value | Green  
When no value is entered | When no value is entered  | Blue   
  
### Analysis Metrics

Analysis metrics provides a quantitative measure of an overall value, including with subgroups. These Metrics are used to view a single aggregate value that allows you to visualize potential issues within the the total values based on a single aggregate value. You can click on. distinct areas of the chart, differentiated by colors, to view detailed values specific to different, subgroup displayed in the lower part of the metric. 

![](../assets/Getting-started/image030.jpg)

**Example:**

The Analysis metric display the following in each widget:

* **Query Name** : Name of the system. Enter the query name to fetch the record set which is the base for the aggregation. 

* **Total Count** : Total number of records or the total number of sub records
for the selected sub module. The color of the Total count is based on the
threshold values defined for that widget. (Green, Yellow or Red).

### Trend Metrics

Trend metrics displays the total value aggregate calculation over a defined time , showcasing trends on a daily, weekly, monthly, or yearly basis. Each widget displays information such as the system query name and the total count of records within in the chosen sub-module. To view detailed insights, you can hover over each bar in the widget to view the total count for that specific duration. 

![](../assets/Getting-started/image032.jpg)

**Example:**

The metric displays the following in each widget: 

* **Query Name** : Name of the system query that is used to fetch the record
set which is the base for the aggregation.

* **Total Count** : Total number of records for the selected sub module. You
can filter the widget data based on the day, week, month, or year. See Edit a
widget for more details.

### Types of Widgets

**Public Widgets** : These widgets are accessible to all user roles and appears on every user's role dashboard under the respective **Module** in the **Add Widget** drop-down menu.

**Private Widgets** : These widgets will be available only to specific users
who created them. Users can find all their private widgets under the **My
Widgets** category in the **Add Widget** drop-down menu.

> [!Note]
> In all the above metrics, If the QW criteria is changed, it will be changed
for all users in plant level.

## Action Bar

You can view below action items on **Action Center** tab. 

Action Button | Function  
---|---  
Create New Widget  | Enables users to create a new widget.  
Refresh | Allows users to refresh the dashboard data.  
Add Widget | Allows users to add existing widgets to the dashboard.  
  
### **Create New Widget:**

**Pre-requisite** 

 Make sure that you have Update security access to the dashboard to edit, copy, and delete the existing widget. 

 To create new widget, perform the following 

  1. On the **navigation pane**, choose **Dashboard**. 

  2. On the action bar, click the **Create New Widget** button in. The **Create New Widget** dialog box appears. Fill in the required data in the provided fields. 
  

      >[!Note]
      >Make sure to enter appropriate details in the mandatory fields. **Widget Name**, **Widget Type**, **Module**, and **Query** are all mandatory fields. 

Header  | Field | Description  
---|---|---  
**Widget Definition** | Public Widget |  By default, the public widget toggle button is enabled.  <br><ul><li> Enabled: The Create New Widget is visible to all user roles.  <br><li>Disabled: The Create New Widget is private and visible to the user role who created it.  <br> **Note:** All public widgets are displayed in the respective module under the **Add Widget** drop-down list. All private widgets are accessible under the **My Widgets** drop-down menu in  the **Add Widget** drop-down menu. 
| |Widget Name | Enter a unique name for the widget. Make sure you don’t enter the existing widget name. else it displays an error: **Widget Already Exists**.  
| |Widget Type |  From the drop-down menu select one of the following: <br> <ul><li>**Analysis**: Widget query analysis <br><li>**Summary:** Widget query summary <br><li>**Trend:** Widget query trend
||Module  | Choose the desired module from the drop-down menu.  
||Query  |  Select the query from the drop-down menu. <br> **Note** Ask At Execution queries are not displayed in the drop-down menu. If you enable Public Widget toggle, only public queries are displayed; when the toggle is disabled, both public and private queries are displayed in the drop-down menu.   
| > | > |**Widget Name** , **Widget Type** , **Module** , and **Query** are all mandatory fields. | 
  

1. The widget parameter is a dynamic header, and based on the selected widget type, the field parameter changes. Fill in the required fields.

Widget Type | Widget Parameters Fields  | Description   
---|---|---  
**Widget query analysis** | Threshold | Enter the appropriate threshold value  
||Threshold Warning | Enter the appropriate threshold warning value.   
||Group by  | Groups the data based on specific criteria. Select a group from the drop-down menu.  
||Aggregate | Select the appropriate option from the drop-down menu.    
||Aggregate Type |  It is the way the data is summarized. There are two possible types: <br> **Sum** : Provides the total value of the selected aggregate. <br>  **Count** : Provides the total count of the selected aggregate. <br> Select the aggregate type from the drop-down.   
**Widget query summary** | Threshold | Enter the appropriate threshold value.    
||Threshold Warning  | Enter the appropriate threshold warning value.   
**Widget query trend** | > | The fields **Total** and **Trend by** drop-down menu has only date fields as an option to select. |  
||Total  | Select the appropriate from the drop-down menu.    
||Trend By  |Select the appropriate option from the drop-down menu.  
||Group By | <ul><li>Data grouping options are available based on day, week, month, or year. <br> <li>Select the preferred grouping option from the drop-down menu.

  
  
2. Once all the fields are populated with data, click **Save**. 

    **Edit Widget** : Enables you to modify the entered data. To edit the
    widget, users must have **Update** security access to the dashboard. If a user
    lacks the necessary access, the **Edit** icon in the widget header will be
    disabled.

    1. Choose **Dashboard** in the navigation pane.

    2. Hover over the appropriate widget on the dashboard and click the **Edit** icon on the widget header. The **Edit Widget** window appears. 

    3. Make the necessary changes in the fields under **Widget Parameter**. **You can’t edit** the fields under **Widget Definition**. 

    4. Click **Save**.

>[!Note]
>Only widgets created by users are editable.

**Copy Widget** : You can use this option to create a new widget by duplicating the data from the existing widget. To the copy widget, perform the following:  

  1. Choose **Dashboard** on the navigation pane.

  2. Hover over the appropriate widget on the dashboard and click the Copy icon on the widget header. 

  3. The **Create New Widget** pop-up opens, with information copied in all fields except for the **Widget Name** field.

  4. Enter a unique name for the widget. Make sure you don’t enter the existing widget name. else it displays an error: **Widget Already Exists**. 

  5. Modify data for required fields. Refer to [Create New Widget](Dashboard.md#create-new-widget): section to fill the data in the fields. 

  6. Click **Save**.

**Delete Widget** :  You can use this option to delete the existing widget. To delete the widget, perform the following:

  1. Choose **Dashboard** on the navigation pane.

  2. Hover over the appropriate widget on the dashboard and click the Delete icon on the widget header. The Confirm Delete window appears 

  3. Click **Delete**.

>[!Note]
>When a widget is deleted, the data is removed from the database and can’t be
restored.

**Remove** : You can use this option to remove a widget from the dashboard without permanently losing the data. The widget still exists in the **Add Widget** drop-down menu under the respective module.

To remove a widget, perform the following: 

  1. Choose **Dashboard** on the navigation pane.

  2. Hover over the appropriate widget on the dashboard and click the **Close** icon on the widget header. 

### **Refresh**

Click the Refresh button on the action center tab to refresh the dashboard data. 

### **Add Widget**

You can add existing widgets to their dashboard and view the list of public and private widgets that are available. All public widgets are grouped and listed under the **Add Widget** drop-down menu in the respective module. All private widgets are grouped and listed under the category **My Widgets** in the **Add Widget** drop-down menu. 

  * To view the widgets, click the Add Widget drop-down menu and choose the respective module or category from the drop-down menu.

  * Click the drop-down arrow, the drop-down menu expands, and a list of available widgets in that category is displayed. 

  * Click the appropriate widget to add it to the dashboard. 
## Widget Data

Each tiles in dashboard has a SYS query that provides the related information. The following table specifies the query associated with the data for each tiles on the dashboard. 

Module |  Widget Name | Query Name  
---|---|---  
Work Order | Overdue PMs |  Overdue PMs  
||WO Backlog |  WO Backlog  
||New Work Requests |  New Work Requests  
||Old Work Requests |  Old Work Requests  
||My Assigned WO |  My Assigned WO  
||WOs Scheduled in Next 7 Days |  WOs Scheduled in Next 7 Days  
||Safety Work Orders |  Safety Work Orders  
||Open WOs |  Open WOs  
||WO Cost Last 90 Days |  WO Cost Last 90 Days  
||WOs Completed Last 90 Days |  WOs Completed Last 90 Days  
||WO Planned Hours |  WO Planned Hours  
||WO Actual Hours |  WO Actual Hours  
||WOs Entered in Last 90 Days |  WOs Entered in Last 90 Days  
||WO Costs by Area |  WO Cost Last 90 Days  
||Incomplete Work |  Incomplete Work  
||WO Percent Complete |  WO Percent Complete  
Equipment |  Expiring Equipment Warranties |  Expiring Equipment Warranties  
||Expiring Instrument Calibrations |  Expiring Instr Calibrations  
||Equipment Not in Hierarchy |Equipment Not in Hierarchy  
||Area-wise Equipment Not in Hierarchy ||
||Equipment Cost Summary |  Equipment Cost Summary  
Serial |  Expiring Serial Equipment Warranties |  Expiring Serial Warranties

