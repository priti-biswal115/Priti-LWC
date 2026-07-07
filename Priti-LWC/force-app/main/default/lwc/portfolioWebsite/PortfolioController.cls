public with sharing class PortfolioController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getPortfolio() {

        return [
            SELECT Id,
                   Name,
                   Professional_Title__c,
                   About_Me__c,
                   Email__c,
                   Phone,
                   Location__c,
                   GitHub_URL__c,
                   LinkedIn_URL__c,
                   LeetCode_URL__c,
                   Experience__c,
                   Education__c,
                   Skills__c,
                   Projects__c,
                   Achievements__c,
                   Certifications__c
            FROM Account
            LIMIT 1
        ];
    }
}