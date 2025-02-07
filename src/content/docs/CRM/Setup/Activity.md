---
title: "Chains"
draft: false
type: Article
---


Activity related codes can be set under **Setup** > **Codes** > **Activity**. 

## Actions
This is where you'll see all the Action codes you've set up so far. Click one existing code to edit or click the **Add** (+) icon to add a new Activity Code.

## To create a new action code
1.	Type a Description. 
2.	Choose an Action **Type** to categorize the code for reporting. This is an optional field.
3.	Select an option from the **Related to Campaign** dropdown to associate the action with a specific campaign, if needed.
4.	If this activity is associated to a series of activity chain, then choose **Trigger this Chain when adding activity**. Refer [Chains](#chains), for more details. 
5.	Select an option under **Available to Action** Sets dropdown. You have access only to the action codes from your own action sets. Refer [Action Sets](#action-sets) for more details. 
6.	Click the add (+) icon of **Results for this Action** field to define the options for completing this Activity (such as Sent, Completed, Left Message). Results are possible outcomes for an activity. They complete an activity and remove it from the user's **To Do’s** List. Activities can have one or more **Results**. Different activities can have different results code. Results codes are defined under **Setup** > **Codes** > **Activity** > **Results**. 

    For each result, you can define whether to **Prompt for Next Activity**, and if it is the **Default** result code of this activity. You can also choose to link the Result to an activity chain with selecting **Trigger this Chain when adding Activity**. 

    For example, if action “outbound phone call” is completed with a result code of “not answered”, then you can choose to prompt to create a new activity to move things forward. 
7.	**Outlook Add-in Options** groubox defines attributes related to outlook integration.  Choose Appointment or Task for **Create Outlook item of type** to add this type of activity to your Outlook calendar or task list. Select a value from **Prompt to Export when creating activity** to display a prompt, automatically add the calendar or task item or not display a prompt or add the item.
## Action Sets
Action Sets identify categories of Actions for a specific subset of users. They are used to limit the action codes available to your area of responsibility.

At least one Action Set must be set up. If all users use the same Actions, one Action Set must exist, and all Actions should be assigned to it.

You can assign the Action Sets to the Action under **Action** card > **Available to Action Set** field.

Each user is assigned to one Action Set on the **Administration** > **Users** > **Representative Details** > **Profile section**. This determines the activities the user can create.


Use **Chains** to set up a sequence of activities. When a designated activity is logged, the next activity is triggered, appearing in your To Do List after a certain period time as determined in the Chain. These are activities that are automatically generated from other activities.

Activity chains are useful for quotes. Say you send a quote to a prospect. You might set up a chain that prompts you to call the prospect after two days to follow up on the quote.

You can assign the Chain to the **Action** code, or **Result** associated with an action. 
## Use Case: 
If an outbound call is not available, then call back in 1 day.

Following steps helps in scheduling the call back for follow up:

1.	Go to Set Up> Codes >Chains. The exiting chains are found in the search page, and they can be modified by using **Edit** option.
2.	Click **Add** (+) icon to create a new chain.
3.	Fill the **Description** field.
4.	Click (+) icon in **Chain Activities**. A detailed Chain Activity page window will open where you can add the chain activities.

    >[!Note] The chain activities pick the action codes from the existing list. If any new action code has to be added, do it prior to creating the chain.


5.	Choose **Outbound Telephone Call** from dropdown list in **Action**, for this use case.
6.	Enter **Description** related to the Chain activity.
7.	Choose the **Result** type.
8.	Enter call **Duration** and set up **Start Time**.
9.	You can choose the priority type.
10.	**Day Offset from Previous Activity** is the duration in days when the activity has to reoccur again.

    >[!Note] You can enable the **Skip Weekend Days** checkbox, in case when call is scheduled on Friday and the offset is chosen to be 1 day. Then the follow up with the customer will be scheduled on following Monday and not on Saturday(weekend)


11.	You can assign the **Representatives** for this chain activity or if not chosen, it will be assigned the person who create the initial activity.
12.	Add **Notes**, if required. Click Save.
13.	Add additional chain activities to complete the chain.
14.	Add the chain to the specific activity in the action code set up page.

For example, click the **Outbound Telephone Call** action and click **Results** field. In the pop up card, click the edit icon to *Not Available*. Now chose the chain from the dropdown under **Trigger this chain when adding activity** and save.

Further, if the Action Outbound Telephone Call is completed with a result code of Not Available, the chain will be auto triggered and another activity Outbound Telephone Call will be auto created.


>[!Note] Chains can be triggered from action codes or from results. Different chains can be attached to different results using more than one activity.


## Cost Groups
Cost Groups are used to track the costs involved in developing the business. For example: postage, literature, travel expense, advertisement and more. Cost groups are also assigned in the campaign.

Cost groups are defined under **Setup** > **Codes** > **Activity** > **Cost Groups**.

To create a new cost group, click **Add** (+) icon. Fill the **Description** field. Enable Active and Save.
## Results 
Results are possible outcomes for an activity. It indicates how activities are closed such as sent, Completed, left message, and more. It completes the activity and remove it from your **To Do’s** list.

Result codes are defined under **Setup** > **Codes** > **Activity** > **Result**.

Each action may have one or more possible results. You can link different result codes to different action codes.

Click Action record from **Setup** > **Codes** > **Activity** > **Actions**, and then click the **Add** (+) icon of **Results for this Action** field to add result codes. 

