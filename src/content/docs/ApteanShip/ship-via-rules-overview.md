---

title: "Ship Via Rules Overview"
draft: false
type: Article

---

Ship Via Rules allow you to define custom rules that streamline the selection of the best carrier/service option when processing shipments. You can also configure options and field mapping that control how and when rules are selected and applied to a shipment. Ship Via Rules are used when you load a source interface document, on Rate or Ship, or when you batch import shipments.

### Rules

Only one Ship Via Rule can be selected to determine the best Ship Via for a particular shipment at a time. Each rule has a unique ID called the Ship Via Scenario ID. In Aptean Ship, you can use two types of Ship Via Rules, called Switch Rules and Rate Shop Scenarios.

### Switch Rules

This type of rule performs an automatic switch to a specific Carrier/Service, and optionally Carrier Account, under certain conditions. Switch rules will automatically select a service based on conditions specified in the rule, or will select the carrier's next available service if the selected service is unavailable. See [Switch Rules](http://ask.shipping.apteancloud.com/akb/switch-rules/) for more information.

### Rate Shop Scenarios

Giving you more control over the Rate Shop process, this type of rule lets users design a scenario of rating parameters/filters/conditions that ultimately defines how Aptean Ship should select one of the available rate quotes. For each scenario, a rate shop is performed and then the best available rate quote is selected and the carrier/service is changed. Rate Shop Scenarios are broken into two groups:

* Conditionally selected: The shipment method selected is based on defined conditions.

* Manually selected: The shipment method selected is decided by user selection, shipment defaults, shipment import, or field mapping.

See [Rate Shop Scenarios](rate-shop-scenarios.md) for more information.

### Sample Rules

Aptean Ship has sample rules as examples you can use to see how rules may be created. To populate these rules, click the Add Sample Rules button at the bottom of the setup window. Select Yes at the prompt to add the rules. Sample rules are identifiable by the word "(Sample)" next to the rule title and are enabled by default when they are added. Sample rules can be copied using the Copy Rule button on the toolbar, modified, then saved under a unique name to create custom rules.

![](assets/images/ss-wc-0025-2.png)

### Field Mapping

Each Ship Via Rule is identified by a unique Ship Via Scenario ID. This allows you to map and translate a source interface field to the Ship Via Scenario ID in order to have the scenario automatically selected on import of the source interface document (orders, etc.). See Ship Via Rules Mapping for more information.

### Access Rights

Only users with the correct access rights can modify settings. By default, all users with "admin" and "shipper" roles can access Ship Via Rules Setup. User roles are maintained in the Subscription Management System (SMS) under Users & Roles. See [User Roles](http://ask.vtechnologies.com/ss-wc/knowledge-base/roles/) for more information.

