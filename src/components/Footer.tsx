import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, ChefHat } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="w-8 h-8 text-orange-500" />
              <span className="text-xl font-bold">FoodieDelight</span>
            </div>
            <p className="text-gray-400">
              Bringing the best local restaurants right to your doorstep.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Food Street</li>
              <li>Foodie City, FC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@foodiedelight.com</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-400 hover:text-orange-500"
              >
                <Facebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-400 hover:text-orange-500"
              >
                <Twitter />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-gray-400 hover:text-orange-500"
              >
                <Instagram />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; 2024 FoodieDelight. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}