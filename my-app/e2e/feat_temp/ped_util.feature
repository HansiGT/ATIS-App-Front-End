Feature: Predicted utilization of the workspace
	As a guest
	I want to know the predicted utilization of the workspace
	So that I can decide when to go there

	Background:
		Given I am on the “Prediction” page

	Scenario: display graph when the learning space is currently open
		Given the workspace is currently open
		Then a graph with the previous, current and the predicted utilization for the current day is displayed
		And a Calendar for choosing another day is displayed

	Scenario: display graph when the workspace is currently closed
		Given the learning space is currently closed
		Then a graph with the predicted utilization of the next open day is displayed

	Scenario: display predicted utilization on chosen day
		When I click on another day in the calendar
		Then the current graph is replaced by the graph for the chosen day

	Scenario: workspace is closed on chosen day
		Given the workspace is closed on <day>
		When I click on <day> in the calendar
		Then an error message (“Poolraum ist an diesem Tag geschlossen”) is displayed

		Examples: Days
			| day        |
			| 22.07.2018 |