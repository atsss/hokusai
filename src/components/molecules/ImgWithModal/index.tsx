import React, { useState } from 'react';
import { Img } from "../../atoms/Img";
import { Modal } from "../../atoms/Modal";

interface Props {
  data: { indexSrc: string, modalSrc: string },
  className?: string
}

export const ImgWithModal: React.FC<Props> = ({ data, className }) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => { console.log('vvvv'); setIsOpen(false) }

  return (
    <div className={className} onClick={() => open()}>
      <Img src={data.indexSrc}/>
      <Modal open={isOpen} onClose={() => close()}>
        <Img src={data.modalSrc}/>
      </Modal>
    </div>
  )
}
