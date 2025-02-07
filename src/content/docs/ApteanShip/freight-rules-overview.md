---
title: "Freight Rules Overview"
draft: false
type: Article
---

Aptean Ship gives you the ability to define charges, and the way that freight and other charges are applied to shipments. Freight rules allow Aptean Ship to take your list or contract charges and modify them to create a charge based on field values from the shipment, or user-defined values. The types of charges you can modify with freight rules are
* freight charges
* accessorial charges
* handling fees
* applied charges


Freight rules can be configured at the package and/or shipment level, allowing you to be as precise as possible when creating your customized rules. This means, for example, that you can base a rule on a package level option so that one package in a shipment can be treated differently than another.

Freight rules are applied to any source document you ship against. They also apply to manual shipments, which are shipments that are initiated in Rate/Ship without a source document; for example, by entering or selecting a recipient.

Freight rules and the settings for how the Applied Charges are calculated are stored in a Freight Rules Interface. You can assign a specific Freight Rules Interface to a your company (Setup > Source Interfaces > "your source interface" > Companies). It will be used when importing shipments from your source interface.

>[!Tip] More about [Freight Rules Interfaces](http://ask.shipping.apteancloud.com/akb/freight-rules-interfaces/).
## How do freight rules work?


Freight rules can define the applied charges in a variety of ways. Freight charges can be:
* bound by a maximum or minimum amount
* increased or decreased by a fixed amount or percentage
* set to a fixed amount
* set to the result of a calculation
* not written back to the source interface


## Conditions


A rule can also contain multiple conditions that must be met in order for the rule to be applied. Conditions consist of input fields (from the Aptean Ship shipment) or user-defined values, and can be combined with an operator and another input field or fixed value, for example.
## How are freight rules applied?


Freight rules are applied to an initial default value that you define, either List or Contract charges, or zero. The initial value plus these rules and conditions result in the Applied Charge, which can be written back to the source interface.
* List Charge: Published charge plus Fuel Surcharge;
* or Contract Charge: The custom rates returned from the carrier for your account. If custom rates are not available, the Contract charge will be the same as the List charge.


After rating a shipment, the Total Charges section of the Shipment Editor will display how charges were generated, the rule(s) that were applied, and associated values. You can also view rule detail for the rule that was used to modify a charge. Aptean Ship will alert you to any errors in charges calculation and allows you to view the error so you can fix it.

>[!Tip] **Note about Dimensional Weight** <br> When a shipment is rated, for most fields, the Total Charges section will immediately display the impact the freight rule has on the freight charges. However, for the Dimensional Weight field (DimWeight), you will not see how the freight rule was applied until after the shipment is processed. To see the result of the freight rule, open the processed shipment and view the Total Charges.

