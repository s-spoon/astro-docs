---
title: "Set up Made2Manage for Demand Forecasting"
draft: false
type: Article
---

Before you can use Made2Manage's information in Demand Forecasting, you need to set up Made2Manage to work with Demand Forecasting.

## To set up Made2Manage for Demand Forecasting:

1. Open the Integration Control File Editor (BWPARM) page.

    1. Select **Utilities** > **Company Setup** > **Module Setup** > **Purchase Orders** > **M2M Demand Forecasting** > **Integration Control File Editor**.

    Or

    2. Search for **BWPARM** in the **Navigation box** and then select **Integration Control File Editor**.

    **Integration Control File Editor (BWPARM)** page appears.

2. Make the necessary changes.

3. Set the decimal places and paths:

    - In the **Number of Decimal Places** field, enter the number of decimal places you want to import from Made2Manage.

        Or click the calculator icon to display the Calculator. Select the values.

    - Click the **EXE Path** lookup reference.

        The **Browse Shared Folders** window appears.

    - Navigate to the desired location and click **OK**.

        See *Microsoft Online Help* for more information.

        Or double-click the **Windows** directory where you loaded the Demand Forecasting executable.

        *Note:*You do not need to change the path for the **TRX** files.

4. In the **Data Types** area, select the check box corresponding to Made2Manage ERP data that you want Demand Forecasting to extract and use.

    *Note:*Made2Manage ERP and Demand Forecasting work best if you select all data types.

5. If your company has multiple facilities, select the facility to use for Demand Forecasting:

    If your company does not have multiple facilities, skip this step.

    - Select the **All Facilities** checkbox to use Demand Forecasting for all facilities.

    - To use Demand Forecasting for a single facility:

    - Ensure that the **All Facilities** check box is clear.

    - Click the **Facility to Process** dropdown and select the facility from the list.

    - Or click the **Facility To Process** box to add a new value or modify the existing one.

6. Use the **Forecast Bucket** setting when importing a forecast from Demand Forecasting to Made2Manage ERP.

    Click the **Forecast Bucket** arrow to select from the list.

    - This value defaults to "**N None**", to use the same buckets in Made2Manage that were used in Demand Forecasting.

    - Select "**D Daily**" to change the imported Demand Forecast to Daily buckets before saving it to Made2Manage ERP.

    - Select "**W Weekly**" to change the imported Demand Forecast to Weekly buckets before saving it to Made2Manage ERP.

7. In the **Date Scope** area, select the number of days to use to import **Sales History** and **Issued History** data from ERP to Demand Forecasting.

    - In the **Number of Days Backward** box, enter the days from the current system date that you want to use to import history.

        Or click the Calculator icon to displays the Calculator. Select the appropriate values.

    - *Note:*The **Start Date** is the start of the history period and the system calculates it by taking the current system date and subtracting the number of days entered in the **Number of Days Backward** field.

8. Click **Save** on the **Toolbar**.The changes are saved.

    Click **Cancel** on the **Toolbar** to discard the changes.

​