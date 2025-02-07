---  

title: "Using the Serial Module"   
draft: false 
type: Article

---

A serial number provides a unique identifier for a piece of equipment just as
a social security number provides a unique identifier for a person. While the
**Equipment Location ID** remains constant, a serial number assigned to that
location will change if the equipment changes.

The Serial Module maintains information unique to a particular serial number,
including the current location of the equipment. You can add serial numbers to
the database by accessing the Serial Module and entering information on its
four tabs.

You can select a record in Equipment Search grid and click on **Serial** in
Contextual Panel to open the Equipment Module. If selected, **Serial: \<Serial#>: \<Serial Description\>** page appears.

The serial module has four standard tabs:

  *  [Main](#main-tab)
  * [Configuration](#configuration-tab)
  * [Financial](#financial-tab)
  * [Related](#related-tab)

Also you can perform the following actions in Equipment Module page:

  1. **Delete** : You can delete the selected serial by selecting and **Delete** option. See [Delete a Serial ID](Using-the-Serial-Search.md#delete-a-serial-id) for more details.
  2. **Work Order** : You can create a new work order by selecting  and **Work Order** option. See Create Work Order for more details.

  3. **Open in New Tab** : You can click on to open the Serial Module page in a new separate tab. You can also double click on any grid record to open that record in a separate tab. Also you can perform the following actions in Equipment Module page:
  4. **Close** : You can click on **X** button to close the Equipment Module page.

## Main Tab

The **Main** Tab consists of the following sections:

### Serial Detail

Serial Detail section consists of the following:

**Basic Info**

This section consists of Serial #, Serial Description*, Serial Status, Class*,
Sub Class, Current Value, Original Value and Service.

  * You can add new translation to the selected serial description if required. See Translation also.

  * You can enable the Marked as Deleted toggle which is off by default to delete that Serial # from the grid.

  * You can enable the Need Review toggle which is off by default to set values review when updating/creating new serial.

  * Current value and Original Values are defaulted to zero. You can update the required value as required.

  * Serial Status field is protected unless you are adding a new serial number to the module. For a new serial id, Awaiting Repair and Being Repaired are not available in the selection list.

  * When you are creating a new Serial ID, Serial Status will be **Uninstalled** and Spares Holding Location and Repair Supplier Location fields will be enabled.

  * When status is Uninstalled, either Spares Holding Location or Repair Supplier Location must be provided, but not both during the creation of a new serial.

**Location Info**

This section consist of Installed Location, Storage Location, Item,
Description, Stores Location, Bin, Reason Out of Bin, Spares Holding Location
and Repair Supplier Location fields.

You can replace the Serial description with Item description when creating the
new serial. If Item Number is empty, Stores Location, Bin and Reason out of
Bin fields are disabled.

### Specifications

You can add any specific instructions for the selected serial # in
**Specifications** an **Repair Specifications** fields. You can add
translation to the specification during creating/editing the serial. See for
more details.

### Purchase

Using the fields displayed on the **Purchase** section, you can enter a
description of the following:

  1. **Warranty** : You can view or edit Warranty, Purchase Date, Warranty Expiration Date, Original PO, Install/Replace Cost information in **Warranty** Section. All date fields are set to default to Today's date. 

  2. In the **OEM Detail** section, the fields used to describe the equipment include **Model, Manufacturer** and **Asset Reference**.

### Custom Information

The Custom section displays any custom elements defined for your site. You
must enter all the fields during a new equipment creation.

## Configuration Tab

The **Configuration** tab shows the **Last Failure Date** for the Serial
Number ID (this date is set when a technician marks the **Failure** check box
in the **Work Order Completion** window). You can also enter the date the
serialized equipment is placed in or removed from operation, but only if you
have security access to update the **Location Status** field in the
**Equipment Module**.

## Financial Tab

The **Financial** Tab shows the costs incurred when the serial number is
tracked by another computer system or by manual methods. It shows the
**Internal Costs**, and **Contract Costs**. You can modify those costs as
well.

## Related Tab

The Related Tab consists of the following sections:

### Related Data at a Glance

This section is read only section and you can view the number of Open Work
Orders, PM Schedule and Closed Work Orders.

### Open Work Orders

Displays the number of open work orders and lists them in the grid.

### PM Schedules

Displays the number of PM Schedules for the equipment in the grid.

### Closed Work Orders

Displays the number of closed work orders and lists them in the grid.

### Serial Change History

Displays the change history of the serial in a grid. You can update the
comments for any of the changed history.

You can search the required value in **Filter Results** field at the top of
the grid. The data which matches the search criteria will only be displayed in
the grid. You can refer Grid Operations for various grid operations. You can click on **X** to
close the grid.

## Editing the Serial Module

You can click **Edit** button to open the Serial note book in edit mode. You
can update all the required/ mandatory fields (The fields marked with *) and
perform all the necessary functions in all the tabs explained above.

See Edit for more details.

>[!Important]
>The fields marked * above in each tab represent the mandatory fields
during **New Serial # Creation**. If the new serial ID is created by copying
the values from an existing id, the mandatory fields values will be auto
updated with copied values.

