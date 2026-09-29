import Icon from "../Meta/Icon";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({
  items,
  className = "",
}: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center  text-sm ">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div>
              {!isLast ? (
                <div className="flex items-center">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="m-0 p-0 text-textSecondary underline decoration-accent"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="m-0 p-0 text-textSecondary">
                      {item.label}
                    </span>
                  )}
                  <Icon
                    name="ChevronRight"
                    className="h-4 w-4 shrink-0 text-accent p-0 mx-0.5 translate-y-0.5"
                  />
                </div>
              ) : (
                <div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="m-0 p-0 text-textSecondary underline decoration-accent"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="m-0 p-0 text-textSecondary">
                      {item.label}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
          //   return (
          //     <div key={`${item.label}-${index}`} className="flex">
          //       <li className="flex items-center">
          //         {isLast || !item.href ? (
          //           <span
          //             className="font-medium text-textSecondary"
          //             aria-current={isLast ? "page" : undefined}
          //           >
          //             {item.label}
          //           </span>
          //         ) : (
          //           <a
          //             href={item.href}
          //             className="text-gray-500 transition-colors hover:text-gray-900 hover:underline"
          //           >
          //             {item.label}
          //           </a>
          //         )}
          //       </li>
          //       {!isLast && (
          //         <li aria-hidden="true" className="flex items-center">
          //           <Icon
          //             name="ChevronRight"
          //             className="h-4 w-4 shrink-0 text-accent"
          //           />
          //         </li>
          //       )}
          //     </div>
          //   );
        })}
      </ol>
    </nav>
  );
}
