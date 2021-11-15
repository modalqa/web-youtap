Feature: Youtap
    Background: User can use youtap website
        
Scenario: Access homepage
    Given access url youtap
    Then can click menu solusi usaha

Scenario: Need More Information
    Given access url youtap
    When user click menu contact
    Then user can see content on form

    When user input contact form
    Then user see pesan Thank you
