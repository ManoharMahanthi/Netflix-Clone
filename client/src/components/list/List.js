import React,{useRef,useState} from 'react'
import './list.scss'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Listitem from '../listitem/Listitem';
function List({list}) {
    
        const [isMoved,setIsMoved] = useState(false)
    const [slideNumber,setSlideNumber] = useState(0)
    const listRef = useRef();

    const handleClick = (direction) =>{
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction==='left' &&  slideNumber>0){
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if(direction==='right' && slideNumber<5){
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        
    }
    return (
        <div className='list'>
            <span className='listTitle'>{list.title}</span>
            <div className='wrapper'>
                <ArrowBackIosIcon className='sliderArrow left' onClick={()=>handleClick('left')} style={{display:!isMoved && "none"}}/>
                <div className='container'  ref={listRef}>
                    {list.content.map((item,i)=> (
                        <Listitem key={i} index={i} item={item}/>
                    ))}
                </div>
                <ArrowForwardIosIcon className='sliderArrow right' onClick={()=>handleClick('right')}/>
            </div>
        </div>
    )
}

export default List
