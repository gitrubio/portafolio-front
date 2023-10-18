import React, { useState } from 'react'

export default function useAnimateOnView() {
    
        const [animacionEjecutada, setAnimacionEjecutada] = useState(false);

        const handleInView = () => {
            if (!animacionEjecutada) {
              setAnimacionEjecutada(true);
            }
          };
  
    return {
        animacionEjecutada,
        handleInView
    }
}
