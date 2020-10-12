# Project Summary
This Fast Food Ordering System Prototype project was timeboxed and functionally complete within a
roughly two-hour timeframe. Also, I've also laid out a prioritized roadmap of improvements below I'd
tackle in order if given more time, both for the current "V1.0" implementation and a more complex
"V2.0" implementation that's both a more intuitive and customizabled user experience in the future.


## V1.x Prioritized Roadmap
1. Improve mobile resposiveness for primary mobile-first use case
2. Add user-friendly 'Loading...' and 'Error' states for fetching and menu failures, "Empty Cart"
state
3. Expand critical-path test coverage: menu fetch response code (200), Subtotal calculation, menu
item counts vs. menu data, cart quantities
4. Improve aesthetic appearance (colors, images, animated transitions, etc)
5. Extra: An easy "Submit Order" form button that sends an email with the order contents to the
restaurant (and optionally the customer by using a text input field)


## V2.0 - Modal Options Selection
To save time for the V1.0 "MVP", I rendered each item's "size" option as it's own distinct menu item
to manage quantities separately, but a more user-friendly approach (especially for longer menus)
would be to consolidate each item on the primary menu list into clickable menu options, which then
shows a modal that drills into details including the "size" options and quantities as well as any
other types of options to add in the future (ie- extra hot sauce, etc). This approach requires
validation to ensure that a "size" is selected before adding to cart, but overall is more intuitive
with fewer, more consolidated options per screen, and also provides a platform to add additional
capabilities and options going forward.