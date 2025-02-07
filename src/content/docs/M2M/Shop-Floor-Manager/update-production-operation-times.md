---
title: "Update Production Operation Times"
draft: false
type: Article 
---

The **Production Analyzer** feature provides options to:

-   Change your standard production operation times based on the historical averages of reported times for both completed and closed job orders.
-   Compare the standard operation times against the historical averages with calculated variances using the filtering option within Shop Floor Manager. Refer to the topic [Filtering the information in a window](filtering-the-information-in-a-window.md) to learn more about how to set filters in **Production Analyzer** window.
-   Perform a mass update to change multiple standard time to average time.
-   Drill down to view supporting information, on a part basis, for the average times. Refer to the topic [Recalculate operation time averages by part](recalculate-operation-time-averages-by-part.md) for more information.

Use **Production Analyzer** to change production operation times for specific job operations or change production times for all operations in your company.

To update Production Operation Times

1.  Open the **Supervisor Console (SFMS)** page.

    Select Production Management > Production Transactions > Shop Floor > Supervisor Console.

    *Or*

      Search for **SFMS** or **Supervisor Console** in the **Navigation box** and then select **Supervisor Console** .

    The **Supervisor Console (SFMS)** page appears.

2.  Click **Production Analyzer** tab.

    The **Production Analyzer** displays a list of all the job orders, and information about the job for the last six months.

3.  Click **Earliest JO Date from** radio and input the data in **Earlier JO Date**. The Job orders from a specified date displays.
    >[!Note]
    >Information displays for the last six months from the date you enter.
    
    Or, click **Show All** radio to display all the Job Orders.
    >[!Note]
    >It may take several minutes for the information to display.
    
    

4.  Select the jobs for which you want to update the standard routing operation time:

    - To update operation times for one job order, or multiple non-sequential jobs, click **Select** check box for every job you want to update the production time.

    - To update operation times for all jobs, click **Select** check box.

    - To unselect all jobs for which you want to update production operation times, unselect **Select** check box.

    >[!Note]
    >A message displays to verify your request. Click **Yes** to proceed Or click **No** to cancel the action.

5.  On the child toolbar, click **Update Routings**.

    A message, *Preparing to post Standard Time with Update Time for all selected Part Numbers. Proceed?* displays.

6.  Click **Yes** to proceed. Or, click **No** to cancel.
7.  To manually change the production operation time for all job orders:
    1.  Enter a value in the **Update Time** box.

        Or, click the icon to display a Calculator and select a desired value.

    1.  On the child toolbar, click the **Mass Replace Update Time**. The changes are reflected in the **Update Time** field.