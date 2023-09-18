package com.SIH.Backend.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SIH.Backend.models.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer> {

	
}
