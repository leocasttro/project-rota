import Card from '../components/Card';
import './home.css';

function Home() {
  const cardsData = [
    {
      title: 'Conversor',
      imageUrl: '../../public/img/convert.png',
      path: '/convert',
    },
    {
      title: 'Divisor',
      imageUrl: '../../public/img/calculadora.png',
      path: '/divider',
    },
    {
      title: 'Game of Life',
      imageUrl: '../../public/img/game.png',
      path: '/game',
    },
  ];

  return (
    <div className="container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          path={card.path}
        />
      ))}
    </div>
  );
}

export default Home;
