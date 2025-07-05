import { IonIcon } from "@ionic/react";
import { motion, type Variants } from "framer-motion";


const SocialMediaIcon = ({icon, className}: {icon:string, className:string}) => {
    const variants: Variants = {
        rest: { y: 0 },
        shake: {
            y: [0, -8, -8, -8, -8, -8, 0, -4, 0],
            transition: { duration: 2, repeat: Infinity, repeatType: "loop" },
        },
    };
  return (
   <motion.div
                        variants={variants}
                        initial="rest"
                        animate="rest"
                        whileHover="shake"
                        style={{ display: "inline-block", cursor: "pointer" }}
                    >
                        <IonIcon icon={icon} className={className}/>
                    </motion.div>
  )
}

export default SocialMediaIcon