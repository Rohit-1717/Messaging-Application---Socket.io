import React from 'react';
import { Reply } from 'lucide-react';

const ReplyContext = ({ message }) => {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <Reply size={16} className="text-gray-500" />
      <div className="flex-1 truncate">
        {message.text || 'Image'}
      </div>
    </div>
  );
};

export default ReplyContext;