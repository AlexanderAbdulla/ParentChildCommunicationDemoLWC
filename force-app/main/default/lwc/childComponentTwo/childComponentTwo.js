import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { RegisterListener, unregisterAllListeners, registerListener } from 'c/pubsub';

export default class ChildComponentTwo extends LightningElement {
    
    @wire(CurrentPageReference) pageRef;
    
    @track childToChildClicks = 0;

    connectedCallback() {
        registerListener('pubsub', this.handeChildToSiblingClick, this);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    handeChildToSiblingClick() {
        console.log('click has made it to sibling!');
        this.childToChildClicks += 1;
    }

}