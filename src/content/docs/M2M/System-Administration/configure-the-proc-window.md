---
title: "Configure M2M Processor Service Configuration (PROC) page"
draft: false
type: Article
---

The **M2M Processor Service Configuration (PROC)** page lists the M2M Processor Service, which includes:

- Interval-based processes.

- Services-based processes that are enabled according to the activation code.

You can configure the execution of these services.

>[!NOTE] Ensure that the Processor Service has been started.

### To configure the M2M Processor Services

1. Open the **M2M Processor Service Configuration (PROC)** page.

    1. Select **Utilities** > **Maintenance** > **M2M Processor Service Configuration**.

    Or

    2. Search for **PROC** in the **Navigation box** and then select **M2M Processor Service Configuration**.

        **M2M Processor Service Configuration (PROC)** page appears.

         The **Processor Services** section displays a grid that contains the different processes based on the data in the ProcessorServices.Config file.

2. In the grid, select the process.

3. In the **Running Option** area, select:

    - **Always**: To process the service even if no user has signed in.

        >[!NOTE]If this option is selected, the M2M Processor Service checks if a process session exists to execute the service. If no process session exists, then it checks if a signed-in session exists. If no signed-in session is available, then the M2M Processor Service creates a dummy session to process the service.

    - **Logged In Users**: To run the service for the signed-in user only. If the user signs off, the service is not processed further for that user.

4. In the **Running Mode** area, select:

    - **One Time**: To run the service only once on every day of the week selected at the time specified.

    - **Continuous**: To run the service continually at the specified intervals.

5. To specify the process's status, in the **Status** area, select:

    - **Enabled**: To enable the process.

    - **Disabled**: To disable the process.

6. In the **Day Of Week** section, select the appropriate check boxes, to specify the days when the process must run.

7. In the **Interval (Min.)** field, specify the process interval in seconds.

    >[!NOTE]The Processor Service calls the Core service to execute the process at these intervals. However, for checking the NotifierTM and for Events and Action services, if an interval has been specified in the **Notifier**TM tab of the **User** page, this interval is used. It is recommended that the interval specified in the **Notifier**TM tab of the **User** page is a multiple of the interval specified in the **Interval** field to ensure the execution of the process.

8. In the **When To Start** and **When To Stop** fields, configure the start and end time of the process:

    - Leave both the fields empty to ensure that the process runs continually.

    - Leave only the **When To Stop** field empty to stop the process at midnight.

    - Ensure that the time specified in the **When To Start** field is lesser than that in the **When To Stop** field, if you want the process to be executed on the same day.

    - Ensure that the time specified in the **When To Start** field is greater than that in the **When To Stop** field, if you want the process to be executed the next day.

9. In the **Companies** section, select the check boxes in the **Select** column to specify the companies for which the process must run.

    >[!NOTE]By default, all companies except those that are designated as archive companies are selected for execution.

10. On the **Toolbar**, click **Save** to save your changes.

    The ProcessorServices.Config file is updated and the M2M Processor Service is restarted.

​