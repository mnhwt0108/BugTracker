import './feature.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function Feature() {
  return (
    <div className='feature'>
        <div className='featureItem'>
            <div className='featureItem_item'>
                <span className='feature_item-title'>Income</span>
                <div className='feature_item-money'>
                    <span className='item_money-cost'>$15999.99</span>
                    <span className='item_money-rate'>
                        -11,5% <ArrowDownward className='rate_logo downward' /> 
                    </span>
                </div>
                <div className="featureSubcribe">Compare to last Month</div>
            </div> 

            <div className='featureItem_item'>
                <span className='feature_item-title'>Sales</span>
                <div className='feature_item-money'>
                    <span className='item_money-cost'>$15.99</span>
                    <span className='item_money-rate'>
                         +20% <ArrowUpward className='rate_logo ' /> 
                    </span>
                </div>
                <div className="featureSubcribe">Compare to last Month</div>
            </div> 

            <div className='featureItem_item'>
                <span className='feature_item-title'>User Scriber</span>
                <div className='feature_item-money'>
                    <span className='item_money-cost'>11.600 </span>
                    <span className='item_money-rate'>
                        -11,5% <ArrowDownward className='rate_logo downward' /> 
                    </span>
                </div>
                <div className="featureSubcribe">Compare to last Month</div>
            </div> 
        </div>
    </div>
  )
}
