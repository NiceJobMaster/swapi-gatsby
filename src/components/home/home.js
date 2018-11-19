import React from 'react'
import starWars from '../../images/star_wars.svg'
import fortyTh from '../../images/40th.svg'
import helm from '../../images/helm.png'
import styles from './home.module.scss'
import ScrollAnimation from 'react-animate-on-scroll'

const Home = () => (
  <div className={styles.margin}>
    <ScrollAnimation animateIn="fadeIn">
      <h1 className={styles.title}>Hi people</h1>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <img src={fortyTh} alt="fortyTh" />
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <img src={starWars} alt="starWars" />
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <img src={helm} alt="starWars" />
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </ScrollAnimation>
  </div>
)

export default Home
