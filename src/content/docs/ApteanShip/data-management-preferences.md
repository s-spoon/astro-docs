---
title: "Data Management Preferences"
draft: false
type: Article
---

Data Management Preferences, accessible from Setup > Preferences > Data Management, allow you to set options for saving and deleting shipment data.
## Purge shipments after (# of months)


Select the number of months after which to delete shipments from the Aptean Ship database. The default setting is 12 months. You can also choose not to purge shipments by selecting "Never."
## Purge shipment documents after (# of months)


Select the number of months after which to delete carrier documents, such as FedEx labels and shipping documents, YRC BOL and labels, etc. This includes any printed label that is not created by Aptean Ship.

>[!Tip] Aptean Ship will use the time interval selected for the existing “Purge shipments after” setting above until you go into Setup > Preferences and click OK (even if you don't make changes to the General section). As soon as you do this, the setting will be enabled with a default of 3 months.
## Keep fully backordered items in the shipment


When checked, Aptean Ship will not remove line items with a ship quantity of '0" when saving or processing shipments. The back-ordered items will appear in the shipment. This setting is unchecked by default. This setting is useful if you want to print back-ordered items and their quantities on the Aptean Ship Packing List when the shipped quantity is 0.

