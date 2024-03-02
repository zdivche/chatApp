<script setup lang="ts">
import { ref } from 'vue';
const inp = ref('');
const inputValue = (e) => {
	inp.value = e.target.value;

};
</script>
<template>
	<section class="flex flex-col h-full w-full my-10 max-w-screen-lg mx-auto">
		
		<section class="bg-slate-400 h-full border mb-4 relative rounded-lg">
			<section class="flex justify-center"><h1 class="text-2xl">Web messenger</h1></section>
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
