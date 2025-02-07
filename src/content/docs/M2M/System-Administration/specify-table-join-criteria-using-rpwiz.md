---
title: "Specify table join criteria using the Made2Manage Report Wizard (R1-NA)"
draft: false
type: Article
---

Use the **Made2Manage Report Wizard (RPWIZ)** to select the tables and specify the join criteria. This creates the report query, which you can view in the **Expression** area.

The tables and views are fetched from the M2MDataXX database on the SQL server and are displayed in different tabs. The description is fetched from the **UTTABLE** table in the M2MSystem database.

### To specify the table join criteria using the Made2Manage Report Wizard

1. Select the tables or views:

    1.  Click the **Tables** tab / the **Views** tab.
    2.  Select the required table / view.

        >[!TIP]Type the table / view name in the blank row of the **Name** column to search for that table.

    3.  Double-click it or drag and drop to the **Selected Tables** area.
    4.  In the **Alias** column, specify an alias, if required.
    5.  In the **Selected Tables** area, select the **Is Primary** check box if the table / view is the Left Table in the join.
    6.  Repeat Steps 1a - 1e for all the required tables / views.

        >[!TIP]   
        >Click the **Add** button on the upper-right corner of the **Selected Tables** area to add another table / view. The table / view selected in the left pane is added.  
    Click the **Delete** button on the upper-right corner of the **Selected Tables** area to delete one or more of the selected tables / views.

        >[!NOTE]If a table is added more than once to the **Selected Tables** area, an alias is automatically assigned to the instance of the table. You can change this alias if required.

2. In the **Table Joins** area, specify the join parameters:

    1.  From the **Right Table** list, select the table that must appear on the right-side of the join.
    2.  From the **Join** list, select the type of join.

        >[!NOTE]You can view the SQL expression in the **SQL Query** area.

3. In the **Table Join Criteria** area, specify the join conditions:

    **Method 1**

    1.  Click the **Add** button on the upper-right corner of the **Expression** area.
    2. From the list on the left-side of the **Equals** text in the bottom of the **Expression** area, select the appropriate field.
    3. From the list on the right-side of the **Equals** text in the bottom of the **Expression** area, select the appropriate field.

    **Method 2**

    1.  Click the **Add** button on the upper-right corner of the **Expression** area.
    2.  Double-click in the **Expression** area to open the **Expression Builder**.

        >[!NOTE]You can use the logical operators, arithmetic operators, and relational operators in the **Expression Builder**.

    3.  Type the expression.

4. Click **Next** to select the columns to be displayed.

For more information about obtaining help in the **Made2Manage Report Wizard (RPWIZ)** or navigating between the screens, refer to Getting help in Made2Manage Report Wizard.

​