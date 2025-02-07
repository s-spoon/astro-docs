---
title: "Automate Ship Via Translations"
draft: false
type: Article
---

Ship Via refers to the Carrier and Carrier Service used to ship a shipment. Aptean Ship allows you to automate the import of Ship Via values from a source interface into the shipment. You can also customize the Ship Via based on the carrier values set up in your source interface.

The Aptean Ship Carrier/Service fields are likely mapped by default. Even so, we then need a way to make sure that Aptean Ship gets values that it recognizes. To do that, you will define value translations between the source interface Ship Via values and Aptean Ship Carrier/Service values so that the Carrier-Service is automatically populated.
## Navigate to the Carrier-Service Field


1. Select Setup > Source Interfaces > "Your interface."
2. On the Interfaces page, click the **Customize Interface** button for a document you ship against (Orders, Invoices, etc.).
![](assets/images/customize-interface-select-document.png)
3. Expand the Aptean Ship Field group "Shipment" and select "Carrier Information".
![](assets/images/customize-interface-select-carrier-info-1-e1649874798797.png)
4. Click the "Carrier-Service" field. The "Maps from" field should be set to your source interface, and the source document field containing the Ship Via value.
![](assets/images/value-translations2.png)


## Value Translations


This is where the magic happens, and where your Ship Via values are transformed into Aptean Ship values - the Value Translations section.

If your source interface supports it, Aptean Ship can automatically retrieve the Ship Via values from your source interface. In this case, you can configure how the shipping methods are mapped to the Carrier-Service field in Aptean Ship by making selections from the drop-down list.
![](assets/images/value-translations-1-e1649874984593.png)

If there is no value list for the Ship Via in your source interface, you can manually add your commonly used Ship Via values that Aptean Ship can use when importing the order or other document by clicking the "Add Value Translation" (+) button.

When you are done setting up the values for the carrier, click **Save All Maps**.

![](assets/images/saveallmaps.png)
 
## Default Value Translation Rules for Ship Via


If you don't set up value translations, Aptean Ship will attempt to match the Ship Via values from your source interface using the following rules (applied in order):
1. If an identical carrier exists in Aptean Ship, it is selected.
2. Otherwise, the carrier whose SCAC (Standard Carrier Alpha Code) matches exactly gets selected.
3. If not found, then Aptean Ship selects the carrier with a similar name.
4. If no similar match is found, Aptean Ship does not select a carrier. The value translation defaults to the first carrier available in the carrier list.


