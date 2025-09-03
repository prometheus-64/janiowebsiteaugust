const Terms = () => {
  return <div className="min-h-screen bg-background">
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-8">
            <section>
              <p className="text-lg mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <p>
                Welcome to Janio. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Janio's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
              <p className="mb-4">
                Janio provides comprehensive 4PL (Fourth-Party Logistics) services including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Supply chain management and optimization</li>
                <li>Warehousing and distribution services</li>
                <li>Transportation and freight management</li>
                <li>Logistics consulting and control tower services</li>
                <li>Technology solutions for logistics operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Obligations</h2>
              <p className="mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any unlawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain the confidentiality of your account credentials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Availability</h2>
              <p>
                We strive to provide continuous service availability, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue services with reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              <p>
                All content, trademarks, service marks, and logos on our website are the property of Janio or its licensors. You may not use, reproduce, or distribute any content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, Janio shall not be liable for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages arising from third-party actions or services</li>
                <li>Force majeure events beyond our reasonable control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Janio, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Dispute Resolution</h2>
              <p>Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of SIAC.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of our services constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
export default Terms;