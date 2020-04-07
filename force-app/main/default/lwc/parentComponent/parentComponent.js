import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    handleParentToChildClick() {
        console.log('in the parent controller');
        this.template.querySelector("c-child-component").handleParentToChildClick();
    }
}