---
title: "Carrier Reference Fields"
draft: false
type: Article
---

Reference fields can be mapped to Aptean Ship shipment fields in order to allow you to include additional information about the shipment on carrier shipping labels or documents. These fields are uploaded to the carrier when the shipment is processed and should show on the carrier invoice.
Generally, there are two types of reference fields; those at the package level and those at the shipment level. Package level reference fields are designated for US to US shipments. Shipment level reference fields apply only to international shipments.
## Setup


For companies that have multiple Locations set up in Aptean Ship, reference fields are saved for each Location. Therefore, you can have different carrier reference fields set up for different Locations. Reference fields for each carrier can be set up in Setup > Carrier Interface > "Your Carrier" > Settings. The reference fields that are available depend upon the carrier(s) you're shipping with.

Some carriers may only support shipment level reference fields or may not support reference fields at all. Some carriers can print a shipment level or package level reference field as a bar-code. It varies among carriers.

On the left, select the label or identifier - the shipment field value will appear under this heading; on the right, select the Aptean Ship shipment field you want to use as the reference field. To narrow down the list of fields, type the field name into the search field.[spacer size\="2"]

![](assets/images/aptean-shipping-software-carrierrefs-1.png)
* Package level reference fields can be viewed on the Ship screen by selecting the Packaging and clicking Open. Click the Reference Fields section:[spacer size\="2"]
![](assets/images/sswc-shipping-software-referencefieldsonpack.png)
* Shipment level reference fields are dependent on the currently selected Carrier and will display in the Shipment Details section of the Shipment Editor.


    >[!Note] In order to populate reference fields with values from the source interface, the Aptean Ship shipment field you select must be mapped to the relevant source field.

