function corpo(){
    return(
        <div>
 	<header className="cabecalhoPrincipal">
		<div className="produtos">
            <div className="corpo"> {/* TRABALHAR COM POSIÇÃO RELATIVA NESSA DIV!!!!!!! TALVEZ RESOLVA A QUESTÃO DO POSICIONAMENTO */}
                <p className="produto">Produto</p>
                <p className="canditados">25 cadastrados</p>
                <button ><tag1>+</tag1> <tag2>Adicionar produto</tag2></button>     
            </div>
            <div className="cabecalho-produto">
                <p className="cabecalho-nome" href="#">Produto</p>
				<p className="cabecalho-categoria" href="#">Categoria</p>
				<p className="cabecalho-avaliação" href="#">Avaliação</p>
				<p className="cabecalho-acoes" href="#">Ações</p>
			</div>
            <div className="corpo-nav">
				<img className="imagem-produto" src="/vestido.png"></img>
				<p className="nome-produto" href="#">Vestido Carter's Sol Azul</p>
                <p className="categoria-produto" href="#">Vestidos</p>
                <p className="avaliacao" href="#"># # # # #</p>
                <p className="ações-editar" href="#">##</p>
                <p className="ações-apagar" href="#">##</p>
			</div>
            <div className="corpo-nav">
				<img className="imagem-produto" src="/vestido-flor.png"></img>
				<p className="nome-produto" href="#">Vestido Carter's Flores</p>
                <p className="categoria-produto" href="#">Vestidos</p>
                <p className="avaliacao" href="#"># # # # #</p>
                <p className="ações-editar" href="#">##</p>
                <p className="ações-apagar" href="#">##</p>
			</div>
            <div className="corpo-nav">
				<img className="imagem-produto" src="/vestido-flor-vermelho.png"></img>
				<p className="nome-produto" href="#">Vestido Carter's Natal</p>
                <p className="categoria-produto" href="#">Vestidos</p>
                <p className="avaliacao" href="#"># # # # #</p>
                <p className="ações-editar" href="#">##</p>
                <p className="ações-apagar" href="#">##</p>
			</div>
            <div className="corpo-nav">
				<img className="imagem-produto" src="/conjunto-arco-iris.png"></img>
				<p className="nome-produto" href="#">Trio Carter's Arco iris</p>
                <p className="categoria-produto" href="#">Vestidos</p>
                <p className="avaliacao" href="#"># # # # #</p>
                <p className="ações-editar" href="#">##</p>
                <p className="ações-apagar" href="#">##</p>
			</div>
            <div className="corpo-nav">
				<img className="imagem-produto" src="/conjunto-moleton.png"></img>
				<p className="nome-produto" href="#">Conjunto Gap Cinza e Rosa</p>
                <p className="categoria-produto" href="#">Vestidos</p>
                <p className="avaliacao" href="#"># # # # #</p>
                <p className="ações-editar" href="#">##</p>
                <p className="ações-apagar" href="#">##</p>
			</div>
            <div className="corpo-nav">
				<img className="imagem-produto" src="/vestido-quadrados.png"></img>
				<p className="nome-produto" href="#">Vestido Ralph Laurem Colorido</p>
                <p className="categoria-produto" href="#">Vestidos</p>
                <p className="avaliacao" href="#"># # # # #</p>
                <p className="ações-editar" href="#">##</p>
                <p className="ações-apagar" href="#">##</p>
			</div>
            <div className="corpo-nav">
				<img className="imagem-produto" src="/vestido-rosa.png"></img>
				<p className="nome-produto" href="#">Vestido Tommy Hilfiger Rosa</p>
                <p className="categoria-produto" href="#">Vestidos</p>
                <p className="avaliacao" href="#"># # # # #</p>
                <p className="ações-editar" href="#">##</p>
                <p className="ações-apagar" href="#">##</p>
			</div>
            <div className="corpo-nav">
				<img className="imagem-produto" src="/conjunto-camisas.png"></img>
				<p className="nome-produto" href="#">Kit Body Manga Curta Carter's Maça</p>
                <p className="categoria-produto" href="#">Vestidos</p>
                <p className="avaliacao" href="#"># # # # #</p>
                <p className="ações-editar" href="#">##</p>
                <p className="ações-apagar" href="#">##</p>
			</div>
            <div className="corpo-nav">
				<img className="imagem-produto" src="/pijama.png"></img>
				<p className="nome-produto" href="#">Macacão Fleece Carter's Coelho Rosa</p>
                <p className="categoria-produto" href="#">Vestidos</p>
                <p className="avaliacao" href="#"># # # # #</p>
                <p className="ações-editar" href="#">##</p>
                <p className="ações-apagar" href="#">##</p>
			</div>
            <div className="corpo-nav">
				<img className="imagem-produto" src="/pijama-borboleta.png"></img>
				<p className="nome-produto" href="#">Macacão Malha Carter's Borboleta</p>
                <p className="categoria-produto" href="#">Vestidos</p>
                <p className="avaliacao" href="#"># # # # #</p>
                <p className="ações-editar" href="#">##</p>
                <p className="ações-apagar" href="#">##</p>
			</div>
                     
		</div>
	</header>
        </div>
    )
}

export default corpo;