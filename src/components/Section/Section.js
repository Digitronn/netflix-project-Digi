import React from 'react';
import './Section.scss';
import Card from './Card/Card';

export default function Section() {
  return (
    <section className="Section">
      <h4>Action</h4>
      <div className="Cards">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
