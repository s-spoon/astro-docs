---

title: "Parameter Overview for Option, Feature, and Finishing Scripts"
draft: false
type: Article

---

The triggers that execute option, feature, and finish scripts pass the following parameters to your scripts:

An option: An available choice for a product’s feature. For example, a computer manufacturer allows the customer select from three hard disk drives: part numbers HD1600, HD2100, or HD3400. The HD3400 is an option within the hard disk drive feature and typically corresponds to one part on the product's bill of material , feature, and finishing scripts pass the following parameters to your scripts:


- The number of lines (nodes) in the current product outline.

- An array containing information about each product outline node:

    - A description of the node.

    - The number of selected options, if the item is a feature.

    - The text of the selected option(s) separated by carriage returns.

    - A designation Q for quantitative entry, F for features, or blank for floating options.
    -   The feature ID or object ID.
    -   The IDs of the selected option(s) separated by carriage returns.
    -   An internal identifier.
    -   The quantity.
    -   The outline node index the item relates to (an internal value).
-   The ID of the product being configured.
-   An empty string variable the script uses to return a message describing any problems.
-   The outline object.
-   The form/parent object of the OLE outline control containing the configuration.


When the script finds a problem with the product's configuration, it should load the fourth parameter with a text message that describes the problem and lists courses of action. If the fourth parameter contains text when the script ends, the Configurator displays the string in a message box.

For finishing scripts, if the fourth parameter contains text, the Configurator prevent configuration to complete. The user must correct the problem and click **Finish** again.


​