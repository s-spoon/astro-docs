---  
 
title: "Session Timeout"  
draft: false 
type: KB Article
 
---

When a user logs into the EAM system, a session is initiated. If the user is inactive for a specified
period (Idle Session Timeout period), for example, 60 minutes, the system initiates a countdown
for session expiration. The moment the user becomes active within the set timeout period, the
timer will be reset to 60 minutes. The Idle Session Timeout can be configured and defines the
period of user inactivity that triggers the countdown.

## FAQ

**Q1: What times out when?**

**Solution**:  
EAM times out after 60 minutes. The Tenant Portal and Task Management don't
timeout.

**Q2. How to override default session timeout in EAM?**

**Solution**:  
Flow to override default session timeout in EAM:
1. Navigate to **Setup** > **Setup Options** in the navigation pane. The **Setup Options** tab will
open in the top bar.
2. In the grid, search for and select EAM Options > Session Management > User idle
session timeout (minutes).
3. Click the Details icon in the contextual panel; this action will open the Window Value For:
Session Timeout on the right-side panel.

4. The Default Value is set to 60 minutes. To edit the timeout value, enter the desired value or
use the Up and Down arrow to set the value and click Save.

    ![](../assets/kb-articles/Screenshot%202024-01-17%20152204.png)

**Q3: What control does the user have over it?**

**Solution**:  
If users have access to modify or change EAM options, they can adjust the Idle Timeout
value. However, users can't set the timeout value for longer durations or unconventional values,
such as 1 day or more.

**Q4: What happens to a user when the timeout is reached?**

**Solution**:  
When the session timeout is reached, users receive the following prompts on the
screen:
* Your session has been timed out. Please log in again. Click **OK**.

    ![](../assets/kb-articles/Screenshot%202024-01-17%20144552.png)

* You are no longer logged into the system. Please close the window.

    ![](../assets/kb-articles/Screenshot%202024-01-17%20144629.png)

* **To resolve**: Close the window and log in once again with your user ID and password.

