---

title: "Buffer Board Details (BMGBUFDT) window"
draft: false
type: Article

---

The**Buffer Board Details (BMGBUFDT)** page lists two groups of job operations:

- Job operations already received at the buffer, but not yet completed at the buffered work center.

> [!Note] The Buffer Penetration zone for this group is calculated based on the actual arrival time at the buffer as compared with the fixed buffer target schedule. A job operation is considered received (arrived) at the buffer when the previous job operation is completed. However, when the previous job operation has a negative move time, a partial completion on the previous operation would also be considered as receipt at the buffer.   
An INI setting will also allow for the inclusion of Late and Zone1 operations already completed on the buffered work center.

- Job operations that are not yet received at the buffer.

> [!Note]   The content and scope of this group depends on the selected method for Buffer Penetration calculation as defined in the **Customize Zone Parameters (BMGZNPRM)** window. 

\- If the Buffer Penetration calculation is based on the Actual Arrival, it lists all the job operations that should have arrived (penetrated the buffer), but have not arrive yet. The Buffer Penetration Zone is calculated based on the Last Refresh Time as compared with the target buffer schedule as set at job order release. 

\- If the Buffer Penetration calculation is based on the Schedules Arrival, it lists all the job operations of Released jobs that have not yet arrived at the buffer. The Buffer Penetr
ation zone is calculated in this case based on the projected scheduled arrival time at the buffer, as compared with the target Buffer schedule as set at job order release. This method allows for an extended visibility of operations that are expected to arrive late, which allows for early warning and implementation of pre-emptive corrective action.

The **Buffer Board Details (BMGBUFDT)** window lists the following details.

| Field        | Description                                                                                                                           |
|--------------|-------------------------------------------------------------------------------------|
| Job No       | Job number                                                                                                                            |
| Op No        | Operational number in the sequence.                                                                                                   |
| Part No      | Part number in the job.                                                                                                               |
| Rev          | Revision number in the job.                                                                                                           |
| Arrival Time | The actual arrival time of the job at the buffered work center                                                                                                                          |
| Buffer Start | Buffer start is calculated by offsetting the Buffer Hours from the Buffer End.  Click **Reset Buffers** to manually reset the fixed buffer defined by the Buffer Start and Buffer End. This can be used to reset the buffers of all the released jobs which have not yet arrived at the buffered work center.                                 |
| Buffer End   | Target Schedule Start of the operation on the Drum. The Buffer End is set at the time the job is released                                                                                                                                 |
| Current WC   | Current Work Center ID in which the operation is being processed. In case the current work center is the work center in focus (which is displayed in Pane 1); it means that the operation already arrived. In this case the column “Current WC” background color is changed to off white, to emphasize this fact                              |
| Time to Go   | Remaining time to go, in hours                                                                                                        |
| Reasons      | Counts the number of late reasons entered by the user for this job operation.  To add new a reason or to view existing ones, open the **Reason for Lateness** window. You can add a reason for lateness only when a job is in the “Late” or “Red” zones. A reason for earliness can be entered when the operation is in the “Too Early” zone. |
| Buffer Zone  | The buffer zone is calculated using the Buffer Start/End, as well as the **Drum Zone %** data and the **Buffer Penetration** method defined in the **Customize Zone Parameters (BMGZNPRM)** window                                                                                                                                            |
|