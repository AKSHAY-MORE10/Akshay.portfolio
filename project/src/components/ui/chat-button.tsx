'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from 'lucide-react';

interface ChatButtonProps {
  onClick: () => void;
}

export function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        className="rounded-full h-10 w-10 shadow-lg"
        size="icon"
        onClick={onClick}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  );
} 