import { X } from 'lucide-react';

const Drawer = (isOpen, setIsOpen, width = '250px', content) => {
  return (
    <div className={`drawer`} style={{ width: width }}>
      <div className="drawer-content">
        <div className="flex items-center justify-end">
          <X
            onClick={() => setIsOpen(false)}
            className="h-7 w-7 cursor-pointer"
          />
        </div>
        <ul className="drawer-main" onClick={() => setIsOpen(false)}>
          {content}
        </ul>
      </div>
    </div>
  );
};

export { Drawer };
