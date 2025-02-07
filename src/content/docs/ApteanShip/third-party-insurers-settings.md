---

title: "Third Party Insurers Settings"
draft: false
type: Article

---

The Settings section lets you set up the carrier interfaces/accounts to use with this insurer, and specify how insurance should be applied. The grid shows you details for the carrier interfaces associated with the third party insurer being added, edited, or viewed.

Click **New Setting** to add or delete a carrier interface/account for this Third Party Insurer. For New, a new row is started in the grid.

![](assets/images/3rdpartyinsurers-4.png)

 
## Field Definitions

### Enabled

Check this box to enable/disable a Third Party Insurer for the selected Carrier/Account combination. When you click New to add a new entry, the check box is automatically enabled.

### Carrier

This drop-down list contains your configured carriers. Choose the carrier to use with this insurer.

### Account

If you have multiple carrier accounts, this drop-down list contains the enabled accounts for the carrier selected above. If applicable, select the account for which you want to use this insurer.

### Min/Max Insured Value

Any amount less than the Min value will be covered by the carrier Declared Value. Third Party Insurance will cover the amount set in the Max value field. Any amount over the Max value will also be covered by the carrier Declared Value. For UPS Capital, the maximum defaults to 50,000. These amounts may be changed. For insurers added manually, if this is left blank, it will default to 0.

### Discount %

This field is used when Report Type on the address tab is set to "Report by Discount Percentage." Enter the discount percentage agreed upon with the Third Party Insurer.

### Unit Charge per $100

If the report type on the Address tab is set to Report by Insurance Units, you can enter the Unit Charge per \$100 value agreed upon with the insurer. You can also specify the minimum number of units (MinUnits). This calculation is reflected on the Ship screen under Shipment Details > Insurance > Third Party Amount. For example, if we set a unit charge of .50 per unit and insure a package for $500, the Third Party Insurance Cost would be $2.50. This is calculated as 500/100 = 5 (number of units), then multiply the # of units by .50 per unit. Note that the number of units will be rounded up.

### Use discounted insurance for list and custom charges

When checked, the discount percentage or per unit charge (based on the report type for the insurer) will be used for the list and custom charges. If unchecked, Aptean Ship will use the carrier's declared value rate for the list and custom charges. In the case where the declared value is split between the carrier and the third party insurer, Aptean Ship will rate the amount covered by the carrier, then calculate the amount covered by the insurer. The sum of the charges will be used for the list and custom rates. Use this insurer From the drop-down list, choose whether you want to use this carrier interface/insurer configuration for all billing types or only when billing the sender.

![](assets/images/3rdpartyinsurers-5.png)

 

