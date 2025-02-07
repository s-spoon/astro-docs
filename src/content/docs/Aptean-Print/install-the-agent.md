---
title: "Install the Agent"
draft: false

type: Article
---

Download the installer for the Aptean Print Agent for Windows.

* Windows Installer

## Installation steps

1. Run the ApteanPrintAgentSetup exe file.

2. The setup opens a welcome page, Click **Next**.

3. Select a folder path for Aptean Print Agent to be installed. (Go with default);

4. Enter the `accountId` and `agentKey` for the respective environment and validate. Remember to use the key starting with **AGT** for Agent Key. (For the credentials, contact the Aptean representative.)

    1. If no credentials are entered and it tries to validate, it will prompt a pop up to enter credentials or to skip.

    2. Upon validation, if the Validation is success, click **Next** and move forward.

    3. If validation fails, it prompts whether to continue with wrong credentials. If okay with it, User must change the keys after the installation in the application.yaml file. Click **OK** to proceed.

> [!Note] If no credentials entered and it tries to skip step-4 by clicking **NEXT**. It will prompt to update keys after the installation in the application.yaml file. Click **OK** to proceed.

5. For Service, log on as Local System and go with default. Click **Next**.

    1. To connect to network printers, Choose Network service and enter the credentials. Click **Next**.

      > [!Note] (You must have privileges (**Admin Privileges**) to run services. If not, the service is disabled to start).

    2. If the entered credentials are correct, it’ll prompt a pop-up with log on successful message. Click **OK**.

6. This step is for **existing user only**, where a choice is given to install freshly or to go with the existed configuration file i.e., application.yaml file (If Upgrade is chosen and new keys are entered during this installation, they are only replaced in the existed configuration file).

7. Click **Install** and **Finish**.

8. The Agent is installed as a Windows Service and should start up automatically.

## Service Logon

This helps to configure the system default printers and the network printers. The following steps describes the local setup logon post the installation:

1. Open Services and select **Aptean Print Agent**.

2. Right click on **Aptean Print Agent**.

3. Choose properties and move to Log on.

4. Select Log on as to this account and give credentials.

5. Click **OK**.

> [!Note] After applying Service Log on credentials, Do a restart of services.

## Agent Configuration 

The print agent configuration file is called `application.yaml`, located in the installation directory, by default:

   C:\Program Files (x86)\ApteanPrintAgent\application.yaml

It uses YAML syntax. Agent options are children of the top-level `printagent` property. Other configuration properties supported by Spring Boot may be specified as well, such as to change logging levels.
The accountId and agentKey can be set and validated during the installation setup process. These input keys are directly updated in the `application.yaml` file.

Example:

```yaml
printagent:
  accountId: 4c77b575ce594e6f904fbc95545f70cd
  agentKey: AGTd042c0e65c6a453a94fe41bde3e0b53a
  allowupdate: true
  priority: 1
  computerName: MyPrintServer
  tags: ["Chicago", "Reports"]
  printer-name-exclude: printer1,printer2

logging:
  level:
    com.aptean: TRACE
```

> [!Note] To fetch the printer name, follow these steps:
> 1. Navigate to **Settings**.
> 2. Choose **Printers & Scanners**.
> 3. Select the desired printer.
> 4. Click **Hardware Properties**.
> 5. The printer name will be shown.

## Properties

The following table describes the available child properties of printagent:

