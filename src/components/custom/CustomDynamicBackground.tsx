import { motion } from 'framer-motion';
import { useDynamicBackground } from '../../hooks/useDynamicBackground';

export const CustomDynamicBackground = () => {
  
    const {canvasRef} = useDynamicBackground()

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        style={{ background: '#0f0f1e' }}
      />
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20" />
      </motion.div>
    </>
  );
};
