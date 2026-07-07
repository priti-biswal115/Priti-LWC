import { LightningElement, wire } from 'lwc';
import getPortfolio from '@salesforce/apex/PortfolioController.getPortfolio';

export default class PortfolioWebsite extends LightningElement {

    portfolio;
    error;

    @wire(getPortfolio)
    wiredPortfolio({ data, error }) {

        if (data) {
            this.portfolio = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.portfolio = undefined;
            console.error(error);
        }
    }
}