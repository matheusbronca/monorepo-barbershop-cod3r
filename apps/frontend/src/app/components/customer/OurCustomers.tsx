import { customers } from '@barba/core';
import { LayoutGrid } from '@/components/ui/layout-grid';
import CustomerItem from './CustomerItem';
import Title from '../shared/Title';

export default function OurCustomers() {
  const classes = [
    'md:col-span-2',
    'col-span-1',
    'col-span-1',
    'md:col-span-2',
  ];
  const cards = customers.map((customer, i) => {
    return {
      id: customer.id,
      content: (
        <CustomerItem name={customer.name} testimonial={customer.testimonial} />
      ),
      className: classes[i],
      thumbnail: customer.imageUrl,
    };
  });

  return (
    <div className="container flex flex-col items-center gap-16">
      <Title
        tag="customers"
        primary="Quem Manda Aqui"
        secondary="Nossos customers são os chefes! Aqui, eles mandam, desmandam e ainda saem com estilo de rockstar!"
      />
      <div className="h-[900px] w-full">
        <LayoutGrid cards={cards} />
      </div>
    </div>
  );
}
