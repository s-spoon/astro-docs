---  
 
title: "Audit Tracking in Enterprise Asset Management"  
draft: false 
type: KB Article
 
---

Enterprise Asset Management (EAM) systems serve as comprehensive platforms designed to
oversee asset management processes while meticulously tracking changes and activities
associated with assets. Among its critical features, audit tracking stands out as a vital component,
offering customers unparalleled transparency into all actions performed on their assets. Audit
tracking provides invaluable insights into asset management operations by recording key details
such as the initiator of an action, the timing of the event, and the specific modifications made.
In the backend of EAM systems, audit tracking displays through updates to two essential tables:

1. Table: au_audit_change: This table provides a summarized overview of changes made to
specific fields, capturing vital information such as:

    * **change_id**: A numerical identifier assigned to each record.
    * **change_date**: The date when the changes were implemented, formatted as YYYY-MM-DD.
    * **change_time**: The timestamp of the change in UTC format.
    * **action**: Mention the type of action performed, whether it's an addition (insert), deletion, or update.
    * **userid**: The User ID of the individual initiating the changes.
    * **tablename**: Specifies the impacted table.
    * **plant**: Identifies the plant where the changes occurred.
    * **user_activity**: Mention what activity was performed.
    * **unique_key**: A unique identifier generated for each update, facilitating record identification.

        ![](../assets/kb-articles/Audit%20Tracking_&_PLT/Picture1.png)

2. Table: au_audit_change_column: This table offers detailed insights into specific data changes within fields, including:
    * **change_id**: Corresponds to the ID provided in the parent record.
    * **column_name**: Indicates the field where changes were made.
    * **old_value**: Represents the previous data value. If the field has no available data, the value
will display as Null.
    * **new_value**: Indicates the updated data value.
    * **plant**: Specifies the plant where the changes occurred.  

        ![](../assets/kb-articles/Audit%20Tracking_&_PLT/Picture2.png)


It's important to note that audit tracking is enabled only for fields where the feature is activated.
Changes made to fields without audit tracking enabled will not be reflected or tracked. EAM
provides out-of-the-box audit tracking for all fields falling under Security and Setup. However,
customers can request additional audit tracking for other fields or tables by raising a service
request or support ticket. Upon receiving the request, EAM will enable audit tracking for the
specified tables in the backend.  

Customers can verify the audit tracking status for particular fields by following these steps:

1. Navigate to **Setup** > **Table Element** setting in the navigation pane. The Table Element
Setting tab will open in the top bar.

2. In the grid, search for and select the desired field.

3. Click the **Details** icon to access system element details.

4. Check the **Audit** field status under card **Delivery Settings**. The green tick indicates
enabled, and the red cross indicates disabled.

    ![Example for Audit tracking: Disabled](assets/Audit%20Tracking_&_PLT/disabled.png)


    ![Example for Audit tracking: Enabled](assets/Audit%20Tracking_&_PLT/enabled.png)


> [!Note]  
> Customers cannot directly edit audit settings. Any changes or requests must be
communicated through a service request or support ticket.

> [!Note]  
> Once audits are enabled, it is applicable system-wide wherever a particular table
and column is shown/used in the UI.

In the event that a customer requires a comprehensive account of specific changes, they may
submit a request specifying the changes and fields they wish to track. The EAM support team will
then execute the necessary queries to gather the data and provide the requested information to
the customer from the backend.


## List of the tables where audit tracking is delivered out of the box.

The following tables below will have an audit tracking feature enabled for all fields present in
them:  

|**Table Names**|  
|---------------|
in_control
po_ecatalog 
sy_eq_location_
se_groups
sy_periods
sy_tabware_options_user_values
se_user_stores_location
sy_resources
sy_escalation_parameter
in_control_types
sy_buyer
sy_sql_parameter
se_sql_access
sy_permits 
se_table_element_access
se_users
sy_shutdowns
sy_tax_code
in_transfer_control
sy_eq_class
qw_query_column 
sy_code_30
sy_rate_multipliers
se_user_assign 
se_window_access
sy_sic 
ud_definition
po_control
sy_freight_code 
qw_query_public_access 
sy_payment_terms
sy_escalation
se_user_
eq_locations
sy_currency
sy_sql 
wo_control_defaults
zz_user_elements 
sy_user_setup
ud_valid_values 
wo_control_numbering 
zz_window_plant_elements 
sy_wo_status 
wo_control
wo_interface_control
zz_modules_installed

For the following tables provided below, only the specified field mentioned below has the audit
tracking feature enabled, while the remaining fields in the table do not have this feature enabled.


|**Table Name**|**Fields For Which Audit Tracking Is Enabled**|
|------------|--------------------------------|
|em_employee | reorder_approval_limit|
||repair_approval_limit
||active_flag
||approval_limit
||approve_reorder_flag
||approve_repair_flag
||contractor_flag
||default_req_reviewer
||direct_charge_approval_limit
||employee_id
||invoice_reviewer_flag
||requisition_approval_limit
||requisition_reviewer_flag
||reviewer_flag
||shipping_order_approver_flag


## Queries to Enable Audit Tracking in the Database

The following is a set of sample queries designed to enable audit tracking in the database. Aptean Internal team can use these to enable/disable audit. 

**Use the select statement to see if an audit is enabled/disabled specifically for a plant**. 

SELECT audited,* FROM zz_user_elements WHERE plant = @plant AND table_name =
@tablename AND element_name = @elementname.  

