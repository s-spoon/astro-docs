---
title: "Rate Shopping"
draft: false
type: Article
---

Aptean Ship provides you with the ability to rate shop among carriers while processing a shipment in the Shipment Editor.

Once your order information is loaded or entered on the Shipment screen, you can use the Rate Quotes section to define how you want to rate shop, run rate shop scenarios, and view and select rate quotes.
## Rate Shop Methods


### Automatically


Rate shopping can occur automatically using Rate Shop Scenarios. You can define when Rate Shop Scenarios should be applied in Setup > Ship Via Rules > Settings.

>[!Tip] See the section on [Rate Shop Scenarios](rate-shop-scenarios.md) for information on creating scenarios. To learn more about settings that control Rate Shop Scenarios, see [Ship Via Rules Settings](ship-via-rules-settings.md).
### Manually


Rate Shop can also be executed manually, while you're shipping, using these methods:
* Select the Rate menu on the Shipping screen and then click **Rate Shop** (Ctrl + Alt + S).

![shipping-software-rate-shop-1](assets/images/starship-shipping-software-rate-shop-1.png)

* Select a Rate Shop Scenario in the Rate Quotes section and click the **Run** button.

![shipping-software-rate-shop-2-2](assets/images/aptean-shipping-software-rate-shop-2-2.png)


## Rate Quotes


In the Rates Quotes section of the Shipment Editor, you can configure how you want to rate shop. This is also where rates are returned and listed by carrier and carrier interface/account.
### Settings


You'll notice some fields that you can configure in the Rate Quotes section. This allows you to control shipment rating yourself while you're shipping. These settings are described below.

### **Required Delivery By**

The default value is today's date plus 1 month; you can set a different date and time before submitting your rate request. When you change this setting after rating, and then re-rate the shipment, Aptean Ship will only display those carriers that meet the Required Delivery By requirement. This setting affects the carriers and services that will be available, as not all carriers or services can ship to a destination within the specified period of time.

![shipping-software-rate-shop-2a-1](assets/images/aptean-shipping-software-rate-shop-2a-1.png)

### **Scenario**

The Rate Shop scenario to run can be manually selected from the drop-down list. The scenario can also be selected by conditional rules, by shipment defaults, by shipment import, or by source interface mapping. Scenarios marked with an asterisk indicate that this scenario was chosen by Aptean Ship based on conditional rules. The last or currently selected scenario is noted by a check mark so that users can return to it if necessary. To run a scenario manually, click the Run button.

![shipping-software-rate-shop-2b-1](assets/images/aptean-shipping-software-rate-shop-2b-1.png)

>[!Tip] **Scenario Notes** <br>If Aptean Ship is unable to select a rate quote due to services in the rate shop scenario that may not be available for the selected destination, or because of other conflicts, you can define what Aptean Ship should do when no selection is possible. Click [here](rate-shop-scenarios.md#if-no-selection-is-possible) for more information on that setting. 

### Deactivate Conditional Rules

If you choose a different rate quote than the one that was automatically selected by Aptean Ship based on conditions, conditional rules are deactivated and Aptean Ship will notify you with a pop up message. Conditional rules are also deactivated when you select a different scenario than the one selected by Aptean Ship. The message will look something like this:

![shipping-software-rate-shop-3](assets/images/aptean-ship-shipping-software-rate-shop-3.png)

To reactivate conditional rules for the shipment, you can either
* switch back to the scenario marked with an asterisk; or

![software-rate-shop-4-1](assets/images/aptean-shipping-software-rate-shop-4-1.png)
* uncheck the Deactivate Conditional Rules check box, which will revert the Rate Shop Scenario selection back to the one selected by Aptean Ship.

![shipping-software-rate-shop-5-1](assets/images/aptean-shipping-software-rate-shop-5-1.png)


### Rate Quotes Grid

Besides the rates being listed by Carrier/Service and Interface/Account, Aptean Ship provides other useful information to help you while rate shopping. Included in each rate quote are the Business Days in transit and Total Days in transit, with an Estimated Delivery Date and Time. Finally, you can view the List, Contract, and/or Applied freight charged, depending upon what you selected to view in [Rate Quote Preferences](rate-quote-preferences.md).

To select a rate quote for your shipment, double click it. The selected carrier and service will be updated in the Transportation section, and the updated charges will appear in the Total Charges section.

### Sorting Rate Quotes

You can sort Rate Quotes using one column, or multiple columns at the same time, creating a nested sorting result. To select your first sort criteria, click the column heading.

![shipping-software-rate-quote-1-1](assets/images/aptean-shipping-software-rate-quote-1-1.png)

For example, you can click on the "Total Days" column heading, then the "Interface Account" column heading, and then the "Contract Charges" column heading to display the fastest, by carrier interface/account, in order of price.

![shipping-software-rate-shop-7-1](assets/images/aptean-shipping-software-rate-shop-7-1.png)

 

