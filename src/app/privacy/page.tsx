"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/Footer";

const sections = [
  { id: "interpretation", title: "Interpretation and Definitions" },
  { id: "collecting", title: "Collecting and Using Your Personal Data" },
  { id: "types", title: "Types of Data Collected" },
  { id: "use", title: "Use of Your Personal Data" },
  { id: "retention", title: "Retention of Your Personal Data" },
  { id: "transfer", title: "Transfer of Your Personal Data" },
  { id: "delete", title: "Delete Your Personal Data" },
  { id: "disclosure", title: "Disclosure of Your Personal Data" },
  { id: "security", title: "Security of Your Personal Data" },
  { id: "children", title: "Children's Privacy" },
  { id: "links", title: "Links to Other Websites" },
  { id: "changes", title: "Changes to this Privacy Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-background text-white font-body selection:bg-accent/30 overflow-x-hidden">
      <Header stickyMode="immediate" />
      <div className="grow">
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="size-4" />
            <span className="text-white/60">Privacy Policy</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-white/40 mb-12">Last updated: March 23, 2023</p>

          <div className="flex flex-col lg:flex-row gap-16 relative">
            {/* Sidebar TOC */}
            <aside className="lg:w-84 shrink-0 hidden lg:block">
              <div className="sticky top-32 max-h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide py-2 border-l border-white/5">
                <h2 className="text-xs font-headline font-bold uppercase tracking-widest text-accent mb-6 px-4">Contents</h2>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={cn(
                        "block px-4 py-2 text-sm transition-all border-l-2 -ml-[2px]",
                        activeSection === section.id
                          ? "text-accent border-accent bg-accent/5 font-medium"
                          : "text-white/40 border-transparent hover:text-white/70 hover:border-white/20"
                      )}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 max-w-3xl space-y-12 prose prose-invert prose-p:text-white/70 prose-p:leading-relaxed prose-headings:font-headline prose-headings:font-bold">
              <section className="space-y-6">
                <p>
                  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </p>
                <p>
                  We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </section>

              <div id="interpretation" className="pt-8 border-t border-white/5">
                <h2 className="text-2xl text-white mb-6">Interpretation and Definitions</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg text-white mb-3">Interpretation</h3>
                    <p>
                      The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg text-white mb-3">Definitions</h3>
                    <p className="mb-4 text-white/50 italic">For the purposes of this Privacy Policy:</p>
                    <ul className="space-y-4">
                      <li><strong className="text-accent underline decoration-accent/20 underline-offset-4">Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                      <li><strong className="text-accent underline decoration-accent/20 underline-offset-4">Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
                      <li><strong className="text-accent underline decoration-accent/20 underline-offset-4">Company</strong> refers to Neol Interactive (Pty) Ltd. T/A Tektonics Systems.</li>
                      <li><strong className="text-accent underline decoration-accent/20 underline-offset-4">Cookies</strong> are small files that are placed on Your computer by a website.</li>
                      <li><strong className="text-accent underline decoration-accent/20 underline-offset-4">Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="collecting" className="pt-8 border-t border-white/5">
                <h2 className="text-2xl text-white mb-6">Collecting and Using Your Personal Data</h2>
                <div id="types" className="space-y-6">
                  <h3 className="text-xl text-white">Types of Data Collected</h3>
                  <div className="space-y-4">
                    <h4 className="text-lg text-white/90">Personal Data</h4>
                    <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information, including but not limited to:</p>
                    <ul className="list-disc pl-5 text-white/70 space-y-1">
                      <li>Email address</li>
                      <li>First name and last name</li>
                      <li>Phone number</li>
                      <li>Usage Data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="use" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-4">Use of Your Personal Data</h2>
                <p>The Company may use Personal Data for the following purposes:</p>
                <ul className="space-y-4 mt-6">
                  <li className="bg-card/20 p-4 rounded-xl border border-white/5">
                    <strong className="text-white block mb-1">To provide and maintain our Service</strong>
                    <span className="text-sm text-white/60 leading-relaxed">Including to monitor the usage of our Service.</span>
                  </li>
                  <li className="bg-card/20 p-4 rounded-xl border border-white/5">
                    <strong className="text-white block mb-1">To contact You</strong>
                    <span className="text-sm text-white/60 leading-relaxed">By email, telephone calls, SMS, or other equivalent forms regarding updates or informative communications.</span>
                  </li>
                </ul>
              </div>

              <div id="retention" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-4">Retention of Your Personal Data</h2>
                <p>
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations.
                </p>
              </div>

              <div id="transfer" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-4">Transfer of Your Personal Data</h2>
                <p>
                  Your information, including Personal Data, is processed at the Company&apos;s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction.
                </p>
              </div>

              <div id="delete" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-4">Delete Your Personal Data</h2>
                <p>
                  You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
                </p>
              </div>

              <div id="disclosure" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-4">Disclosure of Your Personal Data</h2>
                <div className="space-y-4">
                  <h3 className="text-white font-headline">Law enforcement</h3>
                  <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities.</p>
                </div>
              </div>

              <div id="security" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-4">Security of Your Personal Data</h2>
                <p>
                  The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                </p>
              </div>

              <div id="children" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-4">Children&apos;s Privacy</h2>
                <p>
                  Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.
                </p>
              </div>

              <div id="links" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-4">Links to Other Websites</h2>
                <p>
                  Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party&apos;s site.
                </p>
              </div>

              <div id="changes" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-4">Changes to this Privacy Policy</h2>
                <p>
                  We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                </p>
              </div>

              <div id="contact" className="pt-8 border-t border-white/5">
                <h2 className="text-xl text-white mb-6">Contact Us</h2>
                <div className="bg-card/30 border border-white/5 p-8 rounded-2xl">
                  <p className="text-white/70">If you have any questions about this Privacy Policy, You can contact us:</p>
                  <div className="mt-6">
                    <p className="text-white/70"><span className="text-accent font-bold">By email:</span> info@tektonics.africa</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  );
}
