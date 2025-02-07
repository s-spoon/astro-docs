---

title: "Source Interface and User Definable Fields"
draft: false
type: Article

---

### General Field Mapping Information

User Definable fields are available for mapping to the source interface in Setup > Source Interfaces  > (Your Source Interface) > Interfaces according to the following rules:

* Line Item User Definable fields: You can map these fields to a fixed value, Order/Invoice level fields, and Line Item level fields, but not Package Content fields.

* Order User Definable fields: You can map these fields to a fixed value, and Order/Invoice level fields. Package Content and Line Item fields, however, cannot be imported.

* Pack/Pallet User Definable fields: If mapping for Orders or Customers, you can only map Package types (not Pallet types) under Shipment > Packaging > Type. To get Pallet types, you must be mapping a shipment type document, such as Invoices, and then the selection under Shipment > Handling Unit > Type will include Pallet types.

* Shipment User Definable fields: These fields can be mapped to a source interface field or fixed value.

### Importing Values from the Source Interface

When mapping to User Definable fields from your source interface, although it is possible to map Aptean Ship User Definable fields to different level source fields, we recommend that you only map User Definable fields to the same level fields from the source interface. For example, you might want to map Aptean Ship Line Item User Definable fields to an order or invoice level field, like Order Number. This can produce unpredictable results when there are multiple orders on the same shipment containing the same line item. In that case, Aptean Ship would use the first value it receives to populate the User Definable field to which you mapped.

### Inventory Items

Item level User Definable Fields appear in the User Fields section in Maintain > Inventory for each inventory item.

When the two [Preferences settings](general-preferences.md) "Use line item information from Aptean Ship database" and "Save line item information in Aptean Ship database" are checked in your setup, User Definable fields will be updated and used based on the shipment line item data (whether imported from the Source document or typed on the screen manually).

If only "Use line item information..."  is checked, the User Definable fields will be read from Aptean Ship's inventory but not updated.

