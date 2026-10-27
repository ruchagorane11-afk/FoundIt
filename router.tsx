import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { RequireAuth } from './components/auth/RequireAuth';
import { LoginPage } from './pages/LoginPage';
import { ChangePasswordPage } from './pages/ChangePasswordPage';
import { DashboardPage } from './pages/DashboardPage';
import { TimetablePage } from './pages/TimetablePage';
import { TheorySeatingPage } from './pages/TheorySeatingPage';
import { PracticalSeatingPage } from './pages/PracticalSeatingPage';
import { VersionsPage } from './pages/VersionsPage';

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/change-password', element: <RequireAuth><ChangePasswordPage /></RequireAuth> },
  {
    path: '/',
    element: (
      <RequireAuth>
        <AppShell />
      </RequireAuth>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      // Teacher routes
      { path: 'timetable', element: <RequireAuth roles={['teacher']}><TimetablePage /></RequireAuth> },
      { path: 'seating/theory', element: <RequireAuth roles={['teacher']}><TheorySeatingPage /></RequireAuth> },
      { path: 'seating/practical', element: <RequireAuth roles={['teacher']}><PracticalSeatingPage /></RequireAuth> },
      { path: 'versions', element: <RequireAuth roles={['teacher']}><VersionsPage /></RequireAuth> },
      // Student routes (placeholder pages reused for now)
      { path: 'my-practicals', element: <RequireAuth roles={['student']}><PracticalSeatingPage /></RequireAuth> },
      { path: 'my-seat', element: <RequireAuth roles={['student']}><TheorySeatingPage /></RequireAuth> },
    ],
  },
]);
