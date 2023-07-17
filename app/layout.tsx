import ToastProvider from "@/Providers/ToastProvider";
import "./globals.css";
import Navigation from "@/components/Shared/Navigation";

export const metadata = {
  title: "Builder Bid Book",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
