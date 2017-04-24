<script>
import axios from 'axios';
export default {
	data() {
		return {
		}
	},
	computed: {
	},
	methods: {
		dosomething() {
			axios.get('http://localhost:3000/api/home')
				.then(res => alert(res.data.data))
		}
	}
}
</script>

<template>
	<div>
		Home
		<br>
		Test Api from server
		<br>
		<button @click="dosomething">click</button>
	</div>
</template>
