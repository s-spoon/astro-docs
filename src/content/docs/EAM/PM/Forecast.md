---  

title: "Forecast"  
draft: false 
type: Article

---

The application's **Forecast** feature empowers users to allocate budget for
maintenance by creating a new forecast scenario for PM schedules.

**Menu path** : Choose **PM Schedules** > **Forecast PMs** in the navigation
pane. The **Forecast PM** s window will open in a new tab with a list of
existing of **Forecast PMs** in the Grid Result.

## Action Bar:

The action bar of forecast window has following features:

Field Name  | Description  
---|---  
New Forecast | Create a new forecast.  
Edit Forecast | Modify and update an existing forecast.  
Delete Forecast | Delete a forecast from the system.  
View PM Schedule | Allows users to view a list of PM schedules associated with a specific
forecast.  
Download Forecast Data | Enables users to download the forecast data in Excel format for specific scenario for which data is already generated.  
Forecast | Enables users to view the PM schedule data for which forecast data was generated or not. Provides an update about if PM schedule is considered or not for forecast PM Work order generation.  
Refresh | Allows users to refresh the Forecast PM window.  
Export | Enables users to export the forecast data in Excel format.  
  
### New Forecast

Allows users to create a forecast for PM schedules.

  1. Choose **PM Schedules** > **Forecast PMs** in the navigation pane. The **Forecast PMs** window will open in a new tab.

  2. Click the **New Forecast** button in the action bar. This action expands the **New Forecast Scenario** panel below the grid.

  3. Enter the following fields:

     * **Name** : Enter a name for the Forecast Scenario.

     * **Description** : Enter a description for the Forecast Scenario.

     * **End Date** : Enter the end date for the forecast scenario. The default start date is always the current date. Ensure the end date is within a two-year range from the start date. If it exceeds this limit, an alert prompt will appear stating, “Forecast End Date must be within 730 days of the Forecast Start Date.”

     * **Copy From Scenario** : Select the desired existing scenario from the drop-down menu. All the PM schedules associated with the selected scenario will be copied. If a user doesn’t select any existing scenario, then by default, all PM schedules will be added.

  4. Click **Save**. This action opens the created scenario in a new tab where users can perform functions such as **Generate Forecast PM, Create New Schedule, and Delete Schedule.** The created scenario will be added to the grid list.  
Refer View PM Schedule.

>[!NOTE]
>Users can create a maximum of three forecast scenarios. If a fourth scenario
is created, the system automatically replaces the oldest scenario with the
newly created one. A **Forecast Delete Warning** prompt will open; click Yes
to confirm and replace the oldest scenario with the new one.

### Edit Forecast

Enables users to modify the forecast scenarios.

  1. Choose **PM Schedules** > **Forecast PMs** in the navigation pane. The **Forecast PMs** window will open in a new tab.

  2. Select the desired forecast from the grid result.

  3. Click the **Edit Forecast** button in the action bar. This action expands the **Edit Forecast** panel below the grid.

  4. Make the required changes. An alert prompt titled **Regenerate Forecast** will open. Click **Yes** to confirm. Once confirmed, a **Publish Success** alert prompt will open. Click **OK**. The status of the forecast will be updated. Meaning of different status are as follows:

     * **In progress** \- The forecast generation process is currently underway.

     * **Data Generated** \- The forecast data has been successfully generated.

     * **Failed** \- The forecast generation process encountered an issue and was not successful.

### Delete Forecast:

Enables users to delete the forecast scenarios.

  Choose **PM Schedules** > **Forecast PMs** in the navigation pane. The **Forecast PMs** window will open in a new tab.

  1. Select the desired forecast from the grid result.

  2. Click the **Delete Forecast** button in the action bar. A **Confirm Delete** alert prompt opens. Click **Delete**.

### View PM Schedule:

Allows users to view a list of forecast PM schedules associated with a
specific forecast. Users can also perform actions such as publishing, creating
new forecast schedules, and deleting existing schedules for the selected
scenario.

View PM schedule associated with Forecast Scenario

  1. Choose **PM Schedules** > **Forecast PMs** in the navigation pane. The **Forecast PMs** window will open in a new tab.

  2. Select the desired forecast from the grid result.

  3. Click the **View PM Schedule** button in the action bar. This action opens the **Forecast PM Schedule** button in the new tab.

  4. To publish the forecast, click the **Generate Forecast PM** button in the action bar. A **Publish Success** alert prompt states, “Forecast data has been published successfully.” Click **OK**.

