---
title: "Lead Scoring and Event Types"
draft: false
type: Article
---


Lead scoring is the automation of the lead qualification process and helps to ensure  that quality leads receive the proper attention. This is accomplished by establishing a rating system for events that occur during the sales cycle. 

Aptean CRM application increases or decreases a record   score each time particular events occur. Scoring may be triggered by various types of events including the creation of activities, email clicks, website visits, field updates, and so on. 
Aptean CRM tracks **Lead Score** for four entities; Visitors, Leads, Contacts, and Companies. The range for a lead score is configurable, by default it has a minimum value of 0 and a maximum value   of 100. In other words, it cannot increase beyond 100 or decrease below 0. When a visitor becomes a lead, or a company and/or contact is created from a lead, the new item inherits a lead score. Similarly, when the score   is changed for a lead, the related contact and/or company score will change as well. 

Scoring is based on configurable events on the Event Types Setup screen in Aptean CRM(**Setup** > **Codes** > **Communication** > **Event Types**). Each event may increase, decrease, or set the score to a specific value. For example, when a contact is created from a lead record, the lead score is increased by a value of 10. When a contact clicks on the **Unsubscribe** link in an email, then the lead score may be set to 0. Aptean CRM provides the following example events out-of-the-box.


* When a company is created from a lead, increase score by 10.
* When a contact is created from a lead, increase score by 10.
* When an opportunity is created for a contact or company, increase score by 20.
* When opportunity status is set to lost, set score to 0.
* When a web form is submitted, increase score by 5.
* When information is requested (Activity created), increase score by 5. 
* When trial is requested (Activity created), increase score by 10.
* When the website is visited, increase score by 1.
* When the product page is visited, increase score by 3.
* When an email is opened, increase score by 1 .
* When email subscription is opted out, set score to 0.
* When demo is scheduled (Activity created), increase score by 10. 
* When lead email and phone number is populated, increase score by 2.
* When lead status changes to Bad Data, set score to 0.
* When lead is inactive for x days (no website visits), decrease score by 2  .

Lead Score is visible on the Contact, Company, and Lead Pages. In addition to the score, you can view the last time it was changed (on the Contact/Company page, e.g. 30 as of 1/17/2022). By clicking on the Lead Score, it also displays the maximum score achieved, for example: Score 30, Maximum Score 41. 
Lead Scores are also available to List pages so you may search or sort by these values. Choose   **Options** > **Show All** to **Select Fields** and locate the score value.  

