---
title: "Set Up User Definable Fields"
draft: false
type: Article
---

You may define an unlimited number of User Definable fields of various formats. User
Definable field names must be unique. Click the Modify button next to the User Definable field section you want to customize or the Add button to add User Definable fields. If you're just starting out with Aptean Ship, no User Definable fields are defined by default - you'll need to add them.
## Field ID


This value is a unique identifier for the User Definable field. The Field ID cannot be left blank.

>[!Tip] **Modifying Field IDs** Although you can change a Field ID that you originally created, keep in mind that changing the ID is the same as deleting the existing ID and replacing it with a new one. This means any field mappings, freight rules, or conditions, as well as the data in shipments, will be removed. If you change the Field ID and then want to recover any lost information, you can create a new User Definable field with the original ID.
## Field Level


This value defines whether the User Definable field is at the Item, Package, Pallet, Order, or Shipment level.

Item level fields are available for both Inventory Items (Maintain > Inventory) and for line items in the shipment.
## Field Name


The Field Name defines how the field label appears in Aptean Ship.
## Field Type


This value defines the data type of the field. Use the Field Testing area to view how field data will display in Aptean Ship. Choices are:
* String: This type can be any value or limited to a list of values that you define. See Value Types below.
* Boolean: This is a True/False data type, so the field will display as a check box in Aptean Ship. "Checked" is True, and "unchecked" is False.
* Integer: This type can be any value or limited to a list of values that you define. See Value Types below.
* Decimal: This type is a numeric field that allows you to set the number of decimal places.
* Money: The Money data type will display the value in dollar/cents format; for example, 1000.25.
* Date Time: For this type, you can select to use both date and time, only the date, or only the time.


## Value Types


For String or Integer field types, you can select "Any Value" (with the value being limited by the field type), or you can add values.

To add a list of values, select "One of a list of values" in the **Value Types** field.

![aptean-ship-udef-1](assets/images/aptean-ship-udef-1.png)

Define values by typing them in the **Allowed Values** field and clicking **Add**.

![aptean-ship-udef-2](assets/images/aptean-ship-udef-2.png)

When values are specified, the User Definable field will display as a list of selectable
values in Aptean Ship. The field will default to the first value in the list.

![aptean-ship-udef-3](assets/images/aptean-ship-udef-3.png)

 

