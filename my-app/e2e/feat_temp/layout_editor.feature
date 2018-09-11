Feature: Manage the layout of the workspace
	As an Administrator
	I want to manage the layout of the workspace

	Background:
		Given I am logged in as an admin
		And I’m on the “ManageLayout” page

	Scenario: Upload the new layout of the workspace
		When I upload a new layout of the workspace
		Then the new layout is uploaded
		And the name of the uploaded layout appears on the page

	Scenario: Choose an uploaded layout to use as the current layout
		Given there is at least one layout uploaded
		And there is no layout used at this moment
		When I choose the layout “ATIS June 2018” to be the current layout
		Then the layout “ATIS June 2018” is the layout of the learning space
		And the picture of the chosen layout appears.

	Scenario: Update the current layout
		Given there is at least one layout uploaded
		And there is a layout being used
		When I choose the layout “ATIS June 2018” to be the current layout
		Then the layout “ATIS June 2018” is from now the layout of the learning space
		And the picture of the old layout is replaced with the picture of the chosen layout.