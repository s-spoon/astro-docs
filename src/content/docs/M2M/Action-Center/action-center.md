---
title: "Action Center User Guide"
draft: false
type: Article
---


# Action Center

## Overview

The Action Center in M2M is a dashboard that provides an intuitive interface for monitoring and managing various aspects of your system through widgets. Users can add and customize multiple dashboards to suit their specific needs.

## Widget Types

In the M2M Action Center, widgets are categorized into different types, each serving a specific purpose and visual representation. Understanding these widget types helps you utilize them effectively on your dashboard. Here’s a brief overview of the available widget types:

### Donut Widget

The Donut widget displays the title and data in a circular chart format, making it easy to visualize proportions and percentages. It is ideal for showing categorical data and comparing different segments. For example, the **Sales Orders by Status** and **Job Orders by Status** widgets use donut charts to represent various statuses of sales orders and job orders, respectively.

### Number Tile

The Number Tile focuses on presenting numerical data in a concise format. It highlights specific numbers and allows users to click the tile to view a detailed list of items associated with the number displayed. This type is useful for tracking metrics such as **Sales Orders Requiring Deposit Not Received** or **Jobs Past Due/Late**, where quick access to detailed information is crucial.

### Funnel Widget

The Funnel widget displays data progression through different stages in a process. It is particularly useful for sales and activity tracking, such as in the **Sales Person Activities** widget, where the funnel chart helps track activities through various stages, providing insight into the sales process.

## Add Widget to Dashboard

Adding a widget to your M2M Action Center dashboard is a straightforward process that allows you to customize your view with relevant data.

To add a widget, follow these steps:

1.  Navigate to the Action Center dashboard within the M2M interface.
2.  Locate the option to add a widget:
    -   If this is your first time adding a widget, you will see a **Click to Add Widget** option on the dashboard.
    -   For subsequent additions, click the **Add Widget** icon available at the top right corner of the dashboard.

A list of available widgets will appear.

3.  Click on the desired widget from the list to add it to your dashboard.

>[!TIP]
>Browse through the list to find the widget you want to add. The widgets are categorized based on functional areas, such as Sales/CRM, Production, Engineering, etc.

4.  Configure Widget Settings (Optional):
    -   After adding the widget, you can configure its settings to meet your specific needs. Click the **Settings** button on the widget to open the settings popup.
    -   In the settings popup, you can adjust parameters such as threshold settings, custom refresh intervals, and display options. Make sure to click **OK** to apply any changes.

        >[!NOTE]
        >Threshold settings are only applicable to the Number Tile widget.

5.  Arrange the Widget (Optional):
    -   Once the widget is added to the dashboard, you can drag and drop it to rearrange its position according to your preference. This allows you to organize the dashboard layout to suit your workflow.

## Widget Options

The M2M Action Center offers various options to customize and interact with widgets, allowing you to tailor the data presentation and delve deeper into specific insights. These options include filtering data, drilling down into detailed information, refreshing the widget content, and customizing the threshold settings.

### Filter

The **Filter** option allows you to refine the data displayed in the widget based on specific criteria. By applying filters, you can narrow down the information to focus on particular subsets or parameters that are most relevant to you. This can include filtering by date ranges, categories, statuses, or any other data attributes available in the widget.

Click on the **Filter** icon to open the filter settings. Select the criteria you wish to apply and confirm your selections. The widget will update to show only the data that meets your filter conditions.

>[!NOTE]
>This filter is temporary. When a temporary filter is applied, a small circle appears on the **Filter** icon, indicating that the filter is active.

### Drill Down

The **Drill Down** feature enables you to view more detailed information related to a particular data point or summary displayed in the widget. This option is useful for exploring underlying data and gaining deeper insights into specific elements.

Click on a data point or summary in the widget to access drill-down options. You may be taken to a detailed report or a new screen that provides a more granular view of the selected data.

### Refresh

The **Refresh** option allows you to manually update the data displayed in the widget to ensure you are viewing the most current information. This is especially useful if the data source is frequently updated or if you want to ensure the widget reflects recent changes.

Click on the **Refresh** icon to reload the data in the widget. The widget will update to display the latest information from the data source. Additionally, you can set a **Custom Refresh** interval in the widget settings, allowing the widget to refresh automatically at your preferred frequency.

### Settings

The **Settings** option provides access to the customization and configuration settings for the widget. Here, you can adjust various parameters, such as threshold settings, display options, and custom refresh intervals, to tailor the widget’s behavior and appearance according to your preferences. Click the **Reset** button to reset the configuration to default. Select the **Set as default** checkbox to make the current configuration the default settings.

Click on the **Settings** icon to open the settings popup. Make the desired adjustments and save your changes. This ensures the widget is configured to meet your specific requirements and display data in a way that suits your needs.

The custom refresh option is available for all widgets, while the threshold settings are applicable only to the Number Tile widget. Custom refresh intervals must be set between 5 and 1440 minutes.

#### Threshold Settings

Users can choose to sort the thresholds by selecting either **Ascending** or **Descending** order:

