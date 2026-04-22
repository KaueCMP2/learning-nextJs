import React from 'react'
import styles from '../card-produto/CardProduto.module.css'

const CardProduto = () => {
  return (
    <article className={styles.card}>
        <img src="../imgs/hamburguer_alcatra.png" alt="Um lindo hamburguer, sobre uma tabua de madeira e uma faca do lado." className={styles.img_card} />
        <div className={styles.nome_produto}>
          <h3 className={styles.titulo_card}>Monster</h3>
        </div>
        <div className={styles.desc_card_content}>
          <p className={styles.desc_card}>Hámburguer brutal, suculento e exageradamente saboroso</p>
        </div>
        <div className={styles.preco_content}>
          <span className={styles.preco}>R$: 35,00</span>
        </div>
    </article>
  )
}

export default CardProduto