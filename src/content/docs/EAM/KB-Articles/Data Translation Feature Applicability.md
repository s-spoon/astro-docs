---  
 
title: "Data Translation Feature Applicability"  
draft: false 
type: KB Article
 
---

Data translation refers to the ability to render and manage information in different languages or
linguistic formats within EAM application. It provides the ability to work with and display data in
multiple languages based on the user's language settings, and it includes features like translating
specific fields and adjusting the display based on language preferences.

Users can add new translations to specified fields if the translation feature is enabled for their
plant. The Translation feature can be configured by the system administrator at the backend.

1. Navigate to **Setup** > **Validation codes** in the navigation pane. The **Validation Codes** tab
will open in the top bar.

2. In the grid, search for and select the desired code example, such as **Account**.

3. Click the **Details** icon in the contextual panel; this action will open the window **Account** on
the right-side panel.
4. Select a **Code** and click **Edit**.

    ![](../assets/kb-articles/Data/MicrosoftTeams-image%20(5).png)

5. To change the translation, click anywhere in the field **Description**, including the globe icon. The **Description Translation** pop up will open, displaying the added description by default.

    ![](../assets/kb-articles/Data/MicrosoftTeams-image%20(6).png)

6. Click the **New Translation** button, **Add New Translation** for Description pop-up opens, select the desired language from the drop-down menu, and then click **Add Translation**.

    ![](../assets/kb-articles/Data/MicrosoftTeams-image%20(7).png)



## Data Translation Feature Applicability for sy_code_30 and Non-sy_code_30 Tables

| **Table** | **Data Translation Supported** | **Drop-downs Stored As Part Of This Table** | 
|-------|-------|------|
|sy_code_30 | Yes | <ul> <li>Action </li> <li>Area</li>  <li>Bin Type</li>  <li>Component</li>  <li>Condition</li>  <li>Course</li> <li>Criticality</li> <li>Delivery Area</li>  <li>Department</li>  <li>Document Category</li>  <li>Equip-Serial SubClass</li>  <li>Employee Dept</li>  <li>Event Status</li>  <li>Event Type</li>  <li>Expediting Milestones</li>  <li>FOB</li>  <li>Grade</li> <li>Hazard</li> <li>Insp Level</li>  <li>Invoice Activities</li>  <li>ISO9000</li>  <li>Item Class</li>  <li>Job Function</li>   <li>Manufacturer</li>   <li>Mech Integrity</li>   <li>Mobile Device WO Status</li>  <li>Model</li>  <li>Occupation</li> |
|sy_buyer| No |Buyer|
|sy_resources |No| Craft|
|sy_currency |No |Currency|
|po_ecatalog_uom_xref|No |eCatalog UOM Xref|
|sy_eq_class |No |Equipment Serial Class|
|sy_freight_code| No| Freight|
|sy_eq_location_status|No| Location Status|
|sy_payment_terms |No| Payment Terms|
|po_addresses |No |Purchasing Addresses|
|sy_rate_multipliers |No| Rate Multiplier|
|sy_permits |No |Safety Procedures/Permits|
|sy_shutdowns|No |Shutdown|
|sy_sic| No| SIC|
|in_stores_location| No| Stores Location
|sy_tax_code| No| Tax|
|sy_wo_status |No| Work Order Status |

