'use client';
import { Card } from '@/src/components/Card';
import { AnimatePresence, motion } from 'framer-motion';
const isSubscribed = false;

const FLOWS = [
  {
    title: 'Meetings',
    description: 'Request a meeting with a therapist.',
    buttonText: 'Request',
    buttonLink: '/dashboard/meetings',
    disabled: !isSubscribed,
  },
  {
    title: 'Community',
    description: 'Reach out to fellow people looking for support and empathy.',
    buttonText: 'Join',
    buttonLink: '/dashboard/community',
    disabled: false,
  },
  {
    title: 'Selfcare',
    description: 'Work on oneself with our self-help resources.',
    buttonText: 'Start',
    buttonLink: '/dashboard/selfcare',
    disabled: !isSubscribed,
  },
];
export const DashboardView = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 h-auto'>
      <AnimatePresence>
        {FLOWS.map((flow, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card {...flow} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
