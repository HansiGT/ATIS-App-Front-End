Feature: Reservation of learning desks at the workspace
	As a privileged user
	I want to make a reservation one or more learning desks
	So that these learning desks show as reserved

	Background:
		Given I am logged in as a privileged user
		And I am on the “Reservation” page

	Scenario: Reservation is possible
		When I click on the “addReservation” button
		And I choose a date and a time
		And I choose a free learning desk
		Then The learning desk is reserved at the given time
		And a confirmation message appears
		And the reservation is added to my reservation list

	Scenario: Reservation is not possible
		Given I have already chosen a date and a time for my reservation
		When I choose an occupied learning desk
	Than an error message appears

	Scenario: Cancel the reservation
		Given there is at least one reservation
		When I click on the "delete reservation" button
		Then the reservation is removed