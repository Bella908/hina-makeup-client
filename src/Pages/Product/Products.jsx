import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [sortField, setSortField] = useState('price');
const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/items', {
                    params: {
                        page: currentPage,
                        limit: itemsPerPage,
                        search: searchTerm,
                        brand: brand,
                        category: category,
                        minPrice: minPrice,
                        maxPrice: maxPrice,
                        sortField: sortField,
                        sortOrder: sortOrder
                    }
                });
                setProducts(response.data.items);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error('Error fetching the products:', error);
            }
        };
    
        fetchProducts();
    }, [currentPage, searchTerm, brand, category, minPrice, maxPrice, sortField, sortOrder]);
    

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const handleBrandChange = (event) => {
        setBrand(event.target.value);
        setCurrentPage(1);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        setCurrentPage(1);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
        setCurrentPage(1);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Product List</h1>

            {/* Filters */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="p-2 border border-gray-300 rounded"
                />
                <select value={brand} onChange={handleBrandChange} className="p-2 border border-gray-300 rounded">
                    <option value="">Select Brand</option>
                    <option value="YSL">YSL</option>
                    <option value="Charlotte Tilbury">Charlotte Tilbury</option>
                    <option value="NARS">NARS</option>
                    <option value="Pat McGrath">Pat McGrath</option>
                    <option value="Huda Beauty">Huda Beauty</option>
                    <option value="Kosas">Kosas</option>
                    <option value="e.l.f">e.l.f</option>
                    <option value="MAC">MAC</option>
                    {/* Add more brands as needed */}
                </select>
                <select value={category} onChange={handleCategoryChange} className="p-2 border border-gray-300 rounded">
                    <option value="">Select Category</option>
                    <option value="Foundation">Foundation</option>
                    <option value="Lipstick">Lipstick</option>
                    <option value="Mascara">Mascara</option>
                    <option value="Concealer">Concealer</option>
                    <option value="Concealer">Bronzer</option>
                
                    <option value="Blush">Blush</option>
                    {/* Add more categories as needed */}
                </select>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="p-2 border border-gray-300 rounded w-1/2"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        className="p-2 border border-gray-300 rounded w-1/2"
                    />
                </div>
                <select value={sortField} onChange={(e) => setSortField(e.target.value)} className="p-2 border border-gray-300 rounded">
        <option value="price">Sort by Price</option>
        <option value="dateAdded">Sort by Date Added</option>
    </select>
    <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="p-2 border border-gray-300 rounded">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
    </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product._id} className="card">
                        <figure>
                            <img src={product.productImage} alt={product.productName} className="w-full h-64 object-cover" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-lg font-semibold">{product.productName}</h2>
                            <p>{product.description}</p>
                            <p className="text-xl font-semibold">{product.brand}</p>

                            <p className="text-xl font-bold mt-2">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-l hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                <span className="px-4 py-2 bg-gray-200 text-gray-700">
                    Page {currentPage} of {totalPages}
                </span>
                <button 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={currentPage === totalPages} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Products;
