import styles from './HeroCard.module.scss'

export default function HeroCard ({ name, thumbnail }) {
    return (
        <div className={styles.heroCard}>
            <img src={`${thumbnail.path}.${thumbnail.extension}`} />
            <h4>{name}</h4>
        </div>
    )
}