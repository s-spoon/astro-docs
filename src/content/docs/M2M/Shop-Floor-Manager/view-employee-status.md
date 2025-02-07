---
title: "View the status of Employees"
draft: false
type: Article
---

Use the **Employee Status** window to see an overview of the employees clocked in for the day, the jobs they are working on, and the employees are on break.

## To view the status of Employees

1.  Open the **Supervisor Console (SFMS)** page.

    Select Production Management > Production Transactions > Shop Floor > Supervisor Console.

    *Or*

     Search for **SFMS** or **Supervisor Console** in the **Navigation box** and then select **Supervisor Console**.

    The **Supervisor Console (SFMS)** page appears.

2.  Click **Employee Status** tab.

    The **Employee Status** tab provides information about the employees that clocked in for the day, the jobs they are working on, or if they are on a break.

     If an employee is clocked on a job, the **Employee Number, Employee Name, Work Center, Job Number, Company, Operation Number, Date, Type, Lead** and **Part Number** which is all specific to the clocked in employee is displayed.

3.  The following letters are displayed to identify the labor type.

| **Type** | **Description**                                                                                                                                                                                                                               |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D        | **Direct labor** - Indicates that the employee clocked on a job is using a **Regular** labor type. An employee can only work on one regular job at a time, so the employee details appear in the Employee Status list once.                 |
| P        | **Parallel labor** - Indicates that the employee clocked on a job is using a **Parallel** labor type. An employee can work on multiple parallel jobs at a time, so the employee details appear in the Employee Status more than once.       |
| S        | **Serial labor** - Indicates that the employee clocked on a job is using a **Serial** labor type. An employee can work on multiple serial jobs at a time, so the employee details appear in the Employee Status more than once.               |
| A        | **Additional Operations** - Indicates that the employee clocked on a job is using a **Adtl Op** labor type. An employee can only work on one additional operation at a time, so the employee details appear in the Employee Status list once. |
| B        | **Break** - Indicates that an employee has clocked on a break.                                                                                                                                                                                                                                                                                                                                   |
| G        | **Gap** - Indicates time clocked on for the day where the work is not directly related to a job order, or time spent on internal use job orders. It is displayed only if the **Job Clock On Required** field is checked in the **Facility Setup** tab of the **Setup** window. The **Default Internal for Internal Use** job number entered will display in the **Job Number** field. |


>[!Note]
>-   Rows that appear without an **Employee Number** or **Employee Name** indicate that a team is clocked on. The name of the team displays in the **Team** field, and the type of labor the team is performing displays in the **Type** field.<LI>  If an employee is clocked on a team, the **Type** field will be blank. The name of the team they are clocked on to display in the **Team** field. The word **Lead** displays in the **Lead** field if the employee is clocked on the team as the lead.

4.  Click the ellipsis under the **Action** column of a selected grid. 
<br>The Grid Action options display.