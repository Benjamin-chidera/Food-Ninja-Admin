import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Effective Date: <strong>[Insert Date]</strong>
      </p>

      <p className="mb-4">
        At <strong>Food Ninja</strong>, we are committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, and safeguard
        your information when you use our website, mobile application, and
        services. Please read this Privacy Policy carefully. If you do not agree
        with the terms of this Privacy Policy, please do not access the site or
        use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We collect information to provide and improve our services, ensure the
        security of our platform, and enhance user experience. The types of
        information we may collect include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, billing and shipping address, and payment details.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> Browser type, device
          information, IP address, cookies, and usage data.
        </li>
        <li>
          <strong>Information from Third Parties:</strong> Social media accounts
          (if used for login/sign-up) and delivery partners (to fulfill orders).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use your information for the following purposes:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          To provide and manage our services, including food ordering and
          delivery.
        </li>
        <li>To process payments and fulfill transactions.</li>
        <li>
          To communicate with you, including sending updates, notifications, and
          promotional offers.
        </li>
        <li>
          To improve and personalize our services and your user experience.
        </li>
        <li>
          To prevent fraudulent transactions, monitor security, and enforce our
          terms and conditions.
        </li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Sharing Your Information
      </h2>
      <p className="mb-4">
        We do not sell, rent, or trade your personal information to third
        parties. However, we may share your information with:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Service Providers:</strong> Delivery partners, payment
          processors, and hosting providers.
        </li>
        <li>
          <strong>Legal Authorities:</strong> When required by law or to protect
          our legal rights.
        </li>
        <li>
          <strong>Affiliates:</strong> Companies related to Food Ninja for
          operational purposes.
        </li>
      </ul>

      {/* Repeat similar structures for the remaining sections */}

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have questions or concerns about this Privacy Policy, please
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

export default PrivacyPolicy;
