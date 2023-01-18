import React from 'react';
import Title from './Title';
import { tours } from '../data';
const Tours = () => {
  return (
    <section class='section' id='tours'>
      <Title title='Tours' subtitle='Offered' />

      <div class='section-center featured-center'>
        {tours.map((tour) => {
          return (
            <article class='tour-card'>
              <div class='tour-img-container'>
                <img src={tour.image} class='tour-img' alt='' />
                <p class='tour-date'>tour.date</p>
              </div>
              <div class='tour-info'>
                <div class='tour-title'>
                  <h4>tour.title</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div class='tour-footer'>
                  <p>
                    <span>
                      <i class='fas fa-map'></i>
                    </span>{' '}
                    {tour.location}
                  </p>
                  <p>{tour.duration}</p>
                  <p>{tour.cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
