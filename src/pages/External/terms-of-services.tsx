import React from "react";

const TermsOfService = () => {
  return (
    <div className="terms-of-service container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        Effective Date: <strong>[Insert Date]</strong>
      </p>

      <p className="mb-4">
        Welcome to <strong>Food Ninja</strong>. By accessing or using our
        services, you agree to be bound by the terms and conditions outlined in
        this Terms of Service agreement. If you do not agree to these terms,
        please refrain from using our website or services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Use of Services</h2>
      <p className="mb-4">
        You agree to use our services only for lawful purposes and in compliance
        with all applicable laws. You are responsible for maintaining the
        confidentiality of your account and password and for restricting access
        to your account.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Account Creation</h2>
      <p className="mb-4">
        To use certain features of our services, you may be required to create
        an account. You agree to provide accurate, current, and complete
        information and to keep this information updated.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Prohibited Activities
      </h2>
      <p className="mb-4">
        You agree not to engage in the following activities:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Using the service for any fraudulent or illegal activity.</li>
        <li>Attempting to gain unauthorized access to our systems.</li>
        <li>Interfering with or disrupting the service.</li>
        <li>Posting or transmitting harmful, offensive, or obscene content.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Payment and Refunds
      </h2>
      <p className="mb-4">
        All payments are subject to our payment terms. Refunds, if applicable,
        will be issued in accordance with our Refund Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. Limitation of Liability
      </h2>
      <p className="mb-4">
        To the fullest extent permitted by law, <strong>Food Ninja</strong>{" "}
        shall not be liable for any indirect, incidental, special, or
        consequential damages arising out of or related to your use of the
        service.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your access to our services
        at any time, without notice, for conduct that we believe violates these
        Terms of Service.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        7. Modifications to Terms
      </h2>
      <p className="mb-4">
        We reserve the right to modify these Terms of Service at any time. Any
        changes will be effective immediately upon posting on this page. Your
        continued use of the service constitutes your agreement to the updated
        terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Governing Law</h2>
      <p className="mb-4">
        These Terms of Service are governed by and construed in accordance with
        the laws of [Insert Jurisdiction]. Any disputes arising under these
        terms shall be subject to the exclusive jurisdiction of the courts in
        [Insert Jurisdiction].
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have questions or concerns about these Terms of Service, please
        contact us at:
      </p>
      <address className="mb-4">
        <strong>Food Ninja</strong> <br />
        [Insert Business Address] <br />
        <a href="mailto:info@foodninja.com" className="text-blue-500 underline">
          info@foodninja.com
        </a>
      </address>
    </div>
  );
};

export default TermsOfService;
