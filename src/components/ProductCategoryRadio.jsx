function ProductCategoryRadio({ categoria, value, checked, onChange }) {
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="radio"
                name="radioDefault"
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label className="form-check-label">
                {categoria}
            </label>
        </div>
    );
}

export default ProductCategoryRadio;