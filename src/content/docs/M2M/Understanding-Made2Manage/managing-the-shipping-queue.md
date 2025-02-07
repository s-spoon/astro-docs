---

title: "Managing the shipping queue"
draft: false
type: Article

---

Use the shipping queue to add shippers for one or multiple sales order items. You can also confirm multiple shippers, and change their status to shipped. Additionally, items from  multiple sales orders can be combined into a single shipper.

**Setup Shipping Queue Filter (SCIFSET) page - Available For Shipment Tab**

Know about **Setup Shipping Queue Filter (SCIFSET)** page - **Available For Shipment Tab**

**Setup Shipping Queue Filter (SCIFSET) page - Shipments to Confirm Tab**

Know about **Setup Shipping Queue Filter (SCIFSET)** page - **Shipments to Confirm Tab**

​Refer to the filter options for the Setup Shipping Queue Filter page (SCIFSET), for more details on managing shipments. 

You can filter the list of sales order items available for shipment. Filtering limits which sales order items appear on the **Available For Shipment** tab of the **Shipping Queue (SCIFS)** page.

| Setup Shipping Queue Filter (SCIFSET)  |  Available For Shipment tab filters (SCIFS) |
|-------|---|
| Sales Order Number    | The **Sales Order** field appears so you can filter by one or multiple sales orders.        |
| Show Only When >= % Ready   | The **Only Show When Avail Is >= __ % Order Quantity** check box appears. When selected the check box, and a percentage is entered, only sales order items with that percentage or greater available to shipment will be displayed.  |
| Customer Range      | These fields appear filtering by customer number.  |
| Ship to Company   | This field appears so you can filter by ship-to company.   |
| Ship to City    | This field appears so you can filter by ship-to city.   |
| Ship Via   | This specific check box appears so you can filter by the shipping method.  |
| Part Range   | This fields appear so you can filter by one or multiple part numbers.     |
| Show 9999 Addresses  | Displays each item that uses a 9999 address key (miscellaneous shipping address) in a separate row.   |
| Facility   | The **Facility** list appears so you can filter by the source facility.  |
| Select All For Sales Order  | The **Select All For Sales Order** check box appears. When you select the check box, and select one sales order item, all items for that sales order are selected.    |
| Combine Sales Orders    | The **Combine Sales Orders** check box appears. If you select the check box, Made2Manage combines multiple sales orders into one shipper.  Following information must be the same on all sales orders you are combining: Customer Shipping Address Ship VIA Currency Currency Factor Currency Effective Date Pay Type (Cash, COD, Terms) Terms Total Order Discount FOB Salesperson Commission Rate Percent Contract Pricing If the sales order item uses a 9999 address key (miscellaneous address), Made2Manage creates a separate shipper for that item. |
| Look Back # of Days    | Displays sales order items whose due date starts today and goes back for the number of days you typed in **SCIFSET** page.           |
| Look Ahead # of Days        | Displays sales order items whose due date starts today and goes forward for the number of days you typed in **SCIFSET** page.      |
| Highlight Items with Insufficient Qty Available to Ship | Items that do not have enough quantity available to ship are highlighted with the color you selected in **SCIFSET** page.      |

Filter options for the Setup Shipping Queue Filter page (SCIFSET), Shipments To Confirm Tab

After you add shippers using the shipping queue, the next step is to confirm the shippers, changing their status to shipped. You can filter the list of shippers to be confirmed using the **Shipments to Confirm** **Tab** section of the **Setup Shipping Queue Filter** page **(SCIFSET)**.

|  Shipping Queue Filter (SCIFSET)                        |  Available for Shipments tab  (SCIFS)    |
|---------|-------|
| Sales Order Number    | The **Sales Order** field appears so you can filter by the sales order number. |
| Shipper Number     | The **Shipper Number** field appears so you can filter by the shipper number.  |
| Customer Range   | The **Customer Range** fields appear so you can filter by one or multiple customer numbers.   |
| Ship to Company   | The **Ship to Company** field appears so you can filter by the ship to company. |
| Ship to City    | The **Ship to City** field appears so you can filter by the city name.  |
| Ship Via   | The **Specific ShipVia** check box appears so you can filter by the ship via option. |
| Facility | The **Facility** check box appears so you can filter by the facility option.     |
| Block Shipper Confirmation If Acct Bal. Exceeds Credit Limit | If the customer's account balance exceeds their credit limit, the shipper is highlighted with the color you selected and you cannot confirm the shipper. If the customer's account balance exceeds their credit limit on the **Financial Information** tab of the **Accounts** **(CUST)** page, you cannot select the shipper for confirmation, regardless of the credit hold settings on the **Sales (CSSALE)** page. |
| Block Shipper Confirmation If Customer Is On Credit Hold     | If the customer is on credit hold, the shipper is highlighted with the color you selected and you cannot confirm the shipper. If the customer is on credit hold on the **Financial Information** tab of the **Accounts** **(CUST)** page, you cannot select the shipper for confirmation, regardless of the credit hold settings on the **Sales** **(CSSALE)** page.      |
| Default Ship Date to Current Date When Confirming   | The current date is used as the ship date when confirming shippers on the **SCIFS** page: You can change the ship date if necessary on the **SCIFS** page.  |
