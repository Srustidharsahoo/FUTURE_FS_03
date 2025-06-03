import React from 'react';
import '../css/Feature.css';
import { FaClock, FaGift, FaBox, FaUndo } from 'react-icons/fa';

export const Feature = () => {
  const features = [
    {
      icon: <FaClock className="icon" />,
      title: '10 minute grocery now',
      desc: 'Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.'
    },
    {
      icon: <FaGift className="icon" />,
      title: 'Best Prices & Offers',
      desc: 'Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers.'
    },
    {
      icon: <FaBox className="icon" />,
      title: 'Wide Assortment',
      desc: 'Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.'
    },
    {
      icon: <FaUndo className="icon" />,
      title: 'Easy Returns',
      desc: 'Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.'
    },
  ];

  return (
    <section className="features">
      {features.map((item, index) => (
        <div className="feature-item" key={index}>
          {item.icon}
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
};
