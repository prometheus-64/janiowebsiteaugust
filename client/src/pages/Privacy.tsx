const Privacy = () => {
  return <div className="min-h-screen bg-background">
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
            <section>
              <p className="text-lg mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <p>
                At Janio ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">Personal Information</h3>
              <p className="mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Name and contact information (email address, phone number, physical address)</li>
                <li>Company name and business information</li>
                <li>Service preferences and requirements</li>
                <li>Communication records and feedback</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">Automatically Collected Information</h3>
              <p className="mb-4">When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>To provide and improve our logistics services</li>
                <li>To respond to your inquiries and communicate with you</li>
                <li>To customize your experience and provide relevant content</li>
                <li>To analyze website usage and optimize our services</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business merger, acquisition, or sale</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p className="mb-4">Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete data</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
              <p>Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p><strong>Janio Logistics</strong></p>
                <p>Email: contact@janio.asia | sales@janio.asia</p>
                <p>Address: 30 Prinsep St., Singapore 188647</p>
                
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>;
};
export default Privacy;