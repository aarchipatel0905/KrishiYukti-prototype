import { useAppContext } from '../context';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertTriangle, Info, XCircle } from 'lucide-react';

export function Toast() {
  const { toast } = useAppContext();

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-[#22c55e]" />,
    warning: <AlertTriangle className="w-5 h-5 text-[#f59e0b]" />,
    error: <XCircle className="w-5 h-5 text-[#ef4444]" />,
    info: <Info className="w-5 h-5 text-[#40916c]" />
  };

  return (
    <AnimatePresence>
      {toast.visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 bg-white border border-[#e5e7eb] rounded-xl shadow-lg"
        >
          {icons[toast.type as keyof typeof icons]}
          <span className="font-medium text-[#1f2937]">{toast.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
