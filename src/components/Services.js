import React from 'react';
import Title from './Title';
import { services } from '../data';
const Services = () => {
  return (
    <section class='section services' id='services'>
      <Title title='Services' subtitle='Offered' />
      <div class='section-center services-center'>
        {services.map((service) => {
          return (
            <article class='service'>
              <span class='service-icon'>
                <i class={service.icon}></i>
              </span>
              <div class='service-info'>
                <h4 class='service-title'>{service.title}</h4>
                <p class='service-text'>{service.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
