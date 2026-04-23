import Topbar from "./Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">

      <div className="flex-1 flex flex-col">
        {/* <Topbar /> */}
        <main className="p-6 bg-background flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}