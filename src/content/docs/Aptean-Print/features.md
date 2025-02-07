---
title: "Features"
draft: false
type: Article
---

The supportive features of REST API

1. Multi-tenant

2. HTTPS (SSL)

3. List Discovered Printers

4. Create and View Print Jobs

5. Print from URL or inline file

6. Queue Jobs until Agent online

7. Support for Redundant Agents

The supportive features from the agent

1. Printer Discovery

2. Command Execution

3. PDF Printing

4. Auto-reconnect to cloud

5. Remotely upgradable

6. Windows Service Installer

7. No pre-requirement (embedded JRE)

## Component Diagram

!Screenshot (125).png-04ed3ffd-87ed-4e43-a0c2-c354072ca3ec.png)


## Quick Start Guide

This guide will walk you through the steps to create a print service account, install the print agent on a Windows client, and queue a print job.

## Create an account

An account is required for each tenant or customer. It isolates your agents, printers, and jobs from other users of the service.

An account is created using the `POST /print/register` operation on the REST API. This operation requires you to log in using an existing account and API key. The newly created account will be linked as a child of the currently authenticated account. 
    
> [!Note] This operation does not require authentication in Dev Mode and if not authenticated, will not be associated with a parent account.

The Swagger documentation can be used to invoke the Register operation. Open up the register operation, click on the **Try it out** button, replace the values with your own, and click **Execute**.

### Example Request
```json
    {
        "company": "My Test Company",
        "group": "Acme ERP",
        "contact": "John Doe",
        "email": "john.doe@aptean.com"
    }
```

> [!Note] Only `@aptean.com` email addresses are permitted in Dev Mode.

### Example Response

```json
    {
        "resultCode": 200,
        "accountId": "4c77b575ce594e6a904fbc95545f70cd",
        "apiKey": "API2805c983a36d4c24ad6906f84a120e9b",
        "agentKey": "AGTd042c0e65c6a443a94fe41bde3e0b53a"
    }
```

Save the `accountId` and access Keys. The `agentKey` is used by the on-premise print agent.

The `apiKey` is used by the applications generating print jobs via the REST API. The key values are prefixed with `AGT` and `API` to help distinguish the keys.

> [!TIP] If you lose your account ID or keys, they can be recovered using the recover web service. Calling this operation with your email address will send you a message with the list of accounts and keys associated with your email.