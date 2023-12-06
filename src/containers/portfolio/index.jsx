import React  from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../img/image1.png"
import ImageTwo from '../../img/image2.png';
import ImageThree from '../../img/image3.png';
import ImageFour from '../../img/image4.png';
import ImageFive from '../../img/image5.png';
// import Portfolio from './index';
import "./styles.scss"
import {useState} from "react"

const PortfolioData = [
    {
        id : 2,
        name : "Ecommerce",
        image : ImageOne,
        link : ''
    },
    {
        id : 3,
        name :" Notes App",
        link : '',
        image : ImageTwo,

    },
    {
        id : 2,
        name : "Supplier Design",
        image: ImageThree,
        link : '',
    },
    {
        id : 2,
        name : "Todo App",
        image : ImageFour,
        link : '',
    },
    {
        id : 3,
        name : "Shopping cart design",
        image : ImageFive,
        link : '',
    },
]

const filterData = [
    {
        filteriId : 1,
        label : 'All'
    },
    {
        filteriId : 2,
        label : 'Developement',
    },
    {
        filteriId : 3,
        label : 'Design',
    },
]

const Portfolio = () => {
const [filteredvalue,setFilterdvalue] = useState(1);
const [hoveredValue,setHoveredValue] = useState(null)


function handleFilter(currentId) {
    setFilterdvalue(currentId)
};

function handleHover(index) {
    setHoveredValue(index)
}

console.log('=======================================');
console.log(hoveredValue);
console.log('========================================');

const filteredItems = filteredvalue === 1 ? PortfolioData :
PortfolioData.filter((item) => item.id === filteredvalue)

console.log(filteredItems);

    return(
        <section id="portfolio" className="portfolio">
        <PageHeaderContent
        headerText ="My portfolio"
        icon={<BsInfoCircleFill size={40} />}
        />
        <div className="portfolio_content">
            <ul className="portfolio_content_filter">
                    {filterData.map((item) => (
                       <li className={item.filterId === filteredvalue ? 'active' : ''} 
                       onClick={()=>handleFilter(item.filterId)} 
                       key={item.filterId}

                       >
                         {item.label}
                        </li>
                    ))}
                 </ul>
                 <div className="portfolio_content_cards">
                     
                         {filteredItems.map((item,index)=> (
                             <div className="portfolio_content_cards_item" 
                             key={'cardItem$(item.name.trim()}'}
                             onMouseEnter={()=>handleHover(index)}
                             onMouseLeave={()=>handleHover(null)}

                             >
                            
                            <div className="portfolio_content_cards_item_img-wrapper">
                                <a>
                                    <img alt="dummy data" src={item.image}/>
                                </a>
                            </div>
                            <div className="overlay"> 
                            {index === hoveredValue  && (
                              <div>
                            <p>{item.name}</p>
                            <button>Visit</button>
                            </div>
                            )}
                            </div>
                            </div>
                         ))}
                      </div>
                     </div>
               </section>
    );
};
export default Portfolio;