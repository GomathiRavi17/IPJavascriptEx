// app.js
import { Contact } from './contact.js';
import { ContactList } from './contactList.js';

const contactList = new ContactList();
const contactForm = document.getElementById('contact-form');
const contactListElement = document.getElementById('contact-list');

const displayContacts = () => {
    contactListElement.innerHTML = '';
    contactList.contacts.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.name} (${contact.email})`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            contactList.deleteContact(contact.email);
            displayContacts();  // Refresh the contact list
        };
        
        li.appendChild(deleteButton);
        contactListElement.appendChild(li);
    });
};

// Handle form submission
contactForm.onsubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    if (name && email) {
        const newContact = new Contact(name, email);
        contactList.addContact(newContact);
        
        contactForm.reset();  // Clear the form fields
        displayContacts();     // Refresh the contact list display
    }
};

// Initial display of contacts
displayContacts();
