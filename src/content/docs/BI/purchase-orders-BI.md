---

title: "Purchase Orders"
draft: false
type: Article

---


Use the purchasing report to monitor the metrics that indicate the purchasing efficiency of the company.

This report helps you to:

-   Evaluate vendor performance and trends
-   Monitor vendor competitiveness
-   Assess vendor quality and timeliness
-   Determine the top vendors based on purchase volumes
-   Track the fiscal year purchases

The purchase orders report has the following pages:

1.  [**Overview**](purchase-orders-BI.md#overview)

2.  [**Commitments**](purchase-orders-BI.md#commitments)

3.  [**Purchase Cost Variance**](purchase-orders-BI.md#purchase-cost-variance)

4.  [**Vendor Comparison**](purchase-orders-BI.md#vendor-comparison)

  >[!Tip] To view the details of a visual tile, right-click on the tile and select **Show as a Table**.
  The **part number**, **product class**, and **product group** filters are applied to all the pages in the report by default. Users can change these filters for all the pages if required.

 >[!Note] To check the applied filters that are affecting a visual tile, select the tile and click the filter icon.

## Overview

### Cards

The overview page has the following cards:

**Number of POs**: A multi-row card that displays the total number of purchase orders with at least one line item regardless of the status filtered to the selected order year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Purchase Amount**: A multi-row card that displays the sum of the ordered quantity times unit cost on the purchase orders with at least one line item excluding master release lines regardless of status filtered to the selected order year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Return Amount**: A multi-row card that displays the sum of the return quantity times the original unit cost on the purchase orders with at least one return line item regardless of status filtered to the selected order year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Purchase Quantity**: A multi-row card that displays the sum of the ordered quantity on the purchase orders with at least one line item excluding master release lines regardless of status filtered to the selected order year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Return Quantity**: A multi-row card that displays the sum of the return quantity on the purchase orders with at least one return line item regardless of status filtered to the selected order year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

### Tiles

The overview page has the following tiles:

**Purchase Amount**: A line chart The sum of the ordered quantity times unit cost on the purchase orders regardless of status filtered to the selected order year. The purchase orders with at least one line item excluding master release lines are included in the calculation for the chart. The order date is segregated by the respective month in the chart.
The chart can be further filtered by month, purchase order amount, and purchase order quantity.

**Purchase Amount by Vendor Location**: A filed map that displays the sum of the ordered quantity times unit cost on the purchase orders regardless of status filtered to the selected order year. The purchase orders with at least one line item excluding master release lines are included in the calculation for the chart. The purchase order amount is specific to the state where the vendor is located.
The chart can be further filtered by purchase order amount, vendor city, vendor country, and vendor state.

**Purchase Amount by Product**: A clustered bar chart that displays the sum of the ordered quantity times unit cost on the purchase orders for a specific product class regardless of status filtered to the selected order year. The purchase orders with at least one line item excluding master release lines are included in the calculation for the chart.
The chart can be further filtered by part number, product class, product group, purchase order amount, and purchase order quantity.

**Purchase Amount by Vendor Type**: A donut chart that displays the sum of the ordered quantity times unit cost on the purchase orders for specific vendor type regardless of status filtered to the selected order year. The purchase orders with at least one line item excluding master release lines are included in the calculation for the chart.
The chart can be further filtered by purchase order amount, purchase quantity, and vendor type.

**Purchase Amount by Purchase Category**: A clustered column chart that displays the sum of the ordered quantity times unit cost on the purchase orders for a specific purchase category regardless of status filtered to the selected order. The purchase orders with at least one line item excluding master release lines are included in the calculation for the chart.
The chart can be further filtered by purchase order amount, purchase order category, and purchase quantity.

**Purchase Amount by Vendor**: A clustered bar chart that displays the sum of the ordered quantity times unit cost on the purchase orders for a specific vendor regardless of status filtered to the selected year for the order date broken down by vendor. The purchase orders with at least one line item excluding master release lines are included in the calculation for the chart.
The chart can be further filtered by purchase order amount, purchase order quantity, and vendor name.

### Filters

The overview page has the following page filters:

-   Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Purchase Order Status
-   Month
-   Category
-   Planner Name
-   Vendor Name

 >[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Commitments

### Cards

The commitments page has the following cards:

**Commitment Amount**: A multi-row card that displays the sum of unreceived items cost on purchase orders that are not in started, closed or cancelled status. It also shows the percentage increase or decrease in the numbers compared to last year (LY). The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Commitment Quantity**: A multi-row card that displays the sum of unreceived items quantity on purchase orders that are not in started, closed or cancelled status. It also shows the percentage increase or decrease in the numbers compared to last year (LY). The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Average Lead Time**: A multi-row card that displays the average lead time rounded to the nearest whole number for all purchase orders that are not in started, closed or cancelled status filtered to the selected order year. It also shows the percentage increase or decrease in the numbers compared to last year (LY). The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Commitment (Days)**: The slicer filters the tiles by the range of days for expected receipts.

### Tiles

The commitments page has the following tiles:

**Open Commitments**: A line and clustered column column chart that displays the sum of the unreceived items quantity and cost on purchases orders that are not in started, closed, or cancelled status filtered to the selected order year. The order date is segregated by the respective month in the chart.
The chart can be further filtered by purchase order commitment quantity, year, month, purchase order commitment amount, last promise year, and last promise month.

**Vendor Commitment**: A line and clustered column column chart that displays the sum of the unreceived items quantity and cost on purchases orders for a specific vendor filtered to the selected order year. The purchase orders that are NOT in started, closed, or cancelled status are included in the calculation for the chart.
The chart can be further filtered by commitment amount, commitment quantity, and vendor name.

**Commitment Cost Variance**: A bullet chart by OKVIZ that displays the average cost of the purchased quantities of items compared to the standard cost for the items filtered to the selected order year.
The chart can be further filtered by part number, product class, product group, and purchase order commitment amount.

**Commitment by Product**: A clustered bar chart that displays the sum of the unreceived items quantity and cost on purchases orders for a specific product class filtered to the selected order year. The purchase orders that are NOT in started, closed, or cancelled status are included in the calculation for the chart.
The chart can be further filtered by commitment amount, part number, product class, product group, purchase order commitment quantity, and purchase order quantity.

**Commitment by Vendor Type**: A donut chart that displays the sum of the unreceived items quantity and cost on purchases orders for a specific vendor type filtered to the selected order year. The purchase orders that are NOT in started, closed, or cancelled status are included in the calculation for the chart.
The chart can be further filtered by purchase order commitment amount and vendor type.

**Commitment by Purchase Category**: A line and clustered column chart that displays the sum of the unreceived items quantity and cost on purchases orders for specific purchase category. The purchase orders that are NOT in started, closed, or cancelled status are included in the calculation for the chart.
The chart can be further filtered by last promise year, last promise month, commitment amount, commitment quantity, purchase order category, and commitment amount.

### Filters

The commitments page has the following page filters:

-   Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Purchase Order Status
-   Month
-   Planner Name
-   Vendor Type
-   Vendor Name
-   Purchase Order Status

>[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Purchase Cost Variance

### Cards

The purchase cost variance page has the following cards:

**Number of POs**: A multi-row card that displays the number of purchase orders with at least one line item regardless of status filtered to the selected order year. It also shows the percentage increase or decrease in the numbers compared to last year (LY). The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Total PO Lines**: A multi-row card that displays the average variance between the unit cost of the purchased items and the standard cost of the items on purchase orders created in the selected order year. It also shows the percentage increase or decrease in the numbers compared to last year (LY). The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Average Variance**: A multi-row card that displays the average variance between the unit cost of the purchased items and the standard cost of the items on purchase orders created in the selected order year. It also shows the percentage increase or decrease in the numbers compared to last year (LY). The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Purchase Order Cost Variance Range**: A treemap that displays the percentage of the total purchase orders filtered to the selected year for the variance below 10% and above 10%.

### Tiles

The purchase cost variance page has the following tiles:

**Variance Trend**: A area chart that displays the variance trend for the items purchased filtered to the selected order year. The order date is segregated by the respective month in the chart.
The chart can be further filtered by purchase order cost variance and purchase order month.

**Variance by Product**: A clustered bar chart that displays the variance between the unit cost on the purchased items and their standard cost for a specific product class filtered to the selected order year.
The chart can be further filtered by purchase order cost variance, part number, product class, and product group.

**Variance by Vendor**: A clustered bar chart that displays the variance between the unit cost on the purchased items and their standard cost for a specific vendor filtered to the selected order year.
The chart can be further filtered by purchase order cost variance and vendor name.

**Standard Cost vs Purchase Amount**: A scatter chart that displays the sum of the ordered quantity times unit cost on the purchase orders compared to the standard cost of the items regardless of purchase order's status filtered to the selected order year. The purchase orders with at least one line item excluding master release lines are included in the calculation for the chart.
The chart can be further filtered by cost variance, planner name, and received amount.

**Periodic Variance by Vendor Type**: A waterfall chart that displays the variance trend based on the vendor type for the purchased items filtered to the selected order year. The order date is segregated by the respective month in the chart.
The chart can be further filtered by purchase order cost variance, purchase order month, and vendor type.

### Filters

The purchase cost variance page has the following page filters:

-   Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Purchase Order Status
-   Month
-   Planner Name
-   Vendor Type
-   Vendor Name

>[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Vendor Comparison

### Cards

The vendor comparison page has the following cards:

**Purchase Amount**: A multi-row card that displays the sum of the ordered quantity times unit cost on the purchase orders with at least one line item excluding master release lines regardless of status filtered to the selected year. It also shows the percentage increase or decrease in the numbers compared to last year (LY). The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Return Amount**: A multi-row card that displays the sum of the return quantity times the original unit cost on the purchase orders with at least one return line item regardless of status filtered to the selected year. It also shows the percentage increase or decrease in the numbers compared to last year (LY). The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Purchase Quantity**: A multi-row card that displays the sum of the ordered quantity on the purchase orders with at least one line item excluding master release lines regardless of status filtered to the selected year. It also shows the percentage increase or decrease in the numbers compared to last year (LY). The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Return Quantity**: A multi-row card that displays the sum of the return quantity on the purchase orders with at least one return line item regardless of status filtered to the selected year. It also shows the percentage increase or decrease in the numbers compared to last year (LY). The red font color indicates a decrease while the green font color indicates an increase in numbers.

### Tiles

The vendor comparison page has the following tiles:

**Return Quantity Analysis**: A scatter chart that displays the sum of the ordered quantity compared to the return quantity of items on the purchase order regardless of status filtered to the selected order year.
The chart can be further filtered by purchase order amount, purchase order quantity, purchase order returned quantity, and vendor name.

**Purchase Amount MoM**: A clustered column chart that displays the comparison of purchase amounts month over month filtered to the selected order year.
The chart can be further filtered by purchase order amount MoM and purchase order month.

**Details Table**: A table that displays a list of items and vendors with the average purchase cost, standard cost and the comparison year over year filtered to the selected order year.
The chart can be further filtered by list cost, order amount, part number, returned quantity, standard cost, unit cost, and vendor name.

### Filters

The vendor comparison page has the following page filters:

-   Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Purchase Order Status
-   Month
-   Planner Name
-   Vendor Type
-   Vendor Name

>[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

