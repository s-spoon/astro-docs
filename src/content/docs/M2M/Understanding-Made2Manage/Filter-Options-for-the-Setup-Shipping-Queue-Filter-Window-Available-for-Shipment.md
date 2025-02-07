---

title: "Filter-Options-for-the-Setup-Shipping-Queue-Filter-Window-Available-for-Shipment"
draft: false
type: Article

---

You can filter the list of sales order items available for shipment. Filtering limits which sales order items appear on the **Available For Shipment** tab of the Shipping Queue (SCIFS) page.

### Setup Shipping Queue Filter (SCIFSET)

| **Available For Shipment tab filters (SCIFS)** | **Description**                                                                                                         |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **Sales Order Number**                         | The Sales Order field appears so you can filter by one or multiple sales orders.                                          |
| **Show Only When >= % Ready**                  | The *Only Show When Avail Is >= \_\_ % Order Quantity* check box appears. When you select the check box, and type a percentage, only sales order items with that percentage or greater available to ship appear in the list. |
| **Customer Range**                             | The Customer Range fields appear so you can filter by customer number.                                                    |
| **Ship to Company**                            | The Ship to Company field appears so you can filter by ship-to company.                                                   |
| **Ship to City**                               | The Ship to City field appears so you can filter by ship-to city.                                                         |
| **Ship Via**                                   | The *Specific ShipVia* check box appears so you can filter by the shipping method.                                         |
| **Part Range**                                 | The Part Number Range fields appear so you can filter by one or multiple part numbers.                                     |
| **Show 9999 Addresses**                        | Displays each item that uses a 9999 address key (miscellaneous shipping address) in a separate row.                        |
| **Facility**                                   | The Facility list appears so you can filter by the source facility.                                                       |
| **Select All For Sales Order**                 | The *Select All For Sales Order* check box appears. When you select the check box, and select one sales order item, all items for that sales order are selected. |
| **Combine Sales Orders**                       | The *Combine Sales Orders* check box appears. If you select the check box, Made2Manage combines multiple sales orders into one shipper. |
| **Look Back # of Days**                        | Displays sales order items whose due date starts today and goes back for the number of days you typed in SCIFSET page.     |
| **Look Ahead # of Days**                       | Displays sales order items whose due date starts today and goes forward for the number of days you typed in SCIFSET page.  |
| **Highlight Items with Insufficient Qty Available to Ship** | Items that do not have enough quantity available to ship are highlighted with the color you selected in SCIFSET page.       |

#### Requirements for Combining Sales Orders

The following information must be the same on all sales orders you are combining:
- Customer
- Shipping Address
- Ship VIA
- Currency
- Currency Factor
- Currency Effective Date
- Pay Type (Cash, COD, Terms)
- Terms
- Total Order Discount
- FOB
- Salesperson
- Commission Rate Percent
- Contract Pricing

If the sales order item uses a 9999 address key (miscellaneous address), Made2Manage creates a separate shipper for that item.
