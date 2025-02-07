---
title: "AAA Cooper Troubleshooting"
draft: false
type: Article
---

AAA Cooper uses a specific Port for web services such as rating and pickup requests. If this port is blocked, you will an error message.

The network administrator will need to allow external communication from this port in the network firewall.

If the firewall cannot be configured to use domain name aliases, these are the IP address ranges that should be allowed for port 8188 as provided by AAA Cooper:
* DC1 Range is 107.7.112.129 - 107.7.112.254
* DC2 Range is 107.7.115.1 - 107.7.115.126


 

