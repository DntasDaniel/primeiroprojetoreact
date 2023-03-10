
function cabecalho(){
    return(
        <div>
 	<header className="cabecalhoPrincipal">
		<div className="container">
			<h1 className="cabecalhoPrincipal-titulo">
                <img className="logo"src='/logo.png'></img>
				<a className= "nomeLoja"href="#">Lojinha Mime</a>
			</h1>

			<nav className="cabecalhoPrincipal-nav">
				<a className="cabecalhoPrincipal-nav-link" href="#">Home</a>
				<a className="cabecalhoPrincipal-nav-link" href="#">Cursos</a>
				<a className="cabecalhoPrincipal-nav-link" href="#">Sobre nós</a>
				<a className="cabecalhoPrincipal-nav-link" href="#">Contato</a>
				<a className="cabecalhoPrincipal-nav-link cabecalhoPrincipal-nav-link-app" href="#">Nosso APP</a>
			</nav>
		</div>
	</header>
	
        </div>
    )
}

export default cabecalho;