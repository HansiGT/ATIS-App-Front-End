Feature: Display current utilisation of the workspace
    As a user
    I want to see the current utilisation of the workspace

    Background: Move to current utilisation page
        Given I am on the current utilisation page

    Scenario: Display the current utilisation
        Given the workspace is open
        Then the current utilisation is displayed