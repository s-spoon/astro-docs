---
title: "Set a user's NotifierTM preferences (R1-NA)"
draft: false
type: Article 
---

The NotifierTM workflow enabling system helps you manage workflow by sending messages to customers, employees, or vendors when predefined events happen. You must set up NotifierTM preferences for each user.

You can also use this window to set whether users receive alerts from the **Events and Actions Notifier**TM, and how often you want to check for the alerts.

To set a user's NotifierTM preferences

1. Select the user and click the **Notifiers**TMtab.(TBD)

2. In the **Check For Notifier**TM **every** field, type the interval in minutes the system checks for Notifier messages for the user.

    Users experience best system performance when this is at least 15 minutes. Made2Manage sends e-mail Notifier messages immediately, regardless of this setting.

3. Select the **Display Popup Notifier**TM **When Received** check box to see a pop-up Notifier message every time a system event triggers a Notifier message set up.

4. Set up Made2Manage for faxing Notifier messages:

    1. From the **Fax Type** list, select the fax software.

        f you purchased and installed Zetafax software, select **ZetaFax Server**. You can use Zetafax to automatically fax documents and reports without manually entering the fax recipient information.

    2. In the **Dialing Prefix** field, type the number(s) your phone system requires to get an outside line, such as **9**.

        >[!TIP]Type a comma (,) for Made2Manage to pause one second before continuing to dial. **For example**, type **9,,** for Made2Manage to dial **9** and then wait two seconds for your phone system to provide the outside line's dial tone.

    3. In the **Area Code** field, ensure that the correct area code is specified.

    4.  If you chose the  **ZetaFax Server**:
        -  Click the **Application** Select File button and select the fax software.
        -  From the **Print Driver** list, select the printer driver that the fax software uses.

5. If your company uses the Events and Actions Notifier, in the **Events \&Actions** area, specify the settings:

    - To allow the user to receive alerts for events and actions, select the **Event Client** check box.

    - In the **Check for Events every... Minutes** field, set how frequently you want Made2Manage to check for Events and Actions Notifier alerts for this user.

    Consider carefully how often you should check for events and actions. Frequent checks and/or a large number of events and actions may adversely impact system performance.

6. On the **Active Form** ribbon, click **Save** to save your settings.

​