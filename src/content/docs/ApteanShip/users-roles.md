---

title: "Users & Roles"
draft: false
type: Article

---

The Users & Roles part of the SMS allows administrators to create and manage Aptean Ship users, assign user roles, and set access to Locations. This gives you complete control over user rights and information. To access it, log into the SMS and select **Users & Roles** from the side menu.
### Users

In the User section, you'll see the number of existing users out of the number of allowed users, along with the default Admin user, and any other users that have been created. You can click Edit to edit an existing user's details. After making changes, click the Save Changes button. Click **Add User** to set up a new user.

> [!Note] You can delete users however you cannot delete the default Admin user.

### User Details

You can set up the following details for users.

* First and Last Name: The user's name.

* User Login: This field will populate automatically based on the first and last name of the user, but can be modified as you wish.

* Email: Enter the user's email address.

* Photo: Upload an image to represent the user (optional).

**Locations**

Locations are defined in the SMS by name and a code. Aptean Ship data is stored per location. Your subscription to Aptean Ship may include multiple locations that can represent either physical or virtual locations. Users will log into a specific location and will see the data that belongs to that location, including the Source Company or Source Documents.

Select the Location(s) that the user can log into from the drop-down list or click the **Create Location** button to define a new Location.

**Roles**

Assign the roles associated with a specific user from the drop-down list. This allows you to match users with roles that specify permissions to Aptean Ship components. You can also click the Create Role button to define a new role.

![users-and-roles-1](assets/images/aptean-users-and-roles-1.png)

## Roles

There is already a set of default roles created for you in the SMS, and you can also create new roles. Each role is attributed with one or more permissions for an Aptean Ship module; you then assign Aptean Ship users to one or more roles.

### Default User Roles

Some roles are set up by default in the SMS; these roles may be modified. The following list shows the default access rights for each type of user role.

* Admin: Access to all of Aptean Ship, Server, Dashboard, and Aptean Ship API functions.

* Power Shipper: Access to Shipment Processing and History, Setup, and eNotify.

* Shipper: Access to all Aptean Ship functions.

* Subscription: Access to all Subscription Management System functionality.

Some roles you may want to create:

* Dashboard User: This user would have access to the Aptean Ship Dashboard, Printing Notification, Recent Shipments, and Help. Users with Dashboard-only permissions can log in to Aptean Ship and access all Dashboard functionality. They can initiate returns by clicking the “Create returns” button on the shipment grid, but can only save the return shipment as a Draft. Any user with shipment processing permissions can then log in and complete the return.

* eNotify: Access to eNotify, including the eNotify Template Designer.


### Adding Roles

In addition to the default user roles, additional roles can be created.
1. Under Roles, click **Add Role**.

2. On the Add Role page, enter a name in the Role Name field.

3. For each role, you can assign individual permissions or groups of permissions. (See Permissions Detail below.) Expanding a group reveals all the permissions that belong to that group. To assign all the permissions for a particular group, place a check mark next to group node. To assign permissions from within a group, place a check mark next to the individual items.

![users-and-roles-2](assets/images/aptean-users-and-roles-2.png)


### Permissions Detail

This section explains the permissions available in each group and the actions available to users assigned each permission.

| Group | Permission | Action |
| --- | --- | --- |
| Shipment Processing | Edit Shipment | Can change Shipment status to "Open" |
| Modify Sender/Recipient | Can modify Sender/Recipient address |
| Modify Ship Via | Can change Carrier/Service |
| Modify Billing Type | Can change billing type, account address, account number, international billing duties and taxes |
| Ship | Can Ship/Process and view Setup Home and Printing Profiles |
| Delete | Can delete shipments |
| End of Day | Can view End of Day screens |
| Export | Can configure shipment export |
| Import | Can configure and use the Shipment Import feature |
| Manual Ship | Can Ship/Process a shipment not connected to a source interface |
| Shipment History | View Shipment History | Can view Rate/Ship History and End of Day History. Has access to Help, Printing Notifications, and Recent Shipments. No access to Setup. |
| Setup | Setup Company | Access to Company Setup |
| Setup Preferences | Access to Setup > Preferences |
| Setup Source Interface (FSI) | Can configure FSI settings |
| Change FSI interface | Can change the active FSI interface |
| Setup Printing | Can configure printers/printing |
| Setup Scale Interface | Can configure scale settings |
| Setup Carrier Interface | Can configure carrier settings |
| Setup Freight Rules | Can configure Freight Rules |
| Configure Tab Order | Can configure tab order |
| Shipment Defaults | Can define Shipment Defaults |
| Ship Via Rules | Can set up and configure Ship Via Rules |
| Maintain | Maintain Inventory | Can perform Inventory maintenance |
| Maintain Packaging | Can set up and configure Packaging |
| Maintain Groups | Can perform Group maintenance |
| Maintain Customers | Can perform Customer maintenance |
| Maintain Brokers | Can perform Broker maintenance |
| Maintain Carriers | Can perform Carrier maintenance |
| Maintain 3PL | Can perform Third Party Logistics company maintenance |
| Maintain Third Party Addresses | Can perform Third Party Addresses maintenance |
| Maintain Third Party Insurers | Can perform Third Party Insurers maintenance |
| Maintain Importers | Can perform Importers maintenance |
| Maintain Hazardous Materials Profiles | Can perform Hazardous Materials Profiles maintenance |
| Subscription Management | User Management | Can perform User and Role maintenance |
| Subscription | Can make changes to the Aptean Ship subscription |
| Locations | Can add, update, and delete Locations. |
| Carrier Interfaces | Can set up and edit Carriers |
|  | Data | Can access Manage Data and data replication functionality |
| Dashboard | Dashboard User | Can access the Aptean Ship Dashboard |
| API Shipment Processing | Aptean Ship API User | Can access Aptean Ship API functionality |
| eNotify | eNotify Template Designer user | Can create and modify email templates in the eNotify Template Designer |
| eNotify Email Viewer user | Can view all generated emails in the eNotify Email Viewer |

 

