import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from '@tabler/icons-react';

export interface RatingProps {
  value: number;
  quantity: number;
}

export default function Rating(props: RatingProps) {
  const { value: rating, quantity } = props;

  const estrelas = Array.from({ length: 5 }, (_, index) => {
    const value = index + 1;
    if (rating >= value) {
      return <IconStarFilled key={index} size={18} />;
    }
    if (rating + 1 > value) {
      return <IconStarHalfFilled key={index} size={18} />;
    }
    return <IconStar key={index} size={18} />;
  });

  return (
    <div className="flex items-end gap-2">
      <div className="flex items-center gap-1 text-yellow-400">{estrelas}</div>
      <div className="flex text-xs text-zinc-300">({quantity})</div>
    </div>
  );
}
