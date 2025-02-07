---

title: "Add a calendar variation for a work center (M2M Advanced Scheduling only)"
draft: false
type: Article

---

If you need to make a temporary change to the work hours for a facility or work center, you can add a variation to the base calendar and then update the schedule. Your variation overrides the base calendar for a certain shift number and facility or work center within a specified date range. You can also specify the day of the week for which the variation applies.

With the exception of changing a work day to a non-work day, each variance is applied to one shift number. The variance applies to all occurrences of that shift number within the effective date range.

**To add a calendar variation for a work center**

1. Open the **Calendar Variation (PSCALVAR)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Calendar** > **Calendar Variation** .

    Or

    - Search for **PSCALVAR** or **Calendar Variation**  in the **Navigation box** and then select **Calendar Variation** .

        The **Calendar Variation (PSCALVAR)**  page appears.

2. On the **Toolbar**, click:

    - **New**: To add a totally new variation.

    - **Copy**: To base the new variation on the currently displayed variation.

3. Select the work center for which you want to add the variation:

    - To apply the variation to all the work centers, select the **All Work Centers** check box.

    - To apply the variation to a particular work center:

    > [!Note] You can only choose a work center associated with the selected facility.

    i. Clear the **All Work Centers** check box.

    ii. Click the **Work Center ID** lookup reference button.

    iii. Select the work center from the **Lookup For Work Center** window.

4. Specify appropriate values in any of the following fields to apply the variation:

> [!Note] Variation types are applied to single shifts, with the exception of non-work days. For non-work days, all shifts within the effective date range are changed to non-operative.

| Field                   | Description                                                                                                                                                                                        |
|-------------------------|------------------------------------------------------------------------------------------------|
| Shift Number            | Specify the shift number as 1, 2, or 3.                                                                                                                                                            |
| Type                    | From the list, select one of the following variations: **Capacity Change** – Override the number of simultaneous operations defined in the work center to improve delivery time or reduce lateness. **Downtime** – Use for machine maintenance, repairs or other occurrences of downtime. **Miscellaneous** – Change in capacity or normal schedule for reasons that don’t fall into one of the other categories. **Non-Work Day** – A day when no work is done, such as weekends and holidays. This applies to all shifts for the date range entered.                                                             |
|                         | **Operative** – Change a shift from inactive to active. **Overtime** – Hours scheduled in addition to the regular shift hours defined in the base calendar. **Shutdown** – Entire plant is shut down for physical inventory counting or other reasons.                                                                                                   |
| Description             | Type a description of the variation.                                                                                                                                                               |
| Effective Dates         | Specify the dates that the variation is in effect: **In** – The date the variation begins. **Out** – The date the variation ends. **Day of Week** – The day of the week where you want to add the variation.   Select the **Any** check box if the variation is not specific to a certain day.                                                                                                             |
| Override Shift Data For | **Schedule –** Select this check box to override the schedule.  **Operative/Not Operative** Select this check box to make the shift operative. Clear this check box if the shift should NOT be operative. **Work Center Capacity** – Select this check box to change the capacity for a work center associated with this shift. The Work Center Capacity section is displayed at the bottom of the window. In the **Number of Sim Resources** field, specify the number of simultaneous resources for the selected work center and shift.                                                                          |
| Shift Time              | In the **Start** and **End** fields, specify the shift's start or end times. You can view these fields if you select the **Schedule** check box.                                                                                                                                                       |
| Breaks                  | The **MaxBreaksPerShift** setting in the **[Runtime]** section of the **SynchServ.ini** file controls the number of breaks that display. By default, only one break is set for each shift. You can change the number of breaks for the shifts to a value not greater than **3** by modifying the **MaxBreaksPerShift** setting.  Select the **Break \<n>** (where **n** corresponds to the break number) check box for each break to include in a shift.  In the **Start** and **End** fields, specify the start and end time for each break. You can view these fields if you select the **Schedule** check box. |
|

5. On the **Toolbar**, click **Save** to save the variation changes.

|

​