---  

title: "Using the Employee Module"   
draft: false 
type: Article

---

The Employee Module page consists of the employee details. You can select a
record in employee search grid and click on **Details** in Contextual Panel to
open the employee Module. If selected, **Employee < Employee Id >: < Name >** page
appears.

You can click on the hyperlink on Employee Id column or double click on any
grid record to open the employee module.

The employee module has three standard tabs:

  * Main
  * Configurations
  * Skills

Also you can perform the following action in Employee Module page:

  1. **Delete** : You can delete the employee by selecting ![](../assets/employees/image004.png) and **Delete** option. See Delete Employee for more details.
  
  2. **Open in New Tab** : You can click on ![](../assets/employees/image006.png) to open the Employee Module page in a new separate tab.
  3. **Close** : You can click on **X** button to close the Employee Module page.

## Main Tab

The **Main** tab consists of the following sections:

### **Employee Details**

Here, you can provide some basic details of an employee. It consists of the
following:

* Employee Id*(15-character alphanum,eric field)
* Name*, Employee Number, Hire Date,
* Employee Supervision, Department,
* Location,
* Shift,
* Occupation and Pay Code.

You can enter any information pertinent to the employee in Comments field.

You can enable the Contractor toggle if the employee's services are
contracted.

The Toggle **Active** is turned on by default. You can disable this toggle if
the employee is no longer working at your site.

>[!note]
>Time charges cannot be entered for an employee who is not marked as Active .

### Contacts

The Contacts tab provides a place to enter personal information for each
employee.

#### Address

Here, you can provide the address and Email Address for an employee.

#### Emergency Contact

You can enter up to 40 characters in both the Name and the Relationship fields
of the Emergency Contact information fields. Enter the phone number of the
person to be contacted in case of emergency.

### Phone Numbers

This section provides all the contact numbers associated with the selected
employee.

You can enter the new phone number using **Add New Phone Number** button. If
selected, you must select the required value from the drop-down in the **Phone
Type*** field and enter a valid **Phone Number**.

You can delete the phone number using the **Remove** button. The phone number
will be deleted from the list.

You can add as many number of phone numbers based on the requirement.

### Custom Information

In the Custom Information section, user defined fields will be displayed. All
custom elements can be defined in the setup module.

## Configurations Tab

The Contacts tab consists of the following sections:

### Approvals

As you build your list of active employees, you can identify the employee's
responsibilities on the Approvals tab and specify spending limits if the
employee has approval responsibilities.

This section consists of the following:

#### Review

Work Order: The toggle is disabled by default. You can enable the toggle If
the employee is an authorized reviewer of work orders. If the employee is an
approver also, enter an amount in the Approval Limit field.

Requisition: The toggle is disabled by default. If the employee is an
authorized reviewer of requisitions, enable the toggle. If the employee is an
approver also, enter an amount in the Approval Limit field.

#### Approver

In this sections all the toggles are disabled by default.

Reorders: Enable this toggle if the employee has the authority to approve
reorders.

Repair: Enable this toggle if the employee has the authority to approve
requisitions for outside repair.

Shipping Order: Enable this toggle if the employee has the authority to
approve or reject shipping orders.

Invoice: Enable this toggle if the employee has authority to approve supplier
invoices processed through the Invoice Matching module.

Also, you can enter the values in the approver’s Direct Charge Approval Limit
and PO Issue Limit.

>[!note]
>In all the above limit fields, do not enter a currency symbol. The application
inserts the symbol for you.

Default Reviewers

You can enter or search the default reviewers in work order, Requisition and
Repair Requisition fields. Select the Default Reviewers to determine the next
reviewer.

### Roles

You can link codes to the employee's ID by entering information on the Roles
section.

#### Work Order Codes

If the employee has responsibility for planning work orders or supervising
craft workers, enter the appropriate code in the Planner and/or Supervisor
fields to link the code to the employee ID. When creating work orders, these
codes appear on the module in the Planner and Supervisor fields.

