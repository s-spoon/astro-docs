---

title: "Change M2M Planning and Scheduling configuration parameters"
draft: false
type: Article

---

In addition to global parameters and schedule options, there are several other parameters that can affect M2M Planning and Scheduling's operations. Make these configuration changes in your **SynchServ.ini** file. When you make configuration changes, you must restart the M2M Planning and Scheduling server for the changes to take effect.

Since many of the entries are self-explanatory, they are not all described below. The following information shows the default value where applicable.

Click on the following links to jump to a description of a particular ini setting.

| Section                        | INI Setting                                                                                                                                                                                                | Default Value     |
|--------------------------------|------------------------------------------------------|-------------------|
| [[Startup]](#1853281038)       | Maximized                                                                                                                                                                                    | Yes               |
| [[Runtime]](#1448124987)       | TextEditor Facility MaxBreaksPerShift                                                                                                                          | NotePad.exe   3   |
| [[CustomReports]](#75932227)   | ReportPath                                                                                                                                                                                  |                   |
| [[Plan]](#-1335368412)         | ModifyFirmedJobDueDates ModifyFirmedPPODueDates ModifyFirmedISODueDates AutomaticFirmingUponAccept ImmediatePersist4Purchasing | Yes Yes Yes No No |
| [[Schedule]](#892420693)       | OnHoldOffsetIncrement                                                                                                                                                                       | 0                 |

[Startup] section

| Maximized=Yes                 | **Yes** | Opens the Planning and Scheduling Client window to the maximum size possible. |
|-------------------------------|---------|-------------------------------------------------------------------------------|
| (Return to top) | **No**  | Opens the Planning and Scheduling Client window to a medium size.             |

[Runtime] section

| TextEditor=NotePad.exe        | The program that is used to display audit reports.                                                                                                                                                                                                                                              |
|-------------------------------|-----------------------------------------------------------------------------------------|
| Facility=XXX                  | The specified facility is used as the default facility in the M2M Planning and Scheduling Client.  You can bypass the **Select Facility** window when you launch the M2M Planning and Scheduling Client by entering the facility name in the Synch.ini file on your client workstation machine. |
| MaxBreaksPerShift=3           | Defines the maximum number of breaks in a single shift.                                                                                   |
| (Return to top) |                                                                                                                                           |

[CustomReports] section

| ReportPath=X:\\XXX\\XXX       | The path to the folder containing the customized reports.   If this path is defined, Advanced Scheduling will use the customized report files instead of the standard report files. |
|-------------------------------|---------------------------------------------------------------------------------|
| (Return to top) |                                                                                                                                                                                     |

[Plan] section

| ModifyFirmedJobDueDates=Yes    | **Yes** | Planning can change the Due Date of a Firmed and Released job.                                                                                                                                                          |
|--------------------------------|---------|-------------------------------------------------------------------|
|                                | **No**  | Planning cannot change the Due Date of a Firmed and Released job.                                                                                                                                                       |
| ModifyFirmedPPODueDates=Yes    | **Yes** | Planning can change the Due Date of a Firmed PPO.                                                                                                                                                                       |
|                                | **No**  | Planning cannot change the Due Date of a Firmed PPO.                                                                                                                                                                    |
| ModifyFirmedISODueDates=Yes    | **Yes** | Planning can change the Due Date of a Firmed ISO.                                                                                                                                                                       |
|                                | **No**  | Planning cannot change the Due Date of a Firmed ISO.                                                                                                                                                                    |
| AutomaticFirmingUponAccept=No  | **Yes** | A supply order that is Accepted on the Planning grid is automatically set as Firmed.                                                                                                                                    |
|                                | **No**  | A supply order that is Accepted on the Planning grid is not automatically set as Firmed.                                                                                                                                |
| ImmediatePersist4Purchasing=No | **Yes** | Supply updates for purchased parts are persisted immediately without waiting for the Commit.  As the purchased parts do not have any pending changes, they are not shown in the **Interactive Planning Grid** window.   |
|                                | **No**  | Supply updates for purchased parts are persisted only after the Commit.                                                                                                                                                 |
|   |         |                                                                                                                                                                                                                         |

[Schedule] section

| OnHoldOffsetIncrement=N  | The time fence in which a job in **On Hold** status cannot be scheduled.  This time fence is defined as: Current Date + Release Offset + OnHoldOffsetIncrement On Hold jobs with a due date that falls inside this time fence are not included in the schedule.|
|

                                                                                                                                                                                                               

​