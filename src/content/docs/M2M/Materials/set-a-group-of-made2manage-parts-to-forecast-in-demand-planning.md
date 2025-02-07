---

title: "Set a group of Made2Manage parts to forecast in Demand Forecasting (R1-NA)"
draft: false
type: Article

---

Demand Forecasting lets you forecast and analyze sales and customer demand over a given period of time. You can select groups of parts to include in a demand forecasting unit.

**To set a group of Made2Manage parts to forecast in Demand Forecasting:**

1. Click the **Utilities** tab. From the **Company Setup** group, click **Module Setup** arrow or click on the **Module Setup** . select **M2M Demand Forecasting** from the list and select **M2M Demand Forecasting Setup** .

    Or press **Alt+T**, type **DPLSET**, and press **Enter**.

    **Demand Forecasting Unit Setup (SPLSET)** screen appears.

2. Set the order dates over which to consider sales orders for the parts you select.

    - In the **Time Period From** field, select the first order date to include in your forecast.

        If you leave this box blank, Made2Manage assumes that you want your forecast to include sales orders with order dates infinitely into the past.

    - In the **Time Period Thru** field, select the last order date to include in your forecast.

        If you leave this box blank, Made2Manage assumes that you want your forecast to include sales orders with order dates infinitely into the future.

3. select a group of part numbers or part number descriptions to include in the forecast:

    - Click the **Part Number** or **Description From** Lookup Reference and select the first part number or description to include.

        If you leave this box blank, Made2Manage assumes that you want to forecast all values less than or equal to the **Thru** value.

    - Click the **Part Number** or **Description Thru** () --> Lookup Reference and select the last part number or description to include.

        If you leave this box blank, Made2Manage assumes that you want to include in your forecast all values **greater than** or **equal to** the **From** value.

    - In the **Matching** field under the **Part Number Thru** or **Description Thru** fields, optionally type a pattern to match.

        You can include wildcards in the Matching boxes.

4. Set a group of parts by planner, ABC code, product class, group code, or source.

    - Click the **From** arrow next to the category you want to forecast and select the first item in this group to include.

    - Click the **Through** arrow next to the category you want to forecast and select the last item in this group to include.

    - In the **Matching** field next to the category you want to forecast, optionally type a pattern to match.

        You can include wildcards in the Matching fiels.

5. select the revisions of these parts to include in your forecast:

    - Click the **Current Revision Only** to include only current revisions of the parts.

    - Click the **All Revisions Summed into the Current Revision** to include all revisions of a part and to treat them as if they were only one revision.

    - Click the **All Active Revisions Forecasted Individually** to include all revisions of a part and to treat them as if they were separate parts.

    - Click the **Part Not Forecasted**  if you no longer want to include this group of parts in your forecast.

6. Optionally select additional fields to include in your forecast:

    - Click the **Extend DFU** .

        **The Extend DFU (DPLDFU)** screen opens.

    - To extend the **DFU by customer**, **distributor**, **salesperson**, or **territory**, click the next to the corresponding field.

        Made2Manage extends the demand forecasting unit (DFU) for preset customers, distributors, salespersons, or territories. To set this information, see the **Related Information**.

    - Click the **Save** on the **Ribbon** to keep your changes and return to the **Demand Forecasting Setup** screen.

        Or click the **Cancel** on the **Ribbon** to cancel your changes in the **Extend DFU** screen and to return to the **Demand Forecasting Setup** screen.

7. Click the **Save** to save your changes for **Demand Forecasting setup**.