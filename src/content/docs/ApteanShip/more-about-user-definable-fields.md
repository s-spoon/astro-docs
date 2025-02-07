---
title: "More About User Definable Fields"
draft: false
type: Article
---

Aptean Ship allows you to create User Definable fields at the Item, Order, Packaging, Pallet and Shipment levels. User Definable fields can be mapped to source interface fields in order to import whatever custom field data you wish. You can also use User Definable fields in freight rules, ship via rules, and more.

User Definable Field customization is accessible from Setup > User Definable Fields. No User Definable fields are created by default; however, you can add as many User Definable fields as needed.
### Finding User Definable Fields


This section explains where you can find and use Aptean Ship User Definable fields.
### Line Item User Definable Fields


These fields display in the Line Item section in the Ship screen, and on the User Fields section for an item in Maintain > Inventory. If mapped to the source interface, they can be populated by documents that support line item level information. They can also be mapped to a fixed value.

>[!Tip] [Inventory Items](inventory-items.md)
### Order User Definable Fields


These fields display in the Order section of the Ship screen when shipping against a source document.
### Pack User Definable Fields


These fields are accessible in the Packaging section, by clicking the User Fields button.
Packaging User Definable fields may also be mapped to source interface documents that do not support package level information, such as customers.
### Pallet User Definable Fields


Pallet fields are only available when shipping with Freight carriers. These fields display in the Packaging section.
### Shipment User Definable Fields


These fields are accessible from the Shipment tab in the Transportation section, by clicking the User Fields button.
### Other Uses for User Definable Fields


In addition to the locations above, User Definable fields can be accessed and used
from the following components of Aptean Ship.
### Customize Interface


Fields can be mapped to the source interface or a fixed value.
### Write-back


Fields can be used when defining custom write-back.
### Freight Rules and Ship Via Rules


Fields can be used when building conditions for rules.
### Printing


For [Printing Profiles](printing-profiles.md), fields can be used when defining printing conditions.
### eNotify


Fields can be used in Email Templates.
### Shipment Defaults


Default values can be set for the User Definable fields.
### Carrier Reference Fields


Can be used when defining Reference Fields for each carrier (if supported). See Setup > Carrier Interfaces [Carrier Reference Fields](carrier-reference-fields.md) for specific carrier information.

---

>[!Tip] To customize or add User Definable fields, see [Set Up User Definable Fields](set-up-user-definable-fields.md).

