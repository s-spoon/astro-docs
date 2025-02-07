---

title: "Production"
draft: false
type: Article

---

Use the production report to obtain information about the KPIs specific to production such as the production time, the cost components, labor, and production details.

The report helps you to:

-   Identify the areas of improvement.

-   Interpret the gaps between the actual and the estimated costs.

-   Calculate the difference between the estimated hours and the actual hours.

-   Analyze the various cost components.

    The production report consist of the following pages:

1.  [**Overview**](production-BI.md#overview)
2.  [**Job Cost Components**](production-BI.md#job-cost-components)
3.  [**Cost Performance**](production-BI.md#cost-performance)
4.  [**Job Completion Status**](production-BI.md#_bookmark28)
5.  [**Actual and Estimated Cost**](production-BI.md#actual-and-estimated-cost)
6.  [**Actual and Estimated Hours**](production-BI.md#actual-and-estimated-hours)
7.  [**Labor Details by Work Center**](production-BI.md#labor-details-by-work-center)
8.  [**Labor Details by Employee**](production-BI.md#labor-details-by-employee)
9.  [**Scrap Details**](production-BI.md#scrap-details)

  >[!Tip] To view the details of a visual tile, right-click on the tile and select **Show as a Table**.

  >[!Note] To check the applied filters that are affecting a visual tile, select the tile and click the filter icon.

## Overview

### Cards

The overview page has the following cards:

**Total Job Cost YTD**: A multi-row card that displays the sum of the total actual costs for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Number of Jobs YTD**: A multi-row card that displays the total number of job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Produced Quantity YTD**: A multi-row card that displays the sum of the produced quantity on the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Total Job Hours YTD**: A multi-row card that displays the sum of the production hours on the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Job Order Status**: The slicer filters the tiles by the selected job order status.

### Tiles

The overview page has the following tiles:

**Number of Job Orders by Month**: A stacked column chart that displays the number of job orders by their status for the selected job order finish year and month. The legend displays the job order status. The job order date is segregated by the respective month in the chart.
The tile can be further filtered by calculated finish date, calculated finish month, calculated finish year, job order status, and number of job orders.

**Job Cost by Product**: A treemap that displays the sum of the actual costs on the job orders for a specific product class for the selected job order finish year. The data can be drilled down to the group code or part number from the product class.
The tile can be further filtered by actual total costs, job order part number, job order product class, and job order product group.

**Number of Job Order by Status**: A donut chart that displays the number of job orders by their status for the selected job order finish year. The legend displays the job order status.
The tile can be further filtered by job order status and number of job orders.

**Labor Hours per Product** : A clustered bar chart that displays the sum of the production hours on the job orders for a specific product class for the selected job order finish year.
The tile can be further filtered by actual total duration (hours), job order part number, job order product class and job order product group.

**Produced Quantity by Product**: A clustered bar chart that displays the sum of the produced quantity on the job orders for a specific product class for the selected job order finish year.
The tile can be further filtered by job order part number, job order product class, job order product group, and job order total make quantity.

### Filters

The overview page has the following page filters:

-   Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Product Class
-   Part Number
-   Product Group
-   Job Order Type
-   Calculated Finish Date: The date is determined based on a decision tree. If the job is in Started or Open status, the finish date will be the job order due date; otherwise the last labor date will be used. In the case of no labor date, the hold date field will be used as the Job Order Finish Date.

> [!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Job Cost Components

### Cards

The job cost components page has the following cards:

**Total Job Cost YTD**: A multi-row card that displays the sum of the total actual costs for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Material Cost YTD**: A multi-row card that displays the sum of the actual material costs on the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Labor Cost YTD**: A multi-row card that displays the sum of the actual labor costs on the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Overhead Cost YTD**: A multi-row card that displays the sum of the actual overhead costs on the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Subcontract Cost YTD**: A multi-row card that displays the sum of the actual subcontract costs on the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

### Tiles

The job cost components page has the following tiles:

**Cost Components**: A donut chart that displays the sum of the actual costs on the job orders for the selected job order finish year. The actual cost is segregated into different cost bucket.

The tile can be further filtered by actual labor costs, actual material costs, actual other costs, actual overhead costs, actual setup costs, actual subcontract costs and actual tooling costs.

  >[!Note] The legend displays the job order status.

**Cost Components by Month**: A stacked column chart that displays the sum of the actual costs on the job orders for the selected job order finish year. The actual cost is segregated into different cost bucket. The job order date is segregated by the respective month in the chart.

The tile can be further filtered by actual labor costs, actual material costs, actual other costs, actual overhead costs, actual setup costs, actual subcontract costs, actual tooling costs, calculated finish date and calculated finish month.

**Cost Components by Part Number**: A stacked bar chart that displays the sum of the actual costs on the job orders for a specific part number filtered to the selected job order finish year. The actual cost is segregated into different cost bucket.

The tile can be further filtered by actual labor costs, actual material costs, actual other costs, actual overhead costs, actual production costs, actual setup costs, actual subcontract costs, actual tooling costs, actual total costs and job order part number.

**Cost Components by Product Class**: A stacked bar chart that displays the sum of the actual costs on the job orders for a specific product class filtered to the selected job order finish year. The actual cost is segregated into different cost bucket.

The tile can be further filtered by actual labor costs, actual material costs, actual other costs, actual overhead costs, actual setup costs, actual subcontract costs, actual tooling costs, and job order product class.

**Cost Components by Group Code**: A stacked bar chart that displays the sum of the actual costs on the job orders for a specific group code filtered to the selected job order finish year. The actual cost is segregated into a different cost bucket.

The tile can be further filtered by actual labor costs, actual material costs, actual other costs, actual overhead costs, actual setup costs, actual subcontract costs, actual tooling costs and job order product class.

### Filters

The job cost components page has the following page filters:

-   Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Product Class
-   Part Number
-   Product Group
-   Job Order Type
-   Calculated Finish Date: The date is determined based on a decision tree. If the job is in Started or Open status, the finish date will be the job order due date; otherwise the last labor date will be used. In the case of no labor date, the hold date field will be used as the Job Order Finish Date.

  >[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Cost Performance

### Cards

The cost performance page has the following cards:

**Underrun Jobs %**: A multi-row card that displays the percentage of job orders, the actual cost of which is less than the estimated cost for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Actual = Estimate Jobs %**: A multi-row card that displays the percentage of job orders, the actual cost of which is equal to the estimated cost for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Overrun Job %**: A multi-row card that displays the percentage of job orders, the actual cost of which is more than the estimated cost for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Cost Underrun**: An enlighten legend that filters the tiles by the selected cost comparison as actual cost equal estimated cost, cost overrun, or cost underrun.

**Job Order Status**: The slicer filters the tiles by the selected job order status.

### Tiles

The cost performance page has the following tiles:

**Number of Job Orders**: A treemap that displays the number of job orders, the actual cost of which are less than, equal to, or more than the estimated cost for the selected job order finish year.

The tile can be further filtered by cost performance and number of job orders.

**Number of Job Orders by Product**: A stacked bar chart that displays the number of job orders, the actual cost of which are less than, equal to, or more than the estimated cost of the specific product class filtered to the selected job order finish year. The data can be drilled down to the group code or part number from the product class.

The tile can be further filtered by cost performance, job order part number, job order product class, job order product group and number of job orders.

**Number of Job Orders by Customer**: A stacked bar chart that displays the number of job orders, the actual cost of which are less than, equal to or more than the estimated cost for the customers of a specific company filtered to the selected job order finish year.

The tile can be further filtered by company name, cost performance, and number of job orders.

**Number of Job Orders by Month**: A stacked column chart that displays the number of job orders, the actual cost of which are less than, equal to, or more than the estimated cost filtered to the selected job order finish year. The job order finish date is segregated by the respective month in the chart.

The tile can be further filtered by calculated finish date, calculated finish month, cost performance, and number of job orders.

### Filters

The cost performance page has the following page filters:

-   Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Product Class
-   Product Group
-   Part Number
-   Job Order Type
-   Calculated Finish Date: The date is determined based on a decision tree. If the job is in Started or Open status, the finish date will be the job order due date; otherwise the last labor date will be used. In the case of no labor date, the hold date field will be used as the Job Order Finish Date.
-   Cost Performance

  >[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Job Completion Status

### Cards

The job completion status page has the following cards:

**Early Job %**: A multi-row card that displays the percentage of job orders that were finished earlier than the job order due date filtered to the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**On Time Jobs %**: A multi-row card that displays the percentage of job orders that were finished on the job order due date filtered to the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Late Jobs %**: A multi-row card that displays the percentage of job orders that were finished later than the job order due date filtered to the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Cost Underrun**: An enlighten legend that filters the tiles by the selected legend as early, late, or on time.

**Job Order Status**: The slicer filters the tiles by the selected job order status.

### Tiles

The job completion status page has the following tiles:

**Number of Job Orders by Job Completion Status**: A donut chart that displays the number of job orders by their respective completion status filtered for the selected job order finish year.
The tile can be further filtered by job completion status and number of job orders.

**Monthly Job Completion Status**: A line chart that displays the number of job orders segregated in months by their respective completion status filtered for the selected job order finish year.
The tile can be further filtered by calculated finish month, calculated finish year, job completion status, and number of orders.

**Product by Job Completion Status**: A stacked bar chart that displays the number of job orders by their respective completion status for a specific product class filtered for the selected job order finish year.
The tile can be further filtered by job completion status, job order, job order product group, and number of job orders.

**Part Number by Job Completion Status**: A stacked bar chart that displays the number of job orders by their respective completion status for a specific part number filtered for the selected job order finish year.
The tile can be further filtered by job completion status, job order part number, and number of job orders.

**Job Order Name by Job Completion Status**: A stacked bar chart that displays the number of job orders by their respective completion status for a specific job order name filtered for the selected job order finish year.
The tile can be further filtered by job order completion status, job order name, and number of job orders.

### Filters

The job completion status page has the following page filters:

-   Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Part Number
-   Product Class
-   Product Group
-   Job Order Type
-   Calculated Finish Date: The date is determined based on a decision tree. If the job is in Started or Open status, the finish date will be the job order due date; otherwise the last labor date will be used. In the case of no labor date, the hold date field will be used as the Job Order Finish Date.

  >[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Actual and Estimated Cost

### Cards

The actual and estimated cost page has the following cards:

**Actual Cost YTD**: A multi-row card that displays the total actual cost of the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Estimated Cost YTD**: A multi-row card that displays the total estimated cost of the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Cost Variance**: A multi-row card that displays the total cost variance between the actual and the estimated costs of the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Variance %**: A multi-row card that displays the percentage of the total cost variance between the actual and the estimated costs of the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Job Order Status**: The slicer filters the tiles by the selected job order status.

### Tiles:

The actual and estimated cost page has the following tiles:

**Actual Cost vs Estimated Cost**: A stacked column bar that displays the percentage comparison of the actual cost versus the estimated cost with the variance for the job orders filtered for the selected job order finish year.
The tile can be further filtered by calculated finish month and job order total cost variance percentage.

**Actual Cost and Estimated Cost by Product** : A bullet chart by OKVIZ that displays the comparison of the actual cost versus the estimated cost with the variance for the job orders of a specific product class filtered for the selected job order finish year.
The tile can be further filtered by actual total cost, estimated total cost, job order part number, job order product class, and job order product group.

**Actual Cost and Estimated Cost by Customer**: A clustered bar chart that displays the comparison of the actual cost versus the estimated cost with the variance of the job orders for the customers of the specific company filtered for the selected job order finish year.
The tile can be further filtered by actual total costs, company name, and estimated total costs.

**Details Table**: A matrix that displays a list of job orders and the corresponding detailed numbers of the actual and estimate costs along with the variance for the selected job order finish year.
The tile can be further filtered by actual costs, costs variance, estimated costs, and job order number.

### Filters

The actual and estimated cost page has the following page filters:

-   Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Product Class
-   Product Group
-   Part Number
-   Job Order Type
-   Calculated Finish Date: The date is determined based on a decision tree. If the job is in Started or Open status, the finish date will be the job order due date; otherwise the last labor date will be used. In the case of no labor date, the hold date field will be used as the Job Order Finish Date.

  >[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Actual and Estimated Hours

### Cards

The actual and estimated hours page has the following cards:

**Actual Hours YTD**: A multi-row card that displays the total number of actual hours for the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Estimated Hours YTD**: A multi-row card that displays the total number of estimated hours for the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Hour Variance**: A multi-row card that displays the total number of hours variance between the actual and the estimated hours of the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Variance %**: A multi-row card that displays the percentage of total number of hours variance between the actual and the estimated hours of the job orders for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Job Order Status**: The slicer filters the tiles by the selected job order status.

### Tiles

The actual and estimated hour page has the following tiles:

**Actual Hours and Estimated Hours by Month**: A clustered column chart that displays the actual and the estimated hours for the job orders in the respective month filtered for the selected job order finish year.
The tile can be further filtered by actual hours, calculated finish date calculated finish month and estimated hours.

**Actual Hours and Estimated Hours by Product** A bullet chart by OKVIZ that displays the actual and the estimated hours for the job orders of the specific product class filtered for the selected job order finish year.
The tile can be further filtered by actual hours, estimated hours, job order part number, job order product class, and job order product group.

**Actual Hours and Estimated Hours by Customer**: A clustered column chart that displays the actual hours and the estimated hours of the job orders for the customers of the specific company filtered to the selected job order finish year.
The tile can be further filtered by actual hours, company name, and estimated hours.

**Actual Hours and Estimated by Job Order Name**: A bullet chart by OKVIZ that displays the actual hours and the estimated hours of a job order filtered to the selected job order finish year.
The tile can be further filtered by actual hour, estimated hour, and job order number.

**Details Table**: A matrix that displays a list of job order numbers and the corresponding detailed numbers of the actual and estimate hours along with the variance for the selected job order finish year.
The tile can be further filtered by actual hours, estimated hours, job order number, variance, and variance percentage.

### Filters

The actual and estimated hours page has the following page filters:

-   Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Product Class
-   Product Group
-   Part Number
-   Job Order Type
-   Job Order Name
-   Job Order Number
-   Job Order Line Number
-   Calculated Finish Date: The date is determined based on a decision tree. If the job is in the Started or the Open status, the finish date will be the job order due date; otherwise the last labor date will be used. In the case of no labor date, the hold date field will be used as the Job Order Finish Date.

  >[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Labor Details by Work Center

### Cards

The labor details by work center page has the following cards:

**Labor Hours YTD**: A multi-row card that displays the total number of labor hours entered by employees including setup and production of job orders filtered for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Labor Cost YTD**: A multi-row card that displays the total cost of labor entered by employees including setup and production of job orders filtered for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Completed Quantity YTD**: A multi-row card that displays the total completed quantity posted via labor of job orders filtered for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Production Hour YTD**: A multi-row card that displays the total number of production hours entered by employees excluding setup of job orders filtered for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Production Efficiency**: A multi-row card that displays the total percentage of production efficiency of the production hours entered by employees to job orders filtered for the selected job order finish year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

### Tiles

The labor details by work center page has the following tiles:

**Labor Hours by Work Center**: A stacked bar chart that displays the total number of labor hours entered by employees including setup and production of job orders in a specific work center filtered for the selected job order finish year.
The tile can be further filtered by job order detail total hours, job labor type (production/setup), and work center code.

**Monthly Production Labor Efficiency**: A line and clustered stacked chart that displays the total percentage of production efficiency for the production hours entered by employees for job orders in the respective month filtered for the selected job order finish year.
The tile can be further filtered by estimated production hours, estimated setup hours, job labor month, and total costs efficiency (%).

**Labor Hours by Department**: A clustered bar chart that displays the total number of labor hours entered by employees including setup and production of job orders for a specific department filtered for the selected job order finish year.
The tile can be further filtered by department code and job labor detail total hour.

**Details Table**: A matrix that displays a list of work centers and the corresponding detailed numbers of the hours and costs for the selected job order finish year. The details can be drilled down to the individual job order.
The tile can be further filtered by incorrect costs, job labor product class, job labor product group, job operation number, job order number, labor costs, overhead costs, production hours, setup labor hours, total hours, and work center code.

### Filters

The labor details by work center page has the following page filters:

-   Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Work Center Code
-   Work Center Name
-   Department Code
-   Department Description
-   Part Number
-   Employee Last Name
-   Job Labor Date: The date is determined based on a decision tree. If the job is in Started or Open status, the finish date will be the job order due date; otherwise the last labor date will be used. In the case of no labor date, the hold date field will be used as the Job Labor Date.

  >[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Labor Details by Employee

### Cards

The labor details by employee page has the following cards:

**Labor Hours YTD**: A multi-row card that displays the total number of labor hours entered by employees including setup and production of job orders filtered for the selected job labor year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Labor Cost YTD**: A multi-row card that displays the total cost of labor entered by employees including setup and production of job orders filtered for the selected job labor year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Completed Quantity YTD**: A multi-row card that displays the total completed quantity posted via labor of job orders filtered for the selected job labor year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Production Hour YTD**: A multi-row card that displays the total number of production hours entered by employees excluding setup of job orders filtered for the selected job labor year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Production Efficiency**: A multi-row card that displays the total percentage of production efficiency of the production hours entered by employees to job orders filtered for the selected job labor year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

### Tiles

The labor details by employee page has the following tiles:

**Labor Hours by Employee Number**: A stacked bar chart that displays the total number of labor hours entered by employees including setup and production of job orders filtered for the selected job labor year.
The tile can be further filtered by employee number, job labor detail total hours PYC, job labor type (production/setup).

**Monthly Production Labor Efficiency**: A line and clustered column chart that displays the total percentage of production efficiency for the production hours entered by employees for job orders in the respective month filtered for the selected job labor year.
The tile can be further filtered by actual production hours, actual setup hours, and job labor month.

**Weekly Labor Hours**: A clustered column chart that displays the total labor hours entered by employees for weekly job orders (1 through 52) filtered for the selected job labor year.
The tile can be further filtered by job labor detail total hours, job labor type, and job labor week of year.

**Labor Hours by Department**: A donut chart that displays the total number of labor hours entered by employees including setup and production of job orders for a specific department filtered for the selected job labor year.
The tile can be further filtered by department and job labor detail total hours.

**Details Table**: A matrix that displays a list of employees and the corresponding detailed numbers of the hours and costs for the selected job labor year. The details can be drilled down to the individual job order.
The tile can be further filtered by completed quantity, employee number, job labor pay type, job order number, production hours, setup hours, and total hours.

### Filters

The labor details by employee page has the following page filters:

-   Job Labor Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Job Order Status: The tiles and the corresponding data is filtered by the selected status as closed and completed status. You cannot change this filter.
-   Employee Last Name
-   Department Code
-   Department Description
-   Part Number
-   Job Labor Date: The date is determined based on a decision tree. If the job is in Started or Open status, the finish date will be the job order due date; otherwise the last labor date will be used. In the case of no labor date, the hold date field will be used as the Job Labor Date.

  >[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

## Scrap Details

### Cards

The scrap details page has the following cards:

**Labor Scrap Quantity YTD**: A multi-row card that displays the total scrap quantity posted via labor filtered for the selected job labor year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Completed Quantity YTD**: A multi-row card that displays the total completed quantity posted via labor filtered for the selected job labor year. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

**Labor Scrap Rate YTD**: A multi-row card that displays the percentage of scrap rate filtered for the selected job labor year. The scrap rate is calculated by dividing the total scrap quantity to the total completed quantity multiplied by 100. It also shows the percentage increase or decrease in the numbers compared to last year. The red font color indicates a decrease while the green font color indicates an increase in numbers.

### Tiles

The scrap details page has the following tiles:

**Labor Scrap Rate by Month**: A line and clustered column chart that displays the scrap rate for individual month for the selected job labor year. The scrap rate is calculated by dividing the total scrap quantity to the total completed quantity multiplied by 100.
The tile can be further filtered by job labor date, job labor month, job labor scrap quantity and job labor scrap rate.

**Labor Scrap Quantity by Product Class**: A clustered bar chart that displays the total scrap quantity for a specific product class filtered for the selected job labor year.
The tile can be further filtered by job labor product class and job labor scrap rate.

**Labor Scrap Quantity by Group Code**: A clustered bar chart that displays the total scrap quantity for a group code filtered for the selected job labor year.
The tile can be further filtered by job labor product group and job labor scrap quantity.

**Labor Scrap Quantity by Facility**: A clustered column chart that displays the total scrap quantity for a facility filtered for the selected job labor year.
The tile can be further filtered by facility, job labor scrap quantity, and work center code.

**Labor Scrap Quantity by Work Center**: A clustered column chart that displays the total scrap quantity for a work center filtered for the selected job labor year.
The tile can be further filtered by job labor detail scrap quantity and work center code.

**Details Table**: A matrix that displays a list of part numbers and the corresponding detailed numbers of the quantities and scrap rates for the selected job labor year. The details can be drilled down to the individual job order.
The tile can be further filtered by completed quantity, job order number, part number, scrap quantity, and scrap rate.

### Filters

The scrap details page has the following page filters:

-   Year: The tiles and the corresponding data is filtered by the selected year as current year by default.
-   Product Class
-   Product Group
-   Part Number
-   Job Labor Date: The date is determined based on a decision tree. If the job is in Started or Open status, the finish date will be the job order due date; otherwise the last labor date will be used. In the case of no labor date, the hold date field will be used as the Job Labor Date.

  >[!Note] To remove the filters or to apply predefined filters on the page or the tiles, click **Reset to Default** on the menu bar.

