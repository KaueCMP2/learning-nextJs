import React from 'react'
import styles from '../lista-produtos/ListaProdutos.module.css'
import CardProduto from '../card-produto/CardProduto'

const ListaProduto = () => {
    return (
        <section id={styles.cardapio}>
            <h2 id={styles.titulo}>CARDÁPIO</h2>
            <div id={styles.container}>
                <button id={styles.btn_filtro}>
                    <span className={styles.texto_btn_filtro}>Filtrar</span>
                    <img src="../imgs/vector.svg" alt="" />
                </button>
                <div id={styles.content}>
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                    <CardProduto />
                </div>
            </div>
        </section >
    )
}

export default ListaProduto