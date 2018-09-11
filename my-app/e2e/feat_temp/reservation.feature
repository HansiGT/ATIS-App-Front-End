Feature: Reservation of learning desks at the workspace
	As a user
	I want to make a reservation for a single learning desk
	So that the learning desk shows as reserved

	Background:
		Given I am logged in as a user
		And I am on the "Reservation" page

	Scenario: Reservation is possible
		Given I don’t have a reservation
		When I click on the “addReservation” button
		And I choose a date and a time
		And I choose a free learning desk
		Then The learning desk is reserved at the given time
		And a confirmation message appears
		And the reservation is shown in my reservation list

	Scenario: Choose an already occupied learning desk
		Given I have already chosen a date and a time for my reservation
		When I choose an occupied learning desk
		Then an error message appears

	Scenario: Already have one reservation
		Given I already have a reservation
		When I click on the “addReservation” button
		Then an error message appears

	Scenario: Cancel the reservation
		Given there is one reservation
		When I click on the "delete reservation" button
		Then the reservation is deleted