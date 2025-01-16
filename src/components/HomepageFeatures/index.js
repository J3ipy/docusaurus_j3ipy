import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tech Stacks',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Atualmente trabalho com a linguagem Python, focado em soluções de IA/ML e Robótica.
      </>
    ),
  },
  {
    title: 'Profissão',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Graduando em Sistema de Informação no Instituto Federal de Sergipe e Pesquisador do Laboratório de Inovação e Criatividade (LABIC).
      </>
    ),
  },
  {
    title: 'Linhas de Pesquisa',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Meus interesses de pesquisa são Robótica, Redes Neurais Artificiais e IoT.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
