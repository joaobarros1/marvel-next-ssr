import HeroCard from '../HeroCard'

import styles from './HeroList.module.scss'

export default function HeroList ({ heroes }) {
    return (
        <div className={styles.heroList}>
           {
               heroes.map(({ name, thumbnail }, key) => {
                   <HeroCard key={`hero-card-${key}`} name={name} thumbnail={thumbnail} />
               })
           }
        </div>
    )
}