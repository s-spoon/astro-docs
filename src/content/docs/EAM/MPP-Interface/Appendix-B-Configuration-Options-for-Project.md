---

title: "Appendix B: Configuration Options for Project"
draft: false


---
### Configuration Options for Project

A detailed explanation on the configuration options available in the Project Settings window of the Microsoft Project are as follows:

  * **Create task in Project if none exists for a Work Order in the Schedule**

If a Work Order exists in the EAM schedule, but does have a corresponding task in Project, select this option to have the interface create a corresponding task in Project.

  * **Create Resource in Project if they do not exist and are assigned on a Scheduled Work Order:**

If a Craft Code is planned on a scheduled Work Order but does not exist in Project, select this option to have the interface create a corresponding resource in Project. This would work in conjunction with the **Resource Assignment Update Options** described below.

If a resource exists in Project but does not exist as a Craft Code in EAM, the interface does not create the craft code in EAM. For more information, see [EAM MPP Column Mapping](MPPI-ImportWO.md#eam-microsoft-project-column-mapping).

### Resource Assignment Update Options:

Select one of the following options to update the resource data:

  * **Do not update Task Assigned Resources or Work Order Crafts** - If this option is selected, the interface does not update EAM’s Work Order Crafts or MS Project’s task assignments.
  * <span id="update"></span>**Update Task Assigned Resources using Work Order Crafts** - If this option is selected, each craft code planned on the EAM work order is added as a Resource Name in MS Project and assigned to the task created from the work order. This option controls the downloading of the following EAM fields into the Microsoft Project: Craft Code, Occurrence, Workers. Other options described below control the downloading of Actual Hours and Remaining Hours.

  * EAM's Craft Code and Occurrence are used to create the Resource Name in the Microsoft Project.
  * EAM's Workers maps to **Units** in the Microsoft Project. For more information about setting the units as decimals, see [Set Units as DecimalsAppendix C: Set Units as Decimals](Appendix-C-Set-Units-as-Decimals.md).

  * **Update Work Order Crafts using Task Assigned Resources** - If this option is selected, each task assignment created in the Microsoft Project is used to update EAM. However, the Resource Code must already exist as a Craft Code in EAM; also, new Craft Codes cannot be created in EAM through the interface. If any task assignment is created in the Microsoft Project using a Resource Name that has not been previously defined in EAM, then it is ignored.

    For example, if the Craft Code **ELEC** exists in EAM, then the Microsoft Project user can create a task assignment in Project with Resource Name equal to **ELEC** , **ELEC-1** or **ELEC-2**. In the first two tasks/cases, the EAM Work Order Notebook will be updated with the following planned information: craft = ELEC, occurrence = 1. In the third task/case, the Work Order Notebook will be updated with the following information: craft = ELEC, occurrence = 2.

    This option controls the uploading of the following EAM fields from the Microsoft Project: Craft Code, Occurrence, Workers. (The **Units** field in Microssoft Project maps to **Workers** in EAM.) Other options described below control the downloading of Actual Hours and Remaining Hours.

  * **Update Task Actual Work Using Work Order Actual Hours:**

    If this check box is selected, Microsoft Project’s Actual Work field will be set equal to the EAM’s Actual Hours field.

    When this check box is selected, the field titled **Work** in Microsoft Project is also updated. In Project, the **Work** field must always equal the sum of **Actual Work** plus **Remaining Work**. Therefore, when the interface updates **Actual Work** , the interface must also update **Work**.

### Remaining Work or Remaining Hours Options:

Select one of the following options to update the remaining work:

  * **Do not update Remaining Work or Remaining Hours** \- The interface will not synchronize the values of EAM's Remaining Hours and the Project's Remaining Work.
  * **Update Task Remaining Work using Work Order Remaining Hours** \- Microsoft Project's Remaining Work field is set equal to EAM's Remaining Hours field.

Microsoft Project's **Work** field is also updated. In the Project, the **Work** field must always equal the sum of **Actual Work** plus **Remaining Work**. Therefore, when the interface updates Remaining Work, the interface must also update **Work**.

  * **Update Work Order Remaining Hours using Task Remaining Work** \- EAM’s Remaining Hours field will be set equal to Microsoft Project’s Remaining Work field.

  * **Update Task value Number 1 (used for Planned Work) using Work Order Planned Hours:**

This option updates the Task Number 1 field with the total planned hours from the Work Order.

  * **Update Task Cost 1 value (used for Actual Non-Labor Cost) with Work Order Planned Non-Labor costs:**

This option updates the Task Cost1 field with the sum of Actual Non-Labor costs from the Work Order.

If the value of Actual Non-Labor Costs in EAM is zero, the value of Task Cost 1 in MS Project will not be overwritten by the value in EAM.

  * **Update Task Cost 2 value (used for Planned Non-Labor Cost) with Work Order Planned Non-Labor costs:**

Select this option to update Task Cost2 with the sum of Planned Non-Labor costs from the Work Order.

  * **Copy Task Cost1 value (Actual Non-Labor Cost) into Task Fixed Cost:**

This option allows MS Project users to have the EAM actual non-labor costs values stored in Project's Fixed Cost field.

### Start Date Options:

Select one of the following three options for updating start date:

  * **Do not Update Start Date, Time** \- performs no synchronization of start dates between Microsoft Project and EAM.
  * **Update Task Start Date, Start Time with Schedule Start Date, Time** \- updates Microsoft Project with the start dates and times from the EAM work order schedule.
  * **Update Schedule Start Date, Time using Task Start Date** \- updates EAM work orders using Microsoft Project's Task Start date and time.

When a EAM work order is initially downloaded into Microsoft Project, the Task Constraint is set to either **As Soon As Possible** or **Must Start On**. If the Scheduled Start Date in EAM is blank, the Task Constraint is set to **As Soon As Possible**. If a Scheduled Start Date has been entered in EAM, the Task Constraint is set to **Must Start On MM/DD/YYYY**. When you open the
project in Microsoft Project, the Project application performs certain calculations that may alter the constraint to another type, such as **Finish No Earlier Than**.

  * **Update task Text2, Text3, Text4,...(used for Equip#, Area, Department...) using Work Order values:**

Select this option to have the interface copy information from EAM's Work Order into the Project's text fields. You have the option to either insert all this date or none of it. For more information of EAM fields that are copied into the Project's Text (and Date) fields, see [EAM MPP Column Mapping](MPPI-ImportWO.md#eam-microsoft-project-column-mapping).

  * **Update Project Work Hours per day using Schedule Work Hours per day**

The settings for this option is made in Calendar Options in Microsoft Project, and cannot be synchronized with EAM. For more information, see [Calendar Options Appendix D: Calendar Options](Appendix-D-Calendar-Options.md). After setting the Calendar Options, select this option to use the Work Hours per day in the Microsoft Project.

