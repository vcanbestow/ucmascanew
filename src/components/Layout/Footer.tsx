import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-footer-bg relative text-gray-300       ">

            <div className="w-full h-12 sm:h-16 md:h-24 bg-white rounded-b-[2.5rem] sm:rounded-b-[3.75rem] md:rounded-b-[5rem]"></div>
            <div className="  pb-8 pt-12 ">
                <div className="my-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Logo Placeholder */}
                        <div className="">
                            <Image src="/images/UCMAS-logo.png"
                                alt="UCMAS Logo"
                                width={500}
                                height={500}
                                quality={100}
                                className="h-14 w-auto"
                            />
                        </div>

                        <p className="leading-relaxed   text-gray-300  font-ucmasfont">
                            Canada&#39;s leading abacus and mental math programme. Empowering children
                            ages 5–13 in 200+ centres nationwide for over 30 years.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-2">
                            {/* Facebook */}
                            <Link href="https://www.facebook.com/UCMASCanada/" target="_blank" className="flex items-center justify-center w-10 h-10 rounded border border-slate-600 hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </Link>
                            {/* Twitter (X) */}
                            <Link href="https://twitter.com/ucmascanada" target="_blank" className="flex items-center justify-center w-10 h-10 rounded border border-slate-600 hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                                </svg>
                            </Link>
                            {/* YouTube */}
                            <Link href="https://www.youtube.com/c/ucmascanada" target="_blank" className="flex items-center justify-center w-10 h-10 rounded border border-slate-600 hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </Link>
                            {/* Instagram */}
                            <Link href="https://www.instagram.com/ucmascanada/" target="_blank" className="flex items-center justify-center w-10 h-10 rounded border border-slate-600 hover:border-white hover:text-white transition-all duration-300 hover:-translate-y-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill=""></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" fill=""></line>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">

                        {/* Column 1 */}
                        <div className="flex flex-col">
                            {/* <h3 className="text-gray-300 font-semibold font-ucmasfont mb-3 pb-2 border-b border-footer-linkbottom-border text-base tracking-wide"> */}
                            <h3 className="relative text-gray-300 font-bold font-ucmasfont mb-3 pb-2 text-base tracking-wide after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full sm:after:w-sm after:h-0.5 after:bg-footer-linkbottom-border">
                                For Parents
                            </h3>
                            <ul className="flex flex-col gap-2 font-ucmasfont text-gray-300 ">
                                <FooterLink href="#">About Program & Fees</FooterLink>
                                <FooterLink href="#">Mental Math Worksheets</FooterLink>
                                <FooterLink href="#">Parent Testimonials</FooterLink>
                                <FooterLink href="#">Abacus Mental Math Glossary</FooterLink>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col">
                            <h3 className="relative text-gray-300 font-bold font-ucmasfont mb-3 pb-2 text-base tracking-wide after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full sm:after:w-sm after:h-0.5 after:bg-footer-linkbottom-border">
                                For Entrepreneurs
                            </h3>
                            <ul className="flex flex-col gap-2 font-ucmasfont text-gray-300">
                                <FooterLink href="#">Own a Franchise</FooterLink>
                                <FooterLink href="#">Available Locations</FooterLink>
                                <FooterLink href="#">Franchise Investments</FooterLink>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col">
                            <h3 className="relative text-gray-300 font-bold font-ucmasfont mb-3 pb-2 text-base tracking-wide after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-footer-linkbottom-border">
                                Quick Links
                            </h3>
                            <ul className="flex flex-col gap-2 font-ucmasfont text-gray-300">
                                <FooterLink href="#">Career</FooterLink>
                                <FooterLink href="#">About UCMAS</FooterLink>
                                <FooterLink href="#">Contact Us</FooterLink>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-blue-950">
                <div className="my-container  ">
                    <div className="flex flex-col items-center justify-between gap-2 border-t border-gray-600 mx-auto py-3 text-center lg:flex-row lg:text-left">
                        <p className="text-sm text-gray-300">
                            © UCMAS, {new Date().getFullYear()}. All rights reserved.
                        </p>

                        <p className="text-sm text-gray-300">
                            Designed &amp; Developed by{" "}
                            <a
                                href="https://bestow.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-gray-300 transition-opacity duration-300 hover:opacity-80"
                            >
                                Bestow
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Reusable micro-component for links with modern hover effects
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="relative inline-block text-gray-300  hover:text-ucmas-red font-light hover:font-medium   transition-normal duration-300 group"
            >
                {children}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-ucmas-red transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </Link>
        </li>
    );
}