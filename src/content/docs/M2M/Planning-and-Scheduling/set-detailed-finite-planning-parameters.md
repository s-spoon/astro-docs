---

title: "Set detailed finite planning parameters"
draft: false
type: Article

---

You must set finite planning parameters for each company for which you use M2M Planning and Scheduling to plan production. Each company can have different parameter settings. Depending upon your environment's stability, you may have to adjust these parameters from time to time for the best schedules.

Use the **Planning** tab to enter detailed information about how Finite Planning should operate.

For M2M Planning and Scheduling to generate effective plans, set all parameters. If you use M2M Planning and Scheduling to schedule more than one company's production but want all companies to use the same parameters, set them for only the first company.

**To set detailed finite planning parameters**

1. Open the **Global Parameters (PSGLPARM)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Options** > **Global Parameters**.

    Or

    - Search for **PSGLPARM** or **Global Parameters** in the **Navigation box** and then select **Global Parameters**.

        The **Global Parameters (PSGLPARM)**  page appears.

2. To prepare to set detailed finite planning parameters, click the  **Planning** tab.

3. In the **Planning Period Calendar** area, type the number of daily, weekly, and monthly periods to use in the planning horizon. The **Interactive Planning** pages use these specific buckets as planning calendar buckets. The result is shown as the total number of days.

4. From the **Forecast Period Calendar** list, select the forecast period.

5. In the **Supported Demands** area, select the appropriate check boxes:

    - Select the **Sales Order** check box to include sales order demands.

    - Select the **Forecast** check box to include forecast demands.

    - Select the **Safety Stock** check box to include safety stock.

6. In the **Unneeded Jobs** area, specify the action to be taken for unwanted jobs:

    - Select **Delete** to delete the unwanted jobs.

    - Select **Cancel** to cancel the unwanted jobs.

7. On the **Toolbar**, click **Save** to save the changes made.

​