import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { queryClient } from './lib/query-client';
import { router } from './router';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './components/ui/Toast';
import { SSEProvider } from './components/providers/SSEProvider';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastProvider>
          <SSEProvider>
            <RouterProvider router={router} />
          </SSEProvider>
        </ToastProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
