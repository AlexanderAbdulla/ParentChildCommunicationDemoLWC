import { LightningElement, track, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @track parentToChildClicks= 0;

    @api handleParentToChildClick() {
        console.log('in the child controller');
        this.parentToChildClicks += 1; 
    }

    handleChildToParentClick() {
        console.log('initiating child to parent comm');
        const childToParentClickEvent = new CustomEvent("handlechildclick");
        this.dispatchEvent(childToParentClickEvent);
    }
}