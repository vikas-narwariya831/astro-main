import localFont from "next/font/local";
import { Navbar } from "@/components/Navbar";
import "../styles/globals.css";
import { Footer } from "@/components/Footer";
import { Poppins } from "next/font/google";
import { LoadingProvider } from "@/providers/LoadingProvider";
import { Toaster } from "@/components/ui/sonner"
import { TopLoader } from "@/components/TopLoader";
import { cookies } from "next/headers";
import { SessionProvider } from "@/providers/SessionProvider";
import { getFooterContext, getNavbarContext } from "@/actions/contexts.action";
import DownPage from "@/components/Down";

export const metadata = {
  title: "Astrovoice",
  description: "KNow your Destiny",
};

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--poppins'
});

const georgiaRegular = localFont({
  src: "./fonts/georgia.woff",
  variable: "--georgia-regular",
});

const georgiaBold = localFont({
  src: "./fonts/georgiab.woff",
  variable: "--georgia-bold",
});

const georgiaItalic = localFont({
  src: "./fonts/georgiaz.woff",
  variable: "--georgia-italic",
});

const lemonMilk = localFont({
  src: "./fonts/LEMONMILK-Medium.otf",
  variable: "--lemon-milk-medium",
});

const getSession = async () => {

  const token = cookies().get(process.env.SESSION_KEY)?.value;

  if (!token) return null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/auth/session`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    if (!response.ok) return null;

    const { data } = await response.json();
    return data;

  } catch (error) {
    return null;
  }
}

const RootLayout = async ({ children }) => {

  const session = await getSession();
  const { data: navItems } = await getNavbarContext();
  const { data: footerItems } = await getFooterContext();

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${georgiaRegular.variable} ${georgiaBold.variable} ${lemonMilk.variable} ${georgiaItalic.variable} font-poppins antialiased`}>
        <SessionProvider session={session}>
          <LoadingProvider>
            <TopLoader />
            <Toaster />
            <Navbar navItems={navItems} />
            {children}
            <Footer footerItems={footerItems} />
          </LoadingProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

export default RootLayout;
