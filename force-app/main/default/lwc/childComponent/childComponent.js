import { LightningElement, track, api, wire } from 'lwc';
import{CurrentPageReference} from 'lightning/navigation';
import {fireEvent} from 'c/pubsub';

export default class ChildComponent extends LightningElement {
    
    @wire(CurrentPageReference) pageRef;

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

    handleChildToChildClick() {
        console.log('handling the child to sibling click');
        fireEvent(this.pageRef, 'pubsub');
    }
}