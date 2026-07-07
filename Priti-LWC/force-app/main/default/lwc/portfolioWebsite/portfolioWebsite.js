import { LightningElement, wire } from 'lwc';
import getPortfolio from '@salesforce/apex/PortfolioController.getPortfolio';

export default class PortfolioWebsite extends LightningElement {

    portfolio;
    error;

    @wire(getPortfolio)
    wiredPortfolio({ data, error }) {
        if (data) {
            this.portfolio = data[0];
            this.error = undefined;
        } else if (error) {
            this.error = error;
            console.error(error);
        }
    }
}