**If no rows found, use below query**:  

        DECLARE @plant nvarchar(3) = '003';           
        DECLARE @tablename nvarchar(40) ='em_employee';   
        DECLARE @elementname nvarchar(40) = 'default_req_reviewer';  
        SELECT * FROM zz_user_elements WHERE plant = @plant AND table_name = @tablename AND element_name = @elementname    
        SELECT * FROM zz_elements WHERE table_name = @tablename AND element_name = @elementname.  
        IF NOT EXISTS (SELECT * FROM zz_user_elements WHERE plant = @plant AND table_name = @tablename AND element_name = @elementname).  
        BEGIN  
        INSERT INTO zz_user_elements  
        SELECT @plant AS plant, @tablename AS table_name, @elementname AS element_name,
        deliver_used, deliver_require, deliver_validate, deliver_protect, deliver_default_value, help_text,  
        text_case, 1, size  
        FROM zz_elements WHERE table_name = @tablename AND element_name = @elementname;  
        END


**If rows are found, use the below query to update the audit value.** 

    DECLARE @plantList nvarchar(3) = '003';  
    DECLARE @tablename nvarchar(40) = 'em_employee';  
    DECLARE @elementname nvarchar(40) = 'default_req_reviewer';  
    update zz_user_elements set audited=1 where table_name=@tablename and element_
    name=@elementname and plant=@plantList;

### Sample Queries to get audit data for a plant

**Case 1: Tracking users added or deleted from the application for a given plant.**

    DECLARE @plantList nvarchar(3) = '003'; --Change your plant value accordingly  
    DECLARE @diffFromCurrDate int = '60'; --Number of days for which data would be fetched. Change the value accordingly.  
    select distinct change_date as 'Change Date',change_time as 'Change Time', action as 'Action',
    userid as 'Performed By', a.tablename As 'Table Name', a.unique_key as 'Impacted User', a.plant
    as 'Plant', a.change_id as 'Change ID' from au_audit_change a join au_audit_change_column b
    on (a.change_id = b.change_id) where a .tablename = 'se_users' and a.action in ('Insert','Delete')
    and a.change_date > DATEADD(day, -@diffFromCurrDate, getdate()) and a.plant in
    (@plantList);

**Case 2: Monitoring security group changes for users. (users being added to/removed
from the security groups.)**

    DECLARE @plantList nvarchar(3) = '003'; --Change your plant value accordingly  
    DECLARE @diffFromCurrDate int = '540'; --Number of days for which data would be fetched. Change the value accordingly.  
    select distinct change_date as 'Change Date',change_time as 'Change Time', action as 'Action',
    userid as 'User ID', a.tablename as 'Table Name',  
    dbo.SplitValue(unique_key,'|',0) as 'Impacted User',  
    dbo.SplitValue(unique_key,'|',1) as 'Group ID',  
    a.plant as 'Plant', a.change_id as 'Change ID' from au_audit_change a join au_audit_change_
    column b on (a.change_id = b.change_id) where a.tablename = 'se_user_assign' and a.action in
    ('Insert','Delete') and a.change_date > DATEADD(day, -@diffFromCurrDate, getdate()) and
    a.plant in (@plantList);

**Case 3: Tracking modifications to security groups themselves. (actions being
removed/added to the security groups)**

    DECLARE @plantList nvarchar(3) = '003'; --Change your plant value accordingly  
    DECLARE @diffFromCurrDate int = '540'; --Number of days for which data would be fetched.
    Change the value accordingly.    
    select distinct change_date as 'Change Date',change_time as 'Change Time', action as 'Action',
    userid as 'User ID', a.tablename as 'Table Name',  
    dbo.SplitValue(unique_key,'|',1) as 'Window Name',  
    dbo.SplitValue(unique_key,'|',2) as 'Action Name',  
    dbo.SplitValue(unique_key,'|',3) as 'Group Name',  
    a.plant as 'Plant', a.change_id as 'Change ID' from au_audit_change a join au_audit_change_
    column b on (a.change_id = b.change_id) where a.tablename = 'se_window_access' and a .action
    in ('Insert','Delete') and a.change_date > DATEADD(day, -@diffFromCurrDate, getdate()) and
    a.plant in (@plantList);

**Case 4: Documenting Changes to Work Order Setup Options in the Last 60 Days.**

    DECLARE @plantList nvarchar(3) = '003'; --Change your plant value accordingly  
    DECLARE @diffFromCurrDate int = '60'; --Number of days for which data would be fetched.
    Change the value accordingly.    
    select change_date as 'Change Date',change_time as 'Change Time', action as 'Action', userid as
    'Performed By', a.tablename As 'Table Name', b.column_name as 'Modified Column', b.new_
    value as 'Latest Value', b.old_value as 'Previous Value',a.plant as 'Plant', a.change_id as 'Change
    ID' from au_audit_change a join au_audit_change_column b on (a.change_id = b.change_id)  
    where a .tablename = 'wo_control' and a.action in ('Update') and a.change_date > DATEADD(day,
    -@diffFromCurrDate, getdate()) and a.plant in (@plantList);

>[!Note]  
> Adjust references such as table_names, element_names, and plant_values as per
your specific requirements.

>[!Note]  
> Users should ensure that the split function (dbo.SplitValue) exists and is executed
within the queried database to generate accurate results for these queries.

