import { Syne} from "next/font/google";
import "./globals.css";

//custom fonts

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500","600","700","800"],
});

export const metadata: metadata = {
  title: "Sunil portfolio website",
  description: "UI/UX designer portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ `${syne.className} antialiased`}
        suppressHydrationWarning={true}
        >{children}
      </body>
    </html>
  );
}
