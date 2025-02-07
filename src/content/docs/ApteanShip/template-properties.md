---

title: "Template Properties"
draft: false
type: Article

---

Template Properties allows you to configure how and when emails that use the template are sent by Aptean Ship. You can access a templates properties in two ways:
 
1. When a template is open on the Template Designer screen:

    ![](assets/images/enotify-temp-designer5.png)

2. From the Templates list in Setup > eNotify > Templates:

    ![](assets/images/enotify-properties2.png)

 
### State and Scheduling

### Enabled and triggered when

Check this option to send notification emails using this template when the designated action occurs:

* Shipped - when a shipment is processed

* Updated - when a shipment is modified

* Shipped or Updated - when a shipment is processed or modified

* Deleted - when a shipment is deleted

    >[!Note] A 'To' address must be specified in order to enable a template. If you attempt to enable and save a template that does not have a 'To' address, the template will be saved but not enabled.

    ![](assets/images/disabled.png)

### Use for return shipments

Check this option to use this template when a return shipment is processed in Aptean Ship.

### Send schedule

The Send schedule is set from the global default setting in [eNotify Configuration](enotify-configuration.md). To use a custom Send schedule setting for this template, change the Send Schedule field.

* Immediately: Emails are sent as soon as the trigger occurs.

* Delay by: Emails are delayed for a set period of time; Set the delay by manipulating the 00:00 field.

* Time of Day: Emails are sent in a batch at the time you specify; Set the time by manipulating the 00:00 field. The time is based on the email server's time.

* Manually: Emails are sent when the user chooses to send them from the Email Viewer.

### Locations

If you have multiple login locations, check the locations to which this template should apply. Only shipments from these locations will be included when sending this email. Locations are defined by your registration key.

### Conditions

This section lists any existing conditions under which the email should be sent. You can also add, modify, or delete conditions here. You may add up to three "AND" conditions per document. You may add up to three "AND" conditions per document.

### Edit Condition

To edit an existing condition, click on it.

![](assets/images/enotify-properties3.png)

### Add condition

Add conditions by clicking the Add Condition button.The resulting dialog allows you to choose a shipment field, an operator, and a value for that shipment field. For example, to send an email for parcel shipments only, set the Shipment Field "Carrier Type" with an Operator or "Equal to" to a Value of "Parcel".


![](assets/images/enotify-properties4.png)

For some shipment fields, you can type a value into the Value field.

![](assets/images/enotify-properties5.png)

### Delete a Condition

To delete a condition, click the "X" on the condition itself.

![](assets/images/enotify-properties6.png)