| Property             | Description                                          |
|--------------------- | -----------------------------------------------------|
| `accountId`        | The Aptean Print Service account to connect to. |
| `agentKey`         | The Agent Key associated with your account. |
| `allowupdate`      | Setting this to `false` will prevent the agent from downloading updates.  Default is `true`. |
| `commands`         | See **Configuring Commands** |
| `computerName`     | The name exposed by the agent to the cloud service. Valid characters are letters, numbers and the hyphen.  Any other characters will be stripped.  If this property is not specified, the name is taken from local environment variables COMPUTERNAME or HOSTNAME. |
| `max-jobs`         | The maximum number of print jobs (including commands) that can run concurrently.  Defaults to 10. |
| `max-queued-jobs`  | Set Queue depth when max-jobs is either set too low to maintain jobs delivery order or number of jobs is very high.  Defaults to 200. |
| `priority`         | The priority of this agent when sending print jobs which don't specify a computerName. |
| `server-url`       | The Web Socket URL of the cloud server to connect to.  Default: `wss://apteanprintservice.azurewebsites.net/printconnector` |
| `heartbeat-schedule` | Agent heartbeat in seconds (0 to 60) to check connection with print service. Default 60 seconds |
| `max-printer-chunk` | Max chunk size to register at a time during agent registration or refresh.  Default 10 at a time. |
| `printer-name-selectors` | Comma separated keywords used to filter printers, useful for printing to selected printers only. Default will list all printers. |
| `printer-name-exclude` | Comma separated keywords used to filter printers, listed printers will be ignored by the application. This take precedence over printer-name-selectors. |
| `tags`             | A list of custom tags to associate with this agent, to help support product features such as filtering and access controls. |
| `MailConfig`        | Configuration for sending mail on agent reconnects. See the child properties of this below. |
|

The following table describes the child properties of MailConfig:

| Property             | Description                                          |
|--------------------- | -----------------------------------------------------|
| `smtp-auth`        | Set this `true` if your mail host needs authentication. Defaults to `false`.|
| `smtp-host`        | Mail host to be used for sending the mail. for example : smtp.gmail.com |
| `smtp-port`        | Smtp port for sending mail. For example: 587 is used for gmail and email.aptean.com uses 25. |
| `smtp-ssl-protocols` | SSL protocol to be used for sending mail. Default is set `TLSv1.2`. |
| `sender-emailId`   | Email id of the sender from which mail will be sent. |
| `sender-password`  | Sender password. Needed if smtp-auth is set to `true`. |
| `recipient-emailId`  | Email Id of the recipient. |
| `number-of-reconnects-between-mails`  | Setting the frequency of mails sent after reconnects. Defaults to 100. |
| `max-mails`  | Maximum number of mails that will be sent after disconnection. Defaults to 5. |

For Example:

```yaml
printagent:
  # ... other settings ...
  MailConfig:
    smtp-auth: true
    smtp-host: smtp.gmail.com
    smtp-port: 587
    recipient-emailId: johndoe@gmail.com
    sender-emailId: cloud.print@gmail.com
    sender-password: abcshteuwrei
    number-of-reconnects-between-mails: 100
    max-mails: 5
```

## Overriding Configuration

Any configuration property specified in `application.yaml` can be overridden by variable means, such as environment variables, command line arguments, per the Spring Boot Configuration framework.

For example, an environment variable called **PRINTAGENT_COMPUTERNAME** will override the value set in the configuration file.

## Verify Agent Connection

You should now see the agent associated with your account via the REST API.

You can execute the ``GET /print/agents`` operation via the Swagger Documentation or simply hit the URL directly in your browser:

**https://print.api.apteancloud.com/api/v1/print/agents**

This operation requires Basic HTTP authentication.  Your `accountId` is the username and `apiKey` is the password.

## Example Response

```json
    {
        "connected": true,
        "accountId": "4c77b575ce594e6f904fbc95545f70cd",
        "computerName": "APT01-G4BH5H2",
        "reconnects": 0,
        "clientVersion": "0.5.0",
        "clientBuild": "85",
        "links": [
            {
                "rel": "self",
                "href": "http://print.api.apteancloud.com/api/v1/print/agents/APT01-G4BH5H2"
            },
            {
                "rel": "printers",
                "href": "http://print.api.apteancloud.com/api/v1/print/agents/APT01-G4BH5H2/printers"
            }
        ]
    }
```

## Get list of printers for a Agent

With the agent connected, listing available printers, printer specific supported attributes and printer status can be got using the `GET /print/printers` REST API.
Attributes like print, orientation & paper-size lists multiple options supported by the respective printer. Attributes like copies, page-ranges are attributes which will help user print number of copies and page range as the names suggests. Finally attributes like media-printable-area and printer-resolution allows the user to print using margin controls and with specific resolutions in DPI. 

No request parameters needed. 

## Example Response

