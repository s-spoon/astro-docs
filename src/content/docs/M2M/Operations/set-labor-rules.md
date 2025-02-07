---
title: "Set labor rules"
draft: false
type: Article
---

You can set the standards for recording labor for your company.


## To set labor rules

1. Open the **Production (CSPROD)** page.

    1. Select **Utilities** > **Company Setup** > **Module Setup** > **Production**.

    Or

    2. Search for **CSPROD** or **Production** in the **Navigation box** and then select **Production**.

    The **Production (CSPROD)** page appears.

2. Click the **Accounts/Labor** tab.

3. Set labor time information:

    1. In the **Time Format** dropdown, select the time format in which to operate.

    2. In the **In** dropdown, select the time measurement.

    3. In the **Enter Daily Labor By** dropdown, select how to measure labor.

    4. In the **Day Week Begins** dropdown, select the first day of the production week.

4. Set overtime information:

    1. In the **Overtime Calculated Based Upon** box, specify the number of hours per day or week on which to base overtime.

    2. In the **Hours Per** dropdown, select **Day** or **Week** to indicate if overtime is to be calculated in hours per week or hours per day.

    3. To select the earnings code to use as the default for regular labor that employees perform:

        1. Click the **Default Regular Earnings Code** lookup reference.

            The **Lookup For Default Regular Earnings Code** window appears.

        2. Select the required row and click **Select**. Or, double-click the required row to select the earnings code.

    4. To select the earnings code to use as the default for overtime labor that employees perform:

        1. Click the **Default Overtime Earnings Code** lookup reference.

        The **Lookup For Default Overtime Earnings Code** window appears.

        2. Select the required row and click **Select**. Or, double-click the required row to select the earnings code to use.

5. Set miscellaneous information:

    1. To prevent excess quantity completed in a job from being posted to a job order, select the **Don't Allow the Quantity Posted As Complete In Daily Labor to Exceed the Quantity to Go On the Operation** check box.

    2. The options **Enable Shop Floor Manager (SFM)** and **Enable Bar Code Posting (BCP)** are available as check boxes on the **Production Setup** page for users to decide whether to start using **Shop Floor Manager** and **Enable Bar Codes** printing on documents.

        1. In the **Labour** area,select the **Enable Shop Floor Manager** check box, to enable the modules related to **Shop Floor Manager**.

            >[!NOTE]
            >If you select the **Enable Shop Floor Manager (SFM)** check box, the **Enable Bar Code Posting (BCP)** check box will also get selected, and a warning message, *Enabling SFM module, BCP module also gets enabled due to dependency*. appears on top of the **Toolbar**.

        2. In the Labor area,select the **Enable Bar Code Posting** check box , to enable the modules related to **Bar Code Posting**.

    3. If you do not use a bar code system to record your labor and if you do not post labor manually:

        1. Select the **Selective Labor Backflushing** check box to backflush labor only for selected routing operations.

            Selecting this check box enables the **Backflush Labor** check box in the **Work Centers (WORK)** and the Detailed Routing windows so that labor can be backflushed by individual operation steps.

        2. In the **Labor Backflush At** dropdown, select when to backflush labor for a job.

        3. In the **Quantity** dropdown, select the quantity to backflush.

        4. Select the **Split Overhead For Parallel Labor** check box if you want to split the actual costs of labor by the time of each parallel entry, instead of applying the full overhead amount.

        5. Select the **Include Quantity Scrapped** check box to include the scrap quantity in the backflush quantity.

6. On the **Toolbar**, click **Save**. The changes are saved.

​