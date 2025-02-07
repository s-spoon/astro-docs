---
title: "Mapping M2M Fields"
draft: false
type: Article
---

Aptean Ship allows you to customize the way data is translated between Made2Manage Shipments and the Aptean Ship shipment. Using the field mapping feature, you can control how the data in the Shipment is translated to Aptean Ship, allowing you to define what information populates the shipment fields, and how the data is interpreted into accepted shipment values, when necessary.

>[!Tip] My Interface <br>Aptean Ship comes with one predefined interface called "My Interface" that installs default field maps for your Made2Manage Shipments, which you can customize. You can also create multiple interfaces to use with different companies if you plan to map to user-defined fields that vary between companies.
### How to Access Field Mapping


To access field mapping, go to Setup > Source Interfaces > Made2Manage, and click the **Interfaces** heading.

![m2m-interface](assets/images/m2m-interface.png)

Under **My Interface** > **Shipments**, click the **Customize Interface** button.

![m2m-settings-3](assets/images/m2m-settings-3.png)

Then, click the **Select Mappings** heading.

![m2m-interface-1-1](assets/images/m2m-interface-1-1.png)

### Overview


Many fields from Made2Manage are mapped by default as part of the basic interface. If you want more control over how data is translated from Made2Manage into shipment fields, you can add fields or customize field mapping to suit your company's needs. 

For any information that you want imported with the Shipment, you can map those fields to Aptean Ship shipment fields and when applicable, set up value translations.

If you want to import a field that doesn't have a corresponding field in Aptean Ship, you can use Aptean Ship [User Definable fields](user-definable-fields.md) and map your Made2Manage field to one of them. Mapping User Definable fields to Made2Manage fields allows you to bring in values that may not normally be imported with the Shipment.

You can map any field in Aptean Ship, but let's go through a few common examples.
### Ship Via


Ship Via is an example of a field that is mapped by default, but which requires you to set up value translations for the most accurate results. Although the field is mapped, you now need to define what the Made2Manage Ship Via methods mean in Aptean Ship terms. 

For example, the Made2Manage Ship Via field value "AM" can be set up to translate to "FedEx 2Day® A.M." when the Shipment is imported into Aptean Ship. When the Shipment Ship Via is "AM", the Carrier/Service fields on the Shipping screen will automatically populate with "FedEx 2Day® A.M.".

>[!Note] If no value translations are provided, Aptean Ship will attempt to translate the Ship Via based on default [keywords](keywords.md).

The Made2Manage values are populated from Ship Via key field values that are set up in Made2Manage in the Popup Table Maintenance for Ship Via.

Expand Shipment > Carrier Information > Carrier - Service. For each of the Made2Manage Ship Via values In the Value Translations list, select the corresponding Aptean Ship Carrier - Service value from the drop-down list.

![m2m-interface-2](assets/images/m2m-interface-2.png)

 
### Map a Field to a Fixed Value


You can set a fixed value for any mapped shipment field. You can either type in a value or choose one of the possible shipment values from a drop-down list. If the shipment field says (Select) next to it, then the fixed value will be either selected (checked) or not (unchecked).

![m2m-interface-3](assets/images/m2m-interface-3.png)

### Map a Field to any M2M field

In this example, we'll select a Made2Manage field from the Shipment as the mapped source for the corresponding Aptean Ship field.

We will use an unmapped field on the Shipment and add our own mapping.

![m2m-interface-4](assets/images/m2m-interface-4.png)

In the **Maps from** field, select **M2M** field and then choose the M2M field to map to.

![m2m-interface-5](assets/images/m2m-interface-5.png)

### Map a Field to a M2M field with Value Translations

This example illustrates an Aptean Ship field that requires a set of possible values. Here is the Aptean Ship **FOB** field that we map to the M2M field **Terms**. You'll see that an area for Value Translations becomes available. Click **Add Value Translation**.

![m2m-interface-6](assets/images/m2m-interface-6.png)

Enter the values from Made2Manage and then select the Aptean Ship value that they should translate to.

![m2m-interface-7](assets/images/m2m-interface-7.png)

### Map to a User Definable field

Aptean Ship provides User Definable fields at the Item, Order, Packaging, Pallet and Shipment levels. Although it is possible to map Aptean Ship User Definable fields to different level source fields, Aptean recommends that you only map User Definable fields to the same level fields from Made2Manage.

>[!Tip] More information about setting up and using [User Definable Fields](user-definable-fields.md) in Aptean Ship.
1. Create the Aptean Ship User Definable fields.

2. In Select Field Mappings, locate the User Definable field. User Definable fields are noted by a (UDEF) after the field name you created.

![m2m-interface-8](assets/images/m2m-interface-8.png)

3. Select Maps from **M2M Field** and then select the field to map to.

![m2m-interface-9](assets/images/m2m-interface-9.png)

> [!Tip] "Save All Maps" - Whenever you change field mapping, be sure to click the **Save All Maps** button to save your work.

 

 

