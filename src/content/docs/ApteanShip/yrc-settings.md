---

title: "YRC Settings"
draft: false
type: Article

---

These settings apply to all YRC accounts and can be accessed from Setup > Carrier Interfaces > YRC > Settings.
### Reference Fields


Reference fields allow you to define additional information for the shipment; for example, you can define a field that you want to print on the YRC BOL. Aptean Ship supports up to 5 different reference fields at the shipment level.

Specify the shipment fields to include as reference fields by selecting them from the drop-down lists. You can type into the magnifying glass field to search for and select another shipment field.

>[!Tip] For more information, see [Reference Fields](carrier-reference-fields.md).

 
### Known Issue

When using Store Number and Dept Number, and these fields are populated in the Shipment Editor, the BOL Number does not print in the "B/L Number" section at the top of the BOLs. Instead, it prints in the Customer Order Number section, as "BM=", with any other reference fields.

![](assets/images/yrcbm.png)

### Time Critical/Air Freight

### Always retrieve rates for time critical and air freight services when rate shopping

Leaving this option unchecked means that rates for time critical or air freight services will not be retrieved when you rate a shipment. This significantly speeds up the rate request, making the rating process faster.

![](assets/images/yrc-5.png)

When this setting is not enabled, you can still retrieve rates for a single time critical or air freight service by selecting that service in the Transportation section before rating the shipment.

![](assets/images/yrc-6.png)


