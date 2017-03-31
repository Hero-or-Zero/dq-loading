<template>
  <div id="loading">
  	<div class="loading"></div>
  </div>
</template>
<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	html, body {
		height: 100%;
	}
	body:after, body:before {
		display: table;
		content: '';
		clear: both;
	}
	#loading {
		height: 100%; 
		width: 100%; 
		position: absolute; 
		background-color: #d4d4d4; 
		top: 0; 
		left: 0;
		opacity: 0.8; 
		display: flex; 
		justify-content: center; 
		align-items: center;
		z-index: 1000;
	}
		@keyframes dqload
			{
				from {
					transform:rotate(0deg);
					-moz-transform:rotate(0deg);
					-webkit-transform:rotate(0deg);
					-o-transform:rotate(0deg);
				}
				to {
					transform:rotate(360deg);
					-moz-transform:rotate(360deg);
					-webkit-transform:rotate(360deg);
					-o-transform:rotate(360deg);
				}
			}

		@-moz-keyframes dqload
			{
				from {
					transform:rotate(0deg);
					-moz-transform:rotate(0deg);
					-webkit-transform:rotate(0deg);
					-o-transform:rotate(0deg);
				}
				to {
					transform:rotate(360deg);
					-moz-transform:rotate(360deg);
					-webkit-transform:rotate(360deg);
					-o-transform:rotate(360deg);
				}
			}

		@-webkit-keyframes dqload
			{
				from {
					transform:rotate(0deg);
					-moz-transform:rotate(0deg);
					-webkit-transform:rotate(0deg);
					-o-transform:rotate(0deg);
				}
				to {
					transform:rotate(360deg);
					-moz-transform:rotate(360deg);
					-webkit-transform:rotate(360deg);
					-o-transform:rotate(360deg);
				}
			}

		@-o-keyframes dqload
			{
				from {
					transform:rotate(0deg);
					-moz-transform:rotate(0deg);
					-webkit-transform:rotate(0deg);
					-o-transform:rotate(0deg);
				}
				to {
					transform:rotate(360deg);
					-moz-transform:rotate(360deg);
					-webkit-transform:rotate(360deg);
					-o-transform:rotate(360deg);
				}
			}
	.loading {
		width: 200px; 
		height: 200px; 
		text-align: center; 
		line-height: 200px; 
		font-size: 36px; 
		background-color: #fff;
		background-image: url('static/img/wyl.jpg');
		background-size: contain;
		border-radius: 100px;
		animation: dqload 2s linear 0s infinite normal;
		-moz-animation: dqload 2s linear 0s infinite normal;
		-webkit-animation: dqload 2s linear 0s infinite normal;
		-webkit-animation:dqload 2s linear 0s infinite normal;
		-o-animation: dqload 2s linear 0s infinite normal;
	}
</style>
<script>
	export default {
	  name: 'dq-loading',
	  data () {
	    return {
	      msg: 'Welcome'
	    }
	  },
	  mounted() {
	  	/*this.$load();*/
	  },
	  methods: {
	  	refresh() {
	  		/*window.history.go(0);*/
	  	}
	  }
	}
</script>