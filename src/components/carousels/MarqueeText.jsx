import React from 'react';

export const MarqueeText = () => {
    
    const phrase = ['Descubre una nueva forma de comprar', 'La mejor selección a solo un clic', 'La comodidad de comprar desde casa', 'Envío rápido y seguro a tu puerta',
    'Calidad y estilo al alcance de todos', 'Tu destino de compras en línea', 'Tu destino de compras en línea']

    const text = () => {
        let elements = [];
        const repeatTimes = 23;
        for (let i = 0; i < repeatTimes; i++) {
            const phraseIndex = i % phrase.length;
            elements.push(
                <span key={i}>
                <span>{phrase[phraseIndex]}</span> <span className="separator">&bull;</span>
                </span>
            );
        }
        return elements;
    };

  return (
    <div className="marquee-text-container section-{{ section.id }}-padding">
      <div className="marquee-text">
        <div className="marquee-text-inner ">{text()}</div>
      </div>
    </div>
  );
};
