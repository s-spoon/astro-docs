---
title: "Configure Tracking Number"
draft: false
type: Article
---

By default, the Aptean Ship auto-generated BOL number will be bar-coded on the shipping label and written back to the source interface as the tracking number for the shipment. When the auto-generation feature is enabled, Aptean Ship generates the BOL# and displays it in the Transportation section of the Shipment Editor.

To define an alternative value from your Source Interface as the BOL#, disable the BOL auto-generation feature by unchecking the [Automatically Generate BOL #](http://ask.shipping.apteancloud.com/akb/bol-prefs/#automatically-generate-bol) check box in Setup > Preferences > Freight > Bill of Lading.

Next, map the BOL # field to a field in your Source Interface.
1. From the Setup menu, select Source Interfaces > "Your Interface."
2. On the Interfaces page, click the **Customize Interface** button for a document (Orders, etc.).
![](assets/images/customize-interface-select-document.png)
3. Under Aptean Ship Fields > Shipment > General Information, select the **BOL Number** field. For "Maps from", select the source interface field to use for the BOL Number.
![](assets/images/map-bol.png)


    >[!Note] If you are shipping outside of a Source Interface, you also have the option of typing your own tracking number into the BOL number field in the Transportation section of the Shipment Editor.

