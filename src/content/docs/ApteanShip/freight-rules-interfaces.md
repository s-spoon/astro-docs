---
title: "Freight Rules Interfaces"
draft: false
type: Article
---

A Freight Rules Interface is a saved grouping of freight rules and settings that configure the Applied Charges on a shipment. Aptean Ship comes with a Default Interface, which you can modify or use as a base for new freight rules interfaces you create. One reason you might want to create a new freight rules interface, for example, is if you use more than one source interface ... you may want to have different freight rules for each interface.

The Freight Rules Interfaces page, accessible from Setup > Freight Rules, contains a list of any defined Freight Rules Interfaces and allows you to manage them. You can add, edit, delete, or set a default interface.
#### Set Up for Source Interfaces


You can set a specific Freight Rules Interface for your ERP or eCommerce company, under Setup > Source Interfaces > "your source interface" > Companies. It will be used when importing shipments from your source interface.
### Add a Freight Rules Interface


It's probably a good idea to create your own Freight Rules Interface based on the Default Interface provided, so that you always have the default settings to fall back if you want to create a new interface.
1. On the Freight Rules Interfaces page, click **Add Freight Rules Interface**.

![add-fr-interface-1](assets/images/add-fr-interface-1.png)

2. Enter a name for the new interface and select which interface you want to base the new interface on. Click **Submit**.

![add-fr-interface](assets/images/add-fr-interface.png)

3. The Freight Rules Interface will be added to the list. Click the Edit button to modify settings or add freight rules.

### Interface Settings

These settings configure how charges are calculated and applied.

#### For Prepaid shipments, set Applied Charges to

This initial value for Prepaid shipments is the amount Aptean Ship will base the Applied Charges on at the Package and Shipment level. Freight rules and handling fees will be applied to this base value; or, if no rules are used, this will be the final Charges amount that is written back to the source interface. You can select from:
* List charges
* Contract charges
* Zero

#### When package level charges are unavailable

If List or Contract charges are not supplied by the carrier at the package level, Aptean Ship needs to know how to establish the initial package level value. The options for how to distribute shipment charges to the package level are:
* Divide evenly among packages: Shipment charges are uniformly distributed to each package.
* Proportionally divide based on package weight: Shipment charges will correspond to the package weight.
* Proportionally divide based on line items value: Shipment charges are distributed based on the value of line items in each package.
* Set on the first package: Shipment charges are applied to the first package in the shipment.
* Set on the last package: Shipment charges are applied to the last package in the shipment.


#### When multiple orders are shipped in a single shipment, set order Freight Charge from Shipment Total Applied Freight


For a single shipment containing multiple orders, Aptean Ship gives you the ability to divide or set the Total Applied Freight in a number of ways:
* divided evenly among the orders (default setting)
* proportionally divided based on total order weight
* proportionally divided based on order total line items value
* set on the first order
* set on the last order

>[!Note] For the "Set on first/last order" options, the first (or last) order is determined by the sequence in which the orders are imported into Aptean Ship, and not the numerically or alphabetically first (or last) order. So if you select order #99, and add related orders #55 and #33, #99 is considered the first order. When multi-selecting orders from the Rate/Ship window the sorting placement will determine the order that is first;  i.e., the top-most order on the Rate/Ship window will be first.  

#### Use custom freight rules to modify the Applied Charges


This setting allows you to define and use custom freight rules, if desired. Select **Never** if you do not want Aptean Ship to use custom freight rules. You can create custom freight rules for:
* Only for prepaid shipments: Aptean Ship will use custom freight rules when the shipment billing type is Prepaid.
* For all shipments: Aptean Ship will always use your custom freight rules.


Selecting either option will activate the **Add Freight Rule** button, which you can click to set up or modify freight rules.

![add-fr-rule-1](assets/images/add-fr-rule-1.png)

