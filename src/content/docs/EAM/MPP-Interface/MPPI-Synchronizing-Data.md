---

title: "Synchronizing Data"
draft: false


---
After updating the Work Orders in the Microsoft Project, you must synchronize the updated data to the EAM Database.

To upload the updated data from the Microsoft Project sheet to the EAM database, click the **Sync** button in the ribbon of the Microsoft Project.

The data is updated based on the project settings.

EAM’s Field Names | Microsoft Project’s Field Names | Project Setting Configuration Selected | EAM’s Field Updated | Microsoft Project’s Field Updated  
---|---|---|---|---  
Sequence Number  | ID | NA | NA | Updates Microsoft Project with Schedule data.  
Work Order Short Description | Name | NA | NA | Updates Microsoft Project with EAM’s Work Order Short Description. 
Schedule Start Date| Start  | Do not Update Start Date, Time |  Does not update EAM’s Schedule Start Date | Does not update MS Project’s Start.  
-|Start | Update Task Start Date, Start Time with Schedule Start Date, Time | NA | Updates Microsoft Project with the start dates from the EAM’s Work Order schedule. 
 -|Start| Update Schedule Start Date, Time using Task Start Date | Updates EAM work orders using Microsoft Project's Start date. | NA  
Schedule Start Time | Start (time portion) | Do not Update Start Date, Time | Does not update EAM’s Schedule Start Time | Does not update MS Project’s Start (time portion)  
|-| Start (time portion) | Update Task Start Date, Start Time with Schedule Start Date, Time | NA | Updates Microsoft Project with the start times from the EAM’s Work Order schedule  
|-|Start (time portion) | Update Schedule Start Date, Time using Task Start Date | Updates EAM work orders using Microsoft Project's Start time. | NA  
Work Order Number | Text1 <td rowspan="21"> Update task Text2, Text3, Text4,... (used for Equip#, Area, Department...) using Work Order values   | NA | EAM’s Work Order Number always downloads into Project’s field Text1.  
Equipment  | Text2  | NA | EAM’s Equipment’s Field Value downloads into Project’s Text2 field.  
Area  | Text3  | NA | EAM’s Area’s Field Value downloads into Project’s Text3 field.  
Department  | Text4  | NA | EAM’s Department’s Field Value downloads into Project’s Text4 field.  
Supervisor | Text5  | NA | EAM’s Supervisor’s Field Value downloads into Project’s Text5 field.  
Shop | Text6  | NA | EAM’s Shop’s Field Value downloads into Project’s Text6 field.  
Planner  | Text7  | NA | EAM’s Planner’s Field Value downloads into Project’s Text7 field.  
Project  | Text8  | NA | EAM’s Project’s Field Value downloads into Project’s Text8 field.  
Work Class | Text9  | NA | EAM’s Work Class’s Field Value downloads into Project’s Text9 field.   
Shutdown Code | Text10 | NA | EAM’s Shutdown Code’s Field Value downloads into Project’s Text10 field.   
WO Status | Text11 | NA | EAM’s WO Status’s Field Value downloads into Project’s Text11 field.   
Status Description | Text12 | NA | EAM’s Status Description’s Field Value downloads into Project’s Text12 field.  
WO Priority | Text13 | NA | EAM’s WO Priority’s Field Value downloads into Project’s Text13 field.   
Criticality | Text14 | NA | EAM’s Criticality’s Field Value downloads into Project’s Text14 field.   
Assigned To | Text15 | NA | EAM’s Assigned To Field Value downloads into Project’s Text15 field.   
Employee_ID_1 | Text16 | NA | EAM’s Employee_ID_1’s Field Value downloads into Project’s Text16 field.   
Employee_ID_2 | Text17 | NA | EAM’s Employee_ID_2’s Field Value downloads into Project’s Text17 field.   
Employee_ID_3 | Text18 | NA | EAM’s Employee_ID_3’s Field Value downloads into Project’s Text18 field.   
Employee_ID_4 | Text19 | NA | EAM’s Employee_ID_4’s Field Value downloads into Project’s Text19 field.   
Employee_ID_5 | Text20 | NA | EAM’s Employee_ID_5’s Field Value downloads into Project’s Text20 field.   
Employee_ID_6 | Text21 | NA | EAM’s Employee_ID_6’s Field Value downloads into Project’s Text21 field.   
Requested Completion Date  | Date1  | Update task Text2, Text3, Text4,... (used for Equip#, Area, Department...) using Work Order values  | NA | Updates MS Project’s Date1 field with EAM’s Requested Completion Date  
Craft + Occurrence  | Resource Name  | NA | NA | MS Project’s Resource Name is mapped with EAM’s Craft and Occurrence field.  
Craft Planned Rate  | Resource Standard Rate  | NA | NA | MS Project’s Resource Standard Rate is mapped with the EAM’s Craft Planned Rate field.  
Craft Workers <td rowspan="3"> Resource Units  | Do not update Task Assigned Resources or Work Order Crafts  | Does not update EAM’s Work Order Crafts | Does not update MS Project’s task assignments.  
|-|Update Task Assigned Resources using Work Order Crafts  | The Units field in Microsoft Project maps to Workers in EAM | <ul> <li>The following EAM fields are downloaded into the Microsoft Project: Craft Code, Occurrence, Workers.</li><li> EAM's Craft Code and Occurrence are used to create the Resource Name in the Microsoft Project.</li> 
|-|Update Work Order Crafts using Task Assigned Resources  | Task assignment created in the Microsoft Project is used to update EAM Work Order. For this the Resource Code must already exist as a Craft Code in EAM.  |  NA  |
|Actual Hours  | Actual Work | Update Task Actual Work Using Work Order Actual Hours | NA | <ul> <li> Microsoft Project’s Actual Work field will be mapped to the EAM’s Actual Hours field.</li> <li> The field titled Work in Microsoft Project is also updated.</li>
Remaining Hours  <td rowspan="2"> Remaining Work  | Do not update Remaining Work or Remaining Hours -  | Does not update EAM’s Remaining Hours | Does not update Project's Remaining Work.  
|-|Update Task Remaining Work using Work Order Remaining Hours  | NA | Microsoft Project's Remaining Work field is mapped with EAM's Remaining Hours field.  
Work Order Total Planned Hours  | Number 1  | Update Task value Number1 (used for Planned Work) using Work Order Planned Hours  | NA | Updates the Project’s titled Number 1 field with the total planned hours from the Work Order  
Actual Non-Labor Costs (Material-I, Nonstock-C, Nonstock-I, Other-C, Other- I, Services-C, Tools-C, Tools-I)  | Cost1  | Update Task Cost 1 value (used for Actual Non-Labor Cost) with Work Order Planned Non-Labor costs  | NA | Updates the project's Cost1 field with the sum of Actual Non-Labor costs from the Work Order.   
Planned Non-Labor Costs (Material-I, Nonstock-C, Nonstock-I, Other-C, Other- I, Services-C, Tools-C, Tools-I)  | Cost2  | Update Task Cost 2 value (used for Planned Non-Labor Cost) with Work Order Planned Non-Labor costs:  | NA | Update Project’s Cost2 with the sum of Planned Non-Labor costs from the Work Order.   
Actual Non-Labor Costs (Material-I, Nonstock-C, Nonstock-I, Other-C, Other- I, Services-C, Tools-C, Tools-I)  | Fixed Cost  | Copy Task Cost1 value (Actual Non-Labor Cost) into Task Fixed Cost  | NA | Project’s Fixed Cost field is mapped with the total actual non-labor cost from EAM.   
  
### Resolution of Synchronization Errors

If an error occurs during synchronization, then an error message appears on the status window as follows:

**Contact the System Administrator with the logs - stored in the location:**
<br> (```C:\Users\<username>\AppData\Roaming\Aptean\EAMProjectScheduling\logs```)

A sample log file is shown in the following image.

![](../assets/mpp-interface/im2.jpg)

