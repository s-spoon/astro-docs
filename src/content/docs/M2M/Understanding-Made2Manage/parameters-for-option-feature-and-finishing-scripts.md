---

title: "Parameters for option, feature, and finishing scripts"
draft: false
type: Article

---

The triggers that execute option An available choice for a product's feature. For example, a computer manufacturer lets the customer select one of three hard disk drives: part numbers HD1600, HD2100, or HD3400. The HD3400 is an option of the hard disk drive feature. *An option is usually equivalent to one part on the product's bill of material.* , feature, and finishing scripts pass these parameters to your scripts:

- The number of lines (nodes) in the current product outline.

- An array containing information about each product outline node:

    - A description of the node.

    - The number of selected options, if the item is a feature.

    - The text of the selected option(s) separated by carriage returns.

    - **Q** if the item is a quantitative entry, **F** if the item is a feature, or blank if the item is a floating option.

    - The feature ID or object ID.

    - The IDs of the selected option(s) separated by carriage returns.

    - An internal identifier.

    - The quantity.

    - The outline node index the item relates to (an internal value).

- The ID of the product being configured.

- An empty string variable the script uses to return a message that describes problems.

- The outline object.

- The form/parent object of the OLE outline control that contains the configuration.

When the script finds a problem with the product's configuration, it should load the fourth parameter with a text message that describes the problem and lists possible courses of action. When the script ends, if the fourth parameter contains text, the Configurator displays the string in a message box.

For finishing scripts, when the fourth parameter contains text, the Configurator does not allow the configuration to finish. The user must correct the problem and click **Finish** again.

​