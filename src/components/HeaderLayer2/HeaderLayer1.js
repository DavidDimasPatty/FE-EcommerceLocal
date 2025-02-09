import react from "react";


const HeaderLayer1 = (categories) => {
    return (
        <div className="d-flex justify-content-center aligns-item-center gap-4">
            {categories.categories.map((item) => (
                <b><a>{item.nama}</a></b>
            ))}
        </div>);
}

export default HeaderLayer1;