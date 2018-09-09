Feature: Manage the reservations of all users
	As an Administrator
	I want to manage the reservations
	So that I can see, create, change, delete the reservations of all users

	Background:
		Given I am logged in as an Administrator
		And I am on the "ManageReservations" page

	Scenario: See all reservations
		Given there are no reservations
		When reservations are added
		Then I can see all reservations

	Scenario: Change reservation made by other accounts.
		Given there are no reservations
		When another user adds a reservation
		Then I can change the reservation

	Scenario: Create reservations for other accounts.
		Given there a no accounts registered
		When account is registered
		Then I can create a reservation for that account

	Scenario: Delete reservations made by other accounts.
		Given there are no reservations
		When a reservation is created