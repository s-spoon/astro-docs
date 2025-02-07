---
title: "Assigning Hazardous Materials Profiles"
draft: false
type: Article
---

You can apply the Hazardous Materials Profiles you create in a number of different ways.
### Inventory Item


Hazardous Materials details can be defined for inventory items in Maintain Inventory Items. This is where you can assign Hazardous Materials Profiles to items or create custom profiles for inventory items. When you assign a Profile to an inventory item, Aptean Ship will set the Hazardous flag and populate the HazMat Profile field when you ship the item.

First, add or edit an inventory item. On the Main page settings, check the **Hazardous** checkbox.

![](assets/images/aptean-ship-hazmat-3.png)

[spacer size\="1"]

This will enable a **Hazardous Details** heading.

[\[spacer size\="1"]]

![](assets/images/aptean-ship-hazmat-4.png)

On the Hazardous Details page, you can select one of the existing Hazardous Materials Profiles from the Profile field.

![](assets/images/aptean-shipping-software-maintain-hazmat-9-1.png)

[spacer size\="1"]

Or you can create a new profile by selecting **Custom**.

![](assets/images/aptean-shipping-software-maintain-hazmat-10-1.png)

 
### Line item


#### Manually


When processing a shipment in the Shipment Editor, go to the Line Items section and expand the line item. In Item Details, check the Hazardous check box and select a HazMat Profile. To edit or view the profile, click on the pencil icon.

![software-maintain-hazmat-11a](assets/images/starship-shipping-software-maintain-hazmat-11a.png)

#### Automatically

You can use line items to automatically drive Hazardous Materials Profiles. When the Preferences setting, "Aptean Ship will control the Hazardous Materials option and profile for package based on line items," is set to "Always" or "For packages with line items only," Aptean Ship will check the Hazardous Materials/Dangerous Goods option and assign the HazMat Profile. It is located in Setup > Preferences > Preferences > Hazardous Materials.

### Package

When processing a shipment in the Shipment Editor, go to the Packaging section and expand the package. In Package Details, check the Hazardous check box. Check the Hazardous Materials check box under Shipment Details. Hazardous Materials Profiles can be applied at the package level, as well.

![software-maintain-hazmat-19-1](assets/images/aptean-shipping-software-maintain-hazmat-19-1.png)



If you set the [Aptean Ship Preferences Setting](hazardous-materials-preferences.md) that gives Aptean Ship control over how Hazardous Materials options/profiles are set based on line items, the Package Detail option may be automatically checked for you and greyed out.

