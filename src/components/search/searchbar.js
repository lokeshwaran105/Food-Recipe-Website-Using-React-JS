// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SearchBar = () => {

//     const [searchTerm, setSearchTerm] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (searchTerm.trim()) {
//         navigate(`/search/${searchTerm}`);
//         }
//     }

//     return(
//         <div className="container my-5 p-4 border border-dark search-cont">
//             <div className="row">
//                 <div className="col-12 mb-3 d-flex justify-content-center">
//                     <h2>Search Your Favorite Recipe</h2>
//                 </div>
//                 <div className="col-12 mb-3">
//                     <div className="d-flex justify-content-start w-100">
//                         <form onSubmit={handleSubmit} className="d-flex mx-auto" style={{ width: '50%' }}>
//                             <input className="form-control me-2 border-dark" type="search" placeholder="Search Your Recipe..." aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
//                             <button className="btn search-btn" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SearchBar;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search/${searchTerm}`);
        }
    };

    return (
        <div className="container my-5 p-4 border rounded bg-light">
            <div className="row">
                <div className="col-12 mb-3 d-flex justify-content-center">
                    <h2 className="fw-bolder text-dark">Search Your Favorite Recipe</h2>
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <form onSubmit={handleSubmit} className="d-flex w-75">
                            <input
                                className="form-control me-2 border-secondary"
                                type="search"
                                placeholder="Search Your Recipe..."
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-danger" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
