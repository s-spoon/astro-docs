---  
 
title: "Resolving Active Session in Another WindowBrowserSystem Error"  
draft: false 
type: KB Article
 
---
## FAQ

**Q1. When attempting to log in, users may encounter the following error message: "Your
session is currently active in another window/browser/system. To log in here, log out
from the active session."**

![](../assets/kb-articles/Log%20in%201.png)

**Solution**:  
This error occurs when the plant is using the named licensing.
A named user license is a software license designed for a specific group of people. Each permit is
individualized and can only be accessed by the people who are registered to use it. For example,
only the five selected individuals can access and use the software if you have a five-named user
license plan.
* If **NO**, proceed to report the error to customer support.
* If **YES**, the error indicates that someone is logged in using the same user ID in another
browser session.
* Named user licensing allows only one active session across one computer and browser.
However, multiple tabs in a single browser session are permitted.

To resolve this problem:
* The plant administrator must access the Session Management module from the Tenant
Portal home page to identify other active sessions with the affected user ID.

The administrator can choose either of the following actions:


1. **Disconnect other sessions**:  
Disconnect (or kill) the other sessions associated with the user ID. This action will log
the user out of those sessions. Killing a session will result in losing any unsaved data.

2. **Identify and communicate with the user**:  
Identify the user logged in with the same ID on a different device and ask them to log
out.

After the administrator has taken the necessary actions, the original user should be able to log in
without encountering an error.

> [!Note]  
> Killing a session will disconnect the user and may result in data loss.
Communicating with the user(s) involved in the active sessions is crucial to minimize disruptions and ensure a smooth resolution.

