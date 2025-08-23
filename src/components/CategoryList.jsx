import { useState } from "react";

const CategoryList = ({ categories = [] }) => {

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
    <div className="category-list">
        <h2>Categories</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {filteredCategories.map(category => (
                    <tr key={category.id}>
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}   

export default CategoryList;