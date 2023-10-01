import { DashboardView } from '@/src/views/dashboard/dashboard-index';

export default function Dashboard() {
  return (
    <div className='w-full h-full'>
      <div className='gap-5 p-4 h-full'>
        <DashboardView />
      </div>
    </div>
  );
}
