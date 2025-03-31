package com.samnart.ecommerce.service.service;

import com.samnart.ecommerce.payload.CategoryDTO;
import com.samnart.ecommerce.payload.CategoryResponse;

public interface CategoryService {
    CategoryResponse getAllCategories(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);
    CategoryResponse getCategoryById(Long categoryId);
    CategoryDTO createCategory(CategoryDTO categoryDTO);
    CategoryDTO deleteCategory(Long categoryId);
    CategoryDTO updateCategory(CategoryDTO categoryDTO, Long categoryId);
}
