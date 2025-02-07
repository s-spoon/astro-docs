---
title: "Web Visitor Tracking"
draft: false
type: Article
---



The Web Visitor Tracking feature logs how prospects come to your company site, what interests them, what pages are visited, and how often they are viewed. 

Visitor tracking is done by inserting a small chunk of JavaScript   into pages of a website, or simply the root page of the site, which gathers visitor browser information that is sent to Aptean CRM. 
The Setup module provides an option to generate and copy this code, tailored to a particular Aptean CRM site, which may be used for hosted or on-premise implementations. See **Setup** > **Web Site Integration** > **Tracking Code**. See Web Forms section for more information.  

The web service on the backend provides the script   to a page which executes each time it loads. All required components for the script are loaded in a manner to avoid cross site scripting calls (via an IFrame). 
Visitor and visit information makes use of a cookie. The cookie stores information to identify the visitor and details of the current visit, including the time the last page was loaded. The cookie is periodically updated with data to track the time spent on the page, and also stores information from the browser, such as IP address, calling page, and browser type. 
Information stored in the cookie is sent to Aptean CRM each time a page is loaded to build a history of pages navigated during a visit. 

There are several panels to display the visit tracks. You can see how a visitor came to your page and how long they spent viewing it.  
Default Badges and Panels in Marketing Dashboard:
* Website Visitors Today
* Visits By Date
* Page Visits

There are some other available badges or panels that can be added by clicking Options > Select Panels > Add Panel: 
* Website Visitors This Week
* Visits By Organization
* Contact Visits
