Feature: Create Warnings
	As a User
	I want to set a warning
	So that I am warned if the learning space is full at a given time

	Background:
		Given I am logged in as a user
		And I am on the “Warnings” page

	Scenario: Create Warning
		When I click on “create new warning”
		Then I can create a new warning
		And set the date of the warning

	Scenario: Delete Warning
		Given there is a warning
		When I click on the “delete warning” button
		Then the chosen warning is removed