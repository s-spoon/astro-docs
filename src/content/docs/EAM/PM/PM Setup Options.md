---  

title: "PM Setup OptionsCreate New Item"  
draft: false 
type: Article

---

This section explains how the setup options allows to mange the PM Schedules.



The **Use Rollup Feature** allows the generation of major, less-frequent PMs
to suppress the generation of minor, less-frequent PMs. Suppose that you have
an annual, semi-annual, quarterly, and monthly PM defined for a given piece of
equipment. The Next Execution Date for all four PM schedules is February 1,
2020. Depending on the number of lead days, the system will generate four PM
work orders on or around February 1. If you prefer that the maintenance
workers have only one work order to deal with, you can use the rollup feature.
With this feature in force, only the annual PM would generate and the Next
Execution Date on all four PM schedules would move forward.

To use this feature, you will need to revise the planning information
(resources, materials, and instructions) on Master Plans that have already
been created.

With **Use Rollup Feature** selected on the PM Setup Options window, you will
see a field on the **Set PM Schedule** window titled **Ignore Rollup Flag**.
This field allows you to override the plant-level setup flag for specific PM
schedules.

The **Allow PM Schedules by Operational Days** feature if checked, a time-
based PM Schedule can be defined for either Calendar Days or Operational Days.
The flag **Use Operational Days** will be shown in Set PM Schedule screen.

**Status** – This feature is available in the **PM options** under the **PM
Schedule Mass Update**.

When the status of a parent location is changed from a non-operational status
to an operational status, the Next Execution Date is automatically updated for
all PM Schedules defined for Assets installed in the child Locations, as
follows:

  * If the original Location Status is not flagged as 'Suspend Operational Days', then Next Execution Date is recalculated by simply adding the Frequency to the current date.
  * If the original Location Status is flagged as 'Suspend Operational Days' on the Location Status Codes window, then Next Execution Date is recalculated taking into account the operating days tallied against the previously-generated PM.