-   **Ascending**: Prioritizes lower values, triggering specific visual indicators for smaller numbers.
-   **Descending**: Prioritizes higher values, triggering specific visual indicators for larger numbers.

   Users can define threshold values for the upper and lower limits:

-   Upper: When the metric exceeds this value, the widget color will change to red, indicating that the threshold has been surpassed.
-   Lower: Sets the lower limit threshold. When the metric is below this value, the widget color will change to green, signaling that it is within the desired range.

    >[!NOTE]
    >For the **Last P&S Commit Date & Time** widget, thresholds are considered in hours. This represents the difference between the last commit time and the current time, measured in hours. The upper value should always be greater than the lower value, and neither field can be negative. Additionally, both fields cannot be empty; if either the upper or lower value is left empty, it will be considered as zero.

## Available Widgets

You can add widgets related to various functional areas:

### Sales/CRM Widgets

You can add the following widgets to the dashboard for Sales/CRM:

| **Widget Name**                                 | **Type**     | **Description**                                                                                                     |
|-------------------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------|
| Sales Orders by Status                          | Donut        | Shows sales orders categorized by their status.                                                                     |
| RMA By Status                                   | Donut        | Shows RMAs organized by their current status.                                                                       |
| Sales Person Activities                         | Funnel       | Tracks the activities of sales personnel.                                                                           |
| RMA in Ready for Credit with no CM issued       |  Number Tile | Shows the number of RMAs ready for credit without a credit memo issued. Clicking the number shows the list of RMAs. |
|  Sales Orders Requiring Deposit Not Received    |  Number Tile | Shows the number of sales orders awaiting deposit payment. Clicking the number shows the list of orders.            |
| Customer Status                                 | Donut        | Shows the status of customers.                                                                                      |
|  Quotes Expiring In X Days                      |  Number Tile | Shows the number of quotes expiring within a specified time. Clicking the number shows the list of quotes.          |
| Sales Orders Line Items Scheduled to Ship Today |  Number Tile | Shows the number of line items scheduled for shipment today. Clicking the number shows the list of line items.      |
|  RMA Not Received                               | Number Tile  | Shows the number of RMAs that have not yet been received. Clicking the number shows the list of                     |

| **Widget Name**                                 | **Type**     | **Description**                                                                                                     |
|-------------------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------|
|                                             |              | RMAs.                                                                                                                 |
|  Customers Exceeding Credit Limit           |  Number Tile | Shows the number of customers who have exceeded their credit limits. Clicking the number shows the list of customers. |
| Quotes By Status                            | Donut        | Shows quotes categorized by their status.                                                                             |
|   Opportunity Pipeline                      |  Number Tile | Shows the number of sales opportunities in the pipeline. Clicking the number shows the list of opportunities.         |
|  Sales Orders Past Due                      | Number Tile  | Shows the number of sales orders that are past due. Clicking the number shows the list of orders.                     |
|  Sales Orders in Open Status Not in Process |  Number Tile | Shows the number of sales orders that are open but not yet in process. Clicking the number shows the list of orders.  |
|  Contracts Expiring within X Days           |  Number Tile | Shows the number of contracts expiring within a specified timeframe. Clicking the number shows the list of contracts. |

### Production Widgets

You can add the following widgets to the dashboard for Production:

| **Widget Name**                           | **Type**     | **Description**                                                                                                  |
|-------------------------------------------|--------------|------------------------------------------------------------------------------------------------------------------|
|  Open Jobs beyond Calculated Release Date |  Number Tile | Shows the number of jobs past their calculated release date. Clicking the number shows the list of jobs.         |
| Last P&S Commit Date & Time               | Number Tile  | Shows the last production and shipping commit date and time.                                                     |
|  Production Variances                     | Number Tile  | Shows the number of production variances. Clicking the number shows the list of variances.                       |
| Jobs To Be Released Today                 | Number Tile  | Shows the number of jobs scheduled for release today. Clicking the number shows the list of jobs.                |
|   Shortages Now Available                 |  Number Tile | Shows the number of materials shortages that are now available. Clicking the number shows the list of shortages. |
|  Labor Errors                             | Number Tile  | Shows the number of errors in labor records. Clicking the number shows the list of errors.                       |
| Sales Orders with Unresolved Revisions    |  Donut       |  Shows sales orders with unresolved revisions.                                                                   |
|  Jobs In Released Status, Not Scheduled   |  Number Tile | Shows the number of jobs that are released but not scheduled. Clicking the number shows the list of jobs.        |
| Make/Buy Items In Inventory               |  Donut       | Shows items in inventory categorized as make or buy.                                                             |

