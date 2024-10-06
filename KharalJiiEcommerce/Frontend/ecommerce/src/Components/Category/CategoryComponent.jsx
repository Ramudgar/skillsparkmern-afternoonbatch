import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../Config/axiosConfig";

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [categoryId, setCategoryId] = useState("");

  const categoryData = {
    name: categoryName,
  };

  console.log(categoryData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const editResponse = await axiosInstance.put(
          `/category/${categoryId}`,
          categoryData
        );
        console.log(editResponse);
        toast.success(editResponse.data.message);
      } else {
        const response = await axiosInstance.post("/category", categoryData);
        // console.log(response);
        toast.success(response.data.message);
        setCategoryName("");
      }

      fetchCategories();
    } catch (err) {
      // console.log(err);
      toast.error(err.response.data.message);
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get("/category");
      console.log(response);
      setCategories(response.data.categories);
    } catch (err) {
      // console.log(err);
    }
  };

  const handleEdit = async (id, name) => {
    setIsEditing("true");
    setCategoryName(name);
    setCategoryId(id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(`/category/${id}`);
      console.log(response);
      toast.success(response.data.message);
      await fetchCategories();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <ToastContainer />
      {/* Add Category Form */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4 text-green-600">Add Category</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category Name
            </label>
            <input
              id="category"
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter category name"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isEditing ? "Update" : "Add"} Category
          </button>
        </form>
      </div>

      {/* Category List */}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl mb-4 text-green-600">Category List</h2>
        <ul>
          {categories.length === 0 ? (
            <p className="text-gray-500">No categories added yet.</p>
          ) : (
            categories.map((category, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-200"
              >
                <span className="text-lg">{category.name}</span>
                <div>
                  <button
                    onClick={() => handleEdit(category._id, category.name)}
                    className="text-blue-500 hover:text-blue-700 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default CategoryComponent;