```json
{
  "resultCode": 0,
  "printers": [
    {
      "name": "\\ban1prt01svr01\PRINTER-01",
      "type": "printer",
      "computerName": "APT04-DKCL8Y2",
      "attributes": [
        "copies:copies",
        "collated:uncollated,collated",
        "print:monochrome,color",
        "orientation:portrait,landscape,reverse-landscape",
        "paper-size:na-letter,na-legal,executive,tabloid",
        "page-ranges:start, end",        
	"media-printable-area:x, y, length, width",
        "media-tray:Form-Source,top,middle,bottom,side,tray1,tray2",
        "sides:one-sided,two-sided-long-edge,two-sided-short-edge",
        "printer-resolution:crossFeedResolution, feedResolution"
      ],
      "defaultPrinter": true,
      "status": "accepting-jobs",
      "links": [
        {
          "rel": "self",
          "href": "http://print.api.apteancloud.com/api/v1/print/agents/APT04-DKCL8Y2/printers/%5C%5Cban1prt01svr01%5CPRINTER-01"
        },
        {
          "rel": "agent",
          "href": "http://print.api.apteancloud.com/api/v1/print/agents/APT04-DKCL8Y2"
        }
      ]
    }
  ]
}
```

## Queue a Print Job

With the agent connected, a print job can be run using the `POST /print/jobs` operation on the REST API.
Only the pdf formatted files are being supported by Cloud print.

## Print Job Request Parameters

The following table describes the supportive parameters to pass in the job request for a printer:

| Parameter           | Description                                          | 
|---------------------| -----------------------------------------------------|
| `computerName`   | The computer to send the print job. |
| `printerName`     | The printer to send the print job to. |
|`jobTitle`         | The title of the job, which will be seen in the print queue of the computer. | 
| `jobSource`      | The source of the job. |
| `filename`        | To specify the file with a name.  | 
| `queueTimeout`    | The number of seconds the print job will be kept in queue, if the print agent is not currently connected. If set to 0, the default, the job will immediately fail if the agent is not connected.|
| `base64content`   | A base64 encoded file content. Either this property or url must be set.  If both are set, this value takes precedence. | 
| `url`             | A url of a file to download. Either this property or base64content must be set.  If both are set, base64content takes precedence. |
| `urlAuthType`     | If a url is set and requires authentication, this value must be sent to Basic or Digest.|
| `urlAuthUser`     | The username to use when accessing the url, if urlAuthType is set to Basic or Digest. | 
|`urlAuthPass`      | The password to use when accessing the url. | 
| `attributes`      | List of attributes to pass in print command. | 
|

## Attributes

Attributes are optional and used for customised printing only. The following table describes the supportive attributes by cloud print:

| Attribute             | Description                                          |                  Supported Values        |
|---------------------  | -----------------------------------------------------| -----------------------------------------|
| `copies`            | Set the number of copies for a job.                  | copies|
| `orientation`       | The way the content of the document is placed on the page. | landscape, portrait, reverse-landscape, reverse-portrait | 
|`finishing`          | To apply some kind of binding to each copy of each printed document in the job. |  bind, cover, edge-stitch-left, edge-stitch-right, edge-stitch-top, edge-stitch-bottom, saddle-stitch, staple, staple-bottom-left, staple-bottom-right, staple-dual-left, staple-dual-right, staple-dual-top, staple-top-left, staple-top-right |
| `print`             | Set the color mode. | color, monochrome|
| `print-quality`     | Set the print quality level | normal, high, draft |
| `page-ranges`       | Set the range of papers for a job.| (start, end) |
| `printer-resolution`| To specify an exact resolution supported by a printer or to be used for a print job. | [crossFeedResolution, feedResolution] |
| `sides`             | To set the layout and format for the output. | one-sided, two-sided-long-edge, two-sided-short-edge |
| `collated`          | To assemble each set of pages in the same order as the original document.| collated, uncollated |
| `media-tray`        | To specify a tray from which the job to be printed. | All printer specific trays are supported. |
|`media-printable-area`| The printable area is specified to be a rectangle, within the overall dimensions of a media. Set x & y co-ordinates and height & width in units of inches to print Labels |  [x, y, height, width] | 
| `paper-size`        | Set the size and dimensions by specified paper type. | executive, folio, invoice, ledger, na-legal, quarto, tabloid, na-letter |
|

