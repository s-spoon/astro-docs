---
title: "Overview of User Roles and Permissions"
draft: false
type: Article
---

The users of the Aptean AppCentral can vary based on their individual roles and associated permissions.

| **User Role**| **Description and Permissions**|
|-|-|
|Seed User | **Description** <br> <ul><li>A Seed user is the initial user of Aptean AppCentral, responsible for activating, configuring, and accessing applications.</li><li>A Seed user is designated as Admin in the application.</li></ul>**Permission** <ul><li>The Seed user has full and unrestricted access to Aptean AppCentral.</li><li>Seed user has permission to create, edit, and manage group authorization under **Access Management** section. <br> Navigate to **User Center** > **Access Management** > **Groups** > **New Group** or **Edit Group** > **Permissions**.<li>The Seed user can grant Admin role privileges during the user creation process. <li>The seed user can delete an admin user.</li></ul>|
| Admin User| **Description**<ul><li>The Admin user role inherits the same permissions and administrative rights as the Seed user, enabling them to activate, configure, and access applications.</li></ul>**Permissions**<ul><li>An Admin role have unrestricted access to Aptean AppCentral.</li><li> An unlimited number of admin roles can be created.</li><li>An admin user has the ability to delete standard user roles but does not have permission to delete the seed user.</li></ul>|
|Standard User| **Description** <ul><li>A standard user has basic access to the application and is usually used for regular tasks.</li><li>These user roles have limited access due to default settings and lack specific roles or permissions like an Admin role.</li><li>Standard Users can be created based on their username.</li></ul> **Permissions** <ul><li>The standard user role has restricted access, limited to the specific applications they have been assigned, and does not have any admin or seed user privileges.</li><li>A standard user do not have permission to delete the seed user role or admin user role.</li><li>If a standard user role does not have access to certain applications, the **Open** button on the product tile is disabled, and they can view **Talk to Admin** button to request access to the product instead.</li></ul>|

>[!Note] In the UI Path, (**User Center > Access Management**), if you cannot see Groups and Users under the Access Management section, it means your role does not have the required permissions to access the Users and Groups settings.