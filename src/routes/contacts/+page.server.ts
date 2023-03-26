import { error } from '@sveltejs/kit';
import type { IContact } from "$lib/contact.type";
import { CONTACTS } from '$lib/constants/contacts.constant';
import { Utilities } from '$lib/functions/Util';
import { page } from '$app/stores';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  const get = await new Promise((resolve, reject) => {
    const count = url.searchParams.get('no_of_contacts') 
    const no_of_contacts = count || 10;
    let contactsList: IContact[] = CONTACTS;
    contactsList = Utilities.generateContacts(Number(no_of_contacts), contactsList);
    resolve({ contacts: contactsList });
  });
 
  if (get) {
    return get;
  }
 
  throw error(404, 'Not found');
}