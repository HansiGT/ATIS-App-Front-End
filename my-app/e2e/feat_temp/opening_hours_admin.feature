Feature: Manage the opening hours of the workspace
	As an Administrator
	I want to change the opening hours of the workspace
	So that users have the current information available

	Background:
		Given I am logged in as an Administrator
		And I am on the "ManageOpeningHours" page

	Scenario: Create new opening hours
		When I click on “edit opening hours”
		Then I can create new opening hours of the workspace

	Scenario: Save changes
		Given I have already created new opening hours
		When I click on “save changes”
		Then the new opening hours are applied
		And all the reservations outside the opening hours are deleted
		And all users who had their reservations deleted receive a