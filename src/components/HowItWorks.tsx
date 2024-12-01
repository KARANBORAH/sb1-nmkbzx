import { motion } from 'framer-motion';
import { Search, Clock, Truck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse Menu',
    description: 'Explore our wide selection of dishes from top restaurants',
  },
  {
    icon: Clock,
    title: 'Place Order',
    description: 'Choose your favorite meals and complete your order',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your food delivered to your doorstep quickly',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring" }}
                className="w-20 h-20 mx-auto mb-6 bg-orange-500 rounded-full flex items-center justify-center"
              >
                <step.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}