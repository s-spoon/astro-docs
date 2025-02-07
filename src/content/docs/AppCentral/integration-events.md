---
title: "Integration Events"
draft: false
type: Article
---

The Integration events provides insight into the integrations among applications for a specific user. If the applications fail to integrate correctly, experience data flow issues, or exhibit other unforeseen behaviors, the customer may report a bug.

The **Application Events** section displays any events triggered during the integration process. By selecting an event, you can access detailed information in the **Event Details** section. Additionally, the user can view a summarized tabular view of the selected events, facilitating the analysis of potential causes for any disruptions or failures in the event flow.

Below mentioned few scenarios involving event disruption:

-   If you report that the order is not visible in the Aptean Ship system from the Enterprise Resource Planning (ERP) platform.
-   If you want to send a shipment to the customer should have access to the shipping event to track the shipments.

You can view the details of the integration events based on the selected duration from the **Duration** drop-down list.

The following table describes the Field and Description on the **Integration Events** tab:

| **Field**  | **Description**  |
|--|--|
| **Application Events** |  
| Source Product  | Specifies the product from which data is sourced and sent to an external system. |
| Event  | It specifies to the event or signal that prompts an action or facilitates data transfer between one application and another or between two applications.|
| Event Fired   | It specifies an action or data transfer between applications is initiated by a specific event or trigger. Following a brief interval, the data will be synchronized or transferred to the designated application.  |
| **Event Details** |  |
| Source Product | It specifies the source of the data is the product that extracts and sends information to a different system. An event signifies a particular occurrence or trigger that prompts an action or facilitates data transfer between applications or between two systems. <br> In **one-way integration**, the flow of information is unidirectional either from source to target product or vice-versa. In **two-way integration**, the flow of information from both sides; source to target and target to source. |
| Event  | Specifies an event to a specific occurrence or signal that initiates an action or facilitates data transfer between applications or within a single application. |
| Event Fired | Specifies an action or data transfer between applications is initiated by a specific event or trigger. Following this, the data will be transferred or synchronized to the application after a brief delay.  |
| Action   | Specifies the current action on the specific event. |
| Status  | The status of the integrated event, either the status is success or failure. |
| Payload| It provides a detailed overview of the integrated even details, including the date, time, status, and relevant background information in JSON format. Click the **payload** to view the file. |