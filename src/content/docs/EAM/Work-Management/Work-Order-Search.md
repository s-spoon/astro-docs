---  

title: "Search Work Orders"  
draft: false 
type: Article


---

Aptean EAM Work Order module allows finding the existing work orders and perform the available actions.

Menupath: **Work Management > Work Orders**

The total number of work order rows returned is 7500 and this can be
customized under Setup and Security module (Back-end).

The Work Order Search header consists of the following fields to find the existing work orders:

  1. **Work Order query:** Select the appropriate query and click Search icon. The system lists the work orders accordingly. 
     >[!NOTE] Queries contain user-configurable criteria that may limit the data retrieved. The name of the query usually indicates the set of work orders that will be retrieved. There is a "**Basic** " query in all modules that will return all records.

For more information on query wizard, see the section.

  2. **Work Order #:** Enter the work order number.

  3. **Work Order Description:** Enter work order description.

  4. **Equipment:** Enter the equipment name. 
  5. Click **Search** to display all the work orders based on the search criteria. See Generic Components and Troubleshooting also.

> [!NOTE]
> After you click Search, **Ask at Execution** window appears when Ask at execution feature is enabled during the creation of that selected query. You can click **Search** to proceed further or you can click **Cancel** to remain on the Work Order Search screen. 

## Work Orders Search Screen Grid

There are 2 ways to look up a work order in EAM, and both starts with the **Work Order** module home page's query wizard. 

  1. You can use any of the fields in the search header to filter the results returned to the page. 

     * You can type in the exact value of a Work order. 

        >[!NOTE]Enter a few characters in the search field will match all records starting with that string.


     * You can search for a Work order description with a partial search by using the "%" wild-card character to denote a wild card search in front of or in the middle of the string. 

     * To search for Work orders for a specific piece of equipment, you can type in or look up the equipment name (using the magnifying glass to search for an equipment), or searches on a partial equipment name can be used, following the wild-card patterns described above.

  2. You can search for a Work Order using the **Global Filter** and **Grid Filter**. See Grid Operations for more details. 

## Action Bar

On the **Work Order: \<Query Name\>** window, you can select one or more of the displayed records to enable the action center tab located at the top of the window. The actions available depend on the security settings of the user role. The Work Orders search window remains open when you navigate to other windows using the action buttons. The actions buttons are: 

  * New Work Order : Allows you to create a new work order.
  * Status Change and Approval: Allows you to change the work order status. 
  * Start Date and Assignment : the start date for the selected work order.  Click on ellipse icon to view the following: 
  * Mass Update : Allows you to update the multiple work orders details. 
  * Time Reporting : Allows you to update the time spent on work for a given employee on a particular day. 
  * New Task/Sub Task : Allows you to add the task or subtask for the selected work order.

  * Copy To Work Order: Allows you create a new work order by copying the information from the existing work order.
  * Cost Posting: Allows you to post costs for various transactions related to labor, material, tools, services, and other expenses.
  * Print : Allows you to print the selected work order/s and the associated documents.
  * **Export** : Exports the grid data to an excel sheet. The data will be downloaded in excel and you can open the excel to view the grid details.
 

## Contextual Panel

In the **Work Order: \<Query Name\>** window, you can select a record to enable
the Contextual Panel located at the right of the window. The Work orders
search window remains open when you jump to other windows using the Contextual
Panel. The Contextual Panel consists of the following:

 
  * Hierarchy : Allows you to open the hierarchy.
  * Documents : Allows you to view the documents details for the selected work order.
  * Work Order Module : Allows you to open work order module
  * Activity Log : Allows you to view all the activities performed on the selected work order by different users.
  * Issue Material: Allows you to issue the material or items to the selected work order.
  * Return Material: Allows you to return the access materials issued for the selected work order.
  * Metering : Allows you to view the meters and their readings for the equipment associated with the selected work order.
  * Labour Activity : Allows you to see the Worker Time Information of the selected work order in **Labor Activity** panel. You can click on **X** to close the panel. See for more details. 
  * Comments : Allows you to view and add the comments provided for the selected work orders by different users. 
  * Completion  : Allows you to open work order completion details. You can update the required fields and click on **Complete** to update the work order completion details. This feature is available only for **Routine** and **Emergency** Work Orders.
  * Follow-up Info :Enables users to add follow up work order or Event.
  * Inspection Results : Allows users to view the results of all the inspections performed for the selected work order. See Inspection Results .

    > [!NOTE]
    >Once an inspection is performed, the report is attached as a document on to a
    Workorder.

