function ProductCategoryRadio({ categoria, value, checked, handleChange }) {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="radio"
                name="radioDefault"
                value={value}
                checked={checked}
                onChange={handleChange}
            />
            <label className="form-check-label">
                {categoria}
            </label>
        </div>
    );
}

export default ProductCategoryRadio;