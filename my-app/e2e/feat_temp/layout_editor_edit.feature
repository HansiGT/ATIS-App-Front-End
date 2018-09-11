Feature: Create Layouts in the Layout editor
	As an Administrator
	I want to create new Layouts for the workspace

	Background:
		Given I am using the Layout editor

	Scenario: Create new layout
		When click on "create new layout"
		And I name the new layout
		And I create the new layout
		And I save the new layout
		Then a new layout file is created

	Scenario: Edit layout
		Given there is at least one layout
		When I click on the "edit layout" button
		And I edit the layout
		And I save the changes made to the layout
		Then the layout file is updated with those changes

	Scenario: Name of new/edited/imported layout matches name of existing layout
		Given there is at least one layout
		When another layout with the same name appears
		Then a window opens where I can change the name of the layout

	Scenario: Delete layout
		Given there is at least one layout
		When I click the "delete layout" button
		Then the layout is deleted

	Scenario: Import valid layout file
		Given there is a valid layout file on the computer
		When I click on the "import layout" button
		And I select the file
		And I click on the "import" button
		Then the file is imported into the editor

	Scenario: Import invalid layout file
		Given there is an invalid layout file on the computer
		When I click on the "import layout" button
		And I select the file
		And I click on the "import" button
		Then an error message appears
		And the file is not imported