#### New Schedule

  1. To create a new forecast schedule, click the **New Schedule** button in the action bar. The **Set Forecast PM Schedule** window opens in a new tab.

  2. Enter the value in the **Equipment** fields and **Master Plan** (Mandatory field) fields or click the **Search** icon to search for and select the required values. Click **Next**. A **New Forecast PM Schedule** window opens in a new tab.

  3. The **New Forecast PM Schedule** window consists of the following sections: **Execution Plan** , **Set Schedule** , **PM Options** , and **Work Order Values**.

  4. **Execution Plan** : Users can set or generate **Net Execution Date** for the forecast PM Schedules. To set a date, enter it in the **Net Execution Date** field. The next execution date can be auto generated if users opt for Advanced PM Scheduling. 

      >[!NOTE]
      >The fields Last PM WO generated, and Schedule Last Execution Date are hidden
      for the Forecast PM schedules.

  5. **Set Schedule by Time** : In this section, users can establish the schedule based on Time and Meter.

  6. **Generate forecast PM schedule by Time** : Users can set schedules using either basic or advanced scheduling features. Based on the frequency set the forecast PM schedule will be generated.

      For instance, if the Frequency Time Frame is monthly, set at every 2 months (Frequency Time: 2), with a Lead Time Frame of a day and a Lead Time of Zero, and the scenario spans from January 01, 2023, to December 31, 2023, there will be 6 forecasted PMs generated over the course of one year based on the provided data.

  7. **Set Schedule by Meter** : This option is applicable only for the equipment that is linked with the metering. Minimum two readings are required to generate the forecast data. If not, the process will be skipped. To set the forecast schedule by meter refer to .

  8. **Generate forecast PM schedule by Meter** : Based on the setup, we get a list of readings to consider for calculation. The daily rate is calculated based on history readings, and based on this, we calculate the future date when the reading will reach the defined value in the PM schedule.

In Analytics, users can view summary data in the analytics module with
predefined metrics out of the box, such as **Forecasted Material Usage** and
**Forecasted Craft Usage** , to analyze the generated forecasted data.

>[!NOTE]
>Only allow one active PM, and Base schedule on work completion flags do not
impact forecast PM work order generation. The flag Allow PM Schedule by
operational day is hidden for the forecast scenario. For the forecast scenario
for flag details, see


  9. **PM Options** : Users can enable various flags to add more control to the forecast PM schedule. The flag toggle buttons are disabled by default. Users can enable them if required. 


  10. **Work Order Values** : Allows users to set Planner, Supervisor and Shop fields if required. To set the WO values refer to Work Order Values.

  11. Click **Create**. The forecast PM schedule will be created and added to the grid and is specific only to the selected scenario.

  12. To edit the forecast PM schedule, click **Details** icon in the contextual panel. Make the required changes and click **Save**.

#### Delete Schedule

Users can delete the forecast PM schedules for the selected scenario, and this
action doesn’t affect the original PM Schedule.

   To delete a forecast PM schedule, select the desired PM schedule in the grid and click the **Delete Schedule** button in the action bar. A **Confirm Delete** alert prompt will open. Click **Delete**. Subsequently, a **Republish** alert prompt will appear. To publish the changes and regenerate the forecast data follow the 4th step.

### Download Forecast Data

Enables users to download forecast data in Excel format. It is available only
for forecast scenarios with the status **Data Generated.**

  1. Choose **PM Schedules** > **Forecast PMs** in the navigation pane. The **Forecast PMs** window will open in a new tab.

  2. Select the desired forecast from the grid result.

  3. Click the **Download Forecast Data** button in the action bar. This action downloads the forecast data in Excel format. The data will be sorted into different sheets based on the available data for the forecast scenario. Users can click on the sheet tab to view other sheets. Note: An alert prompt will open if no data is available for download.

### Forecast Data Status

Enables users to download the forecast status data report in Excel format.

  1. Choose **PM Schedules** > **Forecast PMs** in the navigation pane. The Forecast PMs window will open in a new tab.

  2. Select the desired forecast from the grid result.

  3. Click the **Forecast Data Status** button in the action bar. A **Forecast Data** window opens in a new tab. The Forecast data status grid consists of the following columns: **Scenario Name, Forecast Id, Equip/serial Id, MP Base, Status, and Message**. The status column can have **Success, Skipped, or Failed** status for the specific scenario.

  4. Click **Export** to download the forecast status data report. The data in the grid will be downloaded in the Excel format.

### Refresh

Allows users to refresh the Forecast PM window. To do so, click the
**Refresh** button in the action bar.

### Export

Enables users to export the forecast data in Excel format. To do so, click the
**Export** button in the action bar. The data in the grid will be downloaded
in the Excel format.

