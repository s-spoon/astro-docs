---
title: "Assign locations to parts that do not have one"
draft: false
type: Article
---

If you have items that have an on hand balance but are not showing a specific location on the **On-Hand by Location** **(****INVOH)** screen, you can use this utility to populate those records with the default location from the item master.

### To assign locations to parts

1. Open the Data Utilities (REPD) page.

    1. Select **Utilities > Maintenance** > **Data Utilities**.

    Or

    2. Search for **REPD** or **Data Utilities** in the **Navigation box** and then select **Data Utilities**.

    **Data Utilities (REPD)** page appears.

2. Click the **Function** arrow and select **Correct on hand balance records with a blank location**.

3. To repair data for all parts, select **All Parts**.

    Or to repair data for a single part:

    1. Select  **Single Part No**.

    2. Click the **Facility** arrow and select the facility.

    3. Click the **Part No** lookup reference.

        The **Lookup For Part No** window appears.

    4. Highlight a row and click **Select**. Or, double click to select the part.

        Click **Cancel** to exit from **Lookup For Part No** window.

4. Click **Execute Utility** on the toolbar.

    A message, *Preparing to Repair Data. Proceed?* appears.

5. Click **Yes** to proceed.

    Or, click **No** to exit from the window.

    If you chose to repair all parts, a table appears that lists repaired records.