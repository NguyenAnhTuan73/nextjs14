export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="relative min-h-screen">{children}</section>;
}
