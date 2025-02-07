---  
 
title: "Troubleshooting Query Issues in ApteanEAM"  
draft: false 
type: KB Article
 
---

If you encounter issues with queries not being visible or accessible in the Aptean EAM system, you
can try follow these troubleshooting steps to resolve the problem:
* The list of queries visible in the EAM and the mobile application is determined by the
security access of the query. A User's Security group is assigned public queries in the
**Query Wizard**, and that list of queries, in addition to the user's private queries, are what the
user can access in the modules.

* To troubleshoot this issue, initially, the user can log into the EAM application to check if they
can see the queries they are expecting. If the user does not see any queries in EAM, it may
indicate an issue with their **Security group** assignments or **Query permissions**.
    1. Obtain the list of the user's **Security group** assignments.

    2. In the **Query Wizard**, validate that there are queries assigned to that group for the query module in question. Refer to [Defining Public Access](https://webappsprod.eam.apteancloud.com/OnLineHelp/Aptean_EAM.html#GuideTopics/Query%20Wizard/Defining%20Public%20Access.htm?TocPath=User%2520Guide%257CSetup%257CQuery%2520Wizard%257C_____4) for more details.
    3. If the user is expecting to see a certain query, ensure that it is included in one of the
    user's Security groups.

* For mobile query access, specifically, validate the query assignments for the following
Security groups, and validate that the user is assigned to the appropriate one. Security
group assignment to users is managed in the Security module, under **Assign User
Access**.

1. **Technicians** should be assigned to the Mobile Technician group. The user should
also be assigned to the *Corelicense* group.

2. **Work Requesters** should be assigned to the Mobile Requester group. The user
should also be assigned to the *Requesterlicense* group.
3. **Storeroom personnel** should be assigned to the Mobile Stores group. The user
should also be assigned to the *Corelicense* group

## Reference Documentation

For more detailed information on assigning queries to Security groups, Editing queries, and using
the Query Wizard, refer to [Query Wizard](https://webappsprod.eam.apteancloud.com/OnLineHelp/Aptean_EAM.html#GuideTopics/Query%20Wizard/Query%20Wizard.htm?TocPath=User%2520Guide%257CSetup%257CQuery%2520Wizard%257C_____0) section, in User guide.

These steps should help you troubleshoot and resolve issues related to query visibility and access in the Aptean EAM system. Ensure that all configurations are correctly set up as per the
user’s role and required access permissions.

