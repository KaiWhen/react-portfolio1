import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export const StaggerReveal = ({ children, i }) => {
    const scrollRef = useRef(null)
    const isInView = useInView(scrollRef, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div ref={scrollRef} className='overflow-hidden'>
          <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: i*0.1 }}
            viewport={{ root: scrollRef }}
          >{children}</motion.div>
        </div>
    )
}