### Example Request - 1

The following is a minimal request to print a sample page accessed via URL. Here we are printing 2 copies, pages 1 to 3 only, black & white on na-legal paper and instructing printer not to collate the pages!

```json
{
  "computerName": "MY_COMPUTER_NAME",
  "jobTitle": "My First Test Print",
  "printerName": "MY_PRINTER_NAME",
  "url": "https://print.api.apteancloud.com/sample.pdf"
  "attributes":[
		"print:monochrome",
	 	"paper-size:na-legal",
	 	"copies:2",
	 	"page-ranges:1, 3",
	 	"collated:uncollated"        
	]
}
```

### Example Response - 1

```json
{
  "resultCode": 200,
  "errorMessage": "Job sent to Agent",
  "errorMessageKey": "",
  "errorDetailed": "",
  "jobId": "646313f3365c452f4f83803d"
}
```

### Example Request - 2

For **media-printable-area**: The (x,y) origin is positioned at the top-left of the paper in specified/default orientation.

The following request is to print a page accessed via base64content. Here we are printing with the orientation as portrait, setting the printable area to start with (x,y)=(0,0) & (height,  width)= (8.29, 11.69) [The precision takes up 16 digits] where these are dimensions of paper and whole paper is considered as the printable area and specifying to choose the paper from the printer's tray named middle.

```json
{
  "computerName": "MY_COMPUTER_NAME_1",
  "filename": "MY_FILE_NAME_1.pdf",
  "jobTitle": "My First Test Print",
  "printerName": "MY_PRINTER_NAME_1",
  "base64content": "dmFsdWUNCjENCjINCjMNCjQNCjUNCg=="
  "attributes": [
		"orientation:portrait",
	 	"media-printable-area:0,0,8.29,11.69",
	 	"media-tray:middle"
	]
}
```

### Example Response - 2

```json
{
  "resultCode": 200,
  "errorMessage": "Job sent to Agent",
  "errorMessageKey": "",
  "errorDetailed": "",
  "jobId": "5d0dabafa4d9c53e6c67c89f"
}
```

## Job Responses

The following table outlines the different result codes associated with the job response:

| Result Code   | Description|
|-------------- | ---------------------------------------------|
| `200`       | Job sent to Agent. |
| `201`       | Agent is not connected. Job queued. |
| `400`       |  Agent is not connected and queueTimeout is 0. |
| `404`       | Printer not found on computer, <br> Computer not found. |
|

When a queued job is success, It results in `200` as result code.

### Example Request - 1

```json
{
  "computerName": "MY_COMPUTER_NAME",
  "jobTitle": "My First Test Print",
  "printerName": "MY_PRINTER_NAME",
  "url": "https://print.api.apteancloud.com/sample.pdf"
}
```

### Example Response - 1

```json
{
  "resultCode": 200,
  "errorMessage": "Job sent to Agent",
  "errorMessageKey": "",
  "errorDetailed": "",
  "jobId": "646313f3365c452f4f83803d"
}
```

When agent is  not connected and job gets queued. It results in `201` as result code.

### Example Request - 2

```json
{
  "computerName": "MY_COMPUTER_NAME",
  "jobTitle": "My First Test Print",
  "printerName": "MY_PRINTER_NAME",
  "url": "https://print.api.apteancloud.com/sample.pdf"
}
```

### Example Response - 2

```json
{
  "resultCode": 201,
  "errorMessage": "Agent is not connected.  Job queued.",
  "errorMessageKey": "",
  "errorDetailed": "",
  "jobId": "64631141365c452f4f83803c"
}
```
When agent is disconnected and queue timeout is set to 0. It results in `400` as result code.

### Example Request - 3

```json
{
  "computerName": "MY_COMPUTER_NAME",
  "jobTitle": "My First Test Print",
  "printerName": "MY_PRINTER_NAME",
  "url": "https://print.api.apteancloud.com/sample.pdf"
}
```

### Example Response - 3

```json
{
  "resultCode": 400,
  "errorMessage": "Agent is not connected and queueTimeout is 0.  Job aborted. computerName APT04-3X4IKL2 , AccountId 91dbbdc2488a416db850393b885c05b5",
  "errorMessageKey": "",
  "errorDetailed": ""
}
```

