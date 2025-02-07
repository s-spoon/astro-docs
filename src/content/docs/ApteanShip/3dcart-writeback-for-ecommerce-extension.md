---
title: "3Dcart Write-Back for eCommerce Extension"
draft: false
type: Article
---

### Order Status

When the Order is completely shipped, the Order Status on the Order is updated to "Shipped" along with the shipped date. If the Order is only partially shipped, the Order Status will still be updated to "Shipped".

![softwarep-ecommerce-ext-3d-37](assets/images/shipping-softwarep-ecommerce-ext-3d-37.png)

### Notes

Notes are written back to the Order Comments > Internal comments section on the 3dcart Order. For Orders with multiple packages, the tracking number of the first package is written back.

![ecommerce-ext-3d-36](assets/images/shipping-softwarep-ecommerce-ext-3d-36.png)

### Multiple Ship-To Addresses


In the case where an Order has multiple Ship-To addresses, Aptean Ship creates a Shipment for each Ship-To address. The Status is updated for each shipment as it is shipped. A unique tracking number is written back for each Shipment. To view write-back, click on the individual Shipment.

![3d-38](assets/images/3d-38.png)    



