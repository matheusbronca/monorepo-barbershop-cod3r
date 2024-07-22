export interface CustomerItemProps {
  name: string;
  testimonial: string;
}

export default function CustomerItem(props: CustomerItemProps) {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{props.name}</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {props.testimonial}
      </p>
    </div>
  );
}