when the printer is not found in the computer. It results in `404` as the result code.

### Example Request - 4

```json
{
  "computerName": "MY_COMPUTER_NAME",
  "jobTitle": "My First Test Print",
  "printerName": "MY_PRINTER_NAME",
  "url": "https://print.api.apteancloud.com/sample.pdf"
}
```

### Example Response - 4

```json
{
  "resultCode": 404,
  "errorMessage": "Printer not found on computer. computerName : APT04-3X4IKL2 ",
  "errorMessageKey": "",
  "errorDetailed": ""
}
```

when the computer is not found then result code is `404`.

### Example Request - 5

```json
{
  "computerName": "MY_COMPUTER_NAME",
  "jobTitle": "My First Test Print",
  "printerName": "MY_PRINTER_NAME",
  "url": "https://print.api.apteancloud.com/sample.pdf"
}
```

### Example Response - 5

```json
{
  "resultCode": 404,
  "errorMessage": "Computer not found.",
  "errorMessageKey": "",
  "errorDetailed": ""
}
```

## Retrieve Job by ID

With the agent connected, a job details can be fetched by using the `Get/print/jobs` operation on the REST API.

## Job Statuses

The Job status messages are listed below:

* When the base64content/url is empty, the status is Failed with No command or file.

* When an inappropriate url is given then the Print Job Failed - Could not copy file.

* When the job is sent and running successfully, the status is set to running.

* When the job is given to the virtual printer and success then Print Job Completed - File Drop Only.

* When the job is queued and the time exceeds the specified queueTimeout, the job status is failed with error message as Job timed out in queue.

* When the job is success then status is complete - Print Job Completed.

* When the job is sent to agent then that status is sent.

### Example Request - 1

The request parameter is Job ID. 

 jobId: ``` 64647092365c452f4f83805c ```

### Example Response - 1

When the job is sent and running successfully, the status will be in the __running__ state. 

```json
    {
      "jobId": "64647092365c452f4f83805c",
      "accountId": "91dbbdc2488a416db850393b885c05b5",
      "computerName": "APT04-3X4IKL2",
      "printerName": "samplePrinter",
      "jobTitle": "Test-CSV",
      "jobSource": "R&D",
      "status": "running",
      "queued": "2023-05-17T06:13:38.424Z",
      "sent": "2023-05-17T06:13:38.668Z",
      "running": "2023-05-17T06:13:39.298Z",
      "commandExitCode": 0,
      "links": [
        {
          "rel": "self",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/jobs/64647092365c452f4f83805c"
        },
        {
          "rel": "agent",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3"
        },
        {
          "rel": "printer",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3/printers/samplePrinter"
        }
      ]
    }
  ]
}
```

### Example Request - 2

The request parameter is Job ID. 

 jobId: ``` 64633068365c452f4f838053 ```

### Example Response - 2

When a job is sent with an inappropriate url parameter  that contains "https" but does not have the correct content, then status is set to __failed__ with error message as __Could not copy file__.

```json
    {
      "jobId": "64633068365c452f4f838053",
      "accountId": "91dbbdc2488a416db850393b885c05b5",
      "computerName": "APT04-3Q7GBK3",
      "printerName": "samplePrinter12",
      "jobTitle": "Test-CSV",
      "jobSource": "R&D",
      "status": "failed",
      "queued": "2023-05-16T07:27:36.023Z",
      "sent": "2023-05-16T07:27:36.044Z",
      "running": "2023-05-16T07:27:36.320Z",
      "complete": "2023-05-16T07:27:36.600Z",
      "errorMessage": "Could not copy file: java.lang.IllegalArgumentException: protocol = https host = null",
      "commandExitCode": 0,
      "links": [
        {
          "rel": "self",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/jobs/64633068365c452f4f838053"
        },
        {
          "rel": "agent",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3"
        },
        {
          "rel": "printer",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3/printers/samplePrinter12"
        }
      ]
    }
```

### Example Request - 3

The request parameter is Job ID. 

 jobId: ``` 6465b457365c452f4f838070 ```

### Example Response - 3

When the job sent contains a null url parameter, then status is set to __failed__ with error message as __INVALID URL__.

