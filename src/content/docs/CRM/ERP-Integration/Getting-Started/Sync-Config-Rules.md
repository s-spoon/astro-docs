---
title: "Sync Config Rules"
draft: false
type: Article
---



The sync configuration defines the rules for synchronizing each available field, such as **ERP** to **CRM**, **CRM** to **ERP**, **Two-Way**, and **No Sync**. 
There are two primary entities: **Contact** and **Company**. Each of these entities has specific properties and associated child entities.

The settings (gear icon) for the main entity control the sync configuration for that entity. The tile list on the right allows you to edit the sync type of properties and child entities. Once properties or child entities are selected, the **Edit** icon in the tile list is enabled, allows you to change the sync type.

**No Sync** – This field is not synchronized between CRM and ERP, the data will differ in each system.

**CRM to ERP** – CRM is the master record for this field. Changes are only permitted in the CRM system, and updates are reflected to ERP.

**ERP to CRM** – ERP is the master record for this field. Changes are only permitted in the ERP system, and updates are reflected in CRM.

**Two-Way Sync** - Both ERP and CRM can update this field. Unlike No Sync, this field remains synchronized between both systems, with changes in one system being reflected in the other.

![002](/Modules/assets/Images/002.png)