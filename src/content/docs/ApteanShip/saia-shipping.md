---
title: "Saia Shipping"
draft: false
type: Article
---

The Saia module allows you to rate via the Internet, giving you live access to negotiated rates. In addition, you can track shipments, request pickups, get proof of delivery, generate the BOL, and print package/pallet labels.

Saia supports LTL shipments to destinations in the USA (excluding Alaska, Hawaii, and Guam) and Canada.
## Services


* LTL
* Guaranteed Select Standard By 12 PM
* Guaranteed Select Standard By 2 PM
* Guaranteed Select Standard By 5 PM


## Supported Accessorials


* Handling Fee
* COD: Cash on Delivery
	+ Cash
	+ Company Check
	+ Bank Certified Check
* Single Shipment Arrival Notice: If you will be mapping this field to a fixed value of 'Selected" or to a source interface field, map the "Call Before Delivery" field under Shipment Options in Customize Interface.
	>[!Tip] See [Call Before Delivery](call-before-delivery.md).\[/ht\_message
* Marking or Tagging
* Limited Access on Delivery/Pickup
* Liftgate Service at Pickup/Delivery
* Inside Pickup/Delivery
* Excessive Length
* Hazardous Materials
* Sort and/or Segregate
* Hand Unloading
* Email BOL
* Freezable (Electronic tendering only)


## Supported Billing Types


* Prepaid (Sender)
* Prepaid (3PL)
* Recipient
* Third Party


## Shipping Notes


### Rating


Saia supports up to 5 items per rate request. For rating, items are grouped based on the BOL Preference "Group Items on BOL" in Setup > Preferences > Bill of Lading.
### Pallet Rates


If your account is set up for pallet rates, you must enter pallet dimensions.
### Limitations


Saia web services only support 1 item per package or handling unit. All items on the pallet will be listed as the highest class item, with the total weight for the pallet. To print multiple items per pallet, use the Aptean Ship BOL.
### Tracking


Shipments are tracked by PRO Number. Only posted shipments can be tracked using the Track Shipment button in the Shipment Status section.

![](assets/images/allcarriers-trackshipment.png)
### Proof of Delivery


When the shipment's status is Delivered, you can click the button next to the PRO # in the Transportation section to get the Proof of Delivery form in TIF format.

