import gallery1 from './img/gallery1.jpg';
import gallery2 from './img/gallery2.jpg';
import gallery3 from './img/gallery3.jpg';
import gallery4 from './img/gallery4.jpg';
import gallery5 from './img/gallery5.jpg';

const imgList = [
    {
        id: 1,
        img: gallery1,
        alt: 'gallery1',
    },
    {
        id: 2,
        img: gallery2,
        alt: 'gallery2',
    },
    {
        id: 3,
        img: gallery3,
        alt: 'gallery3',
    },
    {
        id: 4,
        img: gallery4,
        alt: 'gallery4',
    },
    {
        id: 5,
        img: gallery5,
        alt: 'gallery5',
    },
];

export default function ListImg() {
    return (
        <div className="gallery-container">
            <div className="gallery-area">
                <div className="container-fluid">
                    <div className="gallery_row">
                        {imgList.map((item, index) => (
                            <div className="gallery-items" key={index}>
                                <img src={item.img} alt={item.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