```json
    {
    "jobId": "6465b457365c452f4f838070",
    "accountId": "91dbbdc2488a416db850393b885c05b5",
    "computerName": "APT04-3Q7GBK3",
    "printerName": "samplePrinter12",
    "jobTitle": "Test-CSV",
    "jobSource": "R&D",
    "status": "complete",
    "queued": "2023-05-18T05:15:03.383Z",
    "sent": "2023-05-18T05:15:03.407Z",
    "running": "2023-05-18T05:15:03.647Z",
    "complete": "2023-05-18T05:15:03.916Z",
    "errorMessage": "Invalid URL",
    "commandExitCode": 0,
    "links": [
      {
        "rel": "self",
        "href": "https://dev-print.api.apteancloud.com/api/v1/print/jobs/6465b457365c452f4f838070"
      },
      {
        "rel": "agent",
        "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3"
      },
      {
        "rel": "printer",
        "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3/printers/samplePrinter12"
      }
    ]
  }
```

### Example Request - 4

The request parameter is Job ID. 

 jobId: ``` 64632e48365c452f4f83804c ```

### Example Response - 4 

When the base64content/url is empty, the status is __failed__ with error message as __No Command or File__.

```json
    {
      "jobId": "64632e48365c452f4f83804c",
      "accountId": "91dbbdc2488a416db850393b885c05b5",
      "computerName": "APT04-3Q7GBK3",
      "printerName": "samplePrinter12",
      "jobTitle": "Test-CSV",
      "jobSource": "R&D",
      "status": "failed",
      "queued": "2023-05-16T07:18:32.156Z",
      "sent": "2023-05-16T07:18:32.176Z",
      "running": "2023-05-16T07:18:32.449Z",
      "complete": "2023-05-16T07:18:32.731Z",
      "errorMessage": "No Command or File.",
      "commandExitCode": 0,
      "links": [
        {
          "rel": "self",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/jobs/64632e48365c452f4f83804c"
        },
        {
          "rel": "agent",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3"
        },
        {
          "rel": "printer",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3/printers/samplePrinter12"
        }
      ]
    }
```

### Example Request - 5

The request parameter is Job ID. 

 jobId: ``` 64633068365c452f4f838053 ```

### Example Response - 5

When the job is queued and the time exceeds the specified queueTimeout, the job status is __failed__ with error message as __Job timed out in queue__.

```json
    {
      "jobId": "646202ef365c452f4f838039",
      "accountId": "91dbbdc2488a416db850393b885c05b5",
      "computerName": "APT04-3Q7GBK3",
      "printerName": "samplePrinter12",
      "jobTitle": "Test-CSV",
      "jobSource": "R&D",
      "status": "failed",
      "queued": "2023-05-15T10:01:19.773Z",
      "complete": "2023-05-15T10:43:10.544Z",
      "errorMessage": "Job timed out in queue",
      "commandExitCode": 0,
      "links": [
        {
          "rel": "self",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/jobs/646202ef365c452f4f838039"
        },
        {
          "rel": "agent",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3"
        },
        {
          "rel": "printer",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3/printers/samplePrinter12"
        }
      ]
    }
```

### Example Request - 6

The request parameter is Job ID. 

 jobId: ``` 644a780cef79c876c2a4311d ```

### Example Response - 6

When the queued job is successfully sent to the printer, the status is set to __complete__.

```json
    {
      "jobId": "644a780cef79c876c2a4311d",
      "accountId": "91dbbdc2488a416db850393b885c05b5",
      "computerName": "APT04-3Q7GBK3",
      "printerName": "\\\\10.183.224.143\\PRINTER-11",
      "jobTitle": "Test-CSV",
      "jobSource": "R&D",
      "status": "complete",
      "queued": "2023-04-27T13:26:36.124Z",
      "sent": "2023-04-27T13:26:36.216Z",
      "running": "2023-04-27T13:26:36.453Z",
      "complete": "2023-04-27T13:26:41.819Z",
      "commandExitCode": 0,
      "attributes": [
        "copies:2",
        "page-ranges:1,3",
        "sides:two-sided-long-edge"
      ],
      "links": [
        {
          "rel": "self",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/jobs/644a780cef79c876c2a4311d"
        },
        {
          "rel": "agent",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3"
        },
        {
          "rel": "printer",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3/printers/%5C%5C10.183.224.143%5CPRINTER-11"
        }
      ]
    }
```

