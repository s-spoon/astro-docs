---
title: "Integrate M2M with Aptean CRM"
draft: false
type: Article
---
### Prerequisites
Make sure that both M2M and Aptean CRM are activated prior to integrating the applications.

The following table shows the supported data point integrations between M2M and CRM application.
|**M2M Data Point**|**CRM Data Point**| 
|-|-|
|Account Master |Account Master |
|Contact|Contact|
|Linked Address|Linked Address|
|Sales Order History|Sales Order History|
|AR Invoice History|AR Invoice History|
|RMA History|RMA History|

Data integration between the M2M and CRM applications supports both two-way and one-way integration. The specific data supported for integration are as follows: 

-   Two-way integration is supported for the creating, updating, and deleting the contacts, as well as the creation of company records. Changes made in either system will be synchronized and reflected in both systems.  

-   One-way integration is supported for creating, updating, and deleting invoice and RMA history, along with the updating and deletion of company records. In this case, data flows in a single direction, from one system to the other, without synchronization in the reverse direction. 

Choose from the following topics to view the procedure for integrating the supported data transfer.

- [Integrate Account Master and Contact Data](integrate-account-master-data.md)
- [Integrate Sales Order](integrate-sales-order.md)


### Bulk Synchronization from M2M to Aptean CRM 

You can perform bulk data synchronization from M2M application to Aptean CRM within AppCentral. 

Bulk data synchronization is supported in the following scenarios: 

If you are an existing M2M application user and migrating to AppCentral. 

If you are a new AppCentral user using the M2M application and want to synchronize your M2M data with Aptean CRM. 

To initiate bulk synchronization:  

**Prerequisite**: Make sure both M2M and CRM products are activated and setup. 

1. Navigate to the Integration section. 

2. Select Aptean CRM profile for the appropriate M2M company and click Connect.  

3. Choose the appropriate profile from the target drop-down list and click Save.  
You can monitor the sync progress on the status window. 

The following data points can be synchronized from M2M to Aptean CRM: 

-   Account Master 
-   Contact 
-   Linked Address 
-   Sales Order History 
-   AR Invoice History 
-   RMA History 

Once the synchronization is complete, open the Aptean CRM application to verify that the M2M data is accurately reflected. 

 



 
