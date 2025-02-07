---  

title: "Using the Serial Search"   
draft: false 
type: Article

---

A serial number provides a unique identifier for a piece of equipment just as
a social security number provides a unique identifier for a person. While the
Equipment Location ID remains constant, a serial number assigned to that
location will change if the equipment changes.

Using the **Serial Search** , you can search for and display records related
to equipment serial numbers. From the list of serial displayed, you can click
a serial id hyperlink or select the required serial and click **Serial
Module** to access the serial module that contains information unique to a
particular serial number.

The serial search window allows you to search by serial id or serial
description. If you do not enter a value in the serial id or serial
description field, the search uses only the selection criteria of the selected
query.

You can see the some generic components along with **Search** button in Search
screen. See Generic Components also.

To perform a search :

  1. Select a **Query** from the drop-down list and click **Search**.  
It displays all the Serial # for that selected query.

  2. To search for a specific Serial #, perform the following:
        1. Enter a full or partial value in the **Serial #** or the**Serial Description** field. The value you enter becomes an add-on to the selection criteria built into the selected query. The more complete the description entered, the more narrow the resulting search will be.
        2. Click **Search**.   
It displays a list of Serial # matching the selection criteria.

## Serial Search Screen Grid

In Serial Search Screen, a list of Serial # matching the selection criteria
will be displayed in grid. See Grid Operations for more details on grid.

## Action Bar

In the **Serial Search** window, you can select one or more of the displayed
records to enable the action bar located at the top of the window. The Serial
Search window remains open when you jump to other windows using the action
buttons. The actions buttons are:

  * [New Serial](Create-New-Serial.md): Opens New Serial window to create a new serial id. 

  * New Work Order: Opens New Work Order window to create a new work order for the selected serial.
  * New Quick WO: Opens Quick Work Order window to create a new quick word order for the selected serial. 
  * [Delete](#delete-a-serial-id): Opens Delete pop up to delete the selected serial. 
  * [New PM Schedule](New-PM-Schedule.md): Enables users to swiftly create a new PM schedule aligned with the selected Serial.
  
## Contextual Panel

In the **Serial Search** window, you can select a record to enable the
Contextual Panel located at the right of the window. The Equipment Search
window remains open when you jump to other windows using the Contextual Panel.
The Contextual Panel consists of the following:

  * [Hierarchy](Hierarchy.md): Opens the hierarchy for the selected serial.

  * [Serial Module](Using-the-Serial-Module.md): Opens the Serial Module for the selected Serial. 
  * Documents: Opens Document window which contains all the reference documents attached for the selected serial. 
  * Metering: Opens Metering window which contains all the meters and their readings for the selected serial. 
  * **Plans** : Enables users to view and modify the master PM schedule plans associated with the chosen Serial.

    * To edit, select a record from the **Plan** grid.

    * Click **Edit PM Schedule**.

    * The **Master Plan** opens in a new tab on the top bar.

    * Click the **Edit** icon, make the desired changes, and click **Save**.

    * A Pop-up will appear confirming, “**PM Schedule Update Successfully.** ”

  * Events: Allows users to view the event details for the selected serial.
    >[!note]
    >An additional Inspection result icon is added inside the **Serial ID**
  details. To view, select the desired **Serial ID** from the Serial ID search
  grid result. **Double click** , the selected Serial ID opens in the new tab.
  The contextual panel of this window will have the **Inspection Results** icon.

  * Inspection Results: Allows users to view the results of all inspections performed for the selected Serial ID. See Inspection Results.
  * To add info or link to the details to missing contextual items such as – CCA details, issued materials, inspection points. 

## Delete a Serial ID

You can delete a serial from the **Serial Search** screen.

To Delete a Serial:

  1. In the [Serial Search](Using-the-Serial-Search.md) window, select a serial to delete. 
  2. Click **Delete** from the action bar.

      A message prompt appears: **Are you sure you want to delete the selected
Serial ID?** with the following buttons:

      1. **Delete** : You can select this to delete an equipment. If deleted successfully, the **Serial Deleted Successfully** notification appears. 
      
      2. **Cancel** : You can select this to cancel the equipment deletion.

