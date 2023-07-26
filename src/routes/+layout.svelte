<script>
    import Navbar from '$lib/components/Navbar.svelte';
	import './styles.css';
</script>

<div class="app">
	<Navbar />

	<main >
		<slot />
	</main>

	<footer>
		<p>Visit <a href="https://estufaselarco.com.mx">Arco</a> to learn about Arco</p>
	</footer>
</div>

<style>
	.app {
        padding-top: 53px;
		min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
	}

    main {
        max-width: 960px;
        margin: 0 auto;
        padding: 0 1rem;
        width: 100%;
    }

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
