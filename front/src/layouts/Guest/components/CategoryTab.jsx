import React, { useState } from 'react';
import CategoryData from '../data/CategoryData';
import ProductCard from './ProductCard';

export default function CategoryTab() {
    const [selectedTab, setSelectedTab] = useState(CategoryData[0]?.title);

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

    return (
        <div className='bg-sky-50'>
            <div className="grid grid-cols-6 items-center">
                {CategoryData.map(category => (
                    <div key={category.title}
                        onClick={() => handleTabClick(category.title)}
                        className={`grid items-center justify-center bg-sky-50 h-14 hover:ring-4 hover:cursor-pointer transition-all hover:shadow-md hover:scale-105 ring-sky-200 ${selectedTab === category.title ? 'ring-4 scale-105 ring-sky-200' : 'border-transparent'
                            }`}>
                        <div class="flex justify-center">
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
            <div className="mt-0">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {renderProducts(selectedTab)}
                </div>
            </div>
        </div>
    );
}
