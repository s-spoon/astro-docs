---  
 
title: "Session Timeout for EAM Mobile"  
draft: false 
type: KB Article
 
---

When a user logs into the EAM Mobile, a session is initiated. If the user is inactive for a specified
period (Idle Session Timeout period), for example, 60 minutes, the system initiates a countdown
for session expiration. The moment the user becomes active within the set timeout period, the
timer will be reset to 60 minutes. The **Idle Session Timeout** can be configured in the Aptean
EAM system Setup Option and defines the period of user inactivity that triggers the countdown.

## FAQ

**Q1: How to resolve unexpected session timeout for EAM Mobile?**

**Solution**:   
If you encounter unexpected **Session Timeout** messages on your EAM Mobile, verify
that the session idle timer is configured correctly in the **Aptean EAM** system **Setup Options**. By
default, the idle session timeout is set to 60 minutes. If this value is altered, ensure that the idle
session timeout is greater than 5 minutes and ideally not set below 30 minutes.

**Q2. How to override default session timeout in Aptean EAM?**

**Solution**:  
Log in to the Aptean EAM and follow the flow to override default session timeout:
1. Navigate to **Setup** > **Setup Options** in the navigation pane. The **Setup Options** tab will
open in the top bar.
2. In the grid, search for and select **EAM Options** > **Session Management** > **User idle**
**session timeout (minutes)**.
3. Click the **Details** icon in the contextual panel; this action will open the **Window Value For:
Session Timeout** on the right-side panel.
4. The **Default Value** is set to 60 minutes. To edit the timeout value, enter the desired value or use the **Up** and **Down** arrow to set the value and click **Save**.

    ![](../assets/kb-articles/Screenshot%202024-01-17%20152204.png)

