import React,{useState} from "react";
import {CarusellaContainer,CarusellaWrapper,CarusellaContentWrapper,CarusellaContent,
RightArrow,LeftArrow} from './ElementsCarusella'

const Carusella = () =>{

    const [currentIndex , setCurrentIndex] = useState(0);

    const next = () => {
        // if (currentIndex < (currentIndex.length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        // }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div>
            <CarusellaContainer>
                <CarusellaWrapper>
                    <CarusellaContentWrapper>
                        <CarusellaContent style={{ transform: `translateX(-${currentIndex * 100}%)`,behavior: 'smooth' }} />
                        <LeftArrow onClick={() => prev()}>
                            &lt;
                        </LeftArrow>

                        <RightArrow onClick={() => next()}>
                            &gt;
                        </RightArrow>
                        {currentIndex == 0 ?
                            <div>
                                
                            </div>
                            :currentIndex == 1 ?
                            <div>

                            </div>
                        :""}
                    </CarusellaContentWrapper>
                </CarusellaWrapper>
            </CarusellaContainer>

        </div>
    )
}

export default Carusella;