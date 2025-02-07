---

title: "Schedule a work center by characteristic"
draft: false
type: Article

---

Sequencing operations by characteristics allows you to more closely control resources within a work center by allowing you to group operations with similar characteristics. Grouping operations with similar characteristics results in a schedule designed to lessen your changeover time and consequently increase throughput for a work center. You can sequence by characteristic at the work center level or, for partitioned resources, you can sequence each of the individual machines in a work center.

When you sequence at the work center level, Planning and Scheduling considers the work center a single resource when creating a schedule. When you create a schedule using work center level sequencing, operations are scheduled at the earliest possible date based on the sequence of characteristics you define. For example, you can group operations using red paint so that all operations on a machine using red paint are scheduled consecutively.

You can also sequence at the resource level for work centers defined as partitioned resources. Like sequencing at the work center level, operations with similar characteristics can be grouped together. However, sequencing at the resource level lets you group by characteristic for each individual resource in a work center. When you create a schedule using resource level sequencing, Planning and Scheduling considers each resource in a work center individually and groups operations for each resource based on the hierarchy of characteristics you define. For example, say you have a Paint work center consisting of two paint booths. Using resource level sequencing, you can create a schedule in Planning and Scheduling where all the operations using yellow paint in booth one are grouped together and all the operations using red paint in booth two are grouped together.

**To schedule a work center by characteristic Gantt**

1. Open the **Single Resource  (PSSINGLG)** page.

    - Select **Planning and Scheduling** > **P&S Production** > **Scheduling**  > **Single Resource Gantt**.

    Or

    - Search for **PSSINGLG** or **Single Resource Gantt** in the **Navigation box** and then select **Single Resource Gantt**.

        The **Single Resource Gantt (PSSINGLG)**  page appears.

2. In the **Resource Selection (PSSGLGNT)** window, select the resource, and then click **Select** to open the Gantt chart.

3. On the toolbar of the **Single Resource Gantt** window, click **Set Sequence by Characteristics**.

    The **Sequence by Characteristic** window appears.

4. Complete the following fields in this window:

    | **Field**                         | **Description**                                                                                        |               |
    |-----------------------------------|------------|---------------|
    | Resource Level                    | Select the level to use for sequencing.  To sequence at the work center level, click **Work Center**.  To sequence at the resource level (if your resource is portioned), click **Sim Resource**.  |               |
    | Horizon (Days)                    | Type the number of days into the schedule you want to sequence the resource.   The horizon should not exceed the time fence of your full schedule.                                                 |               |
    | Unselected Characteristic grid    | Select the Characteristics you want to use to sequence the work center.  **To…**                                                                                                                   | **…do this**  |
    | Select individual characteristics | Select the check box in the **Select** column.                                                                                                                                                     |               |
    | Select all characteristics        | Select the check box in the **Select** column header.                                                                                                                                              |               |

    Selected Characteristic grid

    Characteristics selected for sequencing the work center display in this column. Characteristics at the top of the list have priority over those at the bottom.

    | 
    **To…**                                             | **…do this**                                   |
    |-----------------------------------------------------|------------------------------------------------|
    | Unselect a characteristic                           | Select the check box in the **Select** column. |
    | Unselect all characteristics                        | Clear the check box in the **Select** column.  |
    | Move a characteristic to the top of the list        | Select the check box in the **Select** column. |
    | Move a characteristic up one position in the list   | Select the check box in the **Select** column. |
    | Move a characteristic down one position in the list | Select the check box in the **Select** column. |
    | Move a characteristic to the bottom of the list     | Select the check box in the **Select** column. |
    |

5. Click **Save** to save your selections.

6. Click **Execute** to sequence the resource by characteristic.