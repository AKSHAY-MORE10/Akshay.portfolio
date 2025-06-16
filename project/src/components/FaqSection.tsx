"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Using framer-motion
import * as Accordion from "@radix-ui/react-accordion";
import { MinusIcon, PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming cn utility is in lib/utils

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string; // optional icon text or component
}

export const FaqSection = ({
  data,
}: {
  data: FAQItem[];
}) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="mx-auto w-full max-w-2xl md:max-w-3xl rounded-3xl p-10 shadow-2xs text-lg my-24 border border-muted bg-muted/20">
      {/* Subheader / Timestamp */}
      <div className="mb-2 text-xs text-neutral-400">
        Every day, <span className="font-medium">9:01 AM</span>
      </div>

      <Accordion.Root
        type="single"
        collapsible={true}
        value={openItem ?? ""}
        onValueChange={(value: string) => setOpenItem(value)}
      >
        {data.map((item) => (
          <Accordion.Item
            key={item.id}
            value={item.id.toString()}
            className="mb-2"
          >
            {/* Accordion Header */}
            <Accordion.Header>
              <Accordion.Trigger className="group flex justify-between items-center w-full">
                <div
                  className={cn(
                    "inline-flex group-hover:translate-x-1 rounded-2xl rounded-bl-md transition items-center justify-between px-3 py-1.5 text-left duration-200 outline-hidden",
                    openItem === item.id.toString()
                      ? "bg-blue-600 text-white" // Using blue-600 for active
                      : " text-neutral-700 dark:text-neutral-200",
                  )}
                >
                  {/* Icon & Question Text */}
                  <div className="relative flex items-center space-x-2 ">
                    {item.icon && <span className="text-xl">{item.icon}</span>}
                    <span className="tracking-tight">{item.question}</span>
                  </div>
                </div>

                <span
                  className={cn(
                    "transition-transform",
                    openItem === item.id.toString()
                      ? "rotate-0 text-white" // Using white for active icon
                      : "rotate-90 text-neutral-400 dark:text-neutral-200",
                  )}
                >
                  {openItem === item.id.toString() ? (
                    <MinusIcon className="size-4" />
                  ) : (
                    <PlusIcon className="size-4" />
                  )}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            {/* Accordion Content with AnimatedPresence for smooth mount/unmount */}
            <Accordion.Content forceMount={true}>
              <AnimatePresence initial={false}>
                {openItem === item.id.toString() && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0, x: -20 }}
                    animate={{ height: "auto", opacity: 1, x: 0 }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      x: -20,
                      filter: "blur(8px)",
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="relative ml-7 mt-2 md:ml-14">
                      <div className="relative inline-block rounded-2xl rounded-br mb-5 bg-blue-600 px-4 py-2 text-sm text-white shadow-lg"> {/* Using blue-600 for answer background */}
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export const MessagingLikeQnaPreview = () => {
  return (
    <FaqSection
      data={[
        {
          answer: "The internet doesn't close. It's available 24/7.",
          icon: "❤️",
          id: 1,
          question: "How late does the internet close?",
        },
        {
          answer: "No, you don't need a license to browse this website.",
          id: 2,
          question: "Do I need a license to browse this website?",
        },
        {
          answer:
            "Our cookies are digital, not edible. They're used for website functionality.",
          id: 3,
          question: "What flavour are the cookies?",
        },
        {
          answer: "Yes, but we do have a return policy",
          icon: "⭐",
          id: 4,
          question: "Can I get lost here?",
        },
        {
          answer: "Don't worry, you can always go back or refresh the page.",
          id: 5,
          question: "What if I click the wrong button?",
        },
      ]}
    />
  );
}; 