import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../../redux/products/product.types';
import StarIcon from '@mui/icons-material/Star';

const ProductItem: FC<IProduct> = ({ id, title, price, rating, thumbnail }) => {
    return (
        <div className='product-item'>
            <div className='product-pic'>
                <Link to={String(id)}>
                    <img src={thumbnail} alt={title} />
                </Link>
            </div>
            <div className='product-title'>
                <Link to={String(id)}>{title}</Link>
            </div>
            <div className='product-price'>{price}$</div>
            <div className='product-info'>
                <div className='product-rating'>
                    <StarIcon />
                    {rating}
                </div>
                <button className='add-to-cart-btn'>Buy</button>
            </div>
        </div>
    );
};

export default ProductItem;