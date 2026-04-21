import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // If it's a decimal (like 2.5), keep one decimal place
    return Math.round(latest * 10) / 10;
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Clean the string to get just the number (e.g., "2.5M+" -> 2.5)
  const numericValue = parseFloat(value.replace(/[^\d.]/g, ""));
  // Get the suffix (e.g., "M+")
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    { label: "Active Players", value: "2.5M+" },
    { label: "Games in Library", value: "1200+" },
    { label: "Verified Reviews", value: "450k+" },
    { label: "Pro Teams", value: "85" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 border-b border-primary/10 lg:border-b-0 lg:border-r last:border-0 border-white/10"
          >
            <div className="text-4xl font-black text-secondary mb-2">
              <Counter value={s.value} />
            </div>
            <div className="text-accent text-sm font-medium uppercase tracking-widest">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
