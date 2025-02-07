---
title: "Release Job Orders"
draft: false
type: Article
---

The **Job Order Release** window allows to release jobs individually, or in mass, when you are ready to release the jobs to the production floor. After you release the job orders, you can post labor and issue material to the jobs.

Use the **What If** feature to view the jobs that would get the available material when you release them.

When you select the jobs for release, they will be prioritized. The feature shows both open and released jobs. You can see which jobs you want to release and their impact.

For more information on how Shop Floor Manager sets the Job Priority, refer [Understanding Job Priorities](understanding-job-priorities.md).

## To release Job Orders

1.  Open the **Supervisor Console (SFMS)** page.

    Select Production Management > Production Transactions > Shop Floor > Supervisor Console.

    *Or*

      *Search for* **SFMS** *or* **Supervisor Console** *in the* **Navigation box** *and then select* **Supervisor Console***.*

    The **Supervisor Console (SFMS)** page appears.

2.  Select **Job Order Release** tab.

    The **Job Order Release** tab displays a list of all open jobs, and information about the job.

    - If any of the jobs are late, the **Due Date** field is highlighted.

    - If any of the jobs have material shortage, the **Matl Status** field is highlighted.

3.  Select the jobs you want to release.

    - To release one or multiple non-sequential jobs, click the check box in the **Select** column adjacent to each job you want to release.

    - To select all jobs for release, click **Select** check box.

    - To unselect all jobs for release, unselect **Select** check box.

4.  Click **What If Job Order Release** on the child toolbar.

    The **What If Job Order Release** (**SFMWRELS**) window appears.

5.  Click **Generate What-If**.

    The message stating, *Generating a What-If can take several minutes. Proceed?* displays.

1.  Click **Yes** to proceed. Or, click **No** to cancel.
2.  When you finish reviewing the information, close the window.
3.  Select the documents you want to print for all selected jobs,

    - Select the **Print Floor Traveler** check box to print floor travelers for all selected jobs released.

    - Select the **Print Job Order Material** check box to print job order material for all selected jobs released.

    - Select the **Print Pick Lists** check box to print pick lists for all selec- ted jobs released.

    - Select the **Print JO CAD Files** check box to print JO CAD files in PDF format only for all selected released jobs.

    >[!IMPORTANT]
    >Specify the Universal Naming Convention (UNC) path instead of the mapped drive while printing CAD files.

1.  On child toolbar, click **Release** to release the selected jobs.

    The message, *Preparing to release all selected jobs. Proceed?* displays.

2.  Click **Yes** to continue. Or, click **No** to cancel.