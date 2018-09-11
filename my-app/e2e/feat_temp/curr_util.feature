Feature: Current utilization of the workspace
	As a guest
	I want to know the current utilization of the workspace
	So that I can decide to go there if there is an available learning desk

	Background:
		Given I am on the “CurrentState” page

	Scenario: Workspace is open
		Given the workspace is not closed
		Then the front page displays the current utilization of the workspace
		And the front page displays a room plan with the PCs and their current state

	Scenario: Workspace is closed
		Given the workspace is closed
		Then the page displays “Workspace is currently closed”
		And the page displays the usual opening hours of the workspace

	Scenario: Page is opened longer than 10 minutes
		Given the current page is opened longer than 10 minutes
		Then the page refreshes
		And the new data with the current utilization is displayed
