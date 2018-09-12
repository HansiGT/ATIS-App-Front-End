Feature: Manage Roles
	As an Administrator
	I want to manage the roles of all users
	So that I can assign new Admins and privileged users

	Background:
		Given I am logged in as an Administrator
		And I am on the "ManageRoles" page

		Examples: roles
			| role            |
			| Admin           |
			| Privileged user |

	Scenario: Assign a role to a new user
		When I click on "assign new role" to a user
		And I set the role of this user to <role>
		Then the role of this user is <role>

	Scenario: Remove the role of a user
		When I click on "manage role" on an existing user
		And I click "remove role"
		Then The role of that user is removed

	Scenario: Change the role of a user
		When I click on "manage roles" on an existing user with <oldRole>
		And I change the role of this user to <newRole>
		Then the role of that user is <newRole>

		Examples: changed roles
			| oldRole | newRole |
			| priv    | admin   |
			| admin   | priv    |
			| priv    | priv    |
			| admin   | admin   |