---

title: "Using the Rules-Based Product Configurator"
draft: false
type: Article

---
The rules-based Product Configurator allows you to define rules for a product that are more complex than what features, options, and Visual Rules can describe. You apply these rules in the form of rule scripts (Also called Visual FoxPro (VFP), Fox) a programming system developed byMicrosoft. Made2Manage is developed largely using Visual FoxPro., You can set up rule scripts to execute at four points:

-   When a user A person who has an account (a user name and password in Made2Manage) selects a particular option (an available choice for a product's feature). For example, a computer manufacturer lets the customer select one of three hard disk drives: part numbers HD1600, HD2100, or HD3400. The HD3400 is an option within the hard disk drive feature and is typically equivalent to one part on the product's bill of material. (an option script).

-   When a user selects any option for a particular feature (a feature script).

-   When a user finishes configuring the product (a finishing script).

-   When a user submits a configured product to a quotation (an estimate of the price and terms of sale of goods and services) or sales order (SO). A record of information needed to authorize and process a customer's order, listing all items to be sold. (a post-con- figuration script).


Option, feature, and finishing scripts detect issues with a product's configuration such as illegal combinations of options. Use post-configuration scripts to manipulate the routings or bills of material for the quotation or sales order after the configuration is complete and these items have been created.


You can apply rule scripts only when your company purchases the rules-based Product Configurator.

> [!CAUTION] Be extremely careful when writing your programs! Scripts can lead to unpredictable behavior in Made2Manage.

​