import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track childToParentClicks = 0;
    
    handleParentToChildClick() {
        console.log('in the parent controller');
        this.template.querySelector("c-child-component").handleParentToChildClick();
    }

    handleChildToParentClick(event) {
        console.log('handling the click on the parents side');
        this.childToParentClicks += 1; 
    }
}