---  

title: "Work Order Notifications"  
date: 2024-08-21  
draft: false 
type: Article


---


## Work Order Status Notification Setup

In the system, work order statuses are represented as validation codes. Users
can configure notifications for specific statuses by selecting the roles to be
notified, such as Requester, Planner, or Supervisor. When a work order reaches
a designated status, the corresponding notifications will be triggered based
on the setup.

![](../assets/work-management/image099.jpg)

### Types of Work Order Notifications

  1. **Work Order Creation**
<br>Notification:
<br>WOCreated - Work Order "{WorkOrderNumber}" Created with status "{Status}".
<br>WO Description: "{WorkOrderDescription}".
<br>Equipment: "{EquipmentNumber}" "{EquipmentDescription}".

  2. **Work Order Awaiting Review**
<br>Notification:
<br>WONeedsReview - Work Order "{WorkOrderNumber}" is awaiting review.
<br>WO Description: "{WorkOrderDescription}".
<br>Equipment: "{EquipmentNumber}".

  3. **Work Order Reviewed**
<br>Notification:
<br>WOReviewed - Work Order "{WorkOrderNumber}" has been reviewed by
"{ReviewerName}".
<br>WO Description: "{WorkOrderDescription}".
<br>Equipment: "{EquipmentNumber}".

  4. **Work Order Reviewed with Next Review Needed**
<br>Notification:
<br>WOReviewedNextRvw - Work Order "{WorkOrderNumber}" has been reviewed by
"{ReviewerName}".
<br>Next reviewer is "{NextReviewerName}".
<br>WO Description: "{WorkOrderDescription}".
<br>Equipment: "{EquipmentNumber}" "{EquipmentDescription}".

  5. **Work Order Approved**
<br>Notification:
<br>WOApproved - Work Order "{WorkOrderNumber}" has been approved by
"{ApproverName}".
<br>WO Description: "{WorkOrderDescription}".
<br>Equipment: "{EquipmentNumber}".

  6. **Work Order Rejected**
<br>Notification:
<br>WORejected - Work Order "{WorkOrderNumber}" has been rejected by
"{RejectorName}".
<br>WO Description: "{WorkOrderDescription}".
<br>Equipment: "{EquipmentNumber}".

  7. **Work Order Rejected with Next Review Needed**
<br>Notification:
<br>WORejectedNextRvw - Work Order "{WorkOrderNumber}" has been rejected by
"{RejectorName}".
<br>Next reviewer is "{NextReviewerName}".
<br>WO Description: "{WorkOrderDescription}".
<br>Equipment: "{EquipmentNumber}" "{EquipmentDescription}".

  8. **Work Order Status Change**
<br>Notification:
<br>WOStatus - Work Order "{WorkOrderNumber}" has reached "{Status}".

  9. **Detailed Status Change Notification**
<br>Notification:
<br>WOStatusChangeMsg - Work Order "{WorkOrderNumber}" has reached "{Status}".
<br>WO Description: "{WorkOrderDescription}".
<br>Equipment: "{EquipmentNumber}" "{EquipmentDescription}".

  10. **Work Order Approval Cancelled**
<br>Notification:
<br>WOApprovalCancelled - Approval has been cancelled for Work Order
"{WorkOrderNumber}" by "{CancellerName}".
<br>WO Description: "{WorkOrderDescription}".
<br>Equipment: "{EquipmentNumber}".

  11. **Work Order Approval Cancelled with Next Review Needed**
<br>Notification:
<br>WOApprovalCancelledNextRvw - Approval has been cancelled for Work Order
"{WorkOrderNumber}" by "{CancellerName}".
<br>Next reviewer is "{NextReviewerName}".
<br>Equipment: "{EquipmentNumber}" "{EquipmentDescription}".

### User Notification Methods

  1. **Notifications Panel**
<br>Users are alerted to changes in work order status through the system's
Notifications Panel.

  2. **Email Interface**
  <br>The Email Interface task management job can be scheduled to send notifications
via email if the message has not already been notified or viewed in the
Notifications Panel.

