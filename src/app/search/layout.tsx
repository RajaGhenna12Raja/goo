import SearchHeader from "@/components/SearchHeader";


export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <body>
        <SearchHeader/>
        {children}
        {/* footer */}
      </body>
  );
}
