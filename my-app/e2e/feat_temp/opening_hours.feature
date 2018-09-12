Feature: Opening hours of the workpace
	As a Guest
	I want to know the opening hours of the workspace
	So that I can decide to go there

	Background:
		Given I am on the “OpeningHours” page

	Scenario: Show the opening hours of the workspace
		Given the current day time is <day> at <time>
		Then the opening hours are displayed
		And the current state as <state> is displayed

		Examples:
			| day       | time  | state  |
			| Monday    | 10:00 | open   |
			| Tuesday   | 23:00 | closed |
			| Wednesday | 14:00 | open   |
			| Sunday    | 10:00 | closed |
			| Saturday  | 23:00 | closed |