### Example Request - 7

The request parameter is Job ID. 

 jobId: ``` 64647163365c452f4f838066 ```

### Example Response - 7

When the job is queued successfully to a virtual printer, the status is __complete__ with error message __File Drop Only__.

```json
    {
      "jobId": "64647163365c452f4f838066",
      "accountId": "91dbbdc2488a416db850393b885c05b5",
      "computerName": "APT04-3Q7GBK3",
      "printerName": "samplePrinter12",
      "jobTitle": "Test-CSV",
      "jobSource": "R&D",
      "status": "complete",
      "queued": "2023-05-17T06:17:07.415Z",
      "sent": "2023-05-17T06:17:07.577Z",
      "running": "2023-05-17T06:17:07.857Z",
      "complete": "2023-05-17T06:17:31.543Z",
      "errorMessage": "File Drop Only",
      "commandExitCode": 0,
      "links": [
        {
          "rel": "self",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/jobs/64647163365c452f4f838066"
        },
        {
          "rel": "agent",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3"
        },
        {
          "rel": "printer",
          "href": "https://dev-print.api.apteancloud.com/api/v1/print/agents/APT04-3Q7GBK3/printers/samplePrinter12"
        }
      ]
    }
```

## Refresh printers cache

With the agent connected, if new printers are available and/or printer status is changed we can refresh using the `POST /print/refresh` REST API.

No request parameters needed. 

### Example Response

```json
{
  "resultCode": 200,
  "errorMessage": "Success",
  "errorMessageKey": "",
  "errorDetailed": ""
}
```

## Upgrade an Agent

With the agent connected, an agent can be self-updated to the latest version and restart itself using the `GET/print/agents/upgrade` operation on the REST API.

## Example Request

 Specify  
`computerName`: "MyComputerName"

## Example Response

```json
{
  "resultCode": 200,
  "errorMessage": "Success",
  "errorMessageKey": "",
  "errorDetailed": ""
}
```

## Upgrade all Agents

With the agents connected, a silent upgrade takes place. All are self-updated to the latest version and restart themselves using the `GET/print/agents/upgradeAll` operation on the REST API.
Only the connected agents are upgraded to latest version and the not connected ones should be upgraded on the need once connected to server.

No request parameters needed.

## Example Response

```json
{
  "resultCode": 200,
  "errorMessage": "Success",
  "errorMessageKey": "",
  "errorDetailed": ""
}
```

## Delete an Agent

An agent can be deleted using the operation `DELETE/print/agents/{computerName}` on the REST API.

### Example Request

 Specify  
`` computerName ``: "MyComputerName"

### Example Response
```json
{
  "resultCode": 200,
  "errorMessage": "Success",
  "errorMessageKey": "",
  "errorDetailed": ""
}
```
 To get this deleted agent to be reflected in the printers list, need to run the `POST/print/agents/refresh` REST API.

## Restart an Agent

With the agent connected, an agent can be restared using the `GET/print/agents/restart` operation on the REST API.

### Example Request
 Specify  
`` computerName ``: "MyComputerName"

### Example Response

```json
{
  "resultCode": 200,
  "errorMessage": "Success",
  "errorMessageKey": "",
  "errorDetailed": ""
}
```

## Command Configuration

The Print Agent can be configured to expose virtual printers that invoke local programs or simply copy a file to local directory, thereby supporting label printing software such as Bartender and Loftware.

Commands are invoked using the same REST API used to print to real printers. From the point of view of the product queueing a print job, there is no difference, except that a Command does not require a file (base64 content or URL).

## Configuration

The print agent configuration file is called `application.yaml`, located in the installation directory, by default:

   C:\Program Files (x86)\ApteanPrintAgent\application.yaml

Multiple commands can be configured using YAML array syntax, as follows:

```yaml
printagent:
  # ... other settings ...
  commands:
    - name: Virtual Printer 1
      command: c:\bin\printer1.exe 
      working-dir: c:\tmp 
      arguments: ["$(FILENAME)"]
    - name: Virtual Printer 2
      drop-dir: c:\tmp
```