| **Widget Name**                                 | **Type**     | **Description**                                                                                                     |
|-------------------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------|
|  Jobs Missing DBOM/JOPLAN/DRTG                        |  Number Tile | Shows the number of jobs missing a BOM, job plan, or routing. Clicking the number shows the list of jobs.       |
|  Jobs Past Due/Late                                   | Number Tile  | Shows the number of jobs that are past due or late. Clicking the number shows the list of jobs.                 |
| RMAs for Rework & Return                              | Donut        | Shows RMAs flagged for rework or return.                                                                        |
|  Internal Jobs Complete, Not Moved                    |  Number Tile | Shows the number of internal jobs marked as complete but not moved. Clicking the number shows the list of jobs. |
| Ops With Qty Complete More/Less/Missing Than Previous |   Donut      |  Shows operations where the completed quantity differs from the previous step.                                  |
| Job Orders by Status                                  | Donut        | Shows job orders categorized by their status.                                                                   |

### Engineering Widgets

You can add the following widgets to the dashboard for Engineering:

| **Widget Name**                | **Type**     | **Description**                                                                                                   |
|--------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------|
| ECOs by Status                 | Donut        | Shows engineering change orders by status.                                                                        |
| Item Master without BOM or RTG |  Number Tile |  Shows the number of item masters without a BOM or routing. Clicking the number shows the list of items.          |
| ECOs Near Completion           | Number Tile  | Shows the number of engineering change orders near completion. Clicking the number shows the list of ECOs.        |
| Item Masters in Started Status | Number Tile  | Shows the number of item masters currently in started status. Clicking the number shows the list of item masters. |

### Inventory Widgets

You can add the following widget to the dashboard for Inventory:

| **Widget Name**                | **Type**    | **Description**                                                                                          |
|--------------------------------|-------------|----------------------------------------------------------------------------------------------------------|
| Purchase Returns to be Shipped | Number Tile | Shows the number of purchase returns ready to be shipped. Clicking the number shows the list of returns. |

### Purchasing Widgets

You can add the following widgets to the dashboard for Purchasing:

| **Widget Name**                | **Type**     | **Description**                                                                                                  |
|--------------------------------|--------------|------------------------------------------------------------------------------------------------------------------|
| Purchase Orders by Status      |  Donut       |  Shows purchase orders categorized by their status.                                                              |
| Purchase Orders Due Today      | Number Tile  | Shows the number of purchase orders due today. Clicking the number shows the list of orders.                     |
| Items Inspected & Not Returned | Number Tile  | Shows the number of items inspected but not returned. Clicking the number shows the list of items.               |
| Purchase Orders Started        | Number Tile  | Shows the number of purchase orders that have been started. Clicking the number shows the list of orders.        |
| Receiving Inspections Past Due |  Number Tile |  Shows the number of receiving inspections that are past due. Clicking the number shows the list of inspections. |
| Purchase Orders Past Due       | Number Tile  | Shows the number of purchase orders that are past due. Clicking the number shows the list of orders.             |
| Vendors By Status              |  Donut       |  Shows vendors categorized by their status.                                                                      |

### Shipping Widgets

You can add the following widgets to the dashboard for Shipping:

| **Widget Name**                                         | **Type**     | **Description**                                                                                                           |
|---------------------------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------------|
| SOs Shipping Today by Ship Via                          |  Donut       | Shows sales orders shipping today categorized by ship via method.                                                         |
| Shipping by Status                                      | Donut        | Shows shipping orders by status.                                                                                          |
| Unconfirmed Shippers that Require BOL/LTL Documentation |  Number Tile | Shows the number of unconfirmed shippers requiring BOL/LTL documentation. Clicking the number shows the list of shippers. |
| Sales Orders Requiring Pro-Forma Invoice                |  Donut       |  Shows sales orders requiring a pro-forma invoice.                                                                        |

### Finance Widgets

You can add the following widgets to the dashboard for Finance:

| **Widget Name**             | **Type**     | **Description**                                                                                                  |
|-----------------------------|--------------|------------------------------------------------------------------------------------------------------------------|
| AP Invoices by Status       |  Donut       |  Shows accounts payable invoices categorized by status.                                                          |
| Shippers to be Invoiced     | Number Tile  | Shows the number of shippers that need to be invoiced. Clicking the number shows the list of shippers.           |
|  Returns With No Debit Memo |  Number Tile | Shows the number of returns that do not have a debit memo issued. Clicking the number shows the list of returns. |
| AR Invoices by Status       |  Donut       | Shows accounts receivable invoices categorized by status.                                                        |

| **Widget Name**                                 | **Type**     | **Description**                                                                                                     |
|-------------------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------|
| Receivers In Open Status                 | Number Tile   | Shows the number of receivers still in open status. Clicking the number shows the list of receivers.                                          |
| Expiring Discounts on Unpaid AP Invoices |   Number Tile |  Shows the number of discounts on unpaid accounts payable invoices that are about to expire. Clicking the number shows the list of discounts. |
| Cash Receipts By Status                  |  Donut        |  Shows cash receipts categorized by status.                                                                                                   |
| Receivers To Be Invoiced                 | Number Tile   | Shows the number of receivers that need to be invoiced. Clicking the number shows the list of receivers.                                      |
| Void Checks by Date                      | Number Tile   | Shows the number of checks voided by date. Clicking the number shows the list of voided checks.                                               |
