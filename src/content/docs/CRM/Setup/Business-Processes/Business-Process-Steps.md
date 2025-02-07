---
title: "Business Process Steps"
draft: false
type: Article
---


The **Steps** tab provides a summary of each step in the process. Here you can view the current status, number of targets, step notes, and other information. You can also navigate to targets from the card. Targets may enter a business process at different times, so there may be targets in any step, at any point in time. 

**Example – Email Campaign** 

The email campaign example is comprised of three steps. The first step is to send email  s to the active contacts. The second step is to wait for 10 days  . The third step schedules an outbound call activity for the targets who opened the email sent in step one. 

![](/Modules/assets/Images/002-bp.png)

Any number of steps may be configured for a process. A step is comprised of a **condition** and **workflow**. Step conditions control the flow of targets through a process whereas   a target does not move to the next step until its condition has been met. 
### Step Condition 
Step conditions may be simple or complex, they may include input from multiple sources or channels. Third step mentioned in the above example, utilizes an event-based condition, checking if the target clicked the email link to visit the company’s website.  

![](/Modules/assets/Images/003-bp.png)

Conditions may be comprised of any number of clauses that include the following options: 
* Events related to the target (Email Opened, Website Visited, Opportunity Created, etc.) 
* Value of fields related to the target (Status, Type, Last Activity Date, etc.) 
* Existence of data related to the target (Representative Assigned, Valid Email Address, Activity, etc.) 
* Wait for ”x”   number of days from the completion of the previous step 
* Previous step activities have been completed 

### Step Workflow 
Each step of a business process may include workflow. Workflow is comprised of a series of actions that may be used to manipulate CRM data. Step 3 in the above example has only one workflow action defined which creates a CRM activity.    Any number of actions could be added to this step. Available actions include conditions and selects, these allow you to define logical branching and loop through data.

![](/Modules/assets/Images/004-bp.png)

### Step Based Activities 
Business processes may include steps that create CRM activities, or to do’s, related to targets. These activities can be used to control the flow of the process. One of the conditions listed above is “Previous step activities completed.” This condition may be used to prevent a target from moving to the next step until activities created in the previous one are completed. This is a handy feature which may be used for processing leads or guiding opportunities through a sales process. 

The following shows open activities related to a business process step:

![](/Modules/assets/Images/005-bp.png)  

