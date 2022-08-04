import React from 'react';
import cafe0 from '../../images/cafe 0.png';
import cafe1 from '../../images/cafe 1.png';
import cafe2 from '../../images/cafe 2.png';
import cafe3 from '../../images/cafe 3.png';
import cafe4 from '../../images/cafe 4.png';
import cafe5 from '../../images/cafe 5.png';
import cafe6 from '../../images/cafe 6.png';

function CafeState({cafe}) {
    // eslint-disable-next-line default-case
    switch (cafe) {
        case 0: return <><img src={cafe0} alt='cafe0' className='cafe-img'></img></>
        case 1: return <><img src={cafe1} alt='cafe1'className='cafe-img'></img></>
        case 2: return <><img src={cafe2} alt='cafe2'className='cafe-img'></img></>
        case 3: return <><img src={cafe3} alt='cafe3'className='cafe-img'></img></>
        case 4: return <><img src={cafe4} alt='cafe4'className='cafe-img'></img></>
        case 5: return <><img src={cafe5} alt='cafe5'className='cafe-img'></img></>
        case 6: return <><img src={cafe6} alt='cafe6'className='cafe-img'></img></>
        
    }
}

export default CafeState;