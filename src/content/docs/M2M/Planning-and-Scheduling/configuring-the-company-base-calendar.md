---

title: "Configuring the company base calendar"
draft: false
type: Article

---

The basic calendar is defined at the company level for "ALL" facilities and Work Centers, and "Any" day of the week.

**To set up the Company Base Calendar**

1. Open the **Base Calendar (PSBASCAL)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Calendar** > **Base Calendar**.

    Or

    - Search for **PSBASCAL** or **Base Calendar** in the **Navigation box** and then select **Base Calendar**.

        The **Base Calendar (PSBASCAL)**  page appears.

2. Ensure that the following check boxes at the top of the window are selected:

- All Work Centers

- Any Day

3. There are three tabs at the bottom of the window: **Shift 1**, **Shift 2**, and **Shift 3**. The following table shows the value that defaults in each field for each shift:

    | Field            | Shift 1  | Shift 2  | Shift 3  |
    |------------------|----------|----------|----------|
    | Operative        |          |          |          |
    | Shift Start Time | 8:00 AM  | 4:00 PM  | 11:59 PM |
    | Shift End Time   | 4:00 PM  | 11:59 PM | 5:00 AM  |
    | Break            |          |          |          |
    | Break Time Start | 12:00 PM | 8:00 PM  | N/A      |
    | Break Time End   | 12:30 PM | 8:30 PM  | N/A      |
    |

4. The following table describes the fields on the **Shift** tabs.

    | Name                     | Description                                                                                                                                                  |
    |--------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
    | Override Parent Calendar | This option is not available on the base (parent) calendar.                                                                                    |
    | Operative                | Select the **Operative** check box to indicate that the shift is in operation. Clear the check box if you do not want to include the shift in scheduling. You must select this check box if you want to see a sub-contract operation. You should also make sure that the **Capacity Constraint** check box for the subcontract work center is not selected.                                                                                                                          |
    | Shift Time               | The **Start** and **End** time for each shift.                                                                                                                         |
    | Breaks Start and End     | The **MaxBreaksPerShift** setting in the **[Runtime]** section of the **SynchServ.ini** file controls the number of breaks that display. By default, only one break is set for each shift. You can change the number of breaks for the shifts to a value not greater than **3** by modifying the **MaxBreaksPerShift** setting. Select the check box for each break to include in a shift, and enter the **Start** and **End** time for each break. Advanced Scheduling automatically removes scheduled breaks from available capacity when determining the duration of an operation. This ensures that shop floor capacity is not overstated, improving the accuracy of the schedule. |
    |

5. On the **Toolbar**, click **Save** to save the company base calendar settings.

    ​