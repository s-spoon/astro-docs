---
title: "Freight Rules Conditions"
draft: false
type: Article
---

You can define that a freight rule will always be applied, or you can define a condition under which a freight rule should be applied.
* Always: When you select Always, no further rule settings need to be configured.
* Only under certain conditions: This option lets you create conditions using the conditions builder.


![conditions-1](assets/images/conditions-1.png)

 

Conditions are a number of field values or calculations (operands) connected by operators. They can be based on:
* Calculations: You can define a new calculation or select one you've already created. For more information, see [Freight Rules Calculations](freight-rules-calculations.md).
* Constant Values: These are fixed values that you define. You can add a Constant Value by selecting New Constant Value from the drop-down list.
* Shipment Fields: These are fields from the Aptean Ship shipment. Available fields may change depending upon the type of value you chose to modify on the first dialog of the freight rules wizard.


## New Conditions


To create conditions under which a rule should be applied, select "Only under certain conditions" and click the **Define Conditions** button.

![conditions-2](assets/images/conditions-2.png)

To start creating conditions, click the " + " sign.

![conditions-3](assets/images/conditions-3.png)

 

Select a field value or calculation (or define a new calculation) from the drop-down list.

![conditions-3b](assets/images/conditions-3b.png)
 

For Shipment fields, you can type into the search field to find a specific field. If you select "New Calculation", the Add Calculations wizard will open.

![conditions-4](assets/images/conditions-4.png)

 

Continue to use the fields in the row to select an operator and second operand. The second operand can also be a constant value, which you can add from the drop-down list.

![conditions-5](assets/images/conditions-5.png)

 

In some cases, you can also select whether the condition applies to each order or package (Pack) in the shipment or at least one order or package in the shipment.

![conditions-6a](assets/images/conditions-6a.png)

### Multiple conditions


To add another condition, click the " + " button again. To group conditions, first select the conditions you want to group, and then select the AND or OR button. Grouped conditions can be managed by clicking on the AND or OR button in front of the condition.

## Aptean Ship "Pack" Fields


In the condition builder, two different nodes under Aptean Ship Fields are referred to as "Pack". The differences between these fields relate to the visibility of other packages to the rule when checking conditions, and how the rule is applied.

### Aptean Ship Fields.Shipment.Packs.Pack


* Visibility: Aptean Ship Fields.Shipment.Packs.Pack can discover all packages on the shipment when evaluating if the condition is true.
* How Shipment.Packs.Pack is applied: When the condition is met, the amount is applied to all packages on the shipment.


### Aptean Ship Fields.Pack


* Visibility: Pack can only discover information about the current package being evaluated; it cannot test conditions for any other packages on the shipment.
* How Aptean Ship Fields.Pack is applied: When the condition is met, the value is applied only to that package.


