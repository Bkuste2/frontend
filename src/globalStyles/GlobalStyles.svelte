<style global>
	body, html{
		height: 100%;
		width: 100%;
		box-sizing: border-box;
	}
	
	[data-anime] {
		opacity: 0;
		transition: .3s;
	}
	
  [data-anime="left"] {
		transform: translate3d(-50px, 0, 0);
	}
	
	[data-anime="right"] {
		transform: translate3d(50px, 0, 0);
	}

	[data-anime].animate {
		opacity: 1;
		transform: translate3d(0px, 0px, 0px);
	} 

</style>