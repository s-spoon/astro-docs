---

title: "Defining rule scripts for complex product definitions"
draft: false
type: Article

---

The rules-based Product Configurator lets you describe rules for a product that are more complex than features, options, and Visual Rules can describe. You apply rules in the form of rule scripts (Also called Visual FoxPro (VFP), Fox) A programming system from Microsoft. Made2Manage is developed largely using Visual FoxPro., which are Visual FoxPro (Also called Visual FoxPro (VFP), Fox) A programming system from Microsoft. Made2Manage is developed largely using Visual FoxPro. programs. You can set up rule scripts to execute at four points:

- When a user A person who has an account (a user name and password) in Made2Manage. selects a particular 'option' An available choice for a product's feature. For example, a computer manufacturer lets the customer select one of three hard disk drives: part numbers HD1600, HD2100, or HD3400. The HD3400 is an option of the hard disk drive feature. An option is usually equivalent to one part on the product's bill of material. (an option script).

- When a user selects any option for a particular feature (a feature script).

- When a user finishes configuring the product (a finishing script).

- When a user sends a configured product to a *quotation An estimate of the price and terms of sale of goods and services you can offer a prospective buyer. or sales order (SO) A record of information needed to authorize and process a customer's order. The sales order lists all items to be sold to the customer.(a post-configuration script).

Option, feature, and finishing scripts detect problems with a product's configuration such as illegal combinations of options. Use post-configuration scripts to manipulate the routings or bills of material of the quotation or sales order after the configuration has taken place and these items have been created.


You can apply rule scripts only when your company purchases the rules-based Product Configurator.


> [!CAUTION] Be extremely careful in your programs! You can write scripts that make Made2Manage behave unpredictably.

​