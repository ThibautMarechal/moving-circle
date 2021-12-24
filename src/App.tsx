import { motion } from 'framer-motion';

const circleArray = new Array(10 * 10).fill(0);
const translatePx = 10;
const scale = [1.05, 0.9, 1.05, 0.9, 1.05, 0.9, 1.05, 0.9, 1.05];
const times = [0, 0.15, 0.25, 0.35, 0.5, 0.65, 0.75, 0.85, 1];
const ease = ['easeOut', 'linear', 'linear', 'easeIn', 'easeOut', 'linear', 'linear', 'easeIn'];

function App() {
  return (
    <>
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <motion.div className="paper" style={{ filter: 'url("#filter")' }}>
        {circleArray.map((_, i) => (
          <motion.div
            className="circle"
            animate={{
              scale,
              x: Math.floor(i / 10) % 2 ? [0, 0, 0, 0, 0, translatePx, 0, -translatePx, 0] : [0, 0, 0, 0, 0, -translatePx, 0, translatePx, 0],
              y: i % 2 ? [0, translatePx, 0, -translatePx, 0, 0, 0, 0, 0] : [0, -translatePx, 0, translatePx, 0, 0, 0, 0, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              times,
              ease,
            }}
          >
            <div className="inner-circle" />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default App;
