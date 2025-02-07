---
title: "Deduplication"
draft: false
type: Article
---



Deduplication is an automatic or manual process that compares new data with stored data. It ensures data to be concise and organized that there are no duplicate entries improving the storage utilization.

## Duplication Check during New Entry
Aptean CRM checks duplicates on Company or Contact entity. Aptean CRM automatically checks for duplicates on creation of any new record. You can also do it manually by selecting **Options** > **Check for Duplicates** (or from **More** > **Duplicates**) from any page where records are added. 
If there is no duplicate information, you can select OK on the pop-up window and the process is complete. However, if there is duplicate information, select the main entity you want to retain.

You can also merge the duplicate records. Manually toggle on the checkboxes of those duplicate records in any list page involved with a search and click **Options** > **Merge**. 

## System Wide Duplication Check 
You can conduct the system wide Duplication Check . Go to Setup > Duplicates, you can choose to check duplicate for Company entity or Contact entity. 
1.	Select **Rules to Check**. Currently the following rules are available:

Company Entity: 
* **Company Name and Addresses match**
* **Email Addresses Match**

Contact Entity: 
* **Contact Name and Address Match**
* **Contact Email Match**
* **Contact Name Soundex and Company Name Soundex**

    >[!Note] You can configure the duplicate rules under Customization > Data > Entities > Contact > Duplicate Rules tab.


2.	Click the Add Duplicate Rule (+) icon to select multiple rules. Remove rule by toggling the checkbox and click Delete. 

    >[!Note] When multiple rules are selected, it is using OR Condition. For example, if you choose **Company Name and Addresses Match** and **Email Addresses Match** to find the duplicate in Company entity, it filters companies either with same Company Name & Addresses or Same Email Addresses. 


3.	Add any other Filter to narrow down the duplication search, if needed. 
4.	Click **Generate**. A pop-up widow displays the message *Do you want to clear existing duplicate sets*. Click Yes.
5.	The duplication check runs system wide. Each duplication set is displayed in the grid view. 
6.	Select the checkbox for the data that should NOT be merged and click **Not a Duplicate** button. 
7.	For each set, toggle on the **Is Master** radio button to which all records in the set will be shifted. Click **Merge Set** to merge each set individually. or click **Mass Merge** to merge multiple sets at once. 
8.	If the Company or Contact record is imported via ERP integration, then you can also click **Set ERP as Master**, which will automatically toggle on the **Is Master** radio button of the record with ERP integration key. Then you can merge the records by **Mass Merge**. Refer [ERP Integration](../contents.md) for more details. 


