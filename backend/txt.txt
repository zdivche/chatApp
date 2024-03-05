<script setup lang="ts">
import { Ref, ref, onMounted } from 'vue';
import axios from 'axios';

type Item = {userId:number, id:number, title:string, body: string}
const data = ref<Item[] | null>(null)
const error = ref<Error | null>(null)
const inp: Ref<string> = ref('');

const getItems = async () => {
	try {
		const response = await axios.get<Item[]>('https://jsonplaceholder.typicode.com/posts')
		data.value = response.data
	} catch (err) {
		error.value = err as Error;
		console.log("error: ", error.value);
	}
	onMounted(getItems)

	return {
		data, error
	}

}

const inputValue = (e: Event) => {
	const target = e.target as HTMLInputElement;
	inp.value = target.value;

};
</script>
<template>
	<section class="flex flex-col h-full w-full my-10 max-w-screen-lg mx-auto">
		<section class="bg-slate-400 h-full border mb-4 relative rounded-lg">
		
			<section class="flex justify-center"><h1 class="text-2xl">Web messenger</h1></section>
			<div class="flex justify-center">
				<div v-if="data">{{ data }}</div>
				<div v-else-if="error">{{ error.message }}</div>
				<div v-else>Loading....</div>
			</div>
			<section class="flex w-full absolute bottom-0 text-white max-w-screen-lg mx-auto">
			<form class="w-full relative flex items-center">
				<input
					type="text"
					placeholder="type a message"
					@input="inputValue"
					class="text-black text-md input w-full pr-16 focus:outline-none bg-gray-300 rounded-lg py-1 px-4"
				/>
				<button
					type="submit"
					className="w-auto bg-black hover:bg-gray-700 text-white rounded-r-lg px-6 py-1 text-md absolute  right-0"
				>
					Send
				</button>
			</form>
		</section>
		</section>
		
	</section>
</template>
