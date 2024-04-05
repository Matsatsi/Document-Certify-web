import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  AppLayout,
  DocsPage,
  HomePage,
  NewDocPage,
  ProfilePage,
  AdminsPage,
  CertifiersPage,
  UsersPage,
  JobsPage,
} from "../components";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout>
            <HomePage />
          </AppLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <AppLayout>
            <ProfilePage />
          </AppLayout>
        }
      />
      <Route
        path="/docs"
        element={
          <AppLayout>
            <DocsPage />
          </AppLayout>
        }
      />
      <Route
        path="/new-doc"
        element={
          <AppLayout>
            <NewDocPage />
          </AppLayout>
        }
      />
      <Route
        path="/admins"
        element={
          <AppLayout>
            <AdminsPage />
          </AppLayout>
        }
      />
      <Route
        path="/certifiers"
        element={
          <AppLayout>
            <CertifiersPage />
          </AppLayout>
        }
      />
      <Route
        path="/users"
        element={
          <AppLayout>
            <UsersPage />
          </AppLayout>
        }
      />
      <Route
        path="/jobs"
        element={
          <AppLayout>
            <JobsPage />
          </AppLayout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
