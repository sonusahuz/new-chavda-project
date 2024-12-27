import { Button } from '@material-tailwind/react';
import { LayoutGrid, List } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export function ViewSwitcher({ view, onViewChange }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <Button
          variant="outlined"
          size="icon"
          className={view === 'list' ? 'text-[#006400]' : 'text-gray-500'}
          onClick={() => onViewChange('list')}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="outlined"
          size="icon"
          className={view === 'grid' ? 'text-[#006400]' : 'text-gray-500'}
          onClick={() => onViewChange('grid')}
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
