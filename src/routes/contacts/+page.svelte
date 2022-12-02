<script lang="ts">
  import type { IContact } from "$lib/contact.type";
  import { page } from '$app/stores';

  let title = 'Contacts';
  let contacts: IContact[];
  let selectedContact: IContact;
  let total_contacts: number;



const no_of_contacts = $page.url.searchParams.get('no_of_contacts')


        let total_contacts = +param['']; // toInt
        this.total_contacts = Number(total_contacts);
        this.contacts = this.contactService.generateContacts(this.total_contacts);
        this.getContacts(this.total_contacts);
      });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  getContacts(total: number): void {
    //  this.contactService.getContacts().then(contacts => { this.contacts = contacts });
    const contactCount = total || 10;
    this.contactService.getContactList(contactCount)
      .subscribe(
        (contacts: IContact[]) => {
          this.contactService.contacts = contacts;
          this.contacts = contacts;
        },
        (error: any) => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
  }

  onSelect(contact: IContact): void {
    this.selectedContact = contact;
  }

  delete(index: number): void {
    this.contactService.deleteContact(index);
    //    this.getContacts();
  }

  addContact(): void {
    // set active component to null to determine edit/add
    this.contactService.activeContact = new IContact();
    this.router.navigate(['/newContact']);
  }
</script>

<h2 class="page-header text-center">{{title}} ({{contacts?.length?.toLocaleString()}})</h2>
<!-- <p class="text-center">
    <a (click)="addContact()" class="btn btn-lg btn-outline" >Add Contact</a>
</p> -->
<div class="media-list contacts-container">
    <ng-container *ngFor="let contact of contacts;let i = index">
        <contact [contact]="contact" 
            [index]="i" 
            class="my-repeat-animation contact media"
            (delete)="delete($event)"></contact>
    </ng-container>
</div>
