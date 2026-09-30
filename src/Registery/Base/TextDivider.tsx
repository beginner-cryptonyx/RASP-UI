// ToDo: 

export default function TextDivider({ children, className = "" }:{children:React.ReactNode, className?:string}) {
  return (
    <div
      role="separator"
      className={`flex items-center justify-center gap-3 ${className}`}
    >
      <div className="h-px flex-1 bg-gray-300 -translate-y-1" />
      {children}
      <div className="h-px flex-1 bg-gray-300  -translate-y-1" />
    </div>
  );
}