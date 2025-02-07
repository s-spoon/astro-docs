---
title: "Setup your company's sign-in and password policy settings"
draft: false
type: Article
---

From Made2Manage 8.0, to ensure backward compatibility, by default, the sign-in credentials are auto-converted to uppercase letters. Also, Made2Manage incorporates a new password policy to enhance security.

A password policy is a set of rules that ensures users employ strong passwords and thereby ensure a secure system. In Made2Manage, you can opt to enforce the password policies or you can opt not to enforce them.

The Made2Manage password policy recommends that a password:

- Differs from the previous three passwords.

- Incorporates a length of at least eight characters.

- Includes an uppercase letter, a lowercase letter, a number, and a special character.

- Undergoes a periodic change.

If you choose to enforce the Made2Manage password policy, the system strictly enforces the preceding recommendations.

Use the **Login Settings** section of the **System Setup (CSSYS)** page to set up your company's sign-in and password policy settings.

To specify the company's sign-in and password policy enforcement settings

1. Open the System Setup (CSSYS) page.

    1. Select **Utilities** \> **Company Setup** \> **Module Setup** \> **System Setup**.

    Or

    2. Search for **CSSYS** or **System Setup** in the **Navigation box** and then select **System Setup**.

    **System Setup (CSSYS)** page appears.

2. Select the **Allow Auto Login** check box, to allow users to automatically sign in to Made2Manage without typing their user name and password.

    >[!INOTE] Selecting the **Allow Auto Login** check box will map the user's **Windows** user name to their M2M user name when the Windows user name is longer than the M2M user name characters allowed and automatically sign in the user into M2M based on their Windows sign in. For example, if your Domain user ID is **ktimberlake**, you can type this in the **Windows User** field, and map it to an M2M User ID, say **USER2**. You are then automatically signed in as **USER2** using your Windows credentials.

3. Clear the **Convert Login Credentials to Upper Case** check box, if you do not want the system to auto-convert the entered password in the sign-in page to upper case.

    >[!INOTE]By default, Made2Manage selects the **Convert Login Credentials to Upper Case** check box to support backward compatibility.

4. Select the **Allow Password Policy** check box, to enforce the password policy.

    >[!INOTE]When you select the **Enforce Password Policy** check box, the **Convert Login Credentials to Upper Case** check box is automatically cleared.

5. If you are enforcing the password policy, specify the password validity period. In the **Password Expiration Days** field, type or select the password validity period.

    >[!INOTE] The **Password Expiration Days** field appears only when you select the **Allow Password Expiry** check box.

6. On the **Toolbar**, click **Save** to save the settings.

    The message, *System configuration have been modified. Screen will auto refresh in \<number\> seconds. Do not Refresh.* appears.

7. Close the message window.

8. Refresh Made2Manage.