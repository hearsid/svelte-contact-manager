import { error } from '@sveltejs/kit';
import type { IContact } from "$lib/contact.type";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const get = await new Promise((resolve, reject) => {
    const contacts: IContacts[] = [
        {
            id: 1,
            name: 'Tom',
            tel: '92348712432',
            email: 'hearsid@gmail.com',
            imageId: 1
        }, 
        {
          id: 2,
          name: 'Tom',
          tel: '92348712432',
          email: 'hearsid@gmail.com',
          imageId: 1
      }
    ]
    resolve(contacts);
  });
 
  if (get) {
    return get;
  }
 
  throw error(404, 'Not found');
}