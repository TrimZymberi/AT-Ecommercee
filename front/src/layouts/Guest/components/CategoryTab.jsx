import React, { useEffect, useState } from 'react';
import CategoryData from '../data/CategoryData';
import ProductCard from './ProductCard';
import ProductCard_skeleton from './core/ProductCard_skeleton';

export default function CategoryTab() {
    const [selectedTab, setSelectedTab] = useState(CategoryData[0]?.title);
    const [isLoading, setIsLoading] = useState(true);

    const handleTabClick = (tabTitle) => {
        setSelectedTab(tabTitle);
    };

    const renderProducts = (tabTitle) => {
        const selectedCategory = CategoryData.find(category => category.title === tabTitle);
        if (selectedCategory) {
            return selectedCategory.items.map((item, index) => (
                <ProductCard
                    name={item.title}
                    price={item.price}
                    item={item}
                    key={index}
                />
            ));
        }
        return null;
    };

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 6000);

        return () => {
            clearTimeout(loadingTimeout);
        };
    }, []);

    return (
        <div className='bg-sky-50'>
            <div className="grid sm:grid-cols-3 xl:grid-cols-6 items-center border-sky-200">
                {CategoryData.map(category => (
                    <div key={category.title}
                        onClick={() => handleTabClick(category.title)}
                        className={`grid text-sky-950 items-center justify-center bg-sky-50 p-2 h-20 w-full hover:ring-4 hover:cursor-pointer hover:z-20 transition-all ring-sky-200 active:ring-sky-300 ring-offset-0 ${selectedTab === category.title ? 'ring-4 z-10 ring-sky-200 ring-offset-0' : 'border-transparent'
                            }`}>
                        <div class="flex justify-center ">
                            <div dangerouslySetInnerHTML={{ __html: category.svg }} className='w-8 text-sky-950' />
                        </div>
                        <div
                            id={`${category.title}-tab`}
                            data-tabs-target={`#${category.title}`}
                            role="tab"
                            aria-controls={category.title}
                            aria-selected={selectedTab === category.title}
                            className='text-xl'
                        >
                            {category.title}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-0 p-4">
                {isLoading ? (
                    <ProductCard_skeleton />
                ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {renderProducts(selectedTab)}
                    </div>
                )}
            </div>
        </div>
    );
}
