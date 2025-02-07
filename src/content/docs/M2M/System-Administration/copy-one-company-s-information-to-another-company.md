---
title: "Copy one company's information to another company (R1-NA)"
draft: false
type: Article
---

To help close a period, company accountants typically limit the kinds of transactions that departments can enter. To minimize this problem and allow work to continue, you can copy the live company's data to a new, temporary company where you can perform period-end analysis.

You can also create a copy of your company to practice using Made2Manage with realistic data. Or if you use Made2Manage to track information for more than one company, you can copy shared information among the companies.

Copy company information when system usage is low, such as before or after normal working hours.

To copy company information

1. Lock users out of Made2Manage.

    See the **Related Information**.

2. Log in to the source company:

    - In SQL Enterprise Manager, connect to the server.

    - Expand the database listing.

    - Right-click on the source database (that is, the database to be copied from).

    - From the pop-up menu, select **All Tasks**, **Export Data**.

        The **DTS Export Wizard** starts.

    - Click the **Next**.

3. On the **select a Data Source** page of the wizard, select the source database in the **Database** field and then click the **Next** .

4. On the **select a Destination** page of the wizard, select the **database to copy to in the Database** box and then click the **Next** .

5. On the **Specify Table Copy or Query** page of the wizard, select "**Copy table(s) from the source database**" and then click the **Next**.

6. select the table(s) you want to copy and for each one, change some settings:

    - On the **Select Source Tables** page of the wizard, check each table you want to copy.

        SQL Server will automatically fill in the name of the **Destination Table** for you.

        To copy all tables, click the **Select All**. To understand the database and its tables, see the **Related Information**.

         If you decide not to copy all tables, information may be missing from some screens.

    - For one of the tables you checked, click the "**…**" in the **Transform** box.

        The **Column Mappings and Transformations** page of the wizard appears.

    - Scroll to the bottom of the **Mappings** area.

    - For the destinations of "**timestamp_column**" and "**identity_column**", select "**\<ignore\>**" in their **Source** box.

    - Clear "**Enable identity insert**" check box.

    - Click the **OK**.

        The **Select Source Tables** page of the wizard is reappears.

    - Repeat the above steps to change the settings for each table you checked.

    - Click the **Next**.

        The **Save, Schedule and Replicate Package** page of the wizard appears.

7. Check either "**Run immediately**", "**Schedule DTS package for later execution**", or "**Save DTS Package**" (to run it manually later) and then click the **Next**.

The package may be saved in SQL Server, in a SQL repository, or to a standard operating system file. See **Microsoft's SQL Server documentation** for more information.

If applicable, SQL will prompt you for any additional information needed to save the package.

The **Completing the DTS Wizard** page of the wizard is displayed.

8. Click the **Finish**.

If you chose "**Run immediately**", SQL Server will process the data and report on the status of the copy. It will also report how many rows were copied for each table you selected.

9. When the copy finishes, let users back into Made2Manage.

See the **Related Information**.

​