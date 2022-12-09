<script lang="ts">
	export let contact: any;
	export let index: any;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function removeContact(i: any) {
        dispatch('remove', {
			index: i
		});
    }

</script>

<div class={$$props.class}>
	<div class="thumbnail">
		<img
			class="media-object contact-image"
			src="assets/img/faces/{contact.id || contact.imageId}.jpg"
            alt="contact image"
		/>
	</div>

	<div class="media-body">
		<div class="media-heading">
			<h3>
				{index + 1})
				{contact.name}
				<!-- <small>
                <a (click)="edit()">
                    <i class="glyphicon glyphicon-pencil"></i>
                </a>
                <a (click)="removeContact(index)">
                    <i class="gg-trash"></i>
                </a>
            </small> -->
				<a
					on:click={() => {
						removeContact(index);
					}}
				>
					<i class="gg-trash" />
				</a>
			</h3>
		</div>

		<div class="info-container">
			<div class="row">
				<div class="label">Phone Number:</div>
				<div class="value">{contact.tel}</div>
			</div>
			<div class="row">
				<div class="label">Email:</div>
				<div class="value">{contact.email}</div>
			</div>
		</div>
	</div>
</div>