## Properties

The following table describes the available child properties of printagent.commands:

| Property             | Description                                          |
|--------------------- | -----------------------------------------------------|
| `name`             | Name of the virtual printer to explore to API users. |
| `working-dir`      | The working directory to use when executing the command. See Working Directory.|
| `command`          | The command to execute. |
| `arguments`        | The arguments to pass to the command, after variable substitution. |
| `drop-dir`         | The local directory to write the file provided with the print job, if any.  If this is not specified, the agent will attempt to use a temporary location specified by the OS. |
| `capture-output`   | If set to true, any output from the command (both standard output and standard error) are captured and stored with job status.  Default is false. |
| `delete-file`      | If `true`, the local file will be deleted after the command completes.  |
| `allowed-env-vars` | List of variables from the request to set as environment variables before executing. |
|

## Arguments and Variables

The `arguments` property must be specified as an array of strings.  Each string will be passed as an individual argument to the command, even if it contains spaces.  Spaces within argument values will not act as argument delimiters.  For example, this will not likely work as expected:

```
   arguments: [ "--file $(FILENAME)" ]
```

It will be passed as a single argument.  Instead, do this:

```
   arguments: [ "--file", "$(FILENAME)" ]
```

Variable references in arguments are of the format `$(VARNAME)`, where `VARNAME` is the name of a variable given in the `vars` array of a print job, or a built-in variable.

If a variable with the name provided is not found, the string will not be replaced.  

### Built-in Variables

`FILENAME` is the only built-in variable.  It is set to the filename of the drop file.  If no file was given, it will not be set. 

If `FILENAME` was also given in the `vars` array of a print job, it will act as a fallback value if no file given.

### Environment Variables

Variables provided with the print job request that are listed in `allowed-env-vars` will be set as environment variables before executing the command.

## Working Directory

When a command is executed which uses relative paths to access the filesystem, the command uses the working directory defined when the process was started to determine the full path.

The working directory used when executing a command is determined as follows:

* If specified, the `working-dir` property of the command configuration is used. It is recommended that this be explicitly defined for each command.

* If `working-dir` is not specified, the default OS temporary directory is used.  This is usually read from the TEMP environment variable on Windows, and set to /tmp on Unix and Linux.  This can also be set globally for the Agent using the `java.io.tmpdir` system property.

* If the default OS temporary directory cannot be determined, the installation directory of the Aptean Print Agent is used (which is not desirable)

### Examples

### Transfer File and Execute Command

This example will write a file to the local filesystem then execute a command.

```yaml
  commands:
    - name: LabelsFromCSV
      command: c:\bin\printer.exe 
      working-dir: c:\tmp
      arguments: [ "-template", "label.tpl", "-csv", "$(FILENAME)" ]
      drop-dir: c:\tmp
      delete-file: true
```

Example `POST /jobs` request:

```json
{
  "base64content": "ZXhhbXBsZSxjc3YsZmlsZQ==",
  "computerName": "SERVER-000001",
  "filename": "job432.csv",
  "printerName": "LabelsFromCSV"
}
```

## Execute Command without File

This example executes a command without transferring a file.

```yaml
  commands:
    - name: BarcodePrinter32
      command: c:\bin\printer.exe 
      working-dir: c:\tmp
      arguments: [ "-template", "barcode128.tmpl", "-code", "$(BARCODE)" ]
```

Example ``POST /jobs`` request:

```json
{
  "computerName": "SERVER-000001",
  "printerName": "BarcodePrinter32",
  "vars": [
     {
        "name": "BARCODE",
        "value": "RI 476 394 652 CH"
     }
   ]
}
```

## Drop File Only

This example simply writes a file to the local filesystem and completes.

Agent configuration:

```yaml
  commands:
    - name: Drop File Example
      drop-dir: c:\tmp
```

Example `POST /jobs` request:

```json
{
  "base64content": "ZXhhbXBsZSxjc3YsZmlsZQ==",
  "computerName": "SERVER-000001",
  "filename": "job432.csv",
  "printerName": "Drop File Example"
}
```