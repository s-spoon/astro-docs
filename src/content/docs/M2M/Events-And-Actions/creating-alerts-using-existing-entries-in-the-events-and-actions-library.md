---

title: "Creating alerts using existing entries in the Events & Actions Library"
draft: false


---

The Notifier system helps you manage your workflow by automatically sending messages to you, other employees, customers, or vendors when certain events occur.

To set up more detailed Notifier events and actions, use the **Events and Actions Notifier**. 

**To create alerts using the Events & Actions library**

1.  Open the **Events & Actions (EANOTI)** page.

    1.  *Select* **Utilities** > **Company Setup** > **System** > **Events and Actions** > **Events & Actions**.

    Or

    2.  *Search for* **EANOTI** *in the* **Navigation box** *and then select* **Events & Actions**. <br>The **Events & Actions (EANOTI)** page appears.<br>

2.  Click **New**.

3.  Set details about the event:

    1.  Click the **Object Name** Lookup Reference.

    The **Lookup For Object Name** window appears.

    2.  Highlight a row and click **Select**. Or, double-click the object to select.

        Click **Cancel** to exit from **Lookup For Object Name** screen.

    3.  Click the **Table Name** arrow and select the table that contains the field that triggers the event.

        **Additional Tables** - You can select multiple tables.

4.  Select the check box from the **Select** column under **Additional Tables**.        

    **For example**, ARITEM

    Selecting additional tables is optional and only necessary if you want to change the standard event.

    By default, the **Table Name** (**for example**, ARMAST) appears.

    Based on the **Table Name** and **Additional Tables**, **Relational Expression** appears automatically.

**Select when to Fire the Notifier**:

From **Fire When** area, you can select Create/Update/Delete (any or all) to fire the event or you can make it Date Controlled.

    » **Creating**: Triggers when a new record is added to the table.
    
    **For example**, PURCHASE ORDER EXCEEDS THRESHOLD CREATE

    » **Updating**: Triggers the event when the specified record is modified (when there is a data or status change).

    **For example**, PURCHASE ORDER EXCEEDS THRESHOLD MODIFY

    » **Deleting**: Triggers the event when a record is deleted or removed from the table.

    You can select Create, Update, and Delete at the same time for a single event. Selecting Delete prompts a message to continue as any additionally selected tables will be removed.

or

    » **Date Controlled**: Triggers the event based on a certain date (that is, a late order). You can specify the **Interval** and the **Next Execution Date**.

**Select a Fire Frequency**:

    » **Once per unreviewed event**: Select this event to trigger the event only once until it is reviewed in the **Alert Central (EAALRT)** page.

    **For example**, when a part has dropped below Safety Stock, notify only when I review the alert, not every time the record changes thereafter. Once the alert is reviewed, the event is triggered again to send another alert.

    » **Once per record**: Select this event only once for each record in the specified table, regardless of whether or not the alert is reviewed in the **Alert Central (EAALRT)** page.

    » **Every time**: Select the event every time the fire criterion is met, regardless of whether or not the alert is reviewed in the **Alert Cen- tral (EAALRT)** page.

Step 8 and 9 are optional and you can perform only if required.

Set the Fire Criteria:

The SQL Server expression defines the Event trigger. Some knowledge of SQL Query may be required for Events that are more complex.

Fire criteria allows you to put limitations on the records that trigger the event. **For example**, if you are using **INMASTX** table and only want events to fire for **Part No ES1030**, you would set the fire criteria to the following:

**INMASTX.fpartno =’ES1030’**

You can bring up the expression for **Fire Criteria** using the **Operator** an Insert field not on form.

1.  Perform the following:

    » Click the **Operator** arrow and select the operator to insert an oper- ator in the expression. The **SQL Query** operators may be used in defining the Fire Criteria

    » To insert a field from another table into the expression, click the

    **Insert field not on form** arrow and select the field to insert. Or

    » Click **Insert Field not on Form** arrow and select a value. **For example**, FVENDNO

    » Click the **Operator** arrow and select the operator. **For example**, = EQUAL TO

Fire Criteria - syrmama.fdenterdate = '03/12/12'

» Click **Validate**.

1.  Click the **Action** tab.

2.  Select the **Priority** to send the alert.

