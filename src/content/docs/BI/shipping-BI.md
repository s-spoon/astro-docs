---

title: "Shipping"
draft: false
type: Article

---


Use the shipping report to summarize the information on documents shipped. It provides insights into key metrics for the organization such as volume shipped, percentage of on-time deliveries, and percentage of delayed shipments.

This report helps you to:

-   Quickly analyze the shipping trends.

-   Identify if customer expectations are met.

-   Determine delivery reliability.

The shipping report has the following pages:

1.  [**Overview**](shipping-BI.md#overview)

2.  [**On-Time Analysis**](shipping-BI.md#on-time-analysis)

3.  [**Freight Analysis**](shipping-BI.md#freight-analysis)

4.  [**Cost per Pound**](shipping-BI.md#cost-per-pound)

5.  [**Comparison Freight Amount to Cost per Pound**](shipping-BI.md#comparison-freight-amount-to-cost-per-pound)

>[!Tip] To view the details of a visual tile, right-click on the tile and select **Show as a Table**.

The **shipment confirmed ind** and **shipment source type** filters are applied to all the pages in the report by default. Users can change these filters for all the pages, if required.

>[!Note] To check the applied filters that are affecting a visual tile, select the tile and click the filter icon.

## Overview

### Cards

The overview page has the following cards:

**Number of Shipments**: A multi-row card that displays the number of shippers with at least one line item from a sales order, which is in shipped status, filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

>[!Tip] The **Shipment Source Type** filter is set to sales order by default. The user can change or remove this filter.

**Number of Shipment Lines**: A multi-row card that displays the number of shipment lines on the shippers from the sales orders, which are in shipped status, filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Freight Charge Amount**: A multi-row card that displays the number of freight amount on confirmed shippers from sales orders filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Shipped Quantity**: A multi-row card that displays the sum of the shipped quantity on confirmed shippers from sales orders filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.


### Tiles

The **Overview** page contains the following tiles:

**Number of Shipment Lines by Shipment Month**: A line chart that displays the number of shipment lines on confirmed shippers from sales orders filtered to the selected ship year. The ship date is grouped by the respective month in the chart.
You can further filter the chart by shipment method, customer state, shipment delivery status, and company name.


**Shipped Quantity by Product**: A clustered bar chart that displays the number of shipped quantity on confirmed shippers from sales orders for the specific product class filtered to the selected ship year.
You can further filter the chart by part number, product class, product group, and shipped quantity.

**Freight Amount by Shipping Method**: A line and clustered bar chart that displays the sum of freight amount and the sum of ship weight on confirmed shippers by respective ship via method filtered to the selected ship year.
You can further filter the chart by shipment delivery method.

**Shipped Quantity by Destination**: A filled map that displays the shipped quantity on confirmed shippers to the respective destination state filtered to the selected ship year.
You can fur by shither filter the chart by ship-to state and ship-to country.

**Shipped Trend by Month**: A line chart that displays the delivery status of shippers for each month filtered to the selected ship year. The shippers are from the sales orders that are in shipped status having at least one line item. The ship date is grouped by the respective month in the chart.
You can further filter the chart by shipment on time status.

**Number of Shipments to Customer**: A clustered bar chart that displays the number of shippers for the customers of a specific company. The shippers are from the sales orders that are in shipped status having at least one line item.
You can further filter the chart by the company name and number of shipments.

### Filters

The **Overview** page has the following page filters:

-   Shipment Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Shipment Product Class
-   Shipment Product Group
-   Shipment Part Number
-   Customer State
-   Shipment Delivery Status Code
-   Company Name

>[!Tip] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## On-Time Analysis

### Cards

The **On-time analysis** page contains the following cards:

**Shipped Quantity**: A multi-row card that displays the sum of shipped quantity on confirmed shippers from sales order filtered for the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Early Shipping**: A multi-row card that displays the percentage of shippers that are shipped earlier than the due date that is present on the sales order. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**On-Time Shipping**: A multi-row card that displays the percentage of shippers that are shipped on the due date that is present on the sales order. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Late Shipping**: A multi-row card that displays the percentage of shippers that are shipped after the due date that is present on the sales order. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.


### Tiles

The **On-time analysis** page contains the following tiles:

**Shipped Quantity by Delivery Status**: A stacked column bar that displays the shipped quantity on confirmed shippers as per the delivery status filtered to the selected ship year. The legend represents the delivery status of shippers.
The chart can be further filtered by delivery status, ship month, ship year and shipped quantity.

**Shipped Trend by Month**: A line chart that displays the quantity and the respective delivery status of confirmed shippers for each month filtered to the selected ship year. The legend represents the delivery status of shippers.
You can further filter the chart by shipment on-time status.

**Shipment Trend by Shipping Method**: A 100% stacked bar chart that displays the number of shipments and the respective delivery status of confirmed shippers for each ship via method filtered to the selected ship year. The legend represents the delivery status of shippers.
You can further filter the chart by shipment delivery status and shipment on-time status.

**Shipped Quantity by Destination**: A filled map that displays the number of shipments and the respective delivery status of confirmed shippers to the respective destination state/country filtered to the selected ship year. The legend represents the delivery status of shippers.
You can further filter the chart by delivery status, ship-to country, and ship-to state.

**Shipped Quantity by Product**: A stacked bar chart that displays the number of shipments and the respective delivery status of confirmed shippers for the specific product class filtered to the selected ship year. The legend represents the delivery status of shippers.
The chart can be further filtered by shipment part revision, shipment product class and shipment product group.

**Number of Shipments by Customer**: A 100% stacked bar chart that displays the number of shipments and the respective delivery status of confirmed shippers for the customers of a specific company filtered to the selected ship year. The legend represents the delivery status of shippers.
The chart can be further filtered by customer, delivery status, and number of shipments.


### Filters

The on-time analysis page has the following page filters:

-   Shipment Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Shipment Quantity: The tiles and the corresponding data is filtered by the selected quantity, is not 0, by default. This filter can not be changed by the user.
-   Shipment Info Shipment Delivery Status
-   Company Name
-   Ship-to-State
-   Shipment Month
-   Part Number
-   Product Class Name
-   Product Group Description

>[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Freight Analysis

### Cards

The freight analysis page has the following cards:

**Number of Shipments**: A multi-row card that displays the number of shipments with at least one line item from a sales orders that are in shipped status filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Number of Shipment Lines**: A multi-row card that displays the number of lines on the shippers from sales orders that are in shipped status filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Freight Charge Amount**: A multi-row card that displays the sum of freight amount on confirmed shippers from sales orders filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Ship Weight**: A multi-row card that displays the sum of weight on confirmed shippers from sales orders filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease and green indicates an increase.

**Cost per Pound**: A multi-row card that displays the total freight amount divided by the total weight on confirmed shippers from sales orders filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

### Tiles

The **Freight analysis** page contains the following tiles:

**Freight Amount by Shipment Month**: A line chart that displays the freight amount on confirmed shippers from sales orders filtered to the selected ship year. The ship date is segregated by the respective month in the chart.
You can further filter the chart by freight amount and ship month.

**Freight Amount by Destination**: A filled map that displays the freight amount on confirmed shippers from sales order to the respective destination state or country filtered to the selected ship year.
You can further filter the chart by ship-to country and ship-to state.

**Freight Amount by Customer**: A clustered column chart that displays the freight amount on confirmed shippers from sales orders by the customers of specific company filtered to the selected ship year. You can further filter the chart by customer and freight amount.

**Freight Amount by Shipping Method**: A line and clustered column chart that displays the freight amount and ship weight on confirmed shippers from sales orders by ship via method filtered to the selected ship year.


You can further filter the chart by shipment delivery method.

### Filters

The **Freight analysis** page has the following page filters:

-   Shipment Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Shipment Month
-   Company Name
-   Part Number
-   Ship-to-State
-   Product Class Name
-   Product Group Description

>[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Cost per Pound

### Cards

The **Cost per pound** page has the following cards:

**Number of Shipments**: A multi-row card that displays the number of shipments with at least one line item from a sales orders that are in shipped status filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Number of Shipments Lines**: A multi-row card that displays the number of lines on the shippers from sales orders that are in shipped status filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Freight Charge Amount**: A multi-row card that displays the sum of freight amount on confirmed shippers from sales orders filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Shipped Quantity**: A multi-row card that displays the sum of the shipped quantity on confirmed shippers from sales orders filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Ship Weight**: A multi-row card that displays the sum of weight on confirmed shippers from sales orders filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

### Tiles

The **Cost per pound** page has the following tiles:

**Shipment Cost per Pound by Shipment Month**: A line chart that displays the total freight amount divided by the total weight on confirmed shippers from sales orders filtered to the selected ship year. The ship date is grouped by month in the chart.
You can further filter the chart by shipment month.

**Shipment Cost per Pound by Shipment Method**: A clustered bar chart that displays the total freight amount divided by the total weight on confirmed shippers from sales orders by ship via method filtered to the selected ship year.
You can further filter the chart by shipment delivery method.

**Shipment Cost per Pound by Customer**: A clustered bar chart that displays the total freight amount divided by the total weight on confirmed shippers from sales orders for the customers of a specific company filtered to the selected ship year.
You can further filter the chart by cost per pound and customer.

**Cost per Pound by Destination**: A filled map that displays the total freight amount divided by the total weight on confirmed shippers from sales orders to the respective destination state or country filtered to the selected ship year.
You can further filter the chart by shipment year, shipment month, company name and ship-to-state.

### Filters

The **Cost per pound** page contains the following page filters:

-   Shipment Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Shipment Month
-   Company Name
-   Ship-to State

>[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Comparison freight amount to cost per pound

### Cards

The **Comparison freight amount to cost per pound** page has the following cards:

**Number of Shipments**: A multi-row card that displays the number of shipments with at least one line item from a sales orders that are in shipped status filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Number of Shipments Lines**: A multi-row card that displays the number of lines on the shippers from sales orders that are in shipped status filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Freight Charge Amount**: A multi-row card that displays the sum of freight amount on confirmed shippers from sales orders filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Shipped Quantity**: A multi-row card that displays the sum of the shipped quantity on confirmed shippers from sales orders filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

**Ship Weight**: A multi-row card that displays the sum of weight on confirmed shippers from sales orders filtered to the selected ship year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease, while the green font color indicates an increase in numbers.

### Tile

The **Comparison freight amount to cost per pound** page has the following tile:

**Total Shipments, Ship Weight and Cost per Pound by Shipment Method**: that displays the total shipments, ship weight and cost per pound on confirmed shippers from sales orders by ship via method filtered to the selected ship year. The legend represents the ship via methods.
You can further filter the chart by shipment delivery method.

### Filters

The comparison freight amount to cost per pound page has the following page filters:

-   Shipment Year: The tiles and the corresponding data is filtered by the selected year as current year by default.

>[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

