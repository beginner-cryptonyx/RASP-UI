// types.ts
import { type ReactNode } from 'react';
import { Outlet } from 'react-router';

export interface NavLayoutProps {
  logo: ReactNode;
  services: NavService[];
  navigation?: ReactNode;
  sideNav?: ReactNode;
  rightSlot?: ReactNode;
}

export interface NavService {
  label: string;
  href: string;
}

// NavLayout.tsx
export function NavLayout({ logo, services, navigation, sideNav, rightSlot }: NavLayoutProps ) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-3 sticky top-0 z-50 bg-background4">
        <div className="flex items-center gap-8">
          <div className="shrink-0">{logo}</div>
          {navigation ?? (
            <ul className="flex gap-6">
              {services.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="text-sm font-medium text-color3 hover:text-color1">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {rightSlot && <div className="shrink-0">{rightSlot}</div>}
      </header>

      <div className="flex flex-1 items-center justify-center">
        {sideNav && <aside className="w-64 border-r border-gray-200 shrink-0">{sideNav}</aside>}
              <main>
        <Outlet />
      </main>
      </div>
    </div>
  );
}