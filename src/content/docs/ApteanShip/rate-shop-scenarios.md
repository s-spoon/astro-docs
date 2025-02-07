---
title: "Rate Shop Scenarios"
draft: false
type: Article
---

Rate Shop Scenarios give you the flexibility to rate shop between carriers and services, specific carriers or services between different carrier interfaces, or specific services between different accounts. You can add parameters and limitations to include or exclude services, and conditions under which scenarios should be applied. Rate Shop Scenarios can be viewed and created in Setup > Ship Via Rules > Rate Shop Scenarios tab. Sample rules are provided to help you with the creation process.
### Conditionally or Manually Selected?


The difference between conditional and manual scenarios has to do with how and when Aptean Ship selects the rule for a shipment. With manual rules, there are no conditions. They are run manually by the user from the Shipment screen, using shipment defaults, by shipment import, or by source interface mapping. For conditional rules, Aptean Ship will automatically select to use them when conditions of the rule are met for the shipment. Conditional rules cannot be applied using shipment defaults, field mapping, or manual user selection.

>[!Note] Conditional rules may be manually re-selected by the user after conditional processing is deactivated, due to changes on the Ship screen, etc.
### Create a Rate Shop Scenario


Scenarios are executed in order of priority by their position in the grid. The toolbar to the right of each scenario contains functions to copy, edit, and delete the scenario. You can also change the scenario priority by dragging and dropping the entry to a higher or lower location in the grid.
>[!Tip] **Adding a Rate Shop Scenario** <br>Click the Add Rate Shop Rule button to add a rate shop scenario. As you go through each section, click Next to continue.
### Carriers To Shop


Select the Carrier(s) to be rate shopped in this scenario. You can select from All Carriers, All Parcel Carriers, All Freight Carriers, or Specified Carriers.
### Specified Carriers


This option allows you to select carriers and for each carrier, you can define the services, carrier interfaces, and accounts to include. To add carriers, click the New button and repeat the process for each carrier. You can also add "Current Carrier", the currently selected carrier on the Ship screen.
### Services/Carrier Interfaces/Account


You can shop all services or choose the Service(s) to include in the rule. If you have carriers set up with multiple carrier interfaces, you can also specify the carrier interface to use (for example, Freightquote.com, UPS, or Amazon Shipping).

For users with multiple carrier accounts set up, you can choose an account to use. If an account isn't specified, the current sender account is used.

![](assets/images/ss-wc-0025-3.png)

 

>[!Note]
>* The default carrier interface and account are set up for the carrier in Maintain Carriers.
>* When rate shopping specific carriers with Freightquote, Enterprise TMS, and SMC3, the returned rate quotes will show the specified carriers plus unknown carriers.



### Quote Exclusions


In this section, define how the results of the rate shop are filtered by choosing which rate quotes should be excluded. This is optional.

The filters provided allow you to refine the returned rate quotes by using additional limitations. You can use any combination of exclusions. You can filter by limiting rate quotes by list or custom charges, total billed weight, and/or estimated delivery. For example, you may want to exclude all services where the estimated delivery exceeds 3 business days.

Optional: You can also add conditions to meet based on shipment fields by clicking the button and defining conditions in the Condition Builder. See the [Condition Builder](rate-shop-scenarios.md#condition-builder) section below for additional information.

![](assets/images/ss-wc-0025-4.png)
### Quote Selection


This section configures how Aptean Ship will choose the best rate quote.
### Sort Rate Quotes by


The sort order defines how the results of the Rate Shop are presented to the user in the Rate Shop section.
* Do Not Sort
* (Sort by) Price, Delivery Date, or Carrier Name: This option also allows you to choose to sort in ascending or descending order


### After rating


Select how Aptean Ship should select the best rate quote after rating.
* **Do not make a selection:** This option best displays the way Rate Shop has always worked. Aptean Ship rate shops, filters the quotes, and displays them in Rate Shop in the order specified but does not select the best quote. The user has to manually select the rate quote.
* **Select the fastest, considering time of the day:** Aptean Ship will select the rate quote that has earliest estimated delivery date and time.
* **Select the fastest, ignoring time of the day:** This option is similar to option 2 but disregards time of delivery during the day. Anything delivered on the same day is equal, so Aptean Ship will select the cheapest contract rate on the earliest day. So let's say you want to compare UPS Ground with Next Day, 2nd and 3rd Day services. If Ground arrives on the same day as one of the express services, Aptean Ship will select Ground even if it is delivered at a later time of day because it's cheaper.
* **Select the cheapest (by list or custom price):** This option will select the quote that has the lowest price. Within quotes that have the same lowest price, the fastest service is selected. This is useful in conjunction with exclusions based on time in transit. An example might be if you want to rate shop between services and select the cheapest service that delivers within 2 business days.


### If no selection is possible


Specify what Aptean Ship should do if no selection is possible. Because services in the rate shop scenario may not be available for the selected destination, because of conflicts with other business rules, or being filtered by defined exclusions, Aptean Ship sometimes cannot choose the best carrier/service.
* **Force the user to select a carrier/service:** Aptean Ship will default the Carrier/Service fields to ‘Select Carrier/Select Service’ (respectively), requiring the user to make a manual selection before the shipment can be processed.
* **Use currently selected carrier/service (do not change):** Aptean Ship maintains the currently selected, mapped, or default Carrier/Service, allowing the shipment to be processed. You would want to select this option for Rate Shop Scenarios that could compare other services to the currently selected to see if a better rate is found. For example, if your source interface has a '2nd day' shipping method mapped to a Aptean Ship value of 'UPS 2nd Day' but want to compare other rates in case something might be cheaper, you could use this option to only select a different carrier if the rate is cheaper. If nothing else is cheaper, Aptean Ship keeps the mapped-in shipping method.


![](assets/images/ss-wc-0025-5.png)
### Rule Application


Choose whether this rule will be manual or conditional. Manual rules are run manually by the user from the Shipment screen, using shipment defaults, by shipment import, or by source interface mapping. If you select conditional, you can define the conditions for when the rule should be used in the Conditions section.
### Condition Builder


The Define Conditions button launches the Conditions Builder where you can add/modify/delete conditions. Use the Condition Builder to select the Aptean Ship fields and values that will define when the scenario will be applied. Conditions are a number of field values (operands) connected by operators. They can be based on:
* Aptean Ship Fields: These are shipment fields from the Ship screen.
* Constant Values: These are fixed values that you define.


Click the "+" button to add a condition.
![](assets/images/ss-wc-0025-6.png)

Select a Shipment field value as the first operand; for example, the Service field.

![](assets/images/ss-wc-0025-7.png)

Select an operator, for example "contains" or "is equal to". Then, choose a second operand, which can be either a Shipment value or a Constant value. You can add a Constant Value by selecting New Constant Value from the drop-down list.

![](assets/images/ss-wc-0025-8.png)
**Multiple Conditions**

To add another condition, click the "**+**" button again. To group conditions, first select the conditions you want to group and then select the **AND** or **OR** button.

![](assets/images/ss-wc-0025-9.png)

Grouped conditions can be administered by clicking on the **AND** or **OR** button in front of the condition.

![](assets/images/ss-wc-0025-10.png)

When you are done adding conditions, click **OK**.
### Scenario Name and Description


Complete the rule by providing a unique name and description. You can use the auto-generated description or you can provide your own. Click **Finish**.
![](assets/images/ss-wc-0025-11.png)

