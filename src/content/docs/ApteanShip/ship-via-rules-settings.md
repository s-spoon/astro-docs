---

title: "Ship Via Rules Settings"
draft: false
type: Article

---

Ship Via Rules settings are accessible from Setup > Ship Via Rules > Settings. These settings allow you to control Ship Via Rules behavior.

### When selected service is not available, switch to

In the case that the Service you selected is not available, Aptean Ship can automatically update the Carrier/Service in the Transportation section to the next slowest or next fastest service.

* Next Slowest Service: Aptean Ship will populate the Service field with the carrier/service that has the next slowest delivery time.

* Next Fastest Service: Aptean Ship will populate the Service field with the carrier/service that has the next fastest delivery time. This is the default setting.

    ![](assets/images/ship-via-rules-1.png)

### When shipment is processed, store current rate quotes

In addition to the rate quote that was selected for a shipment, any other valid rate quotes can also be saved with the shipment when it is processed. This provides additional information that can be useful for analyzing the logic behind the rate quote that was selected and for examining cost-savings.

When checked, Aptean Ship will store all rate quotes with the shipment when it is processed. When unchecked, only the rate quote for the currently selected carrier and service will be stored. The default setting is unchecked.

![](assets/images/ship-via-rules-2.png)

### Show message to the user

This setting only applies to user messages that occur due to Ship Via Rules processing.

* Never: The user is not shown messages in any case. This is the default setting.

* When applied rule is unable to make a selection: A message will be shown when the [Switch Rule](http://ask.shipping.apteancloud.com/akb/switch-rules/) is applied but the service is not available and/or the rule requires that the user make a service selection. Another case is when the [Rate Shop Scenario](rate-shop-scenarios.md) is applied but no rate quote can be selected due to limitations or conditions.

* When applied rule switches carrier/service/account or is unable to make the selection: A message is also shown in the cases above, or when a new carrier/service or account is successfully selected based on an applied rule.

    ![](assets/images/ship-via-rules-3.png)

### When should selected rate shop scenario be run

This setting defines when during the shipping process Aptean Ship will rate shop and make a selection based on Rate Shop Scenarios. For scenarios that are more simple, it is recommended that you use one of the first two options; users with more complicated scenarios, for example, involving rate shopping multiple carriers that also include freight carriers, should use the third or fourth options.

### On the fly (in place of each rating process)

Aptean Ship will rate shop every time instead of rating and choose the best shipping method. This option is best for users who are processing shipments that will not require many changes to the shipment information once the shipment is loaded is on the Ship screen; for example, packed shipments imported from the source interface, or shipments that are auto-packed. Changes to shipment information with this setup can cause the rate shop to be run each time shipment information is modified.

### Only once (first time rating is performed)

Aptean Ship will rate shop once and choose the best shipping method the first time when there is enough information on the screen for rating. If shipment data is modified after that, requiring Aptean Ship to re-rate the shipment, the Rate Shop Scenarios will no longer be run. Normal rating will occur instead. This option is also recommended for users processing shipments where the shipment information will not change much once loaded, or that changes will not affect the resulting selection of the rate shop.

### On Ship/Process

Aptean Ship will rate shop and apply the scenario after the user performs a Ship/Process but before processing the shipment. This method is useful if the Rate Shop Scenarios perform complicated rate shopping between carriers. You can also use it if you will be entering or changing shipment information on the Ship screen. Choosing this method will ensure that Aptean Ship will apply the Rate Shop Scenarios before Ship/Process if you do not do it manually.

### Manually By User

This option best mimics the way rate shopping has always functioned and gives control of applying the scenario to the user. You can decide if and when you want to apply a Rate Shop scenario at any point during the shipping process by selecting a scenario and clicking the Run button in the Rate Quotes section of the Shipment Editor. You can also select to Shop All carriers. This is the default setting.

    ![](assets/images/ship-via-rules-4.png)

### Restoring the Default Settings

To reset any changes you made to the default settings, click the Reset button. This will restore the default values for each field.

    ![](assets/images/ship-via-rules-5.png)

 



