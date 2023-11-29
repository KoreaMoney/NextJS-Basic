import React from 'react';

interface Iprops {
    params: {
        slug: string;
    };
}

const Pants = ({ params }: Iprops) => {
    return <div>상품항목 - {params.slug}</div>;
};
export default Pants;