#### Purchasing Codes

Use this section of the window to link an employee ID to a Buyer (Drop-down)
code.

You can hover the cursor on ![](../assets/employees/image010.png) under each codes to view the details on that code.

## Skills Tab

This tab consists of the following sections

### Crafts

The crafts grid displays all the crafts associated with the selected employee.
You can see the details of the Craft, Actual Rate, Certification Date,
Certification Expiration Date and Primary for each records.

You can perform the following actions on each crafts in the grid:

  1. Create new craft: Click on **New** button to create and add the new craft to the grid. Refer Create New Craft for more details.

  2. Edit the craft: Select a craft and click on **Edit** button to update its details. Refer Edit Craft for more details.

  3. Delete the craft: Select the craft and click on **Delete** to delete that craft from the grid. If selected confirmation pop up appears with **Are you sure you want to delete < Craft Name >?** message. You can click on **Delete** to delete that contact or click on **Cancel** to exit the pop up. If deleted, **Craft Deleted Successfully** message appears.

#### Create New Craft

You can enter the following fields in **New Craft For:** screen to add the new
craft:

  * Craft* (Drop-down: Mandatory Field)
  * Actual Rate
  * Certification Date
  * Certification Expiration Date
  * Primary: Enable the toggle to make the craft as primary. You can make only one craft as primary. 

After entering the above values, you can select any of the following buttons:

  1. **Add** : Selecting this will save and add the new craft to the grid list.
  2. **Cancel** : Selecting this will exit the new craft screen without adding the contact.

#### Edit Craft

You can edit the existing craft from the list. In the **Edit Craft for: < CraftName >** screen, you can update the required fields with new values. The
fields will be as similar to the fields in Create New Craft screen.

After updating the required values, you can select any of the following
buttons:

  1. **Save** : Selecting this will save the updated details.
  2. **Cancel** : Selecting this will exit the edit craft screen.

### **Trainings**

The Trainings grid displays all the trainings courses associated with the
selected employee. You can see the details of Course, Date Taken, Expiration
Date and Grade for each trainings.

You can perform the following actions on each trainings in the grid:

  1. Create new Training: Click on **New** button to create and add the new address to the grid. Refer Create New Training for more details.

  2. Edit the Training: Select a training and click on **Edit** button to update the details for the existing training. Refer Edit Training for more details.
  3. Delete the Training: Select the address and click on **Delete** to delete that address from the grid. If selected, confirmation pop up appears with **Are you sure you want to delete < Course >?** message. You can click on **Delete** to delete that course or click on **Cancel** to exit the pop up. If deleted, **Training Deleted Successfully** message appears. If not deleted, error pop up appears. You can see the errors and proceed accordingly.

#### Create New Training

You can enter/select the following fields in **New Training For:** screen to
add the new training:

  * Course* (Drop-down: Mandatory Field)
  * Date Taken* (Drop-down: Mandatory Field)
  * Expiration Date
  * Grade (Drop-down)

After entering the above values, you can select any of the following buttons:

  1. **Add** : Selecting this will save and add the new training to the grid list.
  2. **Cancel** : Selecting this will exit the new training screen.

#### Edit Training

You can edit the existing training from the list. In the **Edit Training for:\<Course>** screen, you can update the required fields with new values. The
fields will be as similar to the fields in screen.

After updating the required values, you can select any of the following
buttons:

  1. **Save** : Selecting this will save the updated details.
  2. **Cancel** : Selecting this will exit the edit training screen.

You can click on Expand Grid icon ![](../assets/employees/image011.png) to expand the grid to the full frame. If
expanded click on Collapse Grid icon ![](../assets/employees/image013.png) to collapse the grid.

## Editing the Employee Module

You can click **Edit** button to open the employee module in edit mode. You
can update all the required/ mandatory fields (The fields marked with *) and
perform all the necessary functions in all the tabs explained above.

See Edit for more details.

>[!important]The fields marked * above in each tab represent the mandatory fields
during **New Employee Creation**.

