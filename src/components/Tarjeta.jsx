// @flow 
import * as React from 'react';
import styled from '@emotion/styled';


export const tarjeta = () => {
const Img = styled("img") ({
    width: 200,
    height: " 100%",
    objectFit: "cover",
    objectPosition: "center",
});

    return (
        <>
       <div>
      
            sx = {{
                display: "flex",
                alignItems: "center",
                gap: 2,
                overflow: "hidden",
                mt: 5,
            }};
                    
       
       </div>
       <Img src ="http://www.loquesea.com" />
       </>
    );
};
export default tarjeta;
