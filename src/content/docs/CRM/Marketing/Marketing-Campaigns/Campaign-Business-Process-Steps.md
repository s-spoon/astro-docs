---
title: "Campaign-Business-Process-Steps"
draft: false
type: Article
---


You can define various steps for your Campaign to automate many different functions. For example, you may want to have the system automatically send an email alert to your Sales Rep when a target completes the Contact Us page on your website. Or, you may want to automatically remove a target from your Campaign if they opt out of your email.
You can define a wide variety of scenarios to ensure that your Campaigns runs smoothly and efficiently.

To access this select the **STEPS** tab from the Campaign record.

**Conditions and Actions**

Each step has a condition, which defines when the step will happen via either a time offset value, an event – or both. When the condition and/or time offset has occurred, the Action(s) you define will take place.

This is the set of Conditions and Actions provided for you to choose from:

![](/Modules/assets/Images/004-marketing-campaigns.png)

>[!Tip] The Days offset is the number of days since the previous step occurred- so first step is usually set to blank or zero.

>[!Note] One campaign can have multiple steps. In most cases, one Step will have only one action defined for it.

Example1

***Description: When a target submits a Contact Us form on your website, you want to send them a confirmation email, and alert your Sales Rep***.
1. Go to the **Campaigns** list page.
2.	Create a new campaign.
3.	Go to **More** > **Steps**.
4.	Select **Add** (+) icon.
5.	Enter **Description**.
6.	Click Save.
    
    The **Condition** tab opens for the selected campaign.
7.	 Select **options**(+) > *Wait*.
8.	Enter the value in the **Days since last step** field. 
    	
    In this case, enter 0 since this the first step.
9.	Select **options** (+) > *Event*.
10.	Select the desired option from the dropdown. 

    In this case, select *Form Submitted*.
11.	On the action bar, select **Workflow** tab
12.	Drag the **Send Email Merge** from the **Workflow Actions** list on the right side and select it.

     The **Send Email Merge** window opens.
13.	Enter the required fields.
14.	 Drag **Alert Representative** from the **Workflow Actions** and select it.

     The **Send Email** window opens.
15.	 Enter the required fields.
16.	Click Save.

Example 2: Drip Campaign

***Description: When a target opens the first email linked to this Campaign, send them the second email for your campaign in 1 week. If they open the second email, add the Target to a List***.
1.	Go to the **Campaigns** list page.
2.	Select the Campaign you created in Example1.
3.	Go to **More** > **Steps**.
4.	Select **Add** (+) icon.
5.	Enter **Description**.
6.	Click save.
    	 
    The **Condition** tab opens for the selected campaign.
7.	 Select **options** (+) > *Wait*.
8.	Enter the value in the **Days since last step** field. 
    
    In this case, enter 1.
9.	Select **options** (+) > *Event*.
10.	Select the desired option from the dropdown.

    In this case, select *Email Opened*.
11.	On the action bar, select **Workflow** tab
12.	Drag the **Send Email Merge** from the **Workflow Actions** list on the right side and select it.

    The **Send Email Merge** window opens.
13.	Enter the required fields.

    Enter the fields in the **Activity** group box if you want to have an automatic track of the email action. 
14.	Click Save.
15.	 Go to **Steps** > **Add** to create another step.
16.	Enter **Description**.
17.	Click save.
     	
    The **Condition** tab opens for the selected campaign.
18.	 Select **options** (+) > *Event*. 
19.	Select the desired option from the dropdown. 
20.	In this case, select *Email Opened*.
21.	On the action bar, select **Workflow** tab.
22.	Drag the **Add Contact To List** from the **Workflow Actions** list on the right side and select it.

    The **Add Contact To List** window opens.
23.	Enter the required fields. 

    For example : Which list you would like to add the contacts to.
24.	Click Save.

    In each step record, you can choose **Options** > **Test Step** to test the step you defined.

    You can define various steps for one campaign. If you have defined one step and assigned targets to the campaign, the second step cannot be defined until all targets in the first step have been processed.

**Schedule**

Set the date/time to run each step by step through **Schedule**.

With the combination of **Schedule Type** and **Settings**, you can define to process the step in various ways. For example: Daily task and recurring every 2 hours, Weekly, from Monday to Friday at 8:00AM, and more. With the **Advanced** setting, you can define some advanced conditions such as recurrence start/end date and interval. 
 
A task queue is set up in **Administration** > **Tasks** to process those business steps. When the queue is running, it looks at all the campaigns and steps that are defined, and processes all when the scheduled date/time comes. 

You can process the steps immediately even before the scheduled date/time.  
1.	Select the desired Campaign record.
2.	On the action bar, select **STEPS**.
3.	 Select the desired steps.
4.	Select **Options** > **Process**.





