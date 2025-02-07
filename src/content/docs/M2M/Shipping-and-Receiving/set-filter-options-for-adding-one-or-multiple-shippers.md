---
title: "Set filter options for adding one or multiple shippers"
draft: false
type: Article
---

Before you add one or multiple shippers using the shipping queue, use the **Setup Shipping Queue Filter (SCIFSET)** page to select the filters that will appear on the **Available For Shipment** tab of the **Shipping Queue (SCIFS)** page.

## To set filter options for adding one or multiple shippers

1. Open the **Setup Shipping Queue Filter (SCIFSET)** page.

   1. Select **Production Management** > **Production Transactions** > **Shipping** > **Setup Shipping Queue Filter**.

        Or

   2. Search for **SCIFSET** in the **Navigation box** and then select **Setup Shipping Queue Filter**.

        **Setup Shipping Queue Filter (SCIFSET)** page appears.

2. Specify the filters you want to display on the **Available For Shipment** tab of the **Shipping Queue (SCIFS)** window:

    - To filter by **sales order** number, select the **Sales Order Number** check box.

   - To filter by the percentage available to be shipped, select the **Show Only When >= % Ready** check box.

   - To filter by a range of **customer** numbers, select the **Customer Range** check box.

   - To filter by the ship-to company, select the **Ship To Company** check box.

   - To filter by the ship-to city, select the **Ship To City** check box.

   - To filter by the **Ship Via** option, select the **Ship Via** check box.

   - To filter by a range of part numbers, select the **Part Range** check box.

   - To display items that use a miscellaneous address in a separate row, select the **Show 9999 Addresses** check box.

   - To filter by the source facility, select the **Facility** check box.

   - To combine a customer’s sales orders into one shipper, select the **Combine Sales Orders** check box. The following information must be the same on all sales orders you are combining:

| Customer                | Pay Type (Cash, COD, Terms) |
|-------------------------|-----------------------------|
| Shipping Address        | Terms                       |
| Ship VIA                | Total Order Discount        |
| Currency                | FOB                         |
| Currency Factor         | Salesperson                 |
| Currency Effective Date | Commission Rate Percent     |

   - To limit the number of items displayed by working backward from the sales order due date, select the **Look Back # Of Days** check box and in the **Default** field, enter the default look back number of days value.

   - To limit the number of items displayed by working forward from the sales order due date, select the **Look Ahead # Of Days** check box and in the **Default** field, enter the default number of days that you want to work forward from the sales order due date.

   - To highlight the items that do not have enough quantity available to ship in the **Shipping Queue (SCIFS)** window:

   - Select the **Highlight Items With Insufficient Qty Available To Ship** check box.

   - From the **Highlight Color** color picker, select the color in which you want the items to be highlighted.

   - To only include received or completed parts in the **Avail To Ship quantity**, select the **Avail To Ship Excludes Qty Not Yet Received/Completed** check box. When this check box is selected, the **Avail to Ship quantity** will only include buy parts that have been received and not returned, and **Make parts** where the last job operation has been completed.

   - To highlight sales orders of customers with **Credit Watch** status in the **Shipping Queue (SCIFS)** window:

   - Select the **Highlight Credit Watch Customer Status SO** check box.

   - From the **Highlight Color** color picker, select the color in which you want the sales orders to be highlighted.

3. On the **Toolbar**, click **Save** to save the filter options.

    A message, *Users will not see the changes until SCIFS is reopened* appears.

4. Click **x** to close the message window.

​