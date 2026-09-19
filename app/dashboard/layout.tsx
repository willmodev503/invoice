import SideNav from '@/app/ui/dashboard/sidenav';
import { cookies } from "next/headers";
import { getDemoSession } from "@/app/lib/demoSession";
import { redirect } from "next/navigation";
import DemoTimer from "@/app/ui/demo/demo-timer";
 
export default async function Layout({ children }: { children: React.ReactNode }) {
   const cookieStore = await cookies();
  const demoSessionId = cookieStore.get("demoSessionId")?.value;

   const demoSession = demoSessionId
    ? await getDemoSession()
    : null;

  if (demoSessionId) {
    const demoSession = await getDemoSession();

    if (demoSessionId && !demoSession) {
      redirect("/login");
    }
  }
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="bg-main-gradient w-full flex-none md:w-64">
         <SideNav />
      </div>
       
      <div className="grow p-6 md:overflow-y-auto md:p-12"> {demoSession && (
          <DemoTimer
            expiresAt={demoSession.expiresAt.toISOString()}
          />
        )} {children}</div>
    </div>
  );
}