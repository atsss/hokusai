import React from 'react';
import style from './style.module.sass'
import { AnimatePresence, motion } from "framer-motion"

interface Props {
  children: React.ReactNode,
  open: boolean,
  onClose: () => void
}

export const Modal: React.FC<Props> = ({ children, open, onClose }) => {
  const close = (e: any) => {
    onClose()
    e.stopPropagation()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            onClick={(e) => close(e)}
            className={style.overlay}
          >
            <div
              onClick={stopPropagation}
              className={style.body}
            >
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const stopPropagation = (e: any) => e.stopPropagation();
