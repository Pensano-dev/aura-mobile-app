# AURA - TEST PLAN

1. Test Objectives:
To verify that the “Aura” mobile app accurately assists users in finding cafes with desired amenities, provides a seamless user experience, and handles data and permissions correctly.
2. Test Items
Tutorial overlay and instructional tooltips.
Facility selection and prioritisation with single and double taps.
Location permission request and response handling.
Map view functionality and cafe pin interaction.
Cafe preview, detailed information views, and navigation.
Booking and menu functionalities.
Response to various mobile states (e.g., backgrounding the app, push notifications).
3. Test Environment
iOS devices: Latest two versions.
Android devices: Latest three versions.
Network conditions: Wi-Fi, LTE, and no connectivity.
Background apps: Simulate common apps running in the background.
Orientation changes: Portrait and landscape modes.
4. Test Cases
4.1 Functional Tests
Tutorial and Instructional Overlay:
TC1.1: Verify that the tutorial overlay appears upon first launch.
TC1.2: Check if dismissing the tutorial overlay retains the user’s choice for future sessions.

Facility Selection Mechanism:
TC2.1: Confirm that single tapping selects a facility as desirable.
TC2.2: Confirm that double tapping marks a facility as a must-have.
TC2.3: Test the visual feedback (e.g., colour change, icon enlargement) to reflect the selection.
TC2.4: Validate that the “Clear all” button resets all selections.

Location Services Permission:
TC3.1: Verify that the location permission prompt appears.
TC3.2: Test app behaviour when permission is granted.
TC3.3: Test app behaviour when permission is denied.
TC3.4: Test the accuracy of the location-based cafe suggestions.

Map View Interactions:
TC4.1: Test tapping on a cafe pin opens the cafe preview pane.
TC4.2: Verify that the “Next” button navigates to detailed cafe view.
TC4.3: Test map performance when zooming in/out and panning.

Cafe Details and Booking:
TC5.1: Ensure all details (photos, address, reviews) load correctly.
TC5.2: Test the “Book now” button redirects to the correct booking flow.
TC5.3: Test the “Menu” button functionality.

4.2 Usability Tests
User Interface Consistency:
TC6.1: Check if UI elements remain consistent throughout different app states.
TC6.2: Verify that font sizes and colour contrasts are legible.

Accessibility:
TC7.1: Ensure that screen reader functionality is available and accurate.
TC7.2: Test for accessible navigation for users with disabilities.

4.3 Performance Tests
App Load Time:
TC8.1: Measure time to load the main screen on various network conditions.
TC8.2: Check for smooth transitions between screens.

Resource Utilisation:
TC9.1: Monitor CPU and memory usage during typical app usage.
TC9.2: Check battery consumption during active app usage.

4.4 Security Tests
Data Handling:
TC10.1: Verify that location data is transmitted over secure channels.
TC10.2: Ensure that user preferences are stored securely.

5. Test Data
Data sets with various combinations of cafe amenities, reviews, operational times, and user profiles for different test scenarios.

6. Entry and Exit Criteria
Entry Criteria: All high-priority test cases are defined and ready to be executed.
sExit Criteria: All critical and high-priority test cases pass without major defects.

7. Deliverables
Detailed test cases with steps and expected outcomes.
Defect logs detailing any issues found during testing.
Performance and security testing reports.

8. Schedule
The testing will take place over a three-week period with specific milestones for each type of testing to be signed off by the test manager.

9. Risks and Contingencies
Device Specific Bugs: Test on a wide range of devices to minimise the risk.
Third-Party Services: Have mock services ready in case of third-party API failure.

10. Approvals
The detailed test plan will require sign-off from the QA Lead, Development Lead and Project Manager before testing begins.