// contactList.js

export class ContactList {
    constructor() {
        this.contacts = this.loadContacts();
    }

    addContact(contact) {
        this.contacts.push(contact);
        this.saveContacts();
    }

    deleteContact(email) {
        this.contacts = this.contacts.filter(contact => contact.email !== email);
        this.saveContacts();
    }

    loadContacts() {
        const contacts = localStorage.getItem('contacts');
        return contacts ? JSON.parse(contacts) : [];
    }

    saveContacts() {
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
    }
}
