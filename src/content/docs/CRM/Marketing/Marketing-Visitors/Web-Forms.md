---
title: "Web Forms"
draft: false
type: Article
---


The Web Forms feature lets you generate HTML forms that include logic to insert data into Aptean CRM database. This feature may be used to populate the lead table through forms that are submitted to request product information, register for an event, or sign up for a newsletter. 

Web Forms are created in the Setup module(**Setup** > **Web Site Integration** > **Web Form**) by defining basic information about the form and the type of data you wish to gather. Generated with each form are web service calls to populate the Aptean CRM database with values submitted with a form.

Web Form submission is associated   with visitor tracking. When a form is submitted, an Aptean CRM Lead record is created, including the data entered on the Web Form (i.e. name, email address, and phone number). The visitor history data is included in the new record.

The following steps describe how to use the **Web Form**  feature. 
1.	On the left side navigation pane, click **Setup** > **Web Site Integration** > **Web Form**.

    **Web Forms** list page opens.
2.	Open a form record in main view interface. For example: **Lead**.   
3. In the **Form** tab, it displays the type of data you wish to gather, for example:  First Name, Last Name, Email, and more. Click  Add (+) icon to add more fields.
4.	You can also add some actions such as sending a confirmation email under **Actions** tab. 
5.	Go to **Generate** tab and click **Generate**.   
6.	Click **Copy to Clipboard** button in the **Script** groupbox. 
7.	Paste the content to a html page. You can then embed this html page to your website. 
8.	Next time when a web visitor launches this html page which opens the form automatically, the visitor   fills in the information you want to gather, for example: First Name, Last Name, email address, and more.  
9.	Click **Submit** in the form  , and a new Lead will be created in Aptean CRM if it doesn’t exist. The data entered on the form will also be copied over to the new Lead. 
