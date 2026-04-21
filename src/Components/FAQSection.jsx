import React from "react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      q: "How do I download the games?",
      a: "Once you select a game, click the download button on the details page to get the installer directly to your device.",
    },
    {
      q: "Are the games free to play?",
      a: "We offer a mix of Free-to-Play titles and Premium indie games. Check the price tag on the game card for details.",
    },
    {
      q: "Can I play on mobile?",
      a: "Select games support cross-platform play on Android and iOS. Look for the mobile icon in the game details.",
    },
    {
      q: "Is my personal data secure?",
      a: "Absolutely. We use industry-standard encryption to ensure your account details and game progress are kept safe.",
    },
    {
      q: "Do I need a high-end PC for all games?",
      a: "Not at all! While some AAA titles require more power, our library includes hundreds of optimized indie games for every setup.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-accent mt-2">
          Everything you need to know about Gamehub
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="max-w-3xl mx-auto space-y-4"
      >
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="collapse collapse-plus bg-secondary border border-white/5 rounded-2xl shadow-lg"
          >
            <input
              type="radio"
              name="my-accordion-3"
              defaultChecked={i === 0}
              className="cursor-pointer"
            />
            <div className="collapse-title text-xl font-medium text-white hover:text-primary transition-colors">
              {faq.q}
            </div>
            <div className="collapse-content text-accent">
              <p className="pb-4">{faq.a}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQSection;
