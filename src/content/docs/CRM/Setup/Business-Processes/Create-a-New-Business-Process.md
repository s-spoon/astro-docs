---
title: "Create a New Business Process"
draft: false
type: Article
---


A business process can be created via **Setup** > **Business Processes**, for entity type **Contact**, **Company**, **Opportunity** or **Case**. Campaign is also a kind of Business Process and created for target type Contact. Refer [Marketing Module](../contents.md) for more details.  

**Use Case**

*This Business Process assigns qualifying tasks once a representative is assigned to an opportunity, with the goal of scheduling a product demonstration.*

*Steps included:*

*1.	Notify representative opportunity has been assigned and schedule initial qualifying tasks.*

*2.	Once qualified and proper opportunity details gathered, schedule product demonstration.* 

*3.	Send reminder to have representative update opportunity details after demonstration.*

To create business process in Aptean CRM follow these steps: 

1.	Click the **Add**(+) icon from Business Processes list page. 
2.	Enter the **Description** and select the **Entity** type, for example Opportunity. Click save. This opens the created business process page. 
3.	Go to **Steps** in the action bar and click **Add**(+) icon to create business process step.   
4.	Alternatively, you can click the **New Business Process Step** in the dialogue box.

Enter **Description** and click save. It opens a **Business Process Step** page for the created step.

 **Step Condition**: *step is processed after a representative has been assigned to the opportunity.*

a.	Select **Condition** in the action bar.

b.	Click **Options**(+) and select **Contains**. The opportunity entity related fields pop up.

c.	Select **Users** from the list which indicates that a representative has been assigned.

**Step Actions:**

*Set Opportunity stage to Qualifying.*

*Send email to representative informing them of new opportunity.*

*Create an activity assigned to representative. Task is to identify decision maker and opportunity value.*

d.	Go to **Workflow** tab, drag the following workflow actions to the left side.

(1)	**Change Data**. 

a. Click **Set (Click to edit)** to map data.

b. Click the opportunity entity which displays all the fields related to Opportunity.

c. Choose the specific field and the value, for example: Qualifying in this example. 

d. Click save.

(2)	**Alert Representative**. 

Click **SEND EMAIL**.

This opens a card where you should fill the fields such as To, From, CC, BCC and Subject by selecting the settings icon.

![](/Modules/assets/Images/007-bp.png)

(3)	**New Activity**.

 Click **CREATE DATA (Click to edit)**. 

It opens a **Create Activity** card where a new activity can be created and assigned to the representative. 

For example, the **Activity Notes** field remind him *Update amount value of opportunity, Add contact with role Decision Maker*, a new activity and assign to the representative as a task to remind him update amount value of opportunity, add contact with role decision make.

![](/Modules/assets/Images/008-bp.png)

Enter the fields under Create Activity and click save.  

1.	Go back to **Business Process** > **Steps** tab. And click **Add** (+) to create step 2. 

**Step Condition**:

*Step is processed after representative closes qualifying activity, opportunity amount has value, and opportunity includes contact with Decision Maker role.*

![](/Modules/assets/Images/009-bp.png)

**Step Action:**

*Create an activity assigned to opportunity representative, task is to make a phone call to schedule a demonstration.*

![](/Modules/assets/Images/010-bp.png)

2.	Go back to **Business Process** > **Steps** tab. And click **Add**(+) to create step 3. 

**Step Condition:**

*Step is processed after representative closes demonstration schedule activities.*

![](/Modules/assets/Images/011-bp.png)

**Step Actions:**

*Send reminder email to representative to update opportunity details after demonstration.* 

![](/Modules/assets/Images/012-bp.png)

Add notes and save change. 

3.	Assign targets to the Business Process. You can assign targets 






