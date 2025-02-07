---
title: "FedEx Ground® Economy"
draft: false
type: Article
---

FedEx Ground Economy focuses on low-weight shipments using US Postal Service hubs for final delivery to residential addresses in the U.S., including P.O. Boxes and military destinations. FedEx Ground Economy is a part of the FedEx Ground network and can be acquired only on a contractual basis. Pickups are completed by two different groups within FedEx Ground based on expected volume:
* FedEx Ground packages from smaller shippers are picked up and transferred to Ground Economy within the FedEx Ground Hubs.
* FedEx Ground Economy packages for large shippers are picked up and transferred within the FedEx Ground Economy network directly.


Once the packages are sorted based on the delivery areas at a FedEx facility, they are then transported using FedEx Ground shipping. When these packages arrive at the FedEx destination hub, they are moved to the USPS bulk mail center based on the delivery location. Finally, USPS picks up the packages for the delivery and delivers it to the final destination.


## FedEx Ground Economy Account


You can contact FedEx to enable Ground Economy on your account, which will be based on your average daily shipping volume. Your Ground Economy account is associated with your FedEx account number(s) in Aptean Ship. You can configure Ground Economy settings for any account listed on the Accounts tab in FedEx Setup. Ground Economy options are located on the Settings tab for each account.
## Features


* FedEx Ground Economy service is available for locations within the U.S. It can deliver packages to and from any of the 48 states including Alaska, Hawaii, U.S. Virgin Islands, U.S. territories, P.O. boxes, and military APO, FPO, and DPO destinations. FedEx doesn’t offer Ground Economy services for international shipments.
* Packages are delivered from Monday to Saturday, usually within 2-7 business days.
* Saturday delivery is possible by USPS without any FedEx surcharge.
* Each package for FedEx Ground Economy should have a maximum weight of 70 lbs. Each package may not exceed 130 inches in length plus girth.
* Aptean Ship supports Third Party billing for Ground Economy shipments.


## Special Services Not Supported with Ground Economy


* Collect On Delivery (C.O.D)
* Declared Value
* Signature Proof of Delivery
* Evening or Appointment Delivery
* Hazardous Materials
* The Ancillary Endorsement shipment option is not allowed for Return shipments.


## Shipping with Ground Economy


The account you are shipping with must be enabled for Ground Economy in order to ship with Ground Economy. When the Ground Economy-enabled account is specified as the default account (in FedEx Setup), or you associated the currently selected Address ID (in the Sender section) with a FedEx Ground Economy-enabled account, Ground Economy will be available as a Service.
1. In the Transportation section of the Shipment Editor, select FedEx as the Carrier and FedEx Ground Economy as the Service.

2. For the Indicia option, select the Type of shipment: SmartPost Media, SmartPost Parcel Select, SmartPost Bound Printed Matter, and SmartPost Parcel Select Lightweight.

    >[!Note] You can also map the Indicia Type field to a default value in Customize Interface. Click [here](fedex-ground-economy.md#mapping-the-indicia-type) for more information.
    
    ![fedex-ground-economy-indicia-1](assets/images/aptean-shipping-software-fedex-ground-economy-indicia-1.png)

3. With Ground Economy shipments, you can select the additional option of Ancillary Endorsement. When Indicia is set to Parcel Select Lightweight for shipments weighing less than 1 lb, Ancillary Endorsement is required and automatically checked, and you can choose from Address Correction and Return Service only. For more information, see [USPS Ancillary Endorsement](https://pe.usps.com/text/qsg300/q507.htm).

![fdx-smrtpost3-1](assets/images/fdx-smrtpost3-1.png)

4. Process the shipment or Shipment > Ship and Create Return (Ctrl+F3).


## Mapping the Indicia Type


When processing a FedEx Ground Economy shipment, you can make a selection for the Indicia Type from the Transportation section as shown above in the Shipping section.

You can also map the Indicia Type field (in Customize Interface) to a source interface field or to a fixed value to have it selected automatically when shipping. In Setup > Source Interfaces > (Your Interface), select the Interfaces heading and then click the Customize Interface button for the source document. Under Select Mappings, select Shipment > Shipment Options > Indicia Settings > Indicia Type and set it to a source interface field or, as shown in the example below, a Fixed Value.

![ground-economy-indicia-mapping-1](assets/images/aptean-shipping-software-fedex-ground-economy-indicia-mapping-1.png)

## FedEx Ground Economy Returns


You can initiate a Ground Economy Return shipment by:
* checking the FedEx Returns option under Shipment Details while processing a shipment;

![fedex-ground-economy-returns-1](assets/images/aptean-shipping-software-fedex-ground-economy-returns-1.png)
* by creating a new shipment and selecting Shipment > Ship and Create Return;

    ![dxgrdeco1](assets/images/fdxgrdeco1.png)

* by opening a processed shipment and selecting Shipment > Create Return;

    ![fdxgrdeco2](assets/images/fdxgrdeco2.png)


    >[!Tip] See [FedEx Returns](fedex-returns.md) for more information about return options.

