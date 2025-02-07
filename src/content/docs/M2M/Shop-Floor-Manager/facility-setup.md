---
title: "Facility Setup"
draft: false
type: Article 
---

Use the **Facility Setup** tab on the **Setup** (**SFMSETUP**) page to apply settings to each facility. If there are multiple facilities, each facility can have different settings.

If you are using the **Work Center Console** to record labor and material, you should install the Made2Manage bar code posting program, and have it running, before you begin using Shop Floor Manager.

To set up Facility

1.  Open the **Setup (SFMSETUP)** page.

    Select **Production Management** > **Production Transactions** > **Shop Floor** > **Setup**.

    *Or*
    
    *Search for* **SFMSETUP** *or* **Setup** *in the* **Navigation box** *and then select* **Setup**.

    The **Setup (SFMSETUP)** page appears.

2.  Click the **Facility Setup** tab.
3.  In the **Facility** list, select the required facility.
4.  The following table describes the fields on the **Setup** page. Apply the settings required.

 **Field** | **Description** 
 --- | ---                                                   
| JO Clock On Required | Select this checkbox if you require employees to enter a Job Order number when they clock on. If you select this checkbox, you must also complete the **Job Order Number** and **Operation Number** fields. If you select **JO Clock On Required** checkbox: <ul><li> You must clock on a job before you can clock off that job. <li> If there is a gap of more than 60 seconds between clocking off one job and clocking on another, the time is posted to the default job operation. This means that the actual JO clock on time will be the start time for the job on the Made2Manage **LABR** page. <li> We strongly recommend that you have  **JO Clock On Required** if you use teams. If team members clock on and off the team without clocking on a job, they will have no time posted until they (or the next team they are clocked on) clock off a JO. When you clock on a team, and the team clocks on and off jobs, you will have accurate postings of the jobs you worked while on that team. <br>If you do NOT select the **JO Clock On Required** check box: <li>JO clock on is not enforced by the system except for parallel jobs.<li> Start time for a job on the Made2Manage **LABR** page is based on the end time of the last clock off, so actual JO clock on time may or may not be reflected. <li> There is no auto posting for gaps in time between jobs. |
 Job Order Number| Click the **Job Order Number** Lookup Reference, and select the internal job number you want to default when the employee is not clocked on another job.                                                         
  Operation Number | Type the operation number you want to default when using the internal job number.                                                     
| Apply Overhead Charges| Select this checkbox so that the **Internal Use jobs** is posted with the lead flagged as such, so overhead charges are calculated for all the employees who have clocked on and worked on this job.                                                          
| Allow Auto Clock-out For Prior Day| Select this checkbox if you want to allow automatic clock-outs. If you select this checkbox, you must also complete the **Hours Minimum** field. If this box is not selected, you will have to manually clock off a prior day before you are allowed to clock on for the new day.                                                          
| Hours Minimum Between Last Clock-in And Next Clock-in To Indicate Missed Clock- out From Prior Day | If you select the **Allow Auto Clock-out For Prior Day** checkbox, you must enter the minimum number of hours the system should use to determine when to clock-out an employee automatically. This value defaults to 16. For example, if you leave the default value of 16, and an employee clocks in at 12:00 noon, and then tries to clock on again at 4:01 a.m., the system will automatically clock him out. The system will use the same start and end times to force an "on hold" error situation for labor. 
Allow Sorting On Grids | Select this checkbox if you want to be able to sort grids. When you select this option, you can [sort the columns](sorting-and-grouping-information.md) in a grid by double-clicking on the column heading.                                                      
| Do Not Allow Editing JO And Operation Numbers| Select this checkbox to stop operators from reporting against job orders that have not been assigned to his / her work center.        
| Auto Move To Inventory At Last Operation | Select this checkbox if you want to automatically move the quantity complete to the inventory when the last operation of the Job Order is complete (for non-lot controlled parts only), and the quantity complete is reported. |
| Allow Entering Completed And Scrap Quantities For Internal JOs For Internal Use | Leave this checkbox blank to prevent erroneous entries, which will change the job orders status to "completed".                                                  
| Overhead Charged To All Team Members | Select this checkbox if you want to treat all the team members as team leads for overhead allocation.                                                   
| Allow Document Attachment Link| Select this checkbox to add **JO Doc Attachment** option to the current **Related** menu in the **Supervisor Console** (**SFMS**) and the **Work Center Console** (**SFMWC**) pages. 
| Show JO CAD Files| Select this checkbox to launch the existing Document Attachments - Job Orders (WEBLINK) window for the selected job order. This option is available only if you select the **Allow Document Attachment Link** checkbox. 
| Include Unposted Parallel And Serial Transaction| Select this checkbox to include unposted parallel and serial transactions for labor purpose.                                                      
| Location of Bar Code Posting Executable | This displays only if you select the **Include Unposted Parallel And Serial Transaction** checkbox. Type the path to your bar code posting executable file.                                                                  
5.  Apply default settings for labor entry in the **Work Center Console Default Options** section.

| **Field** | **Description**   
|---|---                                                      
| Default To 'Lead'| Select this checkbox to have the **Lead** button as the default setting for every labor entry added in the **Work Center Console** page. If cleared, **Not Lead** displays in the **Work Center Console** page.                                                         
| Lock Lead/ Non Lead| Select this checkbox to lock in the default setting for labor to the team lead to lock the button to either **Not Lead** or **Lead** based on having the **Default To 'Lead'** checkbox selected or cleared. If you select this checkbox it prevents the user from changing the setting during labor entry in the **Work Center Console** page. |
| Default To 'Setup'| Select this checkbox to have **Setup** as the default setting for every labor entry added in the **Work Center Console** page. If cleared, the default **Not Setup** displays in the **Wok Center Console** page.                                                         
| Lock Setup/Not Setup   | Select this checkbox to lock the button to either **Not Setup** or **Setup** based on whether the **Default To 'Setup'** checkbox is selected. If you select this checkbox, it prevents the user from changing the setting during labor entry in the **Work Center Console** page.                                                         
| Default To 'Rework' | Select this checkbox to have **Rework** as the default setting for every labor added in the **Work Center Console** page. If cleared, the default **Not Rework** displays in the **Work Center Console** page.                                                         
| Lock Rework/Not Rework | Select this checkbox to lock the button to either **Not Rework** or **Rework** based on whether the **Default To 'Rework'** checkbox is selected. If you select this checkbox, it prevents the user from changing the setting during labor entry in the **Work Center Console** page.                                                         

6.  On the **Toolbar**, click **Save** to save the entries, else click **Cancel**.
7.  Click the [Company Setup](company-setup.md) tab to select the company settings setup for each of the facilities in the Shop Floor Manager.