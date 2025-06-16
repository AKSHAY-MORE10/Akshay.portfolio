'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MiniChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MiniChat({ isOpen, onClose }: MiniChatProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-4 z-50 w-80 h-96 border border-muted rounded-lg shadow-xl flex flex-col bg-background/80 backdrop-blur-sm"
        >
          <div className="flex justify-between items-center p-3 border-b border-muted">
            <h3 className="text-lg font-semibold">Chat Bot</h3>
            <button onClick={onClose} className="p-1 rounded-full hover:bg-muted">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto">
            {/* Chat messages will go here */}
            <p className="text-muted-foreground text-sm">Welcome! How can I help you today?</p>
          </div>
          <div className="p-3 border-t border-muted bg-background/80 backdrop-blur-sm">
            {/* Input field will go here */}
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-black"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 