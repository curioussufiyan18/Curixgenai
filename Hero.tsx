
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="gradient py-28">
      <div className="container grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl lg:text-7xl font-bold leading-tight"
          >
            AI Systems That Help Businesses Generate More Leads
          </motion.h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            Curixgen AI builds websites, AI chatbots, automation systems,
            and booking solutions for modern businesses.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-500 px-6 py-4 rounded-2xl font-medium">
              Book Free Demo
            </button>

            <button className="glass px-6 py-4 rounded-2xl">
              View Demo Projects
            </button>
          </div>
        </div>

        <div className="glass rounded-3xl p-8 min-h-[420px]">
          <div className="space-y-4">
            <div className="glass rounded-2xl p-5">
              AI Chatbot Automation
            </div>
            <div className="glass rounded-2xl p-5">
              Appointment Booking Flow
            </div>
            <div className="glass rounded-2xl p-5">
              Lead Capture Dashboard
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
