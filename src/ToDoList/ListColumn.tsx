import { Item, Direction } from './types';
import { ListItem } from './ListItem';
import { Card } from '../ui';

interface ListColumnProps {
  title: string;
  items: Item[];
  onMove: (itemId: string, direction: Direction) => void;
}

export function ListColumn({ title, items, onMove }: ListColumnProps) {
  return (
    <Card style={{
      flex: 1,
      minHeight: '400px'
    }}>
      <h3 style={{
        textAlign: 'center',
        marginBottom: '16px',
        color: '#495057',
        textTransform: 'capitalize'
      }}>
        {title}
      </h3>
      
      <div>
        {items.map(item => (
          <ListItem
            key={item.id}
            item={item}
            onMove={onMove}
          />
        ))}
      </div>
    </Card>
  );
}
