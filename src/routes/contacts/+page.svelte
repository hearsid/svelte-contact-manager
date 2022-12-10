<script lang="ts">
  import type { IContact } from "$lib/contact.type";
  import { page } from '$app/stores';
  import Contact from './Contact.svelte';
  /** @type {import('./$types').PageData} */
  export let data;

  let title = 'Contacts';
  let contacts: IContact[] = [data[0]] || [];
  let selectedContact: IContact;
  let total_contacts: number;

  const no_of_contacts = $page.url.searchParams.get('no_of_contacts');


        // total_contacts = +param['']; // toInt
        // total_contacts = Number(total_contacts);
        // contacts = this.contactService.generateContacts(this.total_contacts);
        // this.getContacts(this.total_contacts);


  function getContacts(total: number): void {
    //  this.contactService.getContacts().then(contacts => { this.contacts = contacts });
    const contactCount = total || 10;
    // this.contactService.getContactList(contactCount)
    //   .subscribe(
    //     (contacts: IContact[]) => {
    //       this.contactService.contacts = contacts;
    //       this.contacts = contacts;
    //     },
    //     (error: any) => console.error('Error: ' + error),
    //     () => console.log('Completed!')
    //   );
  }

  function onSelect(contact: IContact): void {
    // this.selectedContact = contact;
  }

  function deleteContact(event: any): void {
    const index: number = event.detail.text;
    // this.contactService.deleteContact(index);
    //    this.getContacts();
  }

  function addContact(): void {
    // set active component to null to determine edit/add
    // this.contactService.activeContact = new IContact();
    // this.router.navigate(['/newContact']);
  }
</script>

<h2 class="page-header text-center">
	{title} ({contacts?.length?.toLocaleString()})
</h2>
<!-- <p class="text-center">
    <a (click)="addContact()" class="btn btn-lg btn-outline" >Add Contact</a>
</p> -->
<div class="media-list contacts-container">
  {#each contacts as contact, i}
      <Contact
      contact="contact"
      index="i"
      class="my-repeat-animation contact media"
      on:remove={deleteContact}
      ()="delete($event)"
    />
  {/each}
</div>
