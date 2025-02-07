---
title: "Packing Line Items"
draft: false
type: Article
---

This topic gives some insight on the various ways you can pack line items for shipments in Aptean Ship.
## Manual Packaging


You can pack the shipment manually, by clicking the Packaging section. In the Packaging View, drag and drop the items into first level packaging (for example, Box).
## Packaging Scenarios


Line items can be packed using learned or created packaging scenarios (added or modified in [Maintain > Inventory Items](http://ask.shipping.apteancloud.com/akb/packaging/)). If you've shipped any of the items before, Aptean Ship retrieves packaging scenarios and automatically packs those items into first level packaging (boxes, cartons, etc). By default, auto-packing based on packaging scenarios is not enabled. You can enable this setting in Setup > Preferences under Packing Preferences (for [Freight](http://ask.shipping.apteancloud.com/akb/fprefs-packing/) or [Parcel](http://ask.shipping.apteancloud.com/akb/pprefs-packing/)); check the option, "Automatically pack items based on packaging scenarios." You can additionally control how items are packed using the related Auto-Pack Preference setting below it (for [Freight](http://ask.shipping.apteancloud.com/akb/fprefs-packing/#auto-pack-preference) or [Parcel](http://ask.shipping.apteancloud.com/akb/pprefs-packing/#auto-pack-preference)).
>[!Note] Aptean Ship supports mixed items in one box. However, Aptean Ship can only learn packaging scenarios for future shipments when you have one type of item in one package. The auto-learning of packaging scenarios is optional and can be disabled. 
## Loose Items


Loose items imported from the source document can be packed automatically into a default box. Aptean Ship will pack loose items into default packaging based on the Preferences setting, "When importing orders, pack all loose items into a default package." This is the default setting; if you want to change this default, uncheck this setting in [Parcel](http://ask.shipping.apteancloud.com/akb/pprefs-packing/#when-importing-orders-pack-all-loose-items-into-default-packages) or [Freight](http://ask.shipping.apteancloud.com/akb/fprefs-packing/#automatically-pack-all-loose-items-and-packages-onto-one-pallet) Preferences under Packing Preferences. Note that this setting is worded differently for Freight Preferences because it takes pallets into account.
## Aptean Ship Inventory Items


If you add items from Aptean Ship inventory, these can be automatically packed into the first, currently selected, or a new default box. They can also be left loose. This is based on the Preferences setting, "[When adding items from Aptean Ship inventory, place loose items in](http://ask.shipping.apteancloud.com/akb/pprefs-packing/#when-adding-items-from-starship-inventory-place-loose-items-in) ..." The default setting is first package.
## Packing Assistant


Items can be packed using the Packing Assistant, if it is enabled in Preferences setup (for [Freight](http://ask.shipping.apteancloud.com/akb/fprefs-pack-assist/) or [Parcel](http://ask.shipping.apteancloud.com/akb/pprefs-pack-assist/)), either manually or automatically (based on learned packaging scenarios). In the Shipment Editor, you can also click the "Switch to Packing Assistant" menu item to use the Packing Assistant at any time.

