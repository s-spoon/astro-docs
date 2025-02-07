---
title: "Construct the report using the Made2Manage Report Wizard (R1-NA)"
draft: false
type: Article 
---

After selecting the tables / views, specifying the join criteria, selecting the fields, and specifying the filter expression, you can preview your report data. If you are satisfied, you can then construct the report.

When you click **Next** on the **Data Preview** screen, the **Made2Manage Report Wizard (RPWIZ)** displays the following areas:

-   The **Available Columns** grid shows the columns that you have selected in the previous screens.
-   The **Columns** grid shows the actual columns that will appear in the report.
-   The **Row Groups** area shows the columns by which you want to group the final report.
-   The **Aggregate** grid shows the fields that you want to aggregate in the report and the function that you use to aggregate the fields.
-   The **Report Layout** area has the controls to specify the report orientation and the number of lines in the report.

### To construct the report using the Made2Manage Report Wizard

1. Select the columns that will appear in the final report:

    1.  From the **Available Columns** grid, select the fields that you want to view in the report.
    2.  Drag and drop them to the **Columns** grid Or double-click the selected fields.

        >[!NOTE]You can add a field only once to the **Columns** grid.

        >[!NOTE]All columns are assigned a width automatically. You can change this width if required.

2. In the **Columns** grid, reorder the columns if required.

2. Specify the grouping information:

    1.  From the **Available Columns** grid, select the field on which you want to group.
    2.  Drag and drop the selected field to the **Row Groups** area.
    3.  Repeat steps 3a - 3b for the fields that you want to group by.
    4.  Rearrange the fields that you want to group by, if required.

4. Select the fields that you want to appear in the group headers:

    1.  In the **Columns** grid, select the field that you want to appear in the group header.
    2.  From the list in the **Group** column, select the group in which you want the field to appear.
    3.  Repeat steps 4a - 4b for the fields that you want to add to each group header.

5. Specify the aggregation information of the final report:

    1.  From the **Available Columns** grid, select the field that you want to aggregate.
    2.  Drag and drop the selected field to the **Aggregate** grid.

        >[!NOTE]The **Function** column in the **Aggregate** grid automatically displays the functions that you can use for the selected field, depending on the field type. For example, if the selected field is of the date type, the aggregate function is **Max**. You can select another function, if required.

        >[!NOTE]The **Caption** column in the **Aggregate** grid automatically displays a caption depending on the field type. You can change the caption, if required.

    3.  From the list in the **Level** column, select the level at which you want to aggregate.

        >[!NOTE]   
    Select **Every** to aggregate for every group and at the end of the report.  
    Select **Detail** to aggregate only at the detail level.  
    Select **End** to aggregate only at the end of the report.

    4.  Repeat steps 5a - 5c for the fields that you want to aggregate.

6. In the **Report Layout** area, specify the report layout information:

    -   In the **Orientation** area, click:
        -   **Portrait**: To render the report in the Portrait mode.
        -   **Landscape**: To render the report in the Landscape mode.
    -   In the **Max No Of Detail Lines** field, specify the number of detail lines you want for each row of the report.

        >[!NOTE]You can specify a maximum of 10 detail lines.

7. Click **Next** to preview the report.

For more information about obtaining help in the **Made2Manage Report Wizard (RPWIZ)** or navigating between the screens, refer to Getting help in Made2Manage Report Wizard.

​