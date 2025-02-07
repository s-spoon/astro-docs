---  

title: "Login"   
draft: false 
type: Article

---

You can log in to the Aptean EAM via **Aptean Tenant Portal**. For more details on log in, refer to the EAM Tenant Portal User Guide. 

## Logout

To log out from the application, navigate to [Settings](Settings.md) which is located on the top right corner of the home page and click **Sign Off**.  

The following are the guidelines and limitations for accessing Aptean EAM: 

  * On logout of EAM, it redirects to Tenant portal login screen, where you can enter your credentials again to access  EAM. 

  * On logout of EAM, if you attempt to reopen the app from the tenant portal, make sure that you re-enter their SSO or Portal log in credentials. The session will be active unless you log out of the tenant portal or any other apps which were launched previously when logged out of EAM.

  * If you closes the EAM window, and relaunch the app, it automatically log in back to EAM without need of log in credentials again. 

  * When you launch EAM more than once (for same user, or plant, and DB), logging out of one session will not automatically log out of the other active EAM sessions. 

> [!Note]
> If the Browser Tab or Window is closed, the session remains active in the
server and ends only when it has timed out. Session time out is 9 hours. If
you have kept the session idle for 9 hours and try to access the application,
it will display the message "**Your last session is either timed out or terminated by the administrator, press ok to relogin**". Selecting **OK** will
logout the application and navigates to login screen for re-log in.

