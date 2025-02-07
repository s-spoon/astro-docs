---

title: "Shipping Buffer Board (BMGSBFBD)"
draft: false
type: Article

---

The **Shipping Buffer Board (BMGSBFBD)** page lists two groups of job orders:

- Job orders that have already arrived at the shipping buffer.

    > [!Note] These jobs are completed job orders that are not yet shipped (MTO) or not yet moved to inventory (MTS). The buffer zone for this group is calculated based on the actual arrival time at the buffer compared to the target buffer schedule as set at job order release.

- Job orders that have not yet arrived at the shipping buffer.

    > [!Note] These jobs are non-completed job orders. The content and scope of this group depends on the selected method for Buffer Penetration calculation as defined in the **Customize Zone Parameters (BMGZNPRM)** page.

    \- If the Buffer Penetration calculation is based on actual arrival, it lists all job orders that should have arrived (penetrated the buffer), but have not yet arrived. The Buffer Penetration Zone is calculated based on the Last Refresh Time as compared with the target Buffer schedule as set at job order release. 

    \- If the Buffer Penetration calculation is based on schedule arrival, it lists all the released job orders that have not yet arrived at the buffer. The Buffer Penetration zone is calculated in this case based on the projected scheduled arrival time at the buffer (job schedule completion) as compared with the target buffer schedule as set at job order release. This method allows for an extended visibility of jobs expected to arrive late (late to complete) and allows for early warning so you can implement pre-emptive corrective action.

This page has the following controls:

    | Field                | Description                                                                                                                                                                           |
    |----------------------|---------------------------------|
    | Facility             | A filter used to select the facility                                                                                                                                                  |
    | Global Buffer Days   | The global shipping buffer value Click **Reset Buffers** to reset the shipping buffer value to the value defined in the **Global Parameters** page.                                   |
    | Last Refresh Time    | The last date/time the page was refreshed Click **Refresh** to refresh the screen.                                                                                                    |
    | Show Parts           | A filter used to select the parts to display  Click **Make** to include make parts. Click **Stock** to include stock parts.                                                           |
    | Include              | A filter used to select the job orders to display  Click **Completed** to display completed job orders. Click **Not Completed** to display the job orders that are not yet completed. |
    | Shipping Buffer grid | Displays the following details: Job number Part number Part revision Completion time Buffer start Buffer end Current Work center ID Reason for lateness Buffer zone                   |
    |