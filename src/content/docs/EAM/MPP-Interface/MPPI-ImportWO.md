---

title: "Importing Work Orders"
draft: false


---
The Microsoft Project interface allows you to import data from EAM Database into Project file through Work Orders. The data is imported by executing a query in the **Work Orders** module.

  >[!Note]: Currently, the EAM-Microsoft Project Interface only supports and lists the **Non-Ask at Execution** queries.

Perform the following procedure to import data:

  1. Log in to the Microsoft Project file, and click **Work Orders**. 

      The **Query Result** window opens.

  2. Select the work order or work orders as follows:

      * To select work orders using a query, select the required query from the drop-down in the **Queries** field, and then click **Execute**.

      All the work orders related to the query are displayed.

* To search for the required work order, enter the work order number in the **Search Work Order #** field.

  3. The search result displays the required work order. Then click **Import**.

  4. The data is imported from EAM Database to the Project file. Click **Close**. 

      The data is displayed in the Project file sheet.

      The interface allows multiple imports to the project file.

During import, if the data is changed in EAM Database, the Microsoft Project updates this data based on the settings mentioned in the Project Setting options.

### EAM-Microsoft Project Column Mapping

The following table explains the terms used in EAM and the corresponding terms
used in Microsoft Project. The third column explains resolutions for any
discrepancies when importing work orders.

EAM | Microsoft Project | Resolution if Values Differ  
---|---|---  
Sequence Number |  ID |  Updates Microsoft Project with Schedule data.   
Work Order Short Description |  Name |  Updates Microsoft Project with EAM’s Work Order Short Description.  
Schedule Start Date |  Start<td rowspan="2"> Dependent on the setup option chosen. Refer to the [Start Date Options](Appendix-B-Configuration-Options-for-Project.md#start-date-options) section.    
Schedule Start Time |  Start (time portion)  
Work Order Number |  Text1 <td rowspan="6">EAM’s Work Order Number always downloads into Project’s task-level field **Text1**.<br> <br> If the interface setup option labeled **Update Task Text…using Work Order Values** is checked, then Project’s task-level Text2 through Text9 fields are set equal to EAM’s equipment number, area, etc.|    
Equipment |  Text2  
Area |  Text3  
Department |  Text4  
Supervisor |  Text5  
Shop |  Text6  
Planner |  Text7  
Project |  Text8  
Work Class |  Text9  
Shutdown Code |  Text10  
WO Status |  Text11  
Status Description |  Text12  
WO Priority |  Text13  
Criticality |  Text14  
Assigned To |  Text15  
Employee_ID_1 |  Text16  
Employee_ID_2 |  Text17  
Employee_ID_3 |  Text18  
Employee_ID_4 |  Text19  
Employee_ID_5 |  Text20  
Employee_ID_6 |  Text21  
Requested Completion Date |  Date1 |  If the interface setup option labeled **Update Task Text…using Work Order Values** is checked, then Project’s task-level Date1 is always set equal to EAM’s Requested Completion Date.  
Craft + Occurrence |  Resource Name |  The Craft and Occurrence fields in EAM are Mapped to one field-Resource Name- in Microsoft Project. Contact your admin with the log file for resolution of issues, if any.  
Craft Planned Rate |  Resource Standard Rate |  The Craft Planned Rate field in EAM is mapped to the Resource Standard Rate field in Microsoft Project. Contact your admin with the log file for resolution of issues, if any.  
Craft Workers |  Resource Units |  Dependent on the setup option chosen. Refer to the [Resource Assignment Update Options](Appendix-B-Configuration-Options-for-Project.md#resource-assignment-update-options) section.  
Actual Hours |  Actual Work |  Refer to the [Update Task Actual Work Using Work ORder Actual Hours](Appendix-B-Configuration-Options-for-Project.md#resource-assignment-update-options) section.  
Remaining Hours |  Remaining Work |  Refer to the [Remaining Work/Remaining Hours Options section](Appendix-B-Configuration-Options-for-Project.md#remaining-work-or-remaining-hours-options).  
WO Crafts -Lag <td rowspan="2">Text10|     Refer to the below, titled **Work Order Resources Lag and Assignment Delay** section.   
WO Crafts - Lag Units  
Work Order Total Planned Hours |  Number 1 |  If the interface setup option labeled **Update Task value Number1…** is checked, then Project’s task-level Number 1 is always set equal to the totally planned hours for the EAM work order.  
Actual Non-Labor Costs (Material-I, Nonstock-C, Nonstock-I, Other-C, Other- I, Services-C, Tools-C, Tools-I) |  Cost1 |  If the interface setup option labeled **Update Task Cost1 value…** is checked, then Project’s task-level Cost1 is always set equal to the total actual non-labor cost from EAM.  
Planned Non-Labor Costs (Material-I, Nonstock-C, Nonstock-I, Other-C, Other- I, Services-C, Tools-C, Tools-I) |  Cost2 |  If the interface setup option labeled **Update Task Cost2 value…** is checked, then Project’s task-level Cost2 is always set equal to the total planned non-labor cost from EAM.  
Actual Non-Labor Costs (Material-I, Nonstock-C, Nonstock-I, Other-C, Other- I, Services-C, Tools-C, Tools-I) |  Fixed Cost |  If the interface setup option labeled **Copy Cost1 into Fixed Cost** is checked, then Project’s Fixed Cost field is always set equal to the total actual non-labor cost from EAM. <br> [!Note]: If you are already using the Fixed Cost field within the Project application, then do not select the option **Copy Cost1 into Fixed Cost**.