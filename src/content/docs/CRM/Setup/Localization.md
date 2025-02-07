---
title: "Localization"
draft: false
type: Article
---



We newly added CRM localization feature in version 10-11. 

CRM localization enables the adaption of a product’s translation to a specific country or region. This makes you understand the product better in your native language. This feature of CRM is accomplished by the usage of the dictionary as a language resource. Localization serves as an instant translator and supports multi-language by employing multiple dictionaries.
## Dictionary Import
With the localization feature added in CRM10-11, please contact Professional Service team for the Initial Dictionary Import.

The dictionary comprises two predominant columns, one being the SystemKey and the other being LocalizedValue. The System Key contains the terms in English and the Localized Value contains the terms in the desired language.

You can also choose to import or edit the dictionary with the keys and the localized value of any language to the CRM.

1. In the Navigation pane, select **Setup** > **Codes** > **Localization**.

    The **Localization** page opens.

2.	Select **Language Resources**.
3.	To create a new Dictionary Import, follow the below procedure:

    a. On the action bar, select **+**(Create New Dictionary) button.

    The **Localization Dictionary** pane opens.
    b. In the **Locale** field, select a desired language from the dropdown.

    A blank dictionary page is created.

    c. On the action bar, select ![](/Modules/assets/Images/002-setup.png) (Import Dictionary Entries) button.
    
    The **Import Excel Dictionary** pane opens.
    
    d.	Select **Browse** and upload the desired file.

    e.	Click save.
    The new dictionary is imported.

4.	To add a new entry in the existing dictionary:

    a.	Navigate to the imported dictionary.

    b.	On the action bar, select +(New Entry) button.

    The **Localization Entry** pane opens.

    c.	In the **System Key** field, enter the new record in English.

    d.	In the **Localized Value** field, enter the translated term in the desired language.

    e.	Click save.

    The new entry is added.
5.	Select ![](Images/003.png) button, to search any record on the dictionary entries.

    You are allowed to edit the entries by selecting the required record.

You can import multiple dictionaries with several entries. On import, you will receive a pop-up displaying the number of records inserted, updated, skipped, and invalid entries, if any. The invalid entries results if any of the values in the System Key or Localized Value is empty. Both columns must have values.

6.	To export the data into an excel:
    a.	On the action bar, select ![](Images/004.png) button.

    b.	Select **Export to Excel** from the options.

    The **Save Data As Excel** pane opens.

    c.	Select Export.

    The dictionary is exported. You may add the required entries to it and reimport the file to CRM.

## Enable Localization

With the dictionary imported, you can now enable the localization feature in CRM 10-11 by a single click. 

a. Select the user account on the top right corner of the CRM page.

 The **User Options** pane opens.

 b. Select **User Settings** from the list.

The **Administrator** pane opens.

c. In the **Locale Code** field, select the desired language.

d. Click save.

e. On the **User Options** pane, select **Applications** > **Clear Cache and Reload**.

f. Click OK.


The application page refreshes and reloads in the language selected in the Locale Code field. The localization is carried out in almost all the modules of CRM and a few of them are listed below:

1.	Basic Components (Navigation Pane, Dashboards, Lists, Charts, Labels, Messages, and more)
2.	Business Process/Workflow Actions
3.	Email Template
4.	Import
5.	Google Map
6.	Customization Module
7.	Outlook Add-In
8.	ERP Integration
9.	Portal
10.	CTI Integration
11.	Report
12.	Gmail Add-In

All of the current features of the CRM application continue to operate in the same manner after localization.

### Google Map

In the process of localization of Google Maps, the locale is applied as a parameter to the Google Map which is manually launched in the CRM application and the map is localized to the desired language. . Just like you manually launch the Google Map in the browser and switch the language. 


### Outlook and Gmail Add-In 

With the localization of Gmail Add-in, all the labels could be localized along with the Gmail language. 
With the localization of Outlook Add-in, all the ribbon buttons and login page could be localized along with the Outlook language. After login, any pop-up window could follow the user locale selected in Aptean CRM Application. 

## Exceptions of Localization in version 10-11

During localization, if an English key is included in the dictionary, it will translate the entry of  the exact term everywhere. As per the locale, there will be a chance that a Company or contact name gets translated if it was entered in English. 

The localization feature is not applied to the textbox in the Edit Mode so as to maintain the original database.

### Search by Localized Value

You can search records in Aptean CRM Application with the exact language they were entered. 
For any out-of-box records in CRM Application, such as the dashboards and user controls, you can search them in English to find the results and not with the language you have opted in the locale field. 
For any new records you entered in the designated language, they could be searched by the designated language and results are obtained.

### Currencies and Locale

You will find the currencies and the Locale Code in English, and they are not translated as they are universal.
For example : EUR , German(Germany) and more.

### Email Template
 
You have the Email Templates localized in design mode when dragging and dropping the HTML parts. However, if the templates are added which are acquired from the other resources for customization, they are not localized in the designated language.

### Outlook Add-In
You can find the various components of Outlook that are localized such as Contact, Email, Appointment and more. However, the complex function and the columns added will not be localized in the designated language, for example, Add Columns. We would recommend that you perform such complex functions in Aptean CRM Application instead.

### Login Page

You have the login page in English for the first time. On selection of the desired language in the locale field, it is cached and reloaded in the desired language from the next time.


