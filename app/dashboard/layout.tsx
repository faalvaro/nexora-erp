import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar />

      <div className="lg:pl-64">
        <Topbar />

        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}