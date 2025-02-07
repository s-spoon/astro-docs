---
title: "Groups"
draft: false
type: Article
---


Users are restricted, or allowed access, to certain areas of the software. Use Permission groups to set up these restrictions. 

## Group Setups 
Each Aptean CRM User is assigned to one or more Groups. These groups control what functions are available and allow you to establish various levels of permissions and access throughout the system. 

Activity records also use Groups to control the set of Activities that will be available to a User. For example, if you have an Activity called Send Quote, you may only want your Sales Reps and Administrators to be able to create that kind of Activity. You may not want your Accounting or Customer Service Reps to have access to this Activity. 

Group is defined in **Administration** > **Group Setups**. Aptean CRM does provide some pre-defined groups for your choice. Below is a list of some examples. You can also add your own groups if desired.
* Public  
* Sales and Marketing 
* Customer Service 
* Portal  
* Administration 
* Management  

## Assign Users to Groups to Control Access and  Permissions 
When a User is added to Aptean CRM, part of the process of setting up the user’s record is to identify the groups they belong to. Some of the common examples are provided below:
>[!Note] All Users should be added to the Group called ‘Public’. Add one or more additional groups to further control the User as needed.

**Ex 1: Sales Rep** 
1.	Go to **Administration** > **Users**.  
2.	Open the User record and make sure the Public has been selected as the **Groups**.  
3.	On the **Profile** groupbox, click the dropdown arrow in the **Groups** field. This will open the Groups card listing all the groups this user belongs to.  
4.	Click the **+**(Add) icon.  
5.	Select **Sales and Marketing**. 
6.	Save and Close  

**Ex 2: Customer Service Rep – Can’t delete records** 
1.	Go to **Administration** > **Users**.
2.	Open the User record and make sure the Public has been selected as the **Groups**.
3.	On the **Profile** groupbox, click the dropdown arrow to the **Groups** field. This will open the Groups card listing all the groups this user belongs to.  
4.	Click the **+**(Add) icon. 
5.	Select **Customer Service** and Disable Delete on Main Entities.  
6.	Save and Close.  
    >[!Note] **Disable Delete on Main Entities** is a group with pre-defined security under GROUP ENTITY SECURITY. Users belonging to this group cannot delete entities such as company, contact and more.

## Group Entity Security  
For each entity within Aptean CRM, you can define whether a user group can create, read, update, or delete it.  
1.	Go to **Customization** > **Data** > **Entities**.
2.	From the entities list, choose the corresponding record such as the Company.
3.	On the action bar, select **More…** > **GROUP ENTITY** **SECURITY**.
4.	Add a new group or click an existing group.
5.	Select or clear the following checkboxes to edit the security settings.
* **Can Create** 
* **Can Read** 
* **Can Update** 
* **Can Delete** 