3.  Click the **Recipient** tab to select the notifications about the event:

    » **Internal** tab: Use this tab to specify the details of notifications to be sent to internal users. You can select the internal users or groups of users who should receive the alert messages and email.

    ≡ **Attach related reports**: Use this check box to attach related reports in email. Select the **Attach related reports** check box and select the required reports to be attached from the list of related reports.

    ≡ **Current User**: Use this check box to send an alert to the user who has triggered the event.

    » **External** tab: Use this tab to specify the details of notification to be sent to external users. You can select all of the vendors or customers who should receive the alert emails and, SMS, and fax messages.

    You can also specify any additional recipients to receive the alert messages in the **Email**/**SMS** tab.

    The external vendors and customers are displayed only when the **Global Notifications** check box is selected in the **System Setup (CSSYS)** page.

    ≡ **Attach related reports**: Use this check box to attach related reports in email. Select the **Attach Related Reports** check box and select the required reports to be attached from the list of related reports.

    ≡ **Use Contact On Document**: This check box is displayed only when the **Global Notification** check box is selected in the **System Setup (CSSYS)** page. Use this check box to send alerts to the Contact on the document instead of the email ID specified for the respective **Customer (CUST)** or **Vendor (VEND)** record.

    ≡ **Current User**: Use this check box to send an alert to the user who has triggered the event.

**Note:** 

Check for any errors related to events under the **Error Logs** tab of the **Alert Central (EAALRT)** page. Check for any errors related to event actions, like email and report generation, on the **View Log Files (VIEWLG)** page.

9.  In the **Email** tab, click the **Recipient** arrow and select whether to send an email message regarding this alert to the customer or vendor.

    » **Current Customer** - The **Customer** associated with the **Event**

    » **Current Vendor** - The **Vendor** associated with the **Event**

    You must select either **Current Customer** or **Current Vendor** after selecting all of the customers or vendors within the grid to trig- ger the event.

    If you are sending an email to the current user, verify that the email address is entered correctly on the **E-mail** tab of the **User Management** page.

    The **Recipient** drop-down list is based on the document type you have defined for your Event. If the document is related to Cus- tomers or Vendors, that will be available in the drop-down. If the document is not specifically related to a document with a Customer or Vendor, the drop-down will be empty.

    You can type any additional email address to send a message about this event in the **Additional Recipients** box.

10.     Click **Save** on the **Toolbar**.

        You can also add additional **Operator**.

        » Select **Operators** arrow and select the required operator from the list.  
        
        You can also modify the **Message** field to include any additional information you would like to view.

        » If you want to add additional syntax and methods into the **Subject**, **Message**, and **Action** fields respectively, then select the parameter from **Insert field not on form** arrow.

        See **step 5** above for more information.

11.  Following is the syntax used in the **Subject** and **Message** fields :

    1.  **Description/Hardcoded** values.

    2.  **Methods** – This must start and end with **()**.

        ≡ If method does not have any parameter then it should be writ- ten like **()methodname()**.

        ≡ If there is any parameter then it should be written like **()Meth- odName(param1,param2)()**.

        ≡ If method contains field as parameter then field must start with **\<\<** and end with **>>**.

        ≡ If parameter is a hard-coded value then **String/Date** must start and end with ‘. **Integer/Decimal** value must not start or end with ‘. Boolean value must be **True/False**

    3.  **Fields** – This must start with **\<\<** and end with **>>**

        The message in the **Message** field is pulled from the **Event Library (EAEVL)** screen.

    For example, **AR Invoice** \# \<\<armast.fcinvoice>> for **\<\<armast.fbcompany>> is in New, Not Confirmed Status**.

    ≡ The value within the angle bracket is called **\<\< Field Name>>**

    ≡ The value within the parenthesis is called **()Method()**

    ≡ Following is the method used in the **Action** field

It is a collection of methods. Each method must be written on a new line. Here method should be written like **MethodName** or **Meth- odName(param1,param2)**.

    ≡ If method contains field as parameter then field must start with **\<\<** and end with **>>**.

    ≡ If parameter is a hard-coded value then **String/Date** must start and end with ‘. **Integer/Decimal** value must not start or end with ‘. Boolean value must be **True/False**. In **Action,** **Primary** methods accept following type of parameters

1. **Hardcoded values**

2.  **Fields**

3  **Methods** - This is similar to primary methods except for the method it written. Parameterized methods must start and end with **()**

12.  Save the Event.


 > [!Note] 
 
 The shipping events that were using the fields (upsdate, ffrtamt, fno_boxes, fshipwght, and fmtrckno) from the shmast table must be recreated and used from the **shmasttracker** table.