import React from 'react';
import useProductViewModel from './viewmodel.ts';
import './ProductList.css';

const ProductList = () => {
  const {
    loading,
    error,
    searchTerm,
    setSearchTerm,
    filteredProducts,
  } = useProductViewModel();

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="product-list-container">
      <h1 className="page-title">Listado de Productos</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">Precio: ${product.price}</p>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
