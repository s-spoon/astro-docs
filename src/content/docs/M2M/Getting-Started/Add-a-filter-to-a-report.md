---

title: "Using Advanced Filter for a report"
draft: false
type: Article

---

If the choices in a report do not limit the report's output to suit you, many reports let you create a filter to do the job. For example, you could add a filter to show only information for customers in Indiana. Use the **Advanced Filter** feature to customize or expand your filter criteria.

[What's a filter?]

**To add a filter to a report**:

1. Open the report to which you want to add a filter.

2. On the **Toolbar**, click **More Actions**.

3. Select **More Actions** > **Actions** > **Advanced Filter**.

    The **Expression Builder** window appears.

4. In the field under the **Enter Advanced Filter** section, type the expression.  
Or build the expression for each element:

    a. From the **Tables** category, select the table from which you would want to get the information.

    The available filters in the selected table are displayed in the category adjacent to the **Tables** category. Point to a filter to see its corresponding description and its syntax in the **Description** section.

    b. Double-click a filter to add the filter data in the **Enter Advanced Filter** section.

    c. You can use the required operators in the **Operators** section, and the SQL functions in the **SQL Functions** category to derive the required advanced filter.

    The **Operators** section includes the logical, arithmetic, and comparison operators and the **SQL Functions** category includes the math, date and time, and string functions.

5. Click **OK** to add the filter, else click **Cancel**.

    > [!Note]

    \- Click **Verify** to check the validity of the filter expression that you build.

    \- Click **Clear Filter** to reenter a new filter expression.  

    \- The **Advanced Filter** feature is only for users who understand the underlying table structure and stored procedure that the report uses. If incorrect filter is applied, it may not return any data.


​