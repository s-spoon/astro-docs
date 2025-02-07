---

title: "Supported Scales"
draft: false
type: Article

---

These are the electronic scales supported by Aptean Ship and their default (factory) settings.

---

### Transcell SP Series & SRP 300 Note

In the Device Manager, the flow control will need to be updated to "None".
 
### Setting up the Toledo PS60 to emulate the 8213

The Toldeo PS60 Series of scales has multiple different 'modes' it can run in. To make sure it works with Aptean Ship, we'll reset it to the factory defaults.
Note: The two buttons on the PS60 display are the [Select] button (the button with the two arrows going in a circle) and the {ZERO} button (has a zero on it).

1. Apply power to the PS60.

2. Hold the {SELECT} button down, until [SetuP] appears in the display window.

3. Press the {SELECT} button about 7 times to advance through the various setup categories until the display shows [END].

4. Press the {ZERO} button to advance through the various protocols until the word [DEFAULT] appears on the display.

5. Press the {SELECT} button and the unit will reboot and the protocol selection is complete. With the DEFAULT protocol selected, this indicator is now set for:

	* BAUD = 9600
	* Data Bits = 7
	* Parity = Even
	* Stop Bits = 1
	* Data String = Toledo 